<script lang="ts" context="module">
  export type ItemType = {
    id: string;
    label: string;
  };
</script>

<script lang="ts">
  import { cva } from 'class-variance-authority';
  import { getContext } from 'svelte';

  let { id, label }: ItemType = $props<ItemType>();

  let sidebar = getContext('sidebar');

  const itemStyles = cva(
    [
      'relative',
      'w-full',
      'h-12',
      'border-b-solid',
      'border-b-1px',
      'border-border',
      'hover:active:overlay',
      'text-secondary',
      'text-xl',
      'text-center',
      'content-center',
      'line-height-48px',
    ],
    { variants: { selected: { true: ['bg-secondary-30'] } } }
  );
</script>

<button class={itemStyles({ selected: id === sidebar.selectedItem })} {id}
  >{label}</button>

<style></style>
