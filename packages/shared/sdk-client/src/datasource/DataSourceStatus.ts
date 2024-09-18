import DataSourceStatusErrorInfo from './DataSourceStatusErrorInfo';

export enum DataSourceState {
  Initializing,
  Valid,
  Interrupted,
  SetOffline,
  Shutdown,
  NetworkUnavailable,
  BackgroundDisabled,
}

export default interface DataSourceStatus {
  /**
   * An enumerated value representing the overall current state of the data source.
   */
  readonly state: DataSourceState;

  /**
   * The UNIX epoch timestamp in milliseconds that the value of State most recently changed.
   *
   * The meaning of this depends on the current state:
   * For {@link DataSourceState.Initializing}, it is the time that the SDK started
   * initializing.
   *
   * For {@link DataSourceState.Valid}, it is the time that the data source most
   * recently entered a valid state, after previously having been
   * {@link DataSourceStatus.Initializing} or an invalid state such as
   * {@link DataSourceState.Interrupted}.
   *
   * - For {@linkDataSourceState.interrupted}, it is the time that the data source
   * most recently entered an error state, after previously having been
   * {@linkDataSourceState.valid}.
   *
   * For {@linkDataSourceState.shutdown}, it is the time that the data source
   * encountered an unrecoverable error or that the SDK was explicitly shut down.
   *
   * For {@linkDataSourceState.networkUnavailable} or
   * {@linkDataSourceState.backgroundDisabled}, it is the time that the SDK switched
   * off the data source after detecting one of those conditions.
   */
  readonly stateSince: number;

  /**
   * The last error encountered. May be absent after application restart.
   */
  readonly lastError?: DataSourceStatusErrorInfo;
}
