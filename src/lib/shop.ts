import { HELLOASSO } from './config.js';

export type ShopProduct = {
	id: string;
	name: string;
	subtitle?: string;
	priceEuros: number;
	helloAssoUrl: string;
	visual: 'shirt-dark' | 'shirt-light' | 'album-accent' | 'album-dark';
	badge?: string;
};

export type ShopProject = {
	slug: string;
	name: string;
	tagline: string;
	helloAssoBoutiqueUrl: string;
	products: ShopProduct[];
};

export const SHOP_PROJECTS: ShopProject[] = [
	{
		slug: 'la-fondation',
		name: 'La Fondation',
		tagline: 'Albums & vêtements',
		helloAssoBoutiqueUrl: HELLOASSO.boutique,
		products: [
			{
				id: 'tshirt-noir',
				name: 'T-shirt La Fondation',
				subtitle: 'Noir « Classic »',
				priceEuros: 20,
				helloAssoUrl: `${HELLOASSO.boutique}/t-shirt-la-fondation-noir-classic`,
				visual: 'shirt-dark'
			},
			{
				id: 'album-accueil-de-jour',
				name: 'Album « Accueil de Jour »',
				subtitle: 'La Fondation · CD',
				priceEuros: 10,
				helloAssoUrl: `${HELLOASSO.boutique}/album-la-fondation-accueil-de-jour`,
				visual: 'album-accent'
			},
			{
				id: 'tshirt-blanc',
				name: 'T-shirt La Fondation',
				subtitle: 'Blanc « Classic »',
				priceEuros: 20,
				helloAssoUrl: `${HELLOASSO.boutique}/t-shirt-blanc-la-fondation-classic`,
				visual: 'shirt-light'
			},
			{
				id: 'album-hors-pistes',
				name: 'Album « Hors-Pistes »',
				subtitle: 'La Fondation · CD',
				priceEuros: 10,
				helloAssoUrl: `${HELLOASSO.boutique}/projet-la-fondation-hors-pistes`,
				visual: 'album-dark',
				badge: 'Nouveau'
			}
		]
	}
];
