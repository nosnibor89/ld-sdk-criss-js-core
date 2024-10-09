import {
  DataSourceErrorKind,
  Encoding,
  EventName,
  EventSource,
  getStreamingUri,
  httpErrorMessage,
  HttpErrorResponse,
  internal,
  LDLogger,
  LDPollingError,
  LDStreamingError,
  ProcessStreamResponse,
  Requests,
  shouldRetry,
  subsystem,
} from '@launchdarkly/js-sdk-common';

import { StreamingDataSourceConfig } from '../datasource/DataSourceConfig';
import Requestor, { LDRequestError } from '../datasource/Requestor';

const reportJsonError = (
  type: string,
  data: string,
  logger?: LDLogger,
  errorHandler?: internal.StreamingErrorHandler,
) => {
  logger?.error(`Stream received invalid data in "${type}" message`);
  logger?.debug(`Invalid JSON follows: ${data}`);
  errorHandler?.(
    new LDStreamingError(DataSourceErrorKind.InvalidData, 'Malformed JSON data in event stream'),
  );
};

class StreamingProcessor implements subsystem.LDStreamProcessor {
  private readonly headers: { [key: string]: string | string[] };
  private readonly streamUri: string;

  private eventSource?: EventSource;
  private connectionAttemptStartTime?: number;

  constructor(
    private readonly plainContextString: string,
    private readonly dataSourceConfig: StreamingDataSourceConfig,
    private readonly listeners: Map<EventName, ProcessStreamResponse>,
    private readonly requests: Requests,
    encoding: Encoding,
    private readonly pingRequestor: Requestor,
    private readonly diagnosticsManager?: internal.DiagnosticsManager,
    private readonly errorHandler?: internal.StreamingErrorHandler,
    private readonly logger?: LDLogger,
  ) {
    // TODO: determine if headers and query parameters can/should be sent to /ping endpoint.  Probably doesn't hurt?
    const parameters: { key: string; value: string }[] = [
      ...(dataSourceConfig.queryParameters ?? []),
    ];
    if (this.dataSourceConfig.withReasons) {
      parameters.push({ key: 'withReasons', value: 'true' });
    }

    let path: string;
    if (dataSourceConfig.useReport && !requests.getEventSourceCapabilities().customMethod) {
      path = dataSourceConfig.paths.pathPing(encoding, plainContextString);
    } else {
      path = dataSourceConfig.useReport
        ? dataSourceConfig.paths.pathReport(encoding, plainContextString)
        : dataSourceConfig.paths.pathGet(encoding, plainContextString);
    }

    this.requests = requests;
    this.headers = { ...dataSourceConfig.baseHeaders };
    this.logger = logger;
    this.streamUri = getStreamingUri(dataSourceConfig.serviceEndpoints, path, parameters);
  }

  private logConnectionStarted() {
    this.connectionAttemptStartTime = Date.now();
  }

  private logConnectionResult(success: boolean) {
    if (this.connectionAttemptStartTime && this.diagnosticsManager) {
      this.diagnosticsManager.recordStreamInit(
        this.connectionAttemptStartTime,
        !success,
        Date.now() - this.connectionAttemptStartTime,
      );
    }

    this.connectionAttemptStartTime = undefined;
  }

  /**
   * This is a wrapper around the passed errorHandler which adds additional
   * diagnostics and logging logic.
   *
   * @param err The error to be logged and handled.
   * @return boolean whether to retry the connection.
   *
   * @private
   */
  private retryAndHandleError(err: HttpErrorResponse) {
    if (!shouldRetry(err)) {
      this.logConnectionResult(false);
      this.errorHandler?.(
        new LDStreamingError(DataSourceErrorKind.ErrorResponse, err.message, err.status, false),
      );
      this.logger?.error(httpErrorMessage(err, 'streaming request'));
      return false;
    }

    this.logger?.warn(httpErrorMessage(err, 'streaming request', 'will retry'));
    this.logConnectionResult(false);
    this.logConnectionStarted();
    return true;
  }

  start() {
    this.logConnectionStarted();

    let methodAndBodyOverrides;
    if (this.dataSourceConfig.useReport) {
      // REPORT will include a body, so content type is required.
      this.headers['content-type'] = 'application/json';

      // orverrides default method with REPORT and adds body.
      methodAndBodyOverrides = { method: 'REPORT', body: this.plainContextString };
    } else {
      // no method or body override
      methodAndBodyOverrides = {};
    }

    // TLS is handled by the platform implementation.
    const eventSource = this.requests.createEventSource(this.streamUri, {
      headers: this.headers, // adds content-type header required when body will be present
      ...methodAndBodyOverrides,
      errorFilter: (error: HttpErrorResponse) => this.retryAndHandleError(error),
      initialRetryDelayMillis: this.dataSourceConfig.initialRetryDelayMillis,
      readTimeoutMillis: 5 * 60 * 1000,
      retryResetIntervalMillis: 60 * 1000,
    });
    this.eventSource = eventSource;

    eventSource.onclose = () => {
      this.logger?.info('Closed LaunchDarkly stream connection');
    };

    eventSource.onerror = () => {
      // The work is done by `errorFilter`.
    };

    eventSource.onopen = () => {
      this.logger?.info('Opened LaunchDarkly stream connection');
    };

    eventSource.onretrying = (e) => {
      this.logger?.info(`Will retry stream connection in ${e.delayMillis} milliseconds`);
    };

    // TODO: it is plausible that a user of this class has provided their own ping listener that is being overwritten.  Figure out a way to decorate instead of overwriting.
    // when we receive a ping, we will make a one shot polling request and then report it as a PUT event
    this.listeners.set('ping', {
      deserializeData: () => {}, // do nothing with data, ping is just a signal
      processJson: async () => {
        this.pingRequestor.requestPayload();
        this.logger?.debug('Got PING, going to poll LaunchDarkly for feature flag updates');
        try {
          const res = await this.pingRequestor.requestPayload();
          try {
            const payload = JSON.parse(res);
            try {
              // forward the payload on to the PUT listener
              this.listeners.get('put')?.processJson(payload);
            } catch (err) {
              this.logger?.error(`Exception from data handler: ${err}`);
            }
          } catch {
            this.logger?.error('Polling after ping received invalid data');
            this.logger?.debug(`Invalid JSON follows: ${res}`);
            this.errorHandler?.(
              new LDPollingError(
                DataSourceErrorKind.InvalidData,
                'Malformed JSON data in polling response',
              ),
            );
          }
        } catch (err) {
          const requestError = err as LDRequestError;
          this.errorHandler?.(
            new LDPollingError(
              DataSourceErrorKind.ErrorResponse,
              requestError.message,
              requestError.status,
            ),
          );
        }
      },
    });

    this.listeners.forEach(({ deserializeData, processJson }, eventName) => {
      eventSource.addEventListener(eventName, (event) => {
        this.logger?.debug(`Received ${eventName} event`);

        if (event?.data) {
          this.logConnectionResult(true);
          const { data } = event;
          const dataJson = deserializeData(data);

          if (!dataJson) {
            reportJsonError(eventName, data, this.logger, this.errorHandler);
            return;
          }
          processJson(dataJson);
        } else {
          this.errorHandler?.(
            new LDStreamingError(
              DataSourceErrorKind.InvalidData,
              'Unexpected payload from event stream',
            ),
          );
        }
      });
    });
  }

  stop() {
    this.eventSource?.close();
    this.eventSource = undefined;
  }

  close() {
    this.stop();
  }
}

export default StreamingProcessor;
