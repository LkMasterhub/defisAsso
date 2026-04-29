<script lang="ts">
	import { Users, HeartHandshake, Euro, MessageSquare } from 'lucide-svelte';
	
	const stats = [
		{ name: 'Bénévoles inscrits', value: '42', icon: Users, color: 'text-blue-500' },
		{ name: 'Actions actives', value: '8', icon: HeartHandshake, color: 'text-green-500' },
		{ name: 'Messages non lus', value: '5', icon: MessageSquare, color: 'text-orange-500' },
		{ name: 'Dons ce mois', value: '1 250 €', icon: Euro, color: 'text-accent-primary' },
	];
</script>

<div class="flex flex-col gap-8">
	<div>
		<h1 class="text-3xl font-bold text-foreground-primary">Tableau de bord</h1>
		<p class="text-foreground-secondary mt-2">Vue d'ensemble de l'activité de l'association.</p>
	</div>

	<!-- Stats Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each stats as stat}
			<div class="bg-surface-secondary/30 p-8 rounded-3xl border border-surface-secondary/10 flex flex-col gap-4">
				<div class="flex items-center justify-between">
					<div class="p-3 rounded-2xl bg-white shadow-sm {stat.color}">
						<stat.icon size={24} />
					</div>
				</div>
				<div class="flex flex-col">
					<span class="text-4xl font-mono font-bold text-foreground-primary tracking-tight">{stat.value}</span>
					<span class="text-sm font-medium text-foreground-muted mt-1 uppercase tracking-wider">{stat.name}</span>
				</div>
			</div>
		{/each}
	</div>

	<!-- Recent Messages Placeholder -->
	<div class="bg-white rounded-3xl p-8 shadow-sm border border-surface-secondary/10 flex flex-col gap-6">
		<h2 class="text-xl font-bold text-foreground-primary">Derniers messages reçus</h2>
		
		<div class="overflow-x-auto">
			<table class="w-full text-left">
				<thead>
					<tr class="text-foreground-muted border-b border-surface-secondary/20">
						<th class="pb-4 font-semibold text-sm">Expéditeur</th>
						<th class="pb-4 font-semibold text-sm">Objet</th>
						<th class="pb-4 font-semibold text-sm">Date</th>
						<th class="pb-4 font-semibold text-sm">Statut</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-surface-secondary/10">
					<tr class="group hover:bg-surface-primary/50 transition-colors">
						<td class="py-4 font-medium text-foreground-primary text-sm">Jean Dupont</td>
						<td class="py-4 text-foreground-secondary text-sm">Candidature Bénévolat</td>
						<td class="py-4 text-foreground-muted text-sm">Il y a 2 heures</td>
						<td class="py-4">
							<span class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider">Nouveau</span>
						</td>
					</tr>
					<tr class="group hover:bg-surface-primary/50 transition-colors">
						<td class="py-4 font-medium text-foreground-primary text-sm">Marie Curie</td>
						<td class="py-4 text-foreground-secondary text-sm">Question Partenariat</td>
						<td class="py-4 text-foreground-muted text-sm">Hier, 14:20</td>
						<td class="py-4">
							<span class="px-3 py-1 bg-surface-primary text-foreground-muted rounded-full text-xs font-bold uppercase tracking-wider">Lu</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
