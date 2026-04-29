import type { Actions, PageServerLoad } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';

type ActionRow = {
	id: number;
	title: string;
	description: string;
	icon: string;
	infoBadge: string | null;
	order: number;
	createdAt: Date | null;
};

async function loadActions(): Promise<{ rows: ActionRow[]; dbError: string | null }> {
	try {
		const { db } = await import('$lib/server/db/index.js');
		const { actions } = await import('$lib/server/db/schema.js');
		const rows = (await db.select().from(actions).orderBy(actions.order)) as ActionRow[];
		return { rows, dbError: null };
	} catch (e) {
		return { rows: [], dbError: e instanceof Error ? e.message : String(e) };
	}
}

export const load: PageServerLoad = async () => {
	return await loadActions();
};

export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const title = String(data.get('title') ?? '').trim();
		const description = String(data.get('description') ?? '').trim();
		const icon = String(data.get('icon') ?? 'heart').trim();
		const infoBadge = String(data.get('infoBadge') ?? '').trim() || null;
		const order = Number(data.get('order') ?? 0);

		if (!title || !description) {
			return fail(400, { error: 'Titre et description requis', title, description });
		}

		try {
			const { db } = await import('$lib/server/db/index.js');
			const { actions: actionsTable } = await import('$lib/server/db/schema.js');
			await db.insert(actionsTable).values({ title, description, icon, infoBadge, order });
		} catch (e) {
			return fail(500, { error: e instanceof Error ? e.message : String(e) });
		}
		throw redirect(303, '/admin/actions');
	},

	update: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('id'));
		const title = String(data.get('title') ?? '').trim();
		const description = String(data.get('description') ?? '').trim();
		const icon = String(data.get('icon') ?? 'heart').trim();
		const infoBadge = String(data.get('infoBadge') ?? '').trim() || null;
		const order = Number(data.get('order') ?? 0);

		if (!id || !title || !description) {
			return fail(400, { error: 'Champs invalides' });
		}

		try {
			const { db } = await import('$lib/server/db/index.js');
			const { actions: actionsTable } = await import('$lib/server/db/schema.js');
			const { eq } = await import('drizzle-orm');
			await db
				.update(actionsTable)
				.set({ title, description, icon, infoBadge, order })
				.where(eq(actionsTable.id, id));
		} catch (e) {
			return fail(500, { error: e instanceof Error ? e.message : String(e) });
		}
		throw redirect(303, '/admin/actions');
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('id'));
		if (!id) return fail(400, { error: 'id manquant' });

		try {
			const { db } = await import('$lib/server/db/index.js');
			const { actions: actionsTable } = await import('$lib/server/db/schema.js');
			const { eq } = await import('drizzle-orm');
			await db.delete(actionsTable).where(eq(actionsTable.id, id));
		} catch (e) {
			return fail(500, { error: e instanceof Error ? e.message : String(e) });
		}
		throw redirect(303, '/admin/actions');
	}
};
