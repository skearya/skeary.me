<script>
	import Line from '$lib/Line.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { title, date, Content } = data;
</script>

<svelte:head>
	<title>skeary blog - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<main class="space-y-4">
	<div class="flex justify-between text-lg sm:text-2xl">
		<h1 class="font-bold"># {title}</h1>
		<p>posted: {date}</p>
	</div>

	<Line />

	<article class="prose prose-invert max-w-full">
		<Content />
	</article>
</main>
