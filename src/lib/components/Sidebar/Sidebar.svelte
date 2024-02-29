<script lang="ts">
  import { setContext } from 'svelte';

  let isOpen = $state(false);

  function handleOnClick() {
    isOpen = !isOpen;
  }
</script>

<div></div>
