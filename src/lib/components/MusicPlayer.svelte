<script lang="ts">
	import Play from 'lucide-svelte/icons/play';
	import X from 'lucide-svelte/icons/x';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { LA_FONDATION_FEATURED_TRACKS } from '$lib/lafondation.js';
	import { playerPlatform, type Platform } from '$lib/stores/playerPlatform.svelte.js';

	let expanded = $state(false);
	let dismissed = $state(false);

	const track = LA_FONDATION_FEATURED_TRACKS[0];
	const trackLabel = track.feat ? `${track.title} feat. ${track.feat}` : track.title;
	const spotifySrc = `https://open.spotify.com/embed/track/${track.spotify}?utm_source=generator&theme=0`;
	const deezerSrc = `https://widget.deezer.com/widget/dark/track/${track.deezer}`;
	const appleSrc = `https://embed.music.apple.com/fr/song/${track.apple.slug}/${track.apple.songId}`;

	const labels: Record<Platform, string> = {
		spotify: 'Spotify',
		deezer: 'Deezer',
		apple: 'Apple Music'
	};

	const heights: Record<Platform, number> = {
		spotify: 80,
		deezer: 100,
		apple: 175
	};

	function pick(p: Platform) {
		playerPlatform.set(p);
	}

	const platform = $derived(playerPlatform.value);
</script>

{#if !dismissed}
	{#if !expanded}
		<button
			onclick={() => (expanded = true)}
			class="group fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full bg-surface-inverse p-2 pr-5 shadow-2xl transition-all hover:scale-105"
			aria-label="Ouvrir le mini-lecteur La Fondation"
		>
			<span class="flex h-11 w-11 items-center justify-center rounded-full bg-accent-primary text-foreground-inverse">
				<Play size={18} fill="currentColor" class="ml-0.5" />
			</span>
			<span class="flex flex-col items-start">
				<span class="font-mono text-[10px] font-bold uppercase tracking-wider text-accent-primary">Écouter</span>
				<span class="text-xs font-medium text-foreground-inverse">La Fondation · {track.title}</span>
			</span>
		</button>
	{/if}

	<!--
		Le panneau iframe reste TOUJOURS monté tant que !dismissed.
		Replier (expanded=false) le glisse hors-écran via translate-y → l'iframe
		ne se démonte pas, donc la lecture continue.
	-->
	<div
		class="fixed bottom-6 left-6 z-50 transition-transform duration-300 ease-out"
		class:translate-y-0={expanded}
		class:opacity-100={expanded}
		class:translate-y-[150%]={!expanded}
		class:opacity-0={!expanded}
		class:pointer-events-none={!expanded}
		aria-hidden={!expanded}
	>
		<div class="w-[320px] overflow-hidden rounded-2xl bg-surface-inverse shadow-2xl">
			<div class="flex items-center justify-between gap-2 px-4 py-2">
				<div class="flex flex-col">
					<span class="font-mono text-[10px] font-bold uppercase tracking-wider text-accent-primary">En écoute</span>
					<span class="text-xs font-medium text-foreground-inverse">La Fondation · {trackLabel}</span>
				</div>
				<div class="flex items-center gap-1">
					<button
						onclick={() => (expanded = false)}
						class="flex h-7 w-7 items-center justify-center rounded-full text-foreground-inverse/70 transition-colors hover:bg-white/10 hover:text-foreground-inverse"
						aria-label="Réduire le lecteur"
					>
						<ChevronDown size={16} />
					</button>
					<button
						onclick={() => (dismissed = true)}
						class="flex h-7 w-7 items-center justify-center rounded-full text-foreground-inverse/70 transition-colors hover:bg-white/10 hover:text-foreground-inverse"
						aria-label="Fermer le lecteur"
					>
						<X size={16} />
					</button>
				</div>
			</div>

			<div class="flex gap-1 px-2 pb-2">
				{#each ['spotify', 'deezer', 'apple'] as p (p)}
					{@const tab = p as Platform}
					<button
						type="button"
						onclick={() => pick(tab)}
						class="flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-[11px] font-medium text-foreground-inverse transition-all"
						class:bg-accent-primary={platform === tab}
						class:opacity-50={platform !== tab}
						class:hover:opacity-100={platform !== tab}
						aria-pressed={platform === tab}
					>
						{#if tab === 'spotify'}
							<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
						{:else if tab === 'deezer'}
							<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38h-5.19zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.189v-3.027h-5.19zm6.27 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.81v3.029h5.19v-3.03H0zm6.27 0v3.029h5.189v-3.03h-5.19zm6.27 0v3.029h5.19v-3.03h-5.19zm6.27 0v3.029H24v-3.03h-5.19z" /></svg>
						{:else}
							<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.99c-.042.003-.083.01-.124.013-.492.028-.98.088-1.46.185a5.02 5.02 0 00-1.985.855C1.35 1.88.65 2.976.35 4.323c-.12.53-.168 1.07-.18 1.615v12.126c.013.55.063 1.096.19 1.63.318 1.31 1.062 2.31 2.18 3.043.49.32 1.03.55 1.607.68.496.12 1.004.178 1.515.2.044.003.088.01.132.013h12.02c.042-.003.083-.01.124-.013.5-.02 1-.075 1.488-.19a5.02 5.02 0 002.006-.86c1.07-.81 1.77-1.9 2.07-3.25.12-.53.168-1.07.18-1.615V6.124z" /></svg>
						{/if}
						<span>{labels[tab]}</span>
					</button>
				{/each}
			</div>

			<!--
				Les 3 iframes restent montées dès qu'on a sélectionné une plateforme.
				Switch d'onglet = on cache via CSS plutôt que démonter, pour ne pas
				couper la lecture de l'utilisateur en cours.
			-->
			<div class="relative">
				<iframe
					title="Spotify mini player"
					src={spotifySrc}
					width="320"
					height={heights.spotify}
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
					class="block"
					class:hidden={platform !== 'spotify'}
				></iframe>
				<iframe
					title="Deezer mini player"
					src={deezerSrc}
					width="320"
					height={heights.deezer}
					frameBorder="0"
					allow="encrypted-media; clipboard-write"
					loading="lazy"
					class="block"
					class:hidden={platform !== 'deezer'}
				></iframe>
				<iframe
					title="Apple Music mini player"
					src={appleSrc}
					width="320"
					height={heights.apple}
					frameBorder="0"
					allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
					sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
					loading="lazy"
					class="block"
					class:hidden={platform !== 'apple'}
				></iframe>
			</div>
		</div>
	</div>
{/if}
