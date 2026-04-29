<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ActionCard from '$lib/components/ActionCard.svelte';
	import FondationSection from '$lib/components/FondationSection.svelte';
	import BoutiqueSection from '$lib/components/BoutiqueSection.svelte';
	import SupportSection from '$lib/components/SupportSection.svelte';
	import { resolveActionIcon } from '$lib/actionIcons.js';
	import type { PageData } from './$types.js';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Association DÉFIS - Diversité, Éducation, Insertion, Solidarité</title>
	<meta name="description" content="Association engagée pour l'insertion sociale et culturelle à Clermont-Ferrand." />
</svelte:head>

<HeroSection />

<section id="actions" class="flex w-full flex-col gap-12 px-6 py-20 md:px-12">
	<div class="flex flex-col gap-4">
		<h2 class="text-3xl font-bold text-foreground-primary md:text-4xl">Nos Actions</h2>
		<p class="text-lg text-foreground-secondary">
			Découvrez comment nous agissons sur le terrain.
		</p>
	</div>

	<div class="flex flex-col gap-6 lg:flex-row">
		{#each data.actions as action, index (action.id)}
			<ActionCard
				title={action.title}
				description={action.description}
				infoBadge={action.infoBadge ?? ''}
				icon={resolveActionIcon(action.icon)}
				inverse={index === 0}
			/>
		{/each}
	</div>
</section>

<FondationSection />

<BoutiqueSection />

<SupportSection />
