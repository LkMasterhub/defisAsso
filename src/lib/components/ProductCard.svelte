<script lang="ts">
	import type { ShopProduct } from '$lib/shop.js';
	import Shirt from 'lucide-svelte/icons/shirt';
	import Disc3 from 'lucide-svelte/icons/disc-3';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';

	interface Props {
		product: ShopProduct;
	}

	let { product }: Props = $props();

	const visualConfig = {
		'shirt-dark': { bg: 'bg-surface-inverse', icon: Shirt, iconClass: 'text-accent-primary' },
		'shirt-light': { bg: 'bg-surface-primary', icon: Shirt, iconClass: 'text-foreground-inverse' },
		'album-accent': { bg: 'bg-accent-primary', icon: Disc3, iconClass: 'text-foreground-inverse' },
		'album-dark': { bg: 'bg-surface-inverse', icon: Disc3, iconClass: 'text-accent-primary' }
	} as const;

	let config = $derived(visualConfig[product.visual as keyof typeof visualConfig]);
	let isDark = $derived(product.visual === 'album-dark');
	let TileIcon = $derived(config.icon);
</script>

<a
	href={product.helloAssoUrl}
	target="_blank"
	rel="noopener noreferrer"
	class="group flex flex-col gap-4 rounded-2xl p-4 transition-all hover:scale-[1.02] {isDark
		? 'bg-surface-inverse text-foreground-inverse'
		: 'bg-surface-secondary text-foreground-primary'}"
>
	<div class="relative flex aspect-[4/3] items-center justify-center rounded-xl {config.bg}">
		<TileIcon size={56} class={config.iconClass} />
		{#if product.badge}
			<span class="absolute right-3 top-3 rounded-full bg-accent-primary px-3 py-1 font-mono text-xs font-bold uppercase text-foreground-inverse">
				{product.badge}
			</span>
		{/if}
	</div>

	<div class="flex flex-col gap-1">
		<h4 class="text-sm font-semibold leading-tight">{product.name}</h4>
		{#if product.subtitle}
			<p class="text-xs opacity-60">{product.subtitle}</p>
		{/if}
	</div>

	<div class="mt-auto flex items-center justify-between">
		<span class="font-mono text-sm font-bold text-accent-primary">{product.priceEuros} €</span>
		<span class="flex items-center gap-1 font-mono text-xs font-semibold text-accent-primary opacity-70 group-hover:opacity-100">
			Acheter
			<ArrowUpRight size={12} />
		</span>
	</div>
</a>
