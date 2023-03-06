<script>
	import '../app.css';
	import { blur, fly, slide } from 'svelte/transition';
	export let data;

	$: data.currentPath, (open = false);

	let open = false;
</script>

<nav class="fixed inset-x-0 top-5 z-50 mx-auto max-w-3xl text-lg">
	<div
		class="mx-6 flex items-center justify-between rounded-2xl border border-moonlightWhite border-opacity-10 bg-moonlightSoft bg-opacity-10 p-4 backdrop-blur-xl backdrop-filter transition-all"
	>
		<a href="/"><img src="cat.svg" class="-scale-x-100" alt="cat" width="40px" height="40px" /></a>
		<div class="hidden space-x-4 md:block">
			<a href="/blog" class:selected={data.currentPath == '/blog'}>blog</a>
			<a href="/about" class:selected={data.currentPath == '/about'}>about</a>
		</div>
		<div class="block md:hidden">
			<button class="w-8" on:click={() => (open = !open)} href="/">/</button>
		</div>
	</div>
</nav>

{#if open}
	<div
		in:slide
		out:blur={{ duration: 400 }}
		class="fixed bottom-0 left-0 z-40 h-full w-full bg-black px-8 text-4xl md:hidden"
	>
		<ul class="mt-32 list-inside list-disc space-y-3 text-moonlightText">
			<div class="background mb-6 h-1 w-full" />
			<li><a class:selected2={data.currentPath == '/blog'} href="/blog">/blog</a></li>
			<li><a class:selected2={data.currentPath == '/about'} href="/about">/about</a></li>
		</ul>
	</div>
{/if}

{#key data.currentPath}
	<div in:slide={{ delay: 100 }}>
		<slot />
	</div>
{/key}

<svelte:head>
	<title>skeary</title>
</svelte:head>

<style lang="postcss">
	@font-face {
		src: url('/Inter-Regular.ttf') format('truetype');
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
	}

	:global(body) {
		background-color: #0e0e12;
		font-family: 'Inter', sans-serif;
		font-weight: 400;
		color: white;
		overscroll-behavior-y: none;
	}

	.background {
		background-color: #e5e5f7;
		opacity: 1;
		background-image: linear-gradient(-45deg, #e5e5f7, #e5e5f7 50%, #f58ee0 50%, #f58ee0);
		background-size: 12px 12px;
	}

	.selected {
		background-color: #0a0a0a;
		padding: 5px;
		border-radius: 5px;
		transition: all 300ms;
	}

	.selected2 {
		color: white;
	}
</style>
