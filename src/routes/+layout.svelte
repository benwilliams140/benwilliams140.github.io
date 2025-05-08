<script>
  import './styles.css';
  import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
  import SidebarItem from '$lib/components/Sidebar/SidebarItem.svelte';
</script>

<main class="overflow-hidden bg-panel h-dvh w-dvw">
  <Sidebar>
    <SidebarItem href="/">Home</SidebarItem>
    <SidebarItem href="/about">About</SidebarItem>
    <SidebarItem href="/projects">Projects</SidebarItem>
    <SidebarItem href="/contact">Contact Me</SidebarItem>
  </Sidebar>
  <slot />
</main>

<style lang="postcss">
  @reference "tailwindcss";
</style>
