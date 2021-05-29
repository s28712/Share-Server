<script lang="ts">
  import Root from './Root.svelte'
	import Download from './Download.svelte'
	import Server from './Server.svelte'

  import { route } from '../stores/route';

  function click() {
    $route = '/';
  }
</script>

<div>
  <div on:click={click}>Link</div>
</div>

<style></style>