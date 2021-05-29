<script lang="ts">
  import { route } from '../stores/route'
  
  function click() {
    $route = '/'
  }
</script>

<div>
  <div on:click={click}>Link</div>
</div>

<style></style>