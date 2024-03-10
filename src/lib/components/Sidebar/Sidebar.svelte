<script lang="ts">
  import MenuButton from './MenuButton.svelte';

  let { children } = $props();

  let isOpen = $state(false);

  function toggleSidebar() {
    isOpen = !isOpen;
  }
</script>

<div>
  <MenuButton {isOpen} {toggleSidebar} />
  <div
    class="border-3px border-r-none border-rounded-l-4 border-border z-$z-index-sidebar position-absolute bg-primary min-w-275px right-0 top-0 box-border h-full border-solid transition-transform">
    {@render children()}
  </div>
</div>
