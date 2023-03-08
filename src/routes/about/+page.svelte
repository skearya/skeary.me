<script>
	import Discord from '$lib/Discord.svelte';
	import Fish from '$lib/Fish.svelte';
	import Line from '$lib/Line.svelte';

	let links = [
		{
			name: 'GitHub',
			icon: 'socials/github.png',
			site: 'https://github.com/skearya',
			color: 'rgba(49, 120, 198, 0.125)'
		},
		{
			name: 'Spotify',
			icon: 'socials/spotify.png',
			site: 'https://open.spotify.com/user/srz3wg23iyukf5vxpa74i37to',
			color: 'rgba(66, 184, 131, 0.125)'
		},
		{
			name: 'Steam',
			icon: 'socials/steam.png',
			site: 'https://steamcommunity.com/id/skeary',
			color: 'rgba(49, 120, 198, 0.125)'
		},
		{
			name: 'MyAnimeList',
			icon: 'socials/mal.ico',
			site: 'https://myanimelist.net/profile/skeary',
			color: 'rgba(97, 218, 251, 0.125)'
		},
		{
			name: 'ScoreSaber',
			icon: 'socials/scoresaber.ico',
			site: 'https://scoresaber.com/u/76561198365846923',
			color: 'rgba(255, 202, 40, 0.125)'
		},
		{
			name: 'BeatSaver',
			icon: 'socials/beatsaver.ico',
			site: 'https://beatsaver.com/profile/4284546',
			color: 'rgba(207, 100, 154, 0.063)'
		}
	];

	let tools = [
		{
			name: 'Svelte',
			icon: 'tools/svelte.svg',
			color: 'rgba(227, 76, 38, 0.063)'
		},
		{
			name: 'SvelteKit',
			icon: 'tools/folder-svelte.svg',
			color: 'rgba(227, 76, 38, 0.063)'
		},
		{
			name: 'JavaScript',
			icon: 'tools/javascript.svg',
			color: 'rgba(255, 202, 40, 0.125)'
		},
		{
			name: 'Python (washed)',
			icon: 'tools/python.svg',
			color: 'rgba(1, 101, 169, 0.125)'
		},
		{
			name: 'Tailwind CSS',
			icon: 'tools/tailwindcss.svg',
			color: 'rgba(56, 178, 172, 0.125)'
		},
		{
			name: 'CSS',
			icon: 'tools/css.svg',
			color: 'rgba(97, 218, 251, 0.125)'
		}
	];
</script>

<main class="relative overflow-hidden">
	<div
		class="z-10 mx-auto flex max-w-3xl flex-col gap-14 border border-moonlightWhite border-opacity-10 bg-moonlightOverlay px-6 pt-32"
	>
		<div class="flex flex-col items-stretch justify-between gap-x-4 sm:flex-row">
			<div class="mb-4 w-full space-y-4">
				<h1 class="text-3xl sm:text-4xl">about me</h1>
				<Line />
				<h1>
					A 16 year old in Georgia interested in rhythm games, rhythm game music, programming and
					procrastination. <a
						class=" text-blue-400"
						href="https://scoresaber.com/u/76561198365846923"
						>Top 200 global (peak #145) in Beat Saber</a
					> after playing for 4 years. Currently learning web development with SvelteKit.
				</h1>
			</div>
			<Discord />
		</div>

		<div class="space-y-4">
			<h1 class="text-3xl sm:text-4xl">links</h1>
			<Line />
			<div class="grid grid-cols-1 gap-4 text-gray-300 sm:grid-cols-2 md:grid-cols-3">
				{#each links as link}
					<a
						href={link.site}
						class="flex items-center justify-start gap-3 rounded-lg border border-moonlightWhite border-opacity-0 bg-zinc-900 p-3 transition-all hover:border-opacity-80"
					>
						<div class="rounded-md p-2" style="background-color: {link.color}">
							<img width="25px" height="25px" src={link.icon} alt="logo" />
						</div>

						<h3>{link.name}</h3>
					</a>
				{/each}
			</div>
		</div>

		<div class="space-y-4">
			<h1 class="text-3xl sm:text-4xl">favorite songs</h1>
			<Line />
			<iframe
				title="spotify embed"
				style="border-radius: 12px"
				src="https://open.spotify.com/embed/playlist/2m2lebj9Lg6Riwfyv7G9AD?utm_source=generator"
				width="100%"
				height="500"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			/>
		</div>

		<div class="space-y-4 pb-10">
			<h1 class="text-3xl sm:text-4xl">stuff i use</h1>
			<Line />
			<div class="grid grid-cols-1 gap-4 text-gray-300 sm:grid-cols-2 md:grid-cols-3">
				{#each tools as tool}
					<div
						class="flex items-center justify-start gap-3 rounded-lg border border-moonlightWhite border-opacity-0 bg-zinc-900 p-3 transition-all hover:border-opacity-80"
					>
						<div class="rounded-md p-2" style="background-color: {tool.color}">
							<img width="25px" height="25px" src={tool.icon} alt="logo" />
						</div>
						<h3>{tool.name}</h3>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<Fish />
</main>
