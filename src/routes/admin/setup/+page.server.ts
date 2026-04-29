import { auth } from '$lib/server/auth.js';

export const load = async () => {
	try {
		const user = await auth.api.signUpEmail({
			body: {
				email: 'admin@defis-asso.fr',
				password: 'password123',
				name: 'Frédéric Admin'
			}
		});
		return { message: 'Admin créé : ' + user.user.email };
	} catch (e) {
		const msg = e instanceof Error ? e.message : String(e);
		return { message: "L'admin existe peut-être déjà ou erreur : " + msg };
	}
};
