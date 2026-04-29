<script lang="ts">
	import type { Component } from 'svelte';
	
	interface Props {
		title: string;
		description: string;
		infoBadge: string;
		icon: any;
		inverse?: boolean;
	}

	let { title, description, infoBadge, icon: Icon, inverse = false }: Props = $props();
</script>

<div
	class="flex flex-1 flex-col gap-6 rounded-2xl p-8 transition-all hover:scale-[1.02]
    {inverse ? 'bg-surface-inverse text-foreground-inverse' : 'bg-surface-secondary text-foreground-primary'}"
>
	<div class={inverse ? 'text-foreground-inverse' : 'text-foreground-primary'}>
		<Icon size={32} />
	</div>

	<h3 class="text-2xl font-bold">{title}</h3>

	<p class="text-base leading-relaxed {inverse ? 'opacity-70' : 'text-foreground-secondary'}">
		{description}
	</p>

	<div class="mt-auto inline-flex w-fit rounded-lg bg-surface-primary px-3 py-2">
		<span class="font-mono text-sm text-foreground-primary">{infoBadge}</span>
	</div>
</div>
