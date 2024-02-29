<script lang="ts" context="module">
  export type ItemType = {
    id: string;
    label: string;
  };
</script>

<script lang="ts">
  let { id, label }: ItemType = $props<ItemType>();

  console.log(id, label);
</script>

<div></div>

<style></style>
