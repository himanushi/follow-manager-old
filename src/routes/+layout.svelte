<script lang="ts">
	import '~/theme/variables.css';
	import '~/theme/custom.css';
	import { initialize } from '@ionic/core';
	import { onMount } from 'svelte';
	import { client } from '~/store/client';

	onMount(() => {
		initialize({
			animated: true,
			mode: 'ios'
		});
	});
</script>

{#if client}
	<ion-app>
		<slot />
	</ion-app>
{/if}
