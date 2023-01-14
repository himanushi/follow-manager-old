<script lang="ts">
	import Icon from '~/components/icon.svelte';
	import Follower from './follower.svelte';
</script>

<ion-header>
	<ion-toolbar>
		<ion-title>Follow Manager</ion-title>
	</ion-toolbar>
</ion-header>
<ion-content>
	<ion-tabs>
		<ion-tab tab="follower">
			<Follower />
		</ion-tab>

		<ion-tab-bar slot="bottom">
			<ion-tab-button tab="follower">
				<Icon size="s" name={'person_add'} />
				<ion-label>Follower</ion-label>
			</ion-tab-button>
		</ion-tab-bar>
	</ion-tabs>
</ion-content>
