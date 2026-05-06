<script lang="ts">
	import { playerPlatform, type Platform } from '$lib/stores/playerPlatform.svelte.js';

	interface Props {
		spotifyArtistId?: string;
		spotifyAlbumId?: string;
		deezerAlbumId?: string;
		appleAlbumId?: string;
		appleAlbumSlug?: string;
		albumTitle?: string;
		albumMeta?: string;
		albumBadge?: string;
	}

	let {
		spotifyArtistId,
		spotifyAlbumId,
		deezerAlbumId,
		appleAlbumId,
		appleAlbumSlug = 'accueil-de-jour',
		albumTitle,
		albumMeta,
		albumBadge
	}: Props = $props();

	const selected = $derived(playerPlatform.value);

	const spotifySrc = spotifyAlbumId
		? `https://open.spotify.com/embed/album/${spotifyAlbumId}?utm_source=generator&theme=0`
		: spotifyArtistId
			? `https://open.spotify.com/embed/artist/${spotifyArtistId}?utm_source=generator&theme=0`
			: '';
	const deezerSrc = deezerAlbumId
		? `https://widget.deezer.com/widget/dark/album/${deezerAlbumId}`
		: '';
	const appleSrc = appleAlbumId
		? `https://embed.music.apple.com/fr/album/${appleAlbumSlug}/${appleAlbumId}`
		: '';

	const openLinks: Record<Platform, string> = {
		spotify: spotifyAlbumId
			? `https://open.spotify.com/album/${spotifyAlbumId}`
			: spotifyArtistId
				? `https://open.spotify.com/artist/${spotifyArtistId}`
				: '#',
		deezer: deezerAlbumId ? `https://www.deezer.com/fr/album/${deezerAlbumId}` : '#',
		apple: appleAlbumId
			? `https://music.apple.com/fr/album/${appleAlbumSlug}/${appleAlbumId}`
			: '#'
	};

	const labels: Record<Platform, string> = {
		spotify: 'Spotify',
		deezer: 'Deezer',
		apple: 'Apple Music'
	};

	const available: Record<Platform, boolean> = {
		spotify: Boolean(spotifySrc),
		deezer: Boolean(deezerSrc),
		apple: Boolean(appleSrc)
	};
</script>

<div class="flex flex-col gap-4 rounded-3xl border border-surface-secondary/20 bg-white p-5 shadow-sm">
	{#if albumTitle || albumMeta}
		<div class="flex flex-col gap-1">
			{#if albumBadge}
				<span class="w-fit rounded-md bg-accent-primary px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground-inverse">{albumBadge}</span>
			{/if}
			{#if albumTitle}
				<h3 class="text-2xl font-bold text-foreground-primary">{albumTitle}</h3>
			{/if}
			{#if albumMeta}
				<p class="text-sm text-foreground-secondary">{albumMeta}</p>
			{/if}
		</div>
	{/if}

	<div class="flex gap-1 rounded-xl bg-surface-primary/60 p-1">
		{#each ['spotify', 'deezer', 'apple'] as p (p)}
			{@const platform = p as Platform}
			{#if available[platform]}
				<button
					type="button"
					class="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
					class:bg-foreground-primary={selected === platform}
					class:text-foreground-inverse={selected === platform}
					class:text-foreground-secondary={selected !== platform}
					class:hover:bg-white={selected !== platform}
					onclick={() => playerPlatform.set(platform)}
					aria-pressed={selected === platform}
				>
					{#if platform === 'spotify'}
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
					{:else if platform === 'deezer'}
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38h-5.19zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.189v-3.027h-5.19zm6.27 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.81v3.029h5.19v-3.03H0zm6.27 0v3.029h5.189v-3.03h-5.19zm6.27 0v3.029h5.19v-3.03h-5.19zm6.27 0v3.029H24v-3.03h-5.19z" /></svg>
					{:else}
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.99c-.042.003-.083.01-.124.013-.492.028-.98.088-1.46.185a5.02 5.02 0 00-1.985.855C1.35 1.88.65 2.976.35 4.323c-.12.53-.168 1.07-.18 1.615v12.126c.013.55.063 1.096.19 1.63.318 1.31 1.062 2.31 2.18 3.043.49.32 1.03.55 1.607.68.496.12 1.004.178 1.515.2.044.003.088.01.132.013h12.02c.042-.003.083-.01.124-.013.5-.02 1-.075 1.488-.19a5.02 5.02 0 002.006-.86c1.07-.81 1.77-1.9 2.07-3.25.12-.53.168-1.07.18-1.615V6.124zm-7.27 10.24c-.006.063-.02.12-.03.18a2.4 2.4 0 01-1.47 1.87c-.42.17-.87.27-1.32.3-.35.02-.7-.04-1.04-.14-.52-.17-.96-.52-1.27-.97-.47-.72-.67-1.54-.75-2.38-.01-.12-.01-.24-.01-.36 0-.65.13-1.27.4-1.86.35-.77.87-1.37 1.62-1.78.51-.28 1.06-.44 1.64-.52.37-.05.74-.05 1.11.01.04.01.08.01.13.02V7.24c0-.09.02-.12.11-.14.75-.13 1.5-.26 2.24-.39.14-.02.27-.05.41-.07.03 0 .06 0 .1.01v9.53c0 .04 0 .08-.01.13-.01.05-.01.1-.02.14z" /></svg>
					{/if}
					<span class="hidden sm:inline">{labels[platform]}</span>
				</button>
			{/if}
		{/each}
	</div>

	<div class="overflow-hidden rounded-2xl bg-surface-primary/40">
		{#if selected === 'spotify' && spotifySrc}
			<iframe
				title="Spotify Player"
				src={spotifySrc}
				width="100%"
				height="352"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				allowfullscreen
				loading="lazy"
				class="block"
			></iframe>
		{:else if selected === 'deezer' && deezerSrc}
			<iframe
				title="Deezer Player"
				src={deezerSrc}
				width="100%"
				height="352"
				frameBorder="0"
				allow="encrypted-media; clipboard-write"
				loading="lazy"
				class="block"
			></iframe>
		{:else if selected === 'apple' && appleSrc}
			<iframe
				title="Apple Music Player"
				src={appleSrc}
				width="100%"
				height="450"
				frameBorder="0"
				allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
				loading="lazy"
				class="block"
			></iframe>
		{/if}
	</div>

	<a
		href={openLinks[selected]}
		target="_blank"
		rel="noopener noreferrer"
		class="self-center text-sm font-medium text-accent-primary hover:underline"
	>
		Ouvrir dans {labels[selected]} →
	</a>
</div>
