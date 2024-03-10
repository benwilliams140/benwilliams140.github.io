<script lang="ts">
  import { cva } from 'class-variance-authority';
  import MenuButton from './MenuButton.svelte';
  import createSidebarState from './createSidebarState.svelte';
  import { setContext } from 'svelte';

  let { children } = $props();

  let isOpen = $state(false);
  let hasOpened = $state(false);

  function toggleSidebar() {
    isOpen = !isOpen;
    hasOpened = true;
  }

  const sidebar = createSidebarState();
  setContext('sidebar', sidebar);

  const sidebarStyles = cva(
    [
      'border-3px',
      'border-r-none',
      'border-rounded-l-4',
      'border-border',
      'z-$z-index-sidebar',
      'position-absolute',
      'bg-primary',
      'min-w-275px',
      'right-0',
      'top-0',
      'box-border',
      'h-full',
      'border-solid',
      'transition-transform',
    ],
    {
      variants: {
        isOpen: {
          true: ['display-visible animate-slide-in-right'],
          false: ['animate-slide-out-right animate-forwards'],
        },
        hasOpened: {
          true: ['animate-duration-125'],
          false: ['animate-duration-none'],
        },
      },
    }
  );
</script>

<div>
  <MenuButton {isOpen} {toggleSidebar} />
  <div class={sidebarStyles({ isOpen, hasOpened })}>
    {@render children()}
  </div>
</div>
