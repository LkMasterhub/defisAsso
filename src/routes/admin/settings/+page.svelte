<script lang="ts">
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import Heart from 'lucide-svelte/icons/heart';
	import MapPin from 'lucide-svelte/icons/map-pin';
	import AtSign from 'lucide-svelte/icons/at-sign';
	import ShoppingBag from 'lucide-svelte/icons/shopping-bag';
	import Lock from 'lucide-svelte/icons/lock';
	import type { PageData } from './$types.js';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<div class="flex flex-col gap-8">
	<div>
		<h1 class="text-3xl font-bold text-foreground-primary">Paramètres</h1>
		<p class="text-foreground-secondary mt-2">Configuration de l'association — modifiable dans <code class="font-mono text-xs">src/lib/config.ts</code>.</p>
	</div>

	<section class="flex flex-col gap-4 rounded-3xl border border-surface-secondary/10 bg-white p-8 shadow-sm">
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary">
				<Heart size={20} />
			</div>
			<h2 class="text-xl font-bold text-foreground-primary">HelloAsso</h2>
		</div>
		<dl class="grid grid-cols-1 gap-3 md:grid-cols-2">
			<div class="flex flex-col gap-1 rounded-xl bg-surface-primary/40 p-4">
				<dt class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Page principale</dt>
				<dd><a href={data.helloAsso.page} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 break-all text-sm text-accent-primary hover:underline">{data.helloAsso.page}<ExternalLink size={12} /></a></dd>
			</div>
			<div class="flex flex-col gap-1 rounded-xl bg-surface-primary/40 p-4">
				<dt class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Don général</dt>
				<dd><a href={data.helloAsso.donGeneral} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 break-all text-sm text-accent-primary hover:underline">{data.helloAsso.donGeneral}<ExternalLink size={12} /></a></dd>
			</div>
			<div class="flex flex-col gap-1 rounded-xl bg-surface-primary/40 p-4">
				<dt class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Maraudes</dt>
				<dd><a href={data.helloAsso.donMaraudes} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 break-all text-sm text-accent-primary hover:underline">{data.helloAsso.donMaraudes}<ExternalLink size={12} /></a></dd>
			</div>
			<div class="flex flex-col gap-1 rounded-xl bg-surface-primary/40 p-4">
				<dt class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Boutique</dt>
				<dd><a href={data.helloAsso.boutique} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 break-all text-sm text-accent-primary hover:underline">{data.helloAsso.boutique}<ExternalLink size={12} /></a></dd>
			</div>
		</dl>
	</section>

	<section class="flex flex-col gap-4 rounded-3xl border border-surface-secondary/10 bg-white p-8 shadow-sm">
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary">
				<MapPin size={20} />
			</div>
			<h2 class="text-xl font-bold text-foreground-primary">Adresse & Contact</h2>
		</div>
		<dl class="grid grid-cols-1 gap-3 md:grid-cols-2">
			<div class="flex flex-col gap-1 rounded-xl bg-surface-primary/40 p-4">
				<dt class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Adresse</dt>
				<dd class="text-base text-foreground-primary">{data.adresse.rue}<br />{data.adresse.codePostal} {data.adresse.ville}</dd>
			</div>
			<div class="flex flex-col gap-1 rounded-xl bg-surface-primary/40 p-4">
				<dt class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Email</dt>
				<dd class="flex items-center gap-2 text-base text-foreground-primary">
					<AtSign size={14} />
					<a href="mailto:{data.contact.email}" class="hover:text-accent-primary">{data.contact.email}</a>
				</dd>
			</div>
			<div class="flex flex-col gap-1 rounded-xl bg-surface-primary/40 p-4 md:col-span-2">
				<dt class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Réseaux sociaux</dt>
				<dd>
					<a href={data.social.instagram} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-base text-accent-primary hover:underline">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
							<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
						</svg>
						{data.social.instagram}
						<ExternalLink size={12} />
					</a>
				</dd>
			</div>
		</dl>
	</section>

	<section class="flex flex-col gap-4 rounded-3xl border border-surface-secondary/10 bg-white p-8 shadow-sm">
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary">
				<ShoppingBag size={20} />
			</div>
			<h2 class="text-xl font-bold text-foreground-primary">Projets boutique</h2>
		</div>
		<div class="flex flex-col gap-2">
			{#each data.shopProjects as proj (proj.slug)}
				<div class="flex items-center justify-between rounded-xl bg-surface-primary/40 p-4">
					<div class="flex flex-col">
						<span class="font-semibold text-foreground-primary">{proj.name}</span>
						<span class="font-mono text-xs text-foreground-muted">{proj.slug}</span>
					</div>
					<span class="font-mono text-sm text-foreground-secondary">{proj.productCount} produit{proj.productCount > 1 ? 's' : ''}</span>
				</div>
			{/each}
		</div>
		<p class="text-sm text-foreground-muted">Pour ajouter un projet, éditer <code class="font-mono text-xs">src/lib/shop.ts</code>.</p>
	</section>

	<section class="flex flex-col gap-4 rounded-3xl border border-surface-secondary/10 bg-surface-primary/40 p-8">
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-inverse text-foreground-inverse">
				<Lock size={20} />
			</div>
			<h2 class="text-xl font-bold text-foreground-primary">Compte administrateur</h2>
		</div>
		<p class="text-sm text-foreground-secondary">Initialiser ou réinitialiser le compte admin par défaut :</p>
		<a href="/admin/setup" class="w-fit rounded-xl bg-surface-inverse px-5 py-3 text-base font-semibold text-foreground-inverse hover:brightness-110">
			Aller à la page d'initialisation
		</a>
	</section>
</div>
