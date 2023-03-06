<script>
	import { onMount } from 'svelte';

	let presence;

	onMount(async () => {
		let response = await fetch('https://api.lanyard.rest/v1/users/681208628350418977');
		let data = await response.json();
		presence = data.data;
	});
</script>

<div
	class="w-full space-y-4 rounded-xl border border-moonlightWhite border-opacity-10 bg-moonlightBase p-4 transition-all hover:border-opacity-80 sm:w-[30rem]"
>
	{#if presence == undefined}
		<h1 class="flex h-full animate-pulse items-center justify-center">loading..</h1>
	{:else}
		<div class="mb-2 space-y-2 text-lg font-bold">
			<div class="relative w-24">
				<img
					class="h-24 w-24 rounded-full"
					src={`https://cdn.discordapp.com/avatars/${presence.discord_user.id}/${presence.discord_user.avatar}`}
					alt="discord pfp"
				/>
				<div
					class:green={presence.discord_status == 'online'}
					class:red={presence.discord_status == 'dnd'}
					class:gray={presence.discord_status == 'offline'}
					class="absolute bottom-0 right-0 h-7 w-7 rounded-full"
				/>
			</div>

			<h1>
				{`${presence.discord_user.username}#${presence.discord_user.discriminator}`}
			</h1>

			<div class="mb-4 h-[2px] w-full bg-moonlightIndigo" />
		</div>

		{#if presence.listening_to_spotify == true}
			<div class="mb-0 flex items-center gap-3">
				<div class="relative w-20">
					<img
						class="h-20 min-w-[5rem] rounded-lg"
						src={presence.spotify.album_art_url}
						alt="album art"
					/>
					<img
						class="absolute -bottom-1 -right-1 h-7 w-7 rounded-full border-[3px] border-moonlightBase bg-black"
						src="socials/spotify.png"
						alt="spotify"
					/>
				</div>

				<div class="overflow-scroll whitespace-nowrap text-sm sm:w-40">
					<h1 class="font-bold">{presence.spotify.song}</h1>
					<h1>by {presence.spotify.artist}</h1>
					<h3>on {presence.spotify.album}</h3>
				</div>
			</div>
		{/if}

		{#if presence.activities.length == 0}
			<h1>Not playing anything</h1>
		{:else if presence.activities[0].name == 'Spotify'}
			{#if presence.activities[1]}
				<div class="flex items-center gap-3">
					<div class="relative">
						<img
							class="h-20 w-20 rounded-lg"
							src={`https://cdn.discordapp.com/app-assets/${presence.activities[1].application_id}/${presence.activities[1].assets.large_image}`}
							alt="discord status"
						/>
						<img
							class="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
							src={`https://cdn.discordapp.com/app-assets/${presence.activities[1].application_id}/${presence.activities[1].assets.small_image}`}
							alt="discord status"
						/>
					</div>
					<h1>{presence.activities[1].name}</h1>
				</div>
			{/if}
		{:else}
			<div class="flex items-center gap-3">
				<div class="relative">
					<img
						class="h-20 w-20 rounded-lg"
						src={`https://cdn.discordapp.com/app-assets/${presence.activities[0].application_id}/${presence.activities[0].assets.large_image}`}
						alt="discord status"
					/>
					<img
						class="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
						src={`https://cdn.discordapp.com/app-assets/${presence.activities[0].application_id}/${presence.activities[0].assets.small_image}`}
						alt="discord status"
					/>
				</div>
				<h1>{presence.activities[0].name}</h1>
			</div>
		{/if}
	{/if}
</div>

<style>
	.green {
		background-color: #22a559;
		border: 5px solid #0f1014;
	}
	.red {
		background-color: #f23f43;
		border: 5px solid #0f1014;
	}
	.gray {
		background-color: #83858f;
		border: 5px solid #0f1014;
	}
</style>
