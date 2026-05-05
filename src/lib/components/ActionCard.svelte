<script lang="ts">
	import { base } from '$app/paths';
	import type { Component } from 'svelte';

	interface ActionImage {
		src: string;
		alt: string;
	}

	interface Props {
		title: string;
		description: string;
		infoBadge: string;
		icon: Component;
		inverse?: boolean;
		image?: ActionImage | null;
	}

	let { title, description, infoBadge, icon: Icon, inverse = false, image = null }: Props = $props();
</script>

<div
	class="flex flex-1 flex-col overflow-hidden rounded-2xl transition-all hover:scale-[1.02]
    {inverse ? 'bg-surface-inverse text-foreground-inverse' : 'bg-surface-secondary text-foreground-primary'}"
>
	{#if image}
		<div class="relative h-48 w-full overflow-hidden">
			<img
				src={base + image.src}
				alt={image.alt}
				loading="lazy"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl shadow-md
				{inverse ? 'bg-surface-inverse text-foreground-inverse' : 'bg-surface-secondary text-foreground-primary'}"
			>
				<Icon size={20} />
			</div>
		</div>
	{/if}

	<div class="flex flex-1 flex-col gap-6 p-8">
		{#if !image}
			<div class={inverse ? 'text-foreground-inverse' : 'text-foreground-primary'}>
				<Icon size={32} />
			</div>
		{/if}

		<h3 class="text-2xl font-bold">{title}</h3>

		<p class="text-base leading-relaxed {inverse ? 'opacity-70' : 'text-foreground-secondary'}">
			{description}
		</p>

		<div class="mt-auto inline-flex w-fit rounded-lg bg-surface-primary px-3 py-2">
			<span class="font-mono text-sm text-foreground-primary">{infoBadge}</span>
		</div>
	</div>
</div>
