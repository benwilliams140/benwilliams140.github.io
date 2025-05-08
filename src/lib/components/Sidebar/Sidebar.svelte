<script lang="ts" module>
  function createSidebarState() {
    let nextIndex = $state(0);
    let focusedIndex = $state(0);

    return {
      get nextIndex() {
        return nextIndex++;
      },

      get focusedIndex() {
        return focusedIndex;
      },
      set focusedIndex(value) {
        focusedIndex = value;
      },
    };
  }

  export type SidebarState = ReturnType<typeof createSidebarState>;
</script>

<script lang="ts">
  import { cx } from 'class-variance-authority';
  import { page } from '$app/state';
  import { setContext, type Snippet } from 'svelte';

  let { children } = $props<{ children: Snippet }>();

  let menuRef: HTMLUListElement;
  let buttonRef: HTMLButtonElement;

  const sidebar = createSidebarState();
  setContext('sidebar', sidebar);

  let open = $state(false);
  let nodes = $state<HTMLAnchorElement[]>([]);
  let hasOpened = $state(false);

  $effect(() => {
    if (page.url.pathname) {
      open = false;
    }
  });

  function handleToggle() {
    hasOpened = true;
    open = !open;
    if (open) {
      setTimeout(() => menuRef?.focus(), 125);
      nodes = Array.from(menuRef.querySelectorAll('a').values());

      sidebar.focusedIndex = nodes.findIndex(
        (node) => node.id === page.url.pathname
      );
    }
  }

  function stepItemFocus(dir: number) {
    if (menuRef) {
      const numItems = menuRef.querySelectorAll('a').length;
      sidebar.focusedIndex = (sidebar.focusedIndex + numItems + dir) % numItems;
    }
  }

  function handleKeyDownCapture(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape': {
        open = false;
        buttonRef.focus();
        break;
      }
      case 'ArrowUp': {
        stepItemFocus(-1);
        break;
      }
      case 'ArrowDown': {
        stepItemFocus(1);
        break;
      }
      case 'Enter':
      case ' ': {
        if (event.target === buttonRef) {
          break;
        }

        nodes[sidebar.focusedIndex].click();
        setTimeout(() => {
          buttonRef.focus();
        }, 125);
        break;
      }
    }
  }
</script>

{#snippet patty(variant: 'top' | 'bottom' | 'middle', open: boolean)}
  <div
    role="presentation"
    data-variant={variant}
    class={cx(
      'bg-secondary group-active:bg-active group-hover:bg-hover group-focus-visible:bg-tertiary h-2 w-12 rounded-full transition-all',
      open && variant === 'top' && 'translate-y-3 rotate-45',
      open && variant === 'middle' ? 'opacity-0' : 'opacity-100',
      open && variant === 'bottom' && '-translate-y-3 -rotate-45'
    )}>
  </div>
{/snippet}

<aside
  class="absolute top-0 right-0 h-full"
  onkeydowncapture={handleKeyDownCapture}>
  <button
    bind:this={buttonRef}
    onclick={handleToggle}
    aria-label="Open/Close Sidebar"
    aria-haspopup="menu"
    aria-expanded={open}
    aria-controls="sidebar"
    class="flex absolute right-0 z-50 flex-col gap-1 my-3.5 mx-2 outline-none group">
    {@render patty('top', open)}
    {@render patty('middle', open)}
    {@render patty('bottom', open)}
  </button>
  <ul
    bind:this={menuRef}
    id="sidebar"
    role="menu"
    tabindex={-1}
    aria-activedescendant={page.url.pathname}
    class={cx(
      'bg-primary border-border h-full list-none overflow-clip rounded-l-3xl border-4 transition-transform',
      !hasOpened && 'translate-x-full'
    )}>
    {@render children()}
  </ul>
</aside>

<style>
  ul {
    border-right-style: none;
  }

  button[aria-expanded='true'] ~ ul {
    animation: slide-in-from-right 125ms linear 1;
  }

  button[aria-expanded='false'] ~ ul {
    animation: slide-out-to-right 125ms linear 1;
    animation-fill-mode: forwards;
  }

  @keyframes slide-in-from-right {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slide-out-to-right {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
