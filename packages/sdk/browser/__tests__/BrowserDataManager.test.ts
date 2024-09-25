import { jest } from '@jest/globals';
import { TextEncoder } from 'node:util';

import {
  ApplicationTags,
  base64UrlEncode,
  Configuration,
  Context,
  Encoding,
  FlagManager,
  internal,
  LDEmitter,
  LDHeaders,
  LDIdentifyOptions,
  LDLogger,
  Platform,
  Response,
  ServiceEndpoints,
} from '@launchdarkly/js-client-sdk-common';

import BrowserDataManager from '../src/BrowserDataManager';
import validateOptions, { ValidatedOptions } from '../src/options';
import BrowserEncoding from '../src/platform/BrowserEncoding';
import BrowserInfo from '../src/platform/BrowserInfo';
import LocalStorage from '../src/platform/LocalStorage';
import { MockHasher } from './MockHasher';

global.TextEncoder = TextEncoder;

function mockResponse(value: string, statusCode: number) {
  const response: Response = {
    headers: {
      // @ts-ignore
      get: jest.fn(),
      // @ts-ignore
      keys: jest.fn(),
      // @ts-ignore
      values: jest.fn(),
      // @ts-ignore
      entries: jest.fn(),
      // @ts-ignore
      has: jest.fn(),
    },
    status: statusCode,
    text: () => Promise.resolve(value),
    json: () => Promise.resolve(JSON.parse(value)),
  };
  return Promise.resolve(response);
}

function mockFetch(value: string, statusCode: number = 200) {
  const f = jest.fn();
  // @ts-ignore
  f.mockResolvedValue(mockResponse(value, statusCode));
  return f;
}

