/**
 * Catalogue des photos DÉFIS (terrain, action sociale).
 * Source : `static/images/defis/`. Chemins relatifs au site (préfixer
 * avec `base` de `$app/paths` côté composant pour respecter le BASE_PATH).
 */

const DIR = '/images/defis';

export type DefisPhoto = {
	src: string;
	alt: string;
	tags: ReadonlyArray<'maraude' | 'accueil' | 'identite'>;
	width: number;
	height: number;
};

export const DEFIS_PHOTOS = {
	maraudeEquipe01: {
		src: `${DIR}/maraude-equipe-01.jpg`,
		alt: "Équipe DÉFIS en gilets jaunes lors d'une maraude nocturne",
		tags: ['maraude'],
		width: 1200,
		height: 1600
	},
	maraudeRencontre01: {
		src: `${DIR}/maraude-rencontre-01.jpg`,
		alt: 'Bénévoles DÉFIS échangeant avec une personne accueillie en rue',
		tags: ['maraude'],
		width: 1200,
		height: 1600
	},
	maraudeDistribution01: {
		src: `${DIR}/maraude-distribution-01.jpg`,
		alt: 'Distribution lors d\'une maraude DÉFIS au crépuscule',
		tags: ['maraude'],
		width: 1200,
		height: 1600
	},
	giletDefisDos: {
		src: `${DIR}/gilet-defis-dos.jpg`,
		alt: 'Gilet jaune « MARAUDE DEFIS » avec logo de l\'association, vu de dos',
		tags: ['identite', 'maraude'],
		width: 1047,
		height: 1600
	},
	accueilPointfixeNb: {
		src: `${DIR}/accueil-pointfixe-nb.jpg`,
		alt: "Échange au Point Fixe de DÉFIS, photo en noir et blanc",
		tags: ['accueil'],
		width: 1600,
		height: 1200
	}
} as const satisfies Record<string, DefisPhoto>;

export const DEFIS_MARAUDE = [
	DEFIS_PHOTOS.maraudeEquipe01,
	DEFIS_PHOTOS.maraudeRencontre01,
	DEFIS_PHOTOS.maraudeDistribution01
] as const;

export const DEFIS_GALLERY = [
	DEFIS_PHOTOS.maraudeEquipe01,
	DEFIS_PHOTOS.maraudeRencontre01,
	DEFIS_PHOTOS.maraudeDistribution01,
	DEFIS_PHOTOS.giletDefisDos,
	DEFIS_PHOTOS.accueilPointfixeNb
] as const;

/**
 * Mapping icône d'action → photo DÉFIS associée. Renvoie `null` si aucune
 * photo dédiée n'existe pour cette icône (cas par défaut : on garde
 * l'icône seule comme visuel sur l'ActionCard).
 */
export function getDefisPhotoForIcon(icon: string | null | undefined): DefisPhoto | null {
	switch (icon) {
		case 'heart-handshake':
		case 'hand':
			return DEFIS_PHOTOS.maraudeEquipe01;
		case 'coffee':
		case 'sun':
			return DEFIS_PHOTOS.accueilPointfixeNb;
		default:
			return null;
	}
}
