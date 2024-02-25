<script>
  import 'virtual:uno.css';
  import './styles.css';
</script>

<div class="app">
  <main class="h-full w-full">
    <slot />
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
