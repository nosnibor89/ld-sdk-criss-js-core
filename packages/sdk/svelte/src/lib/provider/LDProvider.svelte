<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { LD } from '../client/SvelteLDClient.js';
  import type { LDClientID, LDContext, LDOptions } from '../client/SvelteLDClient.js';

  interface LDProviderProps {
    clientID: LDClientID;
    context: LDContext;
    options: LDOptions;
    initializing?: Snippet;
    children: Snippet;
  }

  let { clientID, context, initializing, children, options }: LDProviderProps = $props();
  const { initialize, initializing: isClientInitializing } = LD;

  onMount(() => {
    initialize(clientID, context, options);
  });
</script>

{#if initializing && $isClientInitializing}
  {@render initializing()}
{:else}
  {@render children()}
{/if}
