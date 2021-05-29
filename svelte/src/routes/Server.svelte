<script lang="ts">
import { route } from '../stores/route'

function click() {
  $route = '/'
}

</script>

<div on:click={click}>
  Link
</div>

<style></style>