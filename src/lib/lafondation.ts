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

function parseDate(d: string): Date {
	const [day, month, year] = d.split('/').map(Number);
	return new Date(year, month - 1, day);
}

export function getUpcomingConcerts(today: Date = new Date()): Concert[] {
	return LA_FONDATION_CONCERTS.filter((c) => parseDate(c.date) >= today).sort(
		(a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime()
	);
}
