export type Membre = {
	name: string;
	role: string;
	description: string;
};

export type Album = {
	title: string;
	releaseDate: string;
	trackCount: number;
	duration: string;
	genre: string;
	label: string;
};

export type StreamingLinks = {
	spotifyAlbum: string;
	appleMusic: string;
	deezer: string;
	deezerArtist: string;
};

export type Concert = {
	date: string;
	title: string;
	venue: string;
	city: string;
	country?: string;
	type?: 'festival' | 'premiere' | 'showcase' | 'residency' | 'other';
};

export type LaFondationSocial = {
	site: string;
	instagram: string;
	youtube: string;
};

export const LA_FONDATION_SOCIAL: LaFondationSocial = {
	site: 'https://lafondationofficiel.fr',
	instagram: 'https://www.instagram.com/lafondationofficiel/',
	youtube: 'https://www.youtube.com/@Lafondation_officiel'
};

export const LA_FONDATION_STREAMING: StreamingLinks = {
	spotifyAlbum: 'https://open.spotify.com/album/29RplI6yltzatsL3RamiYD',
	appleMusic: 'https://music.apple.com/fr/album/accueil-de-jour/1816065560',
	deezer: 'https://www.deezer.com/fr/album/760566601',
	deezerArtist: 'https://www.deezer.com/fr/artist/1000342'
};

export const LA_FONDATION_IDS = {
	spotifyAlbum: '29RplI6yltzatsL3RamiYD',
	spotifyArtist: '5WaWD2mUCzzddZseHESFIt',
	appleAlbum: '1816065560',
	appleAlbumSlug: 'accueil-de-jour',
	deezerAlbum: '760566601'
} as const;

export type FeaturedTrack = {
	title: string;
	feat?: string;
	spotify: string;
	deezer: string;
	apple: { songId: string; slug: string };
};

export const LA_FONDATION_FEATURED_TRACKS: FeaturedTrack[] = [
	{
		title: 'Mentalité lâche rien',
		spotify: '6cS0gUer1PCkAVD9MfxfgP',
		deezer: '3378337131',
		apple: { songId: '1816065563', slug: 'mentalit%C3%A9-lache-rien' }
	},
	{
		title: 'Nouvel espoir',
		feat: 'Petitcopek',
		spotify: '3vwZVhvlwri2zAbPq4NYFH',
		deezer: '3378337181',
		apple: { songId: '1816065570', slug: 'nouvel-espoir-feat-petitcopek' }
	},
	{
		title: 'Du même camp',
		spotify: '1yxLijFLvgWbcTmibgNCXV',
		deezer: '3378337241',
		apple: { songId: '1816065580', slug: 'du-m%C3%AAme-camp' }
	}
];

export const LA_FONDATION_ALBUM: Album = {
	title: 'Accueil de Jour',
	releaseDate: '31 mai 2025',
	trackCount: 14,
	duration: '46 min',
	genre: 'Hip-Hop / Rap',
	label: 'DÉFIS / La Fondation'
};

export const LA_FONDATION_MEMBRES: Membre[] = [
	{
		name: 'Nico',
		role: 'Animateur socio-culturel & Rappeur',
		description: "Animateur au sein du Collectif Partage et Projets, à l'origine du projet musical."
	},
	{
		name: 'Medhimed',
		role: 'Rappeur',
		description: "Bénéficiaire de l'accueil de jour, apporte son vécu et ses textes chargés d'émotion."
	},
	{
		name: 'Sixto',
		role: 'Rappeur',
		description: 'Membre du collectif depuis son expansion, enrichit le groupe de son flow unique.'
	},
	{
		name: 'BHO',
		role: 'Rappeur',
		description: 'Dernier arrivé dans le collectif, complète la formation avec son énergie.'
	}
];

export const LA_FONDATION_CONCERTS: Concert[] = [
	{ date: '19/12/2025', title: 'AUDITION TREMPLIN KICK OFF', venue: 'Des Lendemains qui chantent', city: 'Tulle (19)', type: 'other' },
	{ date: '15/11/2025', title: 'PREMIÈRE PARTIE MEDINE', venue: 'Coopérative de Mai', city: 'Clermont-Ferrand', type: 'premiere' },
	{ date: '21/09/2025', title: 'TDS INVITÉ — Showcase', venue: 'Studio Tour du Sud', city: 'Royat (63)', type: 'showcase' },
	{ date: '13/09/2025', title: 'FESTIVAL HAPPY BOAT', venue: 'Happy Boat', city: 'Sète (34)', type: 'festival' },
	{ date: '29/08/2025', title: 'PREMIÈRE PARTIE DJ DEE NASTY', venue: 'Maison du Peuple', city: 'Clermont-Ferrand', type: 'premiere' },
	{ date: '28/06/2025', title: 'FESTIVAL LES AILES DE JUPITER', venue: 'Le Dancing', city: 'Sète (34)', type: 'festival' },
	{ date: '01/03/2025', title: "1ÈRE PARTIE L'HEXALER", venue: 'Aquilone', city: 'Liège', country: 'Belgique', type: 'premiere' },
	{ date: '27/09/2024', title: "FESTIVAL CLERMONT-FER'RAP", venue: 'Coopérative de Mai', city: 'Clermont-Ferrand', type: 'festival' }
];

