import LDEmitter from '../LDEmitter';
import DataSourceStatus, { DataSourceState } from './DataSourceStatus';
import DataSourceStatusErrorInfo, { ErrorKind } from './DataSourceStatusErrorInfo';

export type DataSourceStatusCallback = (status: DataSourceStatus) => void;

export default class DataSourceStatusManager {
  private state: DataSourceState;
  private stateSinceMillis: number; // UNIX epoch timestamp in milliseconds
  private errorInfo?: DataSourceStatusErrorInfo;
  private timeStamper: () => number;

  // TODO: at the moment the LDEmitter requires an event name internally, would be nice to not need to provide an event name,
  // but perhaps also not worth refactoring/supporting another style
  private emitter: LDEmitter;

  constructor(timeStamper: () => number = () => Date.now()) {
    this.state = DataSourceState.Initializing;
    this.stateSinceMillis = Date.now();
    this.emitter = new LDEmitter();
    this.timeStamper = timeStamper;
  }

  get status(): DataSourceStatus {
    return {
      state: this.state,
      stateSince: this.stateSinceMillis,
      lastError: this.errorInfo,
    };
  }

  private updateState(requestedState: DataSourceState, isError = false) {
    const newState =
      requestedState === DataSourceState.Interrupted && this.state === DataSourceState.Initializing
        ? DataSourceState.Initializing
        : requestedState;

    const changedState = this.state !== newState;
    if (changedState) {
      this.state = newState;
      this.stateSinceMillis = this.timeStamper();
    }

    if (changedState || isError) {
      this.emitter.emit('change', this.status);
    }
  }

  off(listener: DataSourceStatusCallback) {
    this.emitter.off('change', listener);
  }

  on(listener: DataSourceStatusCallback) {
    this.emitter.on('change', listener);
  }

  setValid() {
    this.updateState(DataSourceState.Valid);
  }

  setOffline() {
    this.updateState(DataSourceState.SetOffline);
  }

  setBackgroundDisabled() {
    this.updateState(DataSourceState.BackgroundDisabled);
  }

  setNetworkUnavailable() {
    this.updateState(DataSourceState.NetworkUnavailable);
  }

  setError(kind: DataSourceErrorKind, message: string, statusCode?: number, shutdown: boolean = false) {
    const errorInfo: DataSourceStatusErrorInfo = {
      kind,
      message,
      statusCode,
      time: this.timeStamper(),
    };
    this.updateState(shutdown ? DataSourceState.Shutdown : DataSourceState.Interrupted, true);
    this.errorInfo = errorInfo;
  }
}
