<script lang="ts">
	import Music from 'lucide-svelte/icons/music';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import Calendar from 'lucide-svelte/icons/calendar';
	import Film from 'lucide-svelte/icons/film';
	import { base } from '$app/paths';
	import MediaPlayer from './MediaPlayer.svelte';
	import {
		LA_FONDATION_ALBUM,
		LA_FONDATION_MEMBRES,
		LA_FONDATION_SOCIAL,
		LA_FONDATION_IDS,
		LA_FONDATION_HISTORY,
		LA_FONDATION_CLIPS,
		LA_FONDATION_MEMBER_IMAGES,
		LA_FONDATION_GALLERY,
		getUpcomingConcerts
	} from '$lib/lafondation.js';

	const upcoming = getUpcomingConcerts();
	const nextConcert = upcoming[0];
	const memberPhotos = LA_FONDATION_MEMBRES.map((m, i) => ({
		...m,
		photo: LA_FONDATION_MEMBER_IMAGES[i] ?? LA_FONDATION_MEMBER_IMAGES[0]
	}));
</script>

<section id="fondation" class="flex w-full flex-col gap-12 bg-surface-primary px-6 py-20 md:px-12">
	<div class="flex flex-col gap-4">
		<div class="inline-flex w-fit items-center gap-2 rounded-full bg-accent-primary/10 px-4 py-2 text-accent-primary">
			<Music size={16} />
			<span class="text-sm font-semibold uppercase tracking-wider">Projet Phare</span>
		</div>
		<h2 class="text-3xl font-bold text-foreground-primary md:text-4xl">La Fondation</h2>
		<p class="text-lg text-foreground-secondary">
			Quand l'expression artistique devient un levier d'insertion puissant.
		</p>
	</div>

	<div class="flex flex-col gap-6 lg:flex-row">
		<div class="flex flex-1 flex-col gap-8 rounded-2xl bg-surface-secondary p-8 md:p-12">
			<div class="flex flex-col gap-4">
				<h3 class="text-2xl font-bold text-foreground-primary">De l'atelier d'écriture à la scène</h3>
				<p class="text-base leading-relaxed text-foreground-secondary">{LA_FONDATION_HISTORY.intro}</p>
				<p class="text-base leading-relaxed text-foreground-secondary">{LA_FONDATION_HISTORY.story}</p>
			</div>

			<div class="grid grid-cols-2 gap-3 md:grid-cols-4">
				{#each memberPhotos as m (m.name)}
					<figure class="flex flex-col gap-2 overflow-hidden rounded-xl bg-surface-primary/60">
						<img
							src={base + m.photo}
							alt="Portrait de {m.name}"
							loading="lazy"
							class="aspect-[3/4] w-full object-cover object-top"
						/>
						<figcaption class="flex flex-col gap-0.5 px-3 pb-3">
							<span class="font-mono text-xs uppercase tracking-wider text-accent-primary">{m.name}</span>
							<span class="text-xs leading-snug text-foreground-secondary">{m.role.split('&')[0].trim()}</span>
						</figcaption>
					</figure>
				{/each}
			</div>

			<div class="flex flex-col gap-3">
				<div class="flex items-center gap-2 text-foreground-muted">
					<Film size={14} />
					<span class="font-mono text-xs uppercase tracking-wider">Clips</span>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each LA_FONDATION_CLIPS as clip (clip.url)}
						<a
							href={clip.url}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-full bg-surface-primary px-4 py-2 text-sm font-medium text-foreground-primary transition-all hover:bg-white"
						>
							<span>{clip.title}</span>
							{#if clip.feat}<span class="font-mono text-xs text-foreground-muted">feat. {clip.feat}</span>{/if}
							<ExternalLink size={12} />
						</a>
					{/each}
				</div>
			</div>

			<div class="flex flex-wrap gap-3">
				<a
					href={LA_FONDATION_SOCIAL.site}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full bg-surface-inverse px-6 py-3 text-sm font-semibold text-foreground-inverse transition-all hover:opacity-90"
				>
					Site officiel
					<ExternalLink size={14} />
				</a>
				<a
					href={LA_FONDATION_SOCIAL.instagram}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram La Fondation"
					class="inline-flex items-center gap-2 rounded-full bg-surface-primary px-4 py-3 text-sm font-semibold text-foreground-primary transition-all hover:brightness-95"
				>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
						<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
					</svg>
				</a>
				<a
					href={LA_FONDATION_SOCIAL.youtube}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="YouTube La Fondation"
					class="inline-flex items-center gap-2 rounded-full bg-surface-primary px-4 py-3 text-sm font-semibold text-foreground-primary transition-all hover:brightness-95"
				>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
						<path d="m10 15 5-3-5-3z" />
					</svg>
				</a>
			</div>
		</div>

		<div class="flex flex-1 flex-col gap-4">
			<MediaPlayer
				spotifyAlbumId={LA_FONDATION_IDS.spotifyAlbum}
				deezerAlbumId={LA_FONDATION_IDS.deezerAlbum}
				appleAlbumId={LA_FONDATION_IDS.appleAlbum}
				appleAlbumSlug={LA_FONDATION_IDS.appleAlbumSlug}
				albumBadge="Premier album"
				albumTitle={LA_FONDATION_ALBUM.title}
				albumMeta="{LA_FONDATION_ALBUM.trackCount} titres · {LA_FONDATION_ALBUM.duration} · {LA_FONDATION_ALBUM.releaseDate}"
			/>

			{#if nextConcert}
				<div class="flex flex-col gap-2 rounded-2xl bg-surface-inverse p-5 text-foreground-inverse">
					<div class="flex items-center gap-2 text-accent-primary">
						<Calendar size={14} />
						<span class="font-mono text-xs uppercase tracking-wider">Prochain concert</span>
					</div>
					<span class="text-sm font-semibold leading-tight">{nextConcert.title}</span>
					<span class="font-mono text-xs opacity-70">
						{nextConcert.date} · {nextConcert.venue}, {nextConcert.city}{nextConcert.country ? `, ${nextConcert.country}` : ''}
					</span>
				</div>
			{/if}
		</div>
	</div>

	<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
		{#each LA_FONDATION_GALLERY.slice(0, 6) as src, i (src)}
			<div class="group relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-secondary">
				<img
					src={base + src}
					alt="La Fondation — photo {i + 1}"
					loading="lazy"
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
		{/each}
	</div>
</section>
