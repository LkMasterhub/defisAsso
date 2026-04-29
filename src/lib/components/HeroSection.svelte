<script lang="ts">
	// HeroSection.svelte
</script>

<section class="flex w-full flex-col gap-6 px-6 py-6 md:flex-row md:px-12 items-start">
	<!-- Left Tile: Text and CTA -->
	<div class="flex flex-1 flex-col gap-8 rounded-2xl bg-surface-secondary p-8 md:p-12">
		<div class="inline-flex w-fit rounded-full bg-surface-primary px-4 py-2">
			<span class="text-sm font-medium text-foreground-primary">Clermont-Ferrand</span>
		</div>

		<h1 class="text-4xl font-bold leading-tight text-foreground-primary md:text-5xl lg:text-6xl">
			Diversité, Éducation, Formation, Insertion, Solidarité
		</h1>

		<p class="text-lg leading-relaxed text-foreground-secondary">
			Agir aujourd’hui, c’est permettre à quelqu’un de ne pas rester seul demain. Rejoignez-nous pour créer du lien social et valoriser les talents de chacun.
		</p>

		<div class="flex flex-wrap gap-4">
			<a
				href="#benevole"
				class="rounded-full bg-surface-inverse px-8 py-4 text-base font-semibold text-foreground-inverse transition-all hover:opacity-90"
			>
				Devenir bénévole
			</a>
			<a
				href="#actions"
				class="rounded-full bg-surface-primary px-8 py-4 text-base font-semibold text-foreground-primary transition-all hover:brightness-95"
			>
				Découvrir nos actions
			</a>
		</div>
	</div>

	<!-- Right Tile: Image Placeholder -->
	<div class="relative h-[300px] w-full overflow-hidden rounded-2xl bg-surface-secondary md:h-[500px] md:flex-1">
		<img 
			src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" 
			alt="Volontaires et solidarité" 
			class="h-full w-full object-cover"
		/>
	</div>
</section>
