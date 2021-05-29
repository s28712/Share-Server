<script lang="ts">
	import Root from './routes/Root.svelte'
	import Download from './routes/Download.svelte'
	import Server from './routes/Server.svelte'

	import { route } from './stores/route'
	let curr = Root;

	route.subscribe(() => {
		switch($route) {
			case '/':
				curr = Root;
				break;
			case '/download':
				curr = Download;
				break;
			case '/server':
				curr = Server;
				break;
			default:
				break;
		}
	});

</script>

<main>
	<svelte:component this={curr} />
</main>

<style>
</style>