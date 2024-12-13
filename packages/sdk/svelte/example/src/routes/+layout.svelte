<script lang="ts">
	import type { Snippet } from 'svelte';
	import { LDProvider } from '@launchdarkly/svelte-client-sdk';
	import { PUBLIC_LD_CLIENT_ID } from '$env/static/public';
	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	const context = {
		kind: 'user',
		key: 'example-context-key',
		name: 'Sandy'
	};
</script>

{#snippet failed(error: unknown, reset: () => void)}
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
	<LDProvider clientID={PUBLIC_LD_CLIENT_ID} {context}>
		{@render children?.()}

		{#snippet initializing()}
			<p>loading flags...</p>
		{/snippet}
	</LDProvider>
</svelte:boundary>
