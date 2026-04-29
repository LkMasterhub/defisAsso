<script lang="ts">
	import { HELLOASSO } from '$lib/config.js';
</script>

<header class="flex w-full items-center justify-between px-6 py-6 md:px-12">
	<div class="text-2xl font-bold text-foreground-primary">DÉFIS</div>

	<nav class="hidden items-center gap-8 md:flex">
		<a href="#association" class="text-base text-foreground-secondary hover:text-foreground-primary transition-colors">
			L'Association
		</a>
		<a href="#actions" class="text-base text-foreground-secondary hover:text-foreground-primary transition-colors">
			Nos Actions
		</a>
		<a href="#soutenir" class="text-base text-foreground-secondary hover:text-foreground-primary transition-colors">
			Soutenir
		</a>
		<a
			href={HELLOASSO.donGeneral}
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-2 rounded-full bg-accent-primary px-6 py-3 text-base font-semibold text-foreground-inverse hover:brightness-110 transition-all"
		>
			Faire un don
		</a>
	</nav>

	<!-- Mobile menu button (placeholder) -->
	<button class="md:hidden text-foreground-primary" aria-label="Menu">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
	</button>
</header>
