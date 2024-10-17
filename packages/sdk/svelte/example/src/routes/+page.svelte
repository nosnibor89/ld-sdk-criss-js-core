<script lang="ts">
	import { LDFlag } from '@launchdarkly/svelte-client-sdk';
	import { PUBLIC_LD_FLAG_KEY } from '$env/static/public';
</script>

<LDFlag flag={PUBLIC_LD_FLAG_KEY}>
	<div slot="true">
		<p>this will render if the feature flag is on</p>
	</div>
	<div slot="false">
		<p>this will render if the feature flag is off</p>
	</div>
</LDFlag>
