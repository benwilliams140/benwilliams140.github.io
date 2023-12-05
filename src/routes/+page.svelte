<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="name">
		<h1>Benjamin Williams</h1>
		<h2>Frontend developer, UI enthusiast.</h2>
	</div>
</section>

<style>
	.name {
		border: 8px solid var(--border);
		border-top-right-radius: 9999px;
		border-bottom-right-radius: 9999px;
		box-sizing: border-box;
		color: var(--secondary);
		font-weight: 800;
		letter-spacing: 0.025em;
		background-color: var(--primary);
		width: 100%;
		position: absolute;
		top: 18rem;
	}
</style>
