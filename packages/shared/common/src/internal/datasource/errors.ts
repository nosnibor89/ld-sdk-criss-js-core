/* eslint-disable max-classes-per-file */
import { DataSourceErrorKind } from './DataSourceErrorKinds';

export class LDFileDataSourceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LaunchDarklyFileDataSourceError';
  }
}

export class LDPollingError extends Error {
  public readonly kind: DataSourceErrorKind;
  public readonly status?: number;

  constructor(kind: DataSourceErrorKind, message: string, status?: number) {
    super(message);
    this.kind = kind;
    this.status = status;
    this.name = 'LaunchDarklyPollingError';
  }
}

export class LDStreamingError extends Error {
  public readonly kind: DataSourceErrorKind;
  public readonly code?: number;

  constructor(kind: DataSourceErrorKind, message: string, code?: number) {
    super(message);
    this.kind = kind;
    this.code = code;
    this.name = 'LaunchDarklyStreamingError';
  }
}

export type StreamingErrorHandler = (err: LDStreamingError) => void;
