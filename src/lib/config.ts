export const HELLOASSO_BASE =
	'https://www.helloasso.com/associations/defis-diversite-education-formation-insertion-solidarite';

export const HELLOASSO = {
	page: HELLOASSO_BASE,
	donGeneral: `${HELLOASSO_BASE}/formulaires/1`,
	donMaraudes: `${HELLOASSO_BASE}/formulaires/2`,
	boutique: `${HELLOASSO_BASE}/boutiques`
} as const;

export const ADRESSE = {
	rue: '5 rue Jean Giono',
	codePostal: '63000',
	ville: 'Clermont-Ferrand'
} as const;

export const CONTACT = {
	email: 'contact@defis-asso.fr'
} as const;

export const SOCIAL = {
	instagram: 'https://www.instagram.com/defisasso/'
} as const;
