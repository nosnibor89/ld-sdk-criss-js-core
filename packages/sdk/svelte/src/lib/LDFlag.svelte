<script lang="ts">
  import type { Snippet } from 'svelte';
  import { LD, type LDFlagValue } from './client/SvelteLDClient.js';

  interface LDFlagProps {
    on: Snippet;
    off: Snippet;
    flag: string;
    matches?: LDFlagValue;
  }

  let { on, off, flag, matches = true }: LDFlagProps = $props();

  const flagValue = $derived(LD.watch(flag));
</script>

{#if $flagValue === matches}
  {@render on()}
{:else}
  {@render off()}
{/if}
