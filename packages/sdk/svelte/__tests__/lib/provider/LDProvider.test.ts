import { render, waitFor } from '@testing-library/svelte/svelte5';
import { createRawSnippet, Snippet, tick } from 'svelte';
import { writable } from 'svelte/store';
import { describe, expect, it, vi } from 'vitest';

import { LD } from '../../../src/lib/client/SvelteLDClient';
import LDProvider from '../../../src/lib/provider/LDProvider.svelte';

vi.mock('../../../src/lib/client/SvelteLDClient', () => {
  const fakeInitializingStore = writable(true);

  return {
    LD: {
      initialize: () => {
        fakeInitializingStore.set(true);
        // fakes initialization happened
        tick().then(() => fakeInitializingStore.set(false));
      },
      initializing: fakeInitializingStore,
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

describe('LDProvider', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should render the correct snippet', async () => {
    const { getByText } = render(LDProvider, {
      props: {
        clientID: 'test-client-id',
        context: { key: 'test-context' },
        children: mockSnippet('<div>Child Content</div>'),
        initializing: mockSnippet('<div>Initializing...</div>'),
      },
    });

    expect(getByText('Initializing...')).toBeInTheDocument();
    await waitFor(() => {
      expect(getByText('Child Content')).toBeInTheDocument();
    });
  });

  it('should call initialize with correct parameters on mount', async () => {
    vi.spyOn(LD, 'initialize');

    render(LDProvider, {
      props: {
        clientID: 'test-client-id',
        context: { key: 'test-context' },
        children: mockSnippet('<div>Child Content</div>'),
        initializing: mockSnippet('<div>Initializing...</div>'),
      },
    });

    await waitFor(() => {
      expect(LD.initialize).toHaveBeenCalledWith(
        'test-client-id',
        { key: 'test-context' },
        undefined,
      );
    });
  });
});
