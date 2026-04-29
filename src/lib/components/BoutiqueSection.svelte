<script lang="ts">
	import { SHOP_PROJECTS } from '$lib/shop.js';
	import ProjectShop from './ProjectShop.svelte';
	import ShoppingBag from 'lucide-svelte/icons/shopping-bag';
</script>

<section id="boutique" class="flex w-full flex-col gap-12 px-6 py-20 md:px-12">
	<div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
		<div class="flex flex-col gap-4">
			<div class="inline-flex w-fit items-center gap-2 rounded-full bg-accent-primary/10 px-4 py-2 text-accent-primary">
				<ShoppingBag size={16} />
				<span class="text-sm font-semibold uppercase tracking-wider">Boutique solidaire</span>
			</div>
			<h2 class="text-3xl font-bold text-foreground-primary md:text-4xl">
				Soutenir, c'est aussi acheter.
			</h2>
		</div>
		<p class="text-base leading-relaxed text-foreground-secondary lg:max-w-sm lg:text-right">
			Les créations des projets DÉFIS, sur HelloAsso.
		</p>
	</div>

	<div class="flex flex-col gap-12">
		{#each SHOP_PROJECTS as project (project.slug)}
			<ProjectShop {project} />
		{/each}
	</div>
</section>