describe('given a BrowserDataManager with mocked dependencies', () => {
  let platform: jest.Mocked<Platform>;
  let flagManager: jest.Mocked<FlagManager>;
  let config: Configuration;
  let browserConfig: ValidatedOptions;
  let baseHeaders: LDHeaders;
  let emitter: jest.Mocked<LDEmitter>;
  let diagnosticsManager: jest.Mocked<internal.DiagnosticsManager>;
  let dataManager: BrowserDataManager;
  let logger: LDLogger;
  beforeEach(() => {
    logger = {
      error: jest.fn(),
      warn: jest.fn(),
      info: jest.fn(),
      debug: jest.fn(),
    };
    config = {
      logger,
      baseUri: 'string',
      eventsUri: 'string',
      streamUri: 'string',
      maxCachedContexts: 5,
      capacity: 100,
      diagnosticRecordingInterval: 1000,
      flushInterval: 1000,
      streamInitialReconnectDelay: 1000,
      allAttributesPrivate: false,
      debug: true,
      diagnosticOptOut: false,
      sendEvents: false,
      sendLDHeaders: true,
      useReport: false,
      withReasons: true,
      privateAttributes: [],
      tags: new ApplicationTags({}),
      serviceEndpoints: new ServiceEndpoints('', ''),
      pollInterval: 1000,
      userAgentHeaderName: 'user-agent',
      trackEventModifier: (event) => event,
    };
    const mockedFetch = mockFetch('{"flagA": true}', 200);
    platform = {
      crypto: {
        createHash: () => new MockHasher(),
        randomUUID: () => '123',
      },
      info: new BrowserInfo(),
      requests: {
        createEventSource: jest.fn((streamUri: string = '', options: any = {}) => ({
          streamUri,
          options,
          onclose: jest.fn(),
          addEventListener: jest.fn(),
          close: jest.fn(),
        })),
        fetch: mockedFetch,
        getEventSourceCapabilities: jest.fn(),
      },
      storage: new LocalStorage(config.logger),
      encoding: new BrowserEncoding(),
    } as unknown as jest.Mocked<Platform>;

    flagManager = {
      loadCached: jest.fn(),
      get: jest.fn(),
      getAll: jest.fn(),
      init: jest.fn(),
      upsert: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
    } as unknown as jest.Mocked<FlagManager>;

    browserConfig = validateOptions({ streaming: false }, logger);
    baseHeaders = {};
    emitter = {
      emit: jest.fn(),
    } as unknown as jest.Mocked<LDEmitter>;
    diagnosticsManager = {} as unknown as jest.Mocked<internal.DiagnosticsManager>;

    dataManager = new BrowserDataManager(
      platform,
      flagManager,
      'test-credential',
      config,
      browserConfig,
      () => ({
        pathGet(encoding: Encoding, _plainContextString: string): string {
          return `/msdk/evalx/contexts/${base64UrlEncode(_plainContextString, encoding)}`;
        },
        pathReport(_encoding: Encoding, _plainContextString: string): string {
          return `/msdk/evalx/context`;
        },
      }),
      () => ({
        pathGet(encoding: Encoding, _plainContextString: string): string {
          return `/meval/${base64UrlEncode(_plainContextString, encoding)}`;
        },
        pathReport(_encoding: Encoding, _plainContextString: string): string {
          return `/meval`;
        },
      }),
      baseHeaders,
      emitter,
      diagnosticsManager,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates an event source when stream is true', async () => {
    dataManager = new BrowserDataManager(
      platform,
      flagManager,
      'test-credential',
      config,
      validateOptions({ streaming: true }, logger),
      () => ({
        pathGet(encoding: Encoding, _plainContextString: string): string {
          return `/msdk/evalx/contexts/${base64UrlEncode(_plainContextString, encoding)}`;
        },
        pathReport(_encoding: Encoding, _plainContextString: string): string {
          return `/msdk/evalx/context`;
        },
      }),
      () => ({
        pathGet(encoding: Encoding, _plainContextString: string): string {
          return `/meval/${base64UrlEncode(_plainContextString, encoding)}`;
        },
        pathReport(_encoding: Encoding, _plainContextString: string): string {
          return `/meval`;
        },
      }),
      baseHeaders,
      emitter,
      diagnosticsManager,
    );

    const context = Context.fromLDContext({ kind: 'user', key: 'test-user' });
    const identifyOptions: LDIdentifyOptions = { waitForNetworkResults: false };
    const identifyResolve = jest.fn();
    const identifyReject = jest.fn();

    await dataManager.identify(identifyResolve, identifyReject, context, identifyOptions);

    expect(platform.requests.createEventSource).toHaveBeenCalled();
  });

  it('should load cached flags and continue to poll to complete identify', async () => {
    const context = Context.fromLDContext({ kind: 'user', key: 'test-user' });
    const identifyOptions: LDIdentifyOptions = { waitForNetworkResults: false };
    const identifyResolve = jest.fn();
    const identifyReject = jest.fn();

    flagManager.loadCached.mockResolvedValue(true);

    await dataManager.identify(identifyResolve, identifyReject, context, identifyOptions);

    expect(logger.debug).toHaveBeenCalledWith(
      '[BrowserDataManager] Identify - Flags loaded from cache. Continuing to initialize via a poll.',
    );

    expect(flagManager.loadCached).toHaveBeenCalledWith(context);
    expect(identifyResolve).toHaveBeenCalled();
    expect(flagManager.init).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ flagA: { flag: true, version: undefined } }),
    );
    expect(platform.requests.createEventSource).not.toHaveBeenCalled();
  });

  it('should identify from polling when there are no cached flags', async () => {
    const context = Context.fromLDContext({ kind: 'user', key: 'test-user' });
    const identifyOptions: LDIdentifyOptions = { waitForNetworkResults: false };
    const identifyResolve = jest.fn();
    const identifyReject = jest.fn();

    flagManager.loadCached.mockResolvedValue(false);

    await dataManager.identify(identifyResolve, identifyReject, context, identifyOptions);

    expect(logger.debug).not.toHaveBeenCalledWith(
      'Identify - Flags loaded from cache. Continuing to initialize via a poll.',
    );

    expect(flagManager.loadCached).toHaveBeenCalledWith(context);
    expect(identifyResolve).toHaveBeenCalled();
    expect(flagManager.init).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ flagA: { flag: true, version: undefined } }),
    );
    expect(platform.requests.createEventSource).not.toHaveBeenCalled();
  });

  it('creates a stream when streaming is enabled after construction', async () => {
    const context = Context.fromLDContext({ kind: 'user', key: 'test-user' });
    const identifyOptions: LDIdentifyOptions = { waitForNetworkResults: false };
    const identifyResolve = jest.fn();
    const identifyReject = jest.fn();

    flagManager.loadCached.mockResolvedValue(false);

    await dataManager.identify(identifyResolve, identifyReject, context, identifyOptions);

    expect(platform.requests.createEventSource).not.toHaveBeenCalled();
    dataManager.startDataSource();
    expect(platform.requests.createEventSource).toHaveBeenCalled();
  });

  it('does not re-create the stream if it already running', async () => {
    const context = Context.fromLDContext({ kind: 'user', key: 'test-user' });
    const identifyOptions: LDIdentifyOptions = { waitForNetworkResults: false };
    const identifyResolve = jest.fn();
    const identifyReject = jest.fn();

    flagManager.loadCached.mockResolvedValue(false);

    await dataManager.identify(identifyResolve, identifyReject, context, identifyOptions);

    expect(platform.requests.createEventSource).not.toHaveBeenCalled();
    dataManager.startDataSource();
    dataManager.startDataSource();
    expect(platform.requests.createEventSource).toHaveBeenCalledTimes(1);
    expect(logger.debug).toHaveBeenCalledWith(
      '[BrowserDataManager] Update processor already active. Not changing state.',
    );
  });

  it('does not start a stream if identify has not been called', async () => {
    expect(platform.requests.createEventSource).not.toHaveBeenCalled();
    dataManager.startDataSource();
    expect(platform.requests.createEventSource).not.toHaveBeenCalledTimes(1);
    expect(logger.debug).toHaveBeenCalledWith(
      '[BrowserDataManager] Context not set, not starting update processor.',
    );
  });
});