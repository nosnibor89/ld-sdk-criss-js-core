import { render, waitFor } from '@testing-library/svelte/svelte5';
import { createRawSnippet, Snippet } from 'svelte';
import { writable } from 'svelte/store';
import { describe, expect, it, vi } from 'vitest';

import LDFlag from '../../src/lib/LDFlag.svelte';

vi.mock('../../src/lib/client/SvelteLDClient', () => {
  const fakeFlagStore = writable(true);

  return {
    LD: {
      watch: () => fakeFlagStore,
    },
  };
});

function mockSnippet(htmlString: string): Snippet {
  return createRawSnippet(() => ({
    render() {
      return htmlString;
    },
  }));
}

describe('LDFlag', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should render the "on" snippet when flag matches', async () => {
    const { getByText } = render(LDFlag, {
      props: {
        flag: 'test-flag',
        on: mockSnippet('<div>Flag is ON</div>'),
        off: mockSnippet('<div>Flag is OFF</div>'),
        matches: true,
      },
    });

    await waitFor(() => {
      expect(getByText('Flag is ON')).toBeInTheDocument();
    });
  });

  it('should render the "off" snippet when flag does not match', async () => {
    const { getByText } = render(LDFlag, {
      props: {
        flag: 'test-flag',
        on: mockSnippet('<div>Flag is ON</div>'),
        off: mockSnippet('<div>Flag is OFF</div>'),
        matches: false,
      },
    });

    await waitFor(() => {
      expect(getByText('Flag is OFF')).toBeInTheDocument();
    });
  });
});
