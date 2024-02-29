<script lang="ts">
  import { cva } from 'class-variance-authority';

  let { isOpen, toggleSidebar } = $props<{
    isOpen: boolean;
    toggleSidebar: () => void;
  }>();

  const buns = cva([
    'absolute',
    'top-3',
    'right-1',
    'group',
    'flex',
    'flex-col',
    'gap-1',
    'm-auto',
    'w-12',
    'z-$z-index-sidebar-hamburger',
  ]);
  const patty = cva([
    'h-2',
    'bg-active',
    'border-rounded',
    'w-full',
    'transition-transform',
    'transition-opacity',
    'group-hover:scale-90',
  ]);
</script>

<button class={buns()} on:click={toggleSidebar}>
  <div class={patty({ class: isOpen && 'translate-y-3 -rotate-45' })} />
  <div class={patty({ class: isOpen && 'opacity-0' })} />
  <div class={patty({ class: isOpen && '-translate-y-3 rotate-45' })} />
</button>

<style></style>
