<script>
  import 'virtual:uno.css';
  import './styles.css';
  import '@unocss/reset/tailwind.css';
  import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
  import SidebarItem from '$lib/components/Sidebar/SidebarItem.svelte';
</script>

<div class="app">
  <main class="h-full w-full">
    <slot />
    <Sidebar>
      <SidebarItem id="home" label="Home" />
    </Sidebar>
  </main>
</div>

<style>
  .app {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: var(--panel);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
