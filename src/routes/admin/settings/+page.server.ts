import type { PageServerLoad } from './$types.js';
import { HELLOASSO, ADRESSE, CONTACT, SOCIAL } from '$lib/config.js';
import { SHOP_PROJECTS } from '$lib/shop.js';

export const load: PageServerLoad = async () => {
	return {
		helloAsso: HELLOASSO,
		adresse: ADRESSE,
		contact: CONTACT,
		social: SOCIAL,
		shopProjects: SHOP_PROJECTS.map((p) => ({
			slug: p.slug,
			name: p.name,
			productCount: p.products.length
		}))
	};
};
