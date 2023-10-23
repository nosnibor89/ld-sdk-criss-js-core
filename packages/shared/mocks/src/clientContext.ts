import type { ClientContext } from '@common';

import basicPlatform from './platform';

const clientContext: ClientContext = {
  basicConfiguration: {
    sdkKey: 'testSdkKey',
    serviceEndpoints: { events: '', polling: '', streaming: 'https://mockstream.ld.com' },
  },
  platform: basicPlatform,
};

export default clientContext;