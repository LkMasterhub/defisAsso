<script lang="ts">
	import type { ShopProject } from '$lib/shop.js';
	import ProductCard from './ProductCard.svelte';
	import ExternalLink from 'lucide-svelte/icons/external-link';

	interface Props {
		project: ShopProject;
	}

	let { project }: Props = $props();
</script>

<div class="flex flex-col gap-5">
	<div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
		<div class="flex flex-col gap-1">
			<span class="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-muted">
				Projet · {project.name}
			</span>
			<h3 class="text-xl font-semibold text-foreground-primary md:text-2xl">{project.tagline}</h3>
		</div>
		<a
			href={project.helloAssoBoutiqueUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-2 rounded-full bg-surface-secondary px-4 py-2 text-sm font-semibold text-foreground-primary transition-all hover:brightness-95"
		>
			Voir tout sur HelloAsso
			<ExternalLink size={12} />
		</a>
	</div>

	<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
		{#each project.products as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</div>
