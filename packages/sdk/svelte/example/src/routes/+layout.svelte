<script lang="ts">
	import type { Snippet } from 'svelte';
	import { LDProvider, type LDOptions } from '@launchdarkly/svelte-client-sdk';
	import { PUBLIC_LD_CLIENT_ID, PUBLIC_AUTOMATED_TEST } from '$env/static/public';
	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	const context = {
		kind: 'user',
		key: 'example-context-key',
		name: 'Sandy'
	};

	const options: LDOptions = {
		// Enable streaming only when not in automated testing. This will allow mocking flag variations.
		streaming: PUBLIC_AUTOMATED_TEST === 'false',
	};
</script>

{#snippet failed(_: unknown, reset: () => void)}
	<main>
		<h1>Something failed!</h1>
		<p>
			There was an error loading the app. Please make sure you have the environment variables
			properly setup
		</p>
		<button onclick={reset}>Retry</button>
	</main>
{/snippet}

<svelte:boundary {failed} onerror={console.error}>
	<LDProvider clientID={PUBLIC_LD_CLIENT_ID} {context} {options}>
		{@render children?.()}

		{#snippet initializing()}
			<p>loading flags...</p>
		{/snippet}
	</LDProvider>
</svelte:boundary>
