<script lang="ts">
	import Mail from 'lucide-svelte/icons/mail';
	import MailOpen from 'lucide-svelte/icons/mail-open';
	import Trash2 from 'lucide-svelte/icons/trash-2';
	import AlertCircle from 'lucide-svelte/icons/alert-circle';
	import type { PageData } from './$types.js';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let openId = $state<number | null>(null);

	function formatDate(d: Date | null): string {
		if (!d) return '—';
		const date = new Date(d);
		return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
	}

	function toggle(id: number) {
		openId = openId === id ? null : id;
	}
</script>

<div class="flex flex-col gap-8">
	<div>
		<h1 class="text-3xl font-bold text-foreground-primary">Messages</h1>
		<p class="text-foreground-secondary mt-2">
			{data.unread} non lu{data.unread > 1 ? 's' : ''} sur {data.rows.length} message{data.rows.length > 1 ? 's' : ''}.
		</p>
	</div>

	{#if data.dbError}
		<div class="flex items-start gap-3 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-orange-800">
			<AlertCircle size={20} />
			<div class="flex flex-col gap-1">
				<span class="font-semibold">Base de données indisponible</span>
				<code class="font-mono text-xs opacity-80">{data.dbError}</code>
			</div>
		</div>
	{/if}

	<div class="flex flex-col gap-3">
		{#each data.rows as msg (msg.id)}
			<div class="rounded-2xl border border-surface-secondary/20 bg-white p-5 transition-all {!msg.isRead ? 'border-l-4 border-l-accent-primary' : ''}">
				<button onclick={() => toggle(msg.id)} class="flex w-full items-start justify-between gap-4 text-left">
					<div class="flex items-start gap-3">
						<div class="mt-1 text-foreground-muted">
							{#if msg.isRead}
								<MailOpen size={18} />
							{:else}
								<Mail size={18} class="text-accent-primary" />
							{/if}
						</div>
						<div class="flex flex-col gap-1">
							<div class="flex items-center gap-3">
								<span class="font-semibold text-foreground-primary">{msg.name}</span>
								<span class="font-mono text-xs text-foreground-muted">{msg.email}</span>
							</div>
							<p class="text-sm text-foreground-secondary line-clamp-1">{msg.content}</p>
						</div>
					</div>
					<span class="font-mono text-xs text-foreground-muted whitespace-nowrap">{formatDate(msg.createdAt)}</span>
				</button>

				{#if openId === msg.id}
					<div class="mt-4 flex flex-col gap-4 border-t border-surface-secondary/20 pt-4">
						<p class="whitespace-pre-wrap text-sm leading-relaxed text-foreground-primary">{msg.content}</p>
						<div class="flex items-center justify-end gap-2">
							<form method="POST" action="?/markRead">
								<input type="hidden" name="id" value={msg.id} />
								<input type="hidden" name="isRead" value={(!msg.isRead).toString()} />
								<button class="flex items-center gap-2 rounded-lg bg-surface-secondary/40 px-3 py-2 text-sm font-semibold text-foreground-primary hover:bg-surface-secondary/60">
									{msg.isRead ? 'Marquer non lu' : 'Marquer lu'}
								</button>
							</form>
							<a href="mailto:{msg.email}" class="flex items-center gap-2 rounded-lg bg-accent-primary px-3 py-2 text-sm font-semibold text-foreground-inverse hover:brightness-110">
								Répondre
							</a>
							<form method="POST" action="?/delete" onsubmit={(e) => !confirm('Supprimer ce message ?') && e.preventDefault()}>
								<input type="hidden" name="id" value={msg.id} />
								<button class="flex items-center gap-2 rounded-lg p-2 text-foreground-secondary hover:bg-red-50 hover:text-red-600" aria-label="Supprimer">
									<Trash2 size={16} />
								</button>
							</form>
						</div>
					</div>
				{/if}
			</div>
		{:else}
			<div class="rounded-2xl border border-dashed border-surface-secondary/40 bg-white/40 p-12 text-center text-foreground-muted">
				{data.dbError ? 'Données indisponibles.' : 'Aucun message reçu pour l\'instant.'}
			</div>
		{/each}
	</div>
</div>
