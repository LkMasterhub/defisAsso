import type { PageServerLoad } from './$types.js';

export type HomeAction = {
	id: number | string;
	title: string;
	description: string;
	icon: string;
	infoBadge: string | null;
	order: number;
};

const FALLBACK_ACTIONS: HomeAction[] = [
	{
		id: 'fallback-maraudes',
		title: 'Maraudes Solidaires',
		description: 'Distribution de nourriture, vêtements, boissons chaudes et présence humaine.',
		icon: 'heart-handshake',
		infoBadge: 'Lun, Mer, Ven, Dim (19h-22h30)',
		order: 0
	},
	{
		id: 'fallback-ateliers',
		title: 'Activités Éducatives',
		description: "Ateliers d'écriture, musique, MAO, théâtre, vidéo, boxe, sport...",
		icon: 'palette',
		infoBadge: 'Pour tous les publics',
		order: 1
	},
	{
		id: 'fallback-pointfixe',
		title: 'Point Fixe du Dimanche',
		description: 'Petit-déjeuner et accueil des personnes isolées le dimanche matin.',
		icon: 'coffee',
		infoBadge: 'Chaque dimanche',
		order: 2
	}
];

export const load: PageServerLoad = async () => {
	try {
		const { db } = await import('$lib/server/db/index.js');
		const { actions } = await import('$lib/server/db/schema.js');
		const rows = await db.select().from(actions).orderBy(actions.order);

		if (rows.length === 0) {
			return { actions: FALLBACK_ACTIONS, source: 'fallback' as const };
		}

		const mapped: HomeAction[] = rows.map((r) => ({
			id: r.id,
			title: r.title,
			description: r.description,
			icon: r.icon,
			infoBadge: r.infoBadge,
			order: r.order
		}));
		return { actions: mapped, source: 'db' as const };
	} catch {
		return { actions: FALLBACK_ACTIONS, source: 'fallback' as const };
	}
};
