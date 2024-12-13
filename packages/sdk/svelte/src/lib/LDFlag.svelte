<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script lang="ts">
    import type { Snippet } from 'svelte';
  import { LD, type LDFlagValue } from './client/SvelteLDClient.js';

  interface LDFlagProps {
    on: Snippet;
    off: Snippet;
    flag: string;
    matches?: LDFlagValue;
  }

  // export let flag: string;
  // export let matches: LDFlagValue = true;

  let { on, off, flag, matches = true }: LDFlagProps = $props();

  // $: flagValue = LD.watch(flag);
  const flagValue = $derived(LD.watch(flag));
</script>

<!-- {#snippet on()}
  
{/snippet} -->

{#if flagValue === matches}
  <!-- <slot name="true" /> -->
  {@render on()}
{:else}
  <!-- <slot name="false" /> -->
  {@render off()}
{/if}
