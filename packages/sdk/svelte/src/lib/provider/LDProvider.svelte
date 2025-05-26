<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { LD } from '../client/SvelteLDClient.js';
  import type { LDClientID, LDContext } from '../client/SvelteLDClient.js';

  interface LDProviderProps {
    clientID: LDClientID;
    context: LDContext;
    initializing?: Snippet;
    children: Snippet;
  }

  let { clientID, context, initializing, children }: LDProviderProps = $props();
  const { initialize, initializing: isClientInitializing } = LD;

  onMount(() => {
    initialize(clientID, context);
  });
</script>

{#if initializing && $isClientInitializing}
  {@render initializing()}
{:else}
  {@render children()}
{/if}
