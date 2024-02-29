<script lang="ts">
  import MenuButton from './MenuButton.svelte';

  let isOpen = $state(false);

  function toggleSidebar() {
    isOpen = !isOpen;
  }
</script>

<div><MenuButton {isOpen} {toggleSidebar} /><slot /></div>
