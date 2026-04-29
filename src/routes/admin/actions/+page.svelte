<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Trash2 from 'lucide-svelte/icons/trash-2';
	import AlertCircle from 'lucide-svelte/icons/alert-circle';
	import { ACTION_ICON_NAMES } from '$lib/actionIcons.js';
	import type { PageData, ActionData } from './$types.js';

	interface Props {
		data: PageData;
		form: ActionData;
	}

	let { data, form }: Props = $props();

	let editingId = $state<number | null>(null);
	let creating = $state(false);

	function startEdit(id: number) {
		editingId = id;
		creating = false;
	}
	function cancel() {
		editingId = null;
		creating = false;
	}
</script>

<div class="flex flex-col gap-8">
	<div class="flex items-start justify-between">
		<div>
			<h1 class="text-3xl font-bold text-foreground-primary">Actions</h1>
			<p class="text-foreground-secondary mt-2">Gérer les actions affichées sur la landing page.</p>
		</div>
		<button
			onclick={() => {
				creating = true;
				editingId = null;
			}}
			class="flex items-center gap-2 rounded-xl bg-accent-primary px-5 py-3 text-base font-semibold text-foreground-inverse transition-all hover:brightness-110"
		>
			<Plus size={18} />
			Nouvelle action
		</button>
	</div>

	{#if data.dbError}
		<div class="flex items-start gap-3 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-orange-800">
			<AlertCircle size={20} />
			<div class="flex flex-col gap-1">
				<span class="font-semibold">Base de données indisponible</span>
				<code class="font-mono text-xs opacity-80">{data.dbError}</code>
				<span class="text-sm opacity-80">Vérifiez <code>DATABASE_URL</code> dans le <code>.env</code>.</span>
			</div>
		</div>
	{/if}

	{#if form?.error}
		<div class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{form.error}</div>
	{/if}

	{#if creating}
		<form
			method="POST"
			action="?/create"
			class="flex flex-col gap-4 rounded-3xl border border-surface-secondary/20 bg-white p-8"
		>
			<h2 class="text-xl font-bold text-foreground-primary">Nouvelle action</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<label class="flex flex-col gap-1.5">
					<span class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Titre</span>
					<input name="title" required class="rounded-xl border border-surface-secondary/30 px-4 py-3 text-base focus:border-accent-primary focus:outline-none" />
				</label>
				<label class="flex flex-col gap-1.5">
					<span class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Icône (lucide)</span>
					<select name="icon" class="rounded-xl border border-surface-secondary/30 px-4 py-3 font-mono text-sm focus:border-accent-primary focus:outline-none">
						{#each ACTION_ICON_NAMES as name (name)}
							<option value={name}>{name}</option>
						{/each}
					</select>
				</label>
				<label class="flex flex-col gap-1.5 md:col-span-2">
					<span class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Description</span>
					<textarea name="description" required rows="3" class="rounded-xl border border-surface-secondary/30 px-4 py-3 text-base focus:border-accent-primary focus:outline-none"></textarea>
				</label>
				<label class="flex flex-col gap-1.5">
					<span class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Badge info</span>
					<input name="infoBadge" placeholder="Lun, Mer, Ven (19h-22h30)" class="rounded-xl border border-surface-secondary/30 px-4 py-3 text-base focus:border-accent-primary focus:outline-none" />
				</label>
				<label class="flex flex-col gap-1.5">
					<span class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Ordre</span>
					<input name="order" type="number" value="0" class="rounded-xl border border-surface-secondary/30 px-4 py-3 font-mono text-base focus:border-accent-primary focus:outline-none" />
				</label>
			</div>
			<div class="flex justify-end gap-3">
				<button type="button" onclick={cancel} class="rounded-xl px-5 py-3 text-base font-semibold text-foreground-secondary hover:bg-surface-secondary/30">Annuler</button>
				<button type="submit" class="rounded-xl bg-accent-primary px-5 py-3 text-base font-semibold text-foreground-inverse hover:brightness-110">Créer</button>
			</div>
		</form>
	{/if}

	<div class="rounded-3xl border border-surface-secondary/10 bg-white p-2 shadow-sm">
		<table class="w-full text-left">
			<thead>
				<tr class="border-b border-surface-secondary/20 text-foreground-muted">
					<th class="px-6 py-4 font-mono text-xs uppercase tracking-wider">Ordre</th>
					<th class="px-6 py-4 font-mono text-xs uppercase tracking-wider">Titre</th>
					<th class="px-6 py-4 font-mono text-xs uppercase tracking-wider">Icône</th>
					<th class="px-6 py-4 font-mono text-xs uppercase tracking-wider">Badge</th>
					<th class="px-6 py-4 font-mono text-xs uppercase tracking-wider"></th>
				</tr>
			</thead>
			<tbody class="divide-y divide-surface-secondary/10">
				{#each data.rows as row (row.id)}
					{#if editingId === row.id}
						<tr class="bg-surface-primary/40">
							<td colspan="5" class="p-6">
								<form method="POST" action="?/update" class="flex flex-col gap-4">
									<input type="hidden" name="id" value={row.id} />
									<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
										<label class="flex flex-col gap-1.5">
											<span class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Titre</span>
											<input name="title" required value={row.title} class="rounded-xl border border-surface-secondary/30 px-4 py-3 text-base focus:border-accent-primary focus:outline-none" />
										</label>
										<label class="flex flex-col gap-1.5">
											<span class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Icône</span>
											<select name="icon" class="rounded-xl border border-surface-secondary/30 px-4 py-3 font-mono text-sm focus:border-accent-primary focus:outline-none">
												{#each ACTION_ICON_NAMES as name (name)}
													<option value={name} selected={row.icon === name}>{name}</option>
												{/each}
											</select>
										</label>
										<label class="flex flex-col gap-1.5 md:col-span-2">
											<span class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Description</span>
											<textarea name="description" required rows="3" class="rounded-xl border border-surface-secondary/30 px-4 py-3 text-base focus:border-accent-primary focus:outline-none">{row.description}</textarea>
										</label>
										<label class="flex flex-col gap-1.5">
											<span class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Badge</span>
											<input name="infoBadge" value={row.infoBadge ?? ''} class="rounded-xl border border-surface-secondary/30 px-4 py-3 text-base focus:border-accent-primary focus:outline-none" />
										</label>
										<label class="flex flex-col gap-1.5">
											<span class="font-mono text-xs uppercase tracking-wider text-foreground-muted">Ordre</span>
											<input name="order" type="number" value={row.order} class="rounded-xl border border-surface-secondary/30 px-4 py-3 font-mono text-base focus:border-accent-primary focus:outline-none" />
										</label>
									</div>
									<div class="flex justify-end gap-3">
										<button type="button" onclick={cancel} class="rounded-xl px-5 py-3 text-base font-semibold text-foreground-secondary hover:bg-surface-secondary/30">Annuler</button>
										<button type="submit" class="rounded-xl bg-accent-primary px-5 py-3 text-base font-semibold text-foreground-inverse hover:brightness-110">Enregistrer</button>
									</div>
								</form>
							</td>
						</tr>
					{:else}
						<tr class="hover:bg-surface-primary/30 transition-colors">
							<td class="px-6 py-4 font-mono text-sm text-foreground-muted">#{row.order}</td>
							<td class="px-6 py-4">
								<div class="flex flex-col">
									<span class="font-semibold text-foreground-primary">{row.title}</span>
									<span class="text-sm text-foreground-secondary line-clamp-1">{row.description}</span>
								</div>
							</td>
							<td class="px-6 py-4 font-mono text-xs text-foreground-muted">{row.icon}</td>
							<td class="px-6 py-4 text-sm text-foreground-secondary">{row.infoBadge ?? '—'}</td>
							<td class="px-6 py-4">
								<div class="flex justify-end gap-2">
									<button onclick={() => startEdit(row.id)} class="rounded-lg p-2 text-foreground-secondary hover:bg-surface-secondary/40 hover:text-foreground-primary" aria-label="Modifier">
										<Pencil size={16} />
									</button>
									<form method="POST" action="?/delete" onsubmit={(e) => !confirm('Supprimer cette action ?') && e.preventDefault()}>
										<input type="hidden" name="id" value={row.id} />
										<button type="submit" class="rounded-lg p-2 text-foreground-secondary hover:bg-red-50 hover:text-red-600" aria-label="Supprimer">
											<Trash2 size={16} />
										</button>
									</form>
								</div>
							</td>
						</tr>
					{/if}
				{:else}
					<tr>
						<td colspan="5" class="px-6 py-12 text-center text-foreground-muted">
							{data.dbError ? 'Données indisponibles.' : 'Aucune action — cliquez sur « Nouvelle action » pour commencer.'}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
