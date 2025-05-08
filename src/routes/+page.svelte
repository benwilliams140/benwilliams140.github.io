<script>
</script>

<svelte:head>
  <title>Benjamin Williams</title>
  <meta name="description" content="My Personal Website" />
</svelte:head>

<section class="w-full h-full">
  <div
    class="flex flex-col py-2 pr-48 mt-72 rounded-r-full border-8 transition-all text-tertiary bg-primary border-border w-fit">
    <span class="text-9xl font-extrabold tracking-wider"
      >Benjamin Williams</span>
    <span class="relative bottom-2 self-center text-3xl font-bold"
      >Frontend Developer, UX Enthusiast.</span>
  </div>
  <div
    class="flex absolute bottom-0 flex-col items-center w-full transition-all">
    <span class="text-2xl text-tertiary">Welcome to my personal sandbox.</span>
    <a
      aria-label="Next Page (About)"
      href="/about"
      class="my-1 rounded-2xl outline-none focus-visible:bg-secondary/20"
      ><span class="m-3 animate-bounce icon-[ant-design--down-outlined] size-5"
      ></span
      ></a>
  </div>
</section>

<style>
  div:first-of-type {
    border-left-style: none;
    animation: slide-in-from-left 250ms linear 1;
  }

  div:last-of-type {
    animation: slide-up-from-bottom 250ms linear 1;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
    opacity: 0;

    a {
      line-height: 0;
    }
  }

  @keyframes slide-in-from-left {
    from {
      transform: translate3d(-100%, 0, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes slide-up-from-bottom {
    from {
      transform: translate3d(0, 100%, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
</style>
