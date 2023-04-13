import { BasicLogger, LDLogger, SafeLogger } from '@launchdarkly/js-server-sdk-common';
import type { KVNamespace } from '@cloudflare/workers-types';
import { version } from '../../package.json';
import createFeatureStore from './createFeatureStore';

import type { LDOptions as LDOptionsCloudflare } from '../types';

const allowedOptions = ['logger', 'featureStore'];

const defaults = {
  stream: false,
  sendEvents: false,
  offline: false,
  useLdd: true,
  allAttributesPrivate: false,
  privateAttributes: [],
  contextKeysCapacity: 1000,
  contextKeysFlushInterval: 300,
  diagnosticOptOut: true,
  diagnosticRecordingInterval: 900,
  wrapperName: 'cloudflare',
  wrapperVersion: version,
};

export const finalizeLogger = ({ logger }: LDOptionsCloudflare) => {
  const fallbackLogger = new BasicLogger({
    level: 'info',
    // eslint-disable-next-line no-console
    destination: console.error,
  });

  return logger ? new SafeLogger(logger, fallbackLogger) : fallbackLogger;
};

export const finalizeFeatureStore = (
  kvNamespace: KVNamespace,
  sdkKey: string,
  { featureStore }: LDOptionsCloudflare,
  logger: LDLogger
) => featureStore ?? createFeatureStore(kvNamespace, sdkKey, logger);

const createOptions = (
  kvNamespace: KVNamespace,
  sdkKey: string,
  options: LDOptionsCloudflare = {}
) => {
  if (!sdkKey) {
    throw new Error('You must configure the client with a client key');
  }

  if (!kvNamespace || typeof kvNamespace !== 'object' || !kvNamespace.get) {
    throw new Error('You must configure the client with a Cloudflare KV Store namespace binding');
  }

  Object.entries(options).forEach(([key]) => {
    if (!allowedOptions.includes(key)) {
      throw new Error(`Configuration option: ${key} not supported`);
    }
  });

  const logger = finalizeLogger(options);
  const featureStore = finalizeFeatureStore(kvNamespace, sdkKey, options, logger);
  const finalOptions = { ...defaults, ...options, logger, featureStore };
  logger.debug(`Using LD options: ${JSON.stringify(finalOptions)}`);
  return finalOptions;
};

export default createOptions;
