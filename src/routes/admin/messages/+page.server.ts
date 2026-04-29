import type { Actions, PageServerLoad } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';

type MessageRow = {
	id: number;
	name: string;
	email: string;
	content: string;
	isRead: boolean;
	createdAt: Date | null;
};

export const load: PageServerLoad = async () => {
	try {
		const { db } = await import('$lib/server/db/index.js');
		const { messages } = await import('$lib/server/db/schema.js');
		const { desc } = await import('drizzle-orm');
		const rows = (await db.select().from(messages).orderBy(desc(messages.createdAt))) as MessageRow[];
		const unread = rows.filter((r) => !r.isRead).length;
		return { rows, unread, dbError: null as string | null };
	} catch (e) {
		return { rows: [] as MessageRow[], unread: 0, dbError: e instanceof Error ? e.message : String(e) };
	}
};

export const actions: Actions = {
	markRead: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('id'));
		const isRead = data.get('isRead') === 'true';
		if (!id) return fail(400, { error: 'id manquant' });

		try {
			const { db } = await import('$lib/server/db/index.js');
			const { messages } = await import('$lib/server/db/schema.js');
			const { eq } = await import('drizzle-orm');
			await db.update(messages).set({ isRead }).where(eq(messages.id, id));
		} catch (e) {
			return fail(500, { error: e instanceof Error ? e.message : String(e) });
		}
		throw redirect(303, '/admin/messages');
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('id'));
		if (!id) return fail(400, { error: 'id manquant' });

		try {
			const { db } = await import('$lib/server/db/index.js');
			const { messages } = await import('$lib/server/db/schema.js');
			const { eq } = await import('drizzle-orm');
			await db.delete(messages).where(eq(messages.id, id));
		} catch (e) {
			return fail(500, { error: e instanceof Error ? e.message : String(e) });
		}
		throw redirect(303, '/admin/messages');
	}
};
