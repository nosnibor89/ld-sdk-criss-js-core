<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { LD } from '../client/SvelteLDClient.js';
  import type { LDClientID, LDContext } from '../client/SvelteLDClient.js';

  // export let clientID: LDClientID;
  // export let context: LDContext;
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
  <!-- <slot name="initializing">Loading flags (default loading slot value)...</slot> -->
  {@render initializing()}
{:else}
  {@render children()}
{/if}
