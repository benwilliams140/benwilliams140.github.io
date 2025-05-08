<script lang="ts">
  import { getContext, onMount, type Snippet } from 'svelte';
  import { page } from '$app/state';
  import type { SidebarState } from './Sidebar.svelte';
  import { cx } from 'class-variance-authority';

  let { href, children } = $props<{ href: string; children: Snippet }>();
  let sidebar = getContext<SidebarState>('sidebar');

  let anchorRef: HTMLAnchorElement;

  let index = $state<number>(-1);
  let selected = $derived(page.url.pathname === href);
  let focused = $derived(sidebar.focusedIndex === index);

  function handleMouseEnter(_: MouseEvent) {
    sidebar.focusedIndex = index;
  }

  onMount(() => {
    index = sidebar.nextIndex;
  });
</script>

<li role="presentation" onmouseenter={handleMouseEnter}>
  <a
    bind:this={anchorRef}
    {href}
    id={href}
    role="menuitem"
    tabindex={-1}
    class={cx(
      'border-border text-tertiary hover:bg-hover active:bg-active block w-72 border-b-2 p-3 text-center text-xl',
      selected && !focused && 'bg-secondary/50',
      focused && 'bg-secondary/30'
    )}>
    {@render children()}
  </a>
</li>

<style></style>
