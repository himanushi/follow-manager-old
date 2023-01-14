<script lang="ts">
	import { client } from '~/store/client';

	$: if ($client) {
		console.log($client.version);
		(async () => {
			const tweet = await $client.tweets.findTweetById('20');
			console.log(tweet?.data?.text);
		})();
	}
</script>