export type Track = {
	title: string;
	duration: string;
	type: 'Album' | 'Single';
	year: number;
	feat?: string;
};

export const LA_FONDATION_TRACKS: Track[] = [
	{ title: 'Intro', duration: '01:04', type: 'Album', year: 2025 },
	{ title: 'Mentalité lâche rien', duration: '03:24', type: 'Album', year: 2025 },
	{ title: "En guise d'horizon", duration: '03:54', type: 'Single', year: 2023 },
	{ title: "J'ai vu", duration: '03:27', type: 'Album', year: 2025 },
	{ title: 'Marchons', duration: '02:06', type: 'Album', year: 2025, feat: 'Demi Portion & Petitcopek' },
	{ title: 'Gracia Padre', duration: '04:10', type: 'Album', year: 2025, feat: 'FRACO' },
	{ title: 'Nouvel espoir', duration: '02:43', type: 'Single', year: 2024, feat: 'Petitcopek' },
	{ title: 'Constat', duration: '03:30', type: 'Single', year: 2023 },
	{ title: 'Système D', duration: '03:15', type: 'Single', year: 2024 },
	{ title: 'Musica de la calle', duration: '03:45', type: 'Single', year: 2024 }
];

export type VideoClip = {
	title: string;
	url: string;
	feat?: string;
};

export const LA_FONDATION_CLIPS: VideoClip[] = [
	{ title: 'Les Conquérants', url: 'https://youtu.be/GYvfdD58WKM', feat: "L'Hexaler & Fak" },
	{ title: 'Nouvel Espoir', url: 'https://youtu.be/EPjaq5CqsUo', feat: 'Petitcopek' }
];

export type History = {
	intro: string;
	story: string;
	support: string;
	event: { name: string; date: string; venue: string; lineup: string[] };
};

export const LA_FONDATION_HISTORY: History = {
	intro:
		"Tout va très vite pour La Fondation : seulement deux ans séparent le premier atelier d'écriture initié par Nico au sein d'une structure d'accueil et d'hébergement, et la sortie de l'album « Accueil de Jour ».",
	story:
		"Entre les deux, les membres ont participé à une résidence à Sète avec Demi Portion, organisé le festival Clermont Fer'Rap (avec Demi Portion, L'Hexaler et Furax Barbarossa) et enchaîné une quinzaine de dates en France et en Belgique.",
	support:
		"Le 28 août 2025, Dee Nasty — DJ légendaire et pionnier du Hip-Hop en France — les a invités à partager 45 minutes de scène pour un freestyle d'anthologie après les avoir vus en première partie à Clermont-Ferrand.",
	event: {
		name: "Festival Clermont Fer'Rap",
		date: '27 septembre 2024',
		venue: 'La Coopérative de Mai, Clermont-Ferrand',
		lineup: ['Demi Portion', 'Furax Barbarossa', "L'Hexaler", 'Petitcopek']
	}
};

const LF_IMG = '/images/lafondation';

export const LA_FONDATION_MEMBER_IMAGES: string[] = [
	`${LF_IMG}/membre-portrait-01.jpg`,
	`${LF_IMG}/membre-portrait-02.jpg`,
	`${LF_IMG}/membre-portrait-03.jpg`,
	`${LF_IMG}/membre-portrait-04.jpg`,
	`${LF_IMG}/membre-portrait-05.jpg`
];

export const LA_FONDATION_GROUP_IMAGES: string[] = [
	`${LF_IMG}/concert-groupe-01.jpg`,
	`${LF_IMG}/concert-groupe-02.jpg`,
	`${LF_IMG}/concert-groupe-03.jpg`,
	`${LF_IMG}/concert-groupe-04.jpg`
];

export const LA_FONDATION_STAGE_IMAGES: string[] = [
	`${LF_IMG}/concert-stage-01.jpg`,
	`${LF_IMG}/concert-stage-05.jpg`,
	`${LF_IMG}/concert-stage-08.jpg`,
	`${LF_IMG}/concert-stage-12.jpg`,
	`${LF_IMG}/concert-public-01.jpg`,
	`${LF_IMG}/concert-public-03.jpg`,
	`${LF_IMG}/concert-dj-01.jpg`
];

export const LA_FONDATION_GALLERY: string[] = [
	...LA_FONDATION_GROUP_IMAGES,
	...LA_FONDATION_STAGE_IMAGES
];

function parseDate(d: string): Date {
	const [day, month, year] = d.split('/').map(Number);
	return new Date(year, month - 1, day);
}

export function getUpcomingConcerts(today: Date = new Date()): Concert[] {
	return LA_FONDATION_CONCERTS.filter((c) => parseDate(c.date) >= today).sort(
		(a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime()
	);
}

export function getPastConcerts(today: Date = new Date()): Concert[] {
	return LA_FONDATION_CONCERTS.filter((c) => parseDate(c.date) < today).sort(
		(a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
	);
}
