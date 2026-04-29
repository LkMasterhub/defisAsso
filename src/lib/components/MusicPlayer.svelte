<script lang="ts">
	import { Play, Pause, Volume2, Music as MusicIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let isPlaying = $state(false);
	let audio: HTMLAudioElement;
	let volume = $state(0.5);

	// Simulation d'un morceau de La Fondation
	const trackUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // À remplacer par un vrai lien vers un titre de La Fondation

	function togglePlay() {
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
		isPlaying = !isPlaying;
	}

	onMount(() => {
		audio = new Audio(trackUrl);
		audio.volume = volume;
		audio.onended = () => (isPlaying = false);
	});
</script>

<div class="fixed bottom-6 left-6 z-50 flex items-center gap-4 rounded-full bg-surface-inverse p-2 pr-6 shadow-2xl transition-all hover:scale-105 group">
	<button
		onclick={togglePlay}
		class="flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary text-foreground-inverse transition-transform active:scale-95"
		aria-label={isPlaying ? "Pause" : "Play"}
	>
		{#if isPlaying}
			<Pause size={20} fill="currentColor" />
		{:else}
			<Play size={20} fill="currentColor" class="ml-1" />
		{/if}
	</button>

	<div class="flex flex-col">
		<span class="text-xs font-bold uppercase tracking-wider text-accent-primary">En écoute</span>
		<div class="flex items-center gap-2">
			<span class="text-sm font-medium text-foreground-inverse whitespace-nowrap">La Fondation - Accueil de Jour</span>
			{#if isPlaying}
				<div class="flex items-end gap-0.5 h-3">
					<div class="w-0.5 bg-accent-primary animate-bounce h-full"></div>
					<div class="w-0.5 bg-accent-primary animate-bounce [animation-delay:0.2s] h-2"></div>
					<div class="w-0.5 bg-accent-primary animate-bounce [animation-delay:0.4s] h-3"></div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	@keyframes bounce {
		0%, 100% { height: 4px; }
		50% { height: 12px; }
	}
	.animate-bounce {
		animation: bounce 0.6s infinite ease-in-out;
	}
</style>
