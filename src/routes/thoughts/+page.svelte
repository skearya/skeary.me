<script>
	import Line from '$lib/Line.svelte';

	export let data;
</script>

<main>
	<h1 class="font-bol text-4xl mb-4">posts</h1>
	<Line />

	<ul class="space-y-6 mt-6">
		{#each data.posts as post}
			<li class="h-40 w-full rounded-2xl border border-moonlightPink border-opacity-50 bg-zinc-900">
				<a href={post.path} class="flex h-full flex-col justify-center p-4">
					<h1 class="text-2xl font-bold">
						{post.meta.title}
					</h1>
					<h1 class="text-gray-300">
						published on {post.meta.date}
					</h1>
				</a>
			</li>
		{/each}
	</ul>
</main>
