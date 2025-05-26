<script lang="ts">
	import { LDFlag } from '@launchdarkly/svelte-client-sdk';
	import { PUBLIC_LD_FLAG_KEY } from '$env/static/public';
</script>

<LDFlag flag={PUBLIC_LD_FLAG_KEY}>
	{#snippet on()}
		<div style="--bg-color: lightblue;">
			<p>
				this box is lightblue when flag is on ({PUBLIC_LD_FLAG_KEY})
			</p>
		</div>
	{/snippet}
	{#snippet off()}
		<div style="--bg-color: lightyellow;">
			<p style="--bg-color: lightyellow;">
				this box is lightyellow when flag is off ({PUBLIC_LD_FLAG_KEY})
			</p>
		</div>
	{/snippet}
</LDFlag>

<style>
	div {
		margin: 1rem;
		padding: 1rem;
		width: 250px;
		height: 250px;
		border: 1px solid #ccc;
		background-color: var(--bg-color);
	}
</style>
