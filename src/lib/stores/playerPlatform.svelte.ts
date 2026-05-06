import { browser } from '$app/environment';

export type Platform = 'spotify' | 'deezer' | 'apple';

const STORAGE_KEY = 'defis.player.platform';

function detectDefault(): Platform {
	if (!browser) return 'spotify';
	const ua = navigator.userAgent.toLowerCase();
	const isApple = /iphone|ipad|ipod|macintosh/.test(ua) && /safari/.test(ua) && !/chrome|firefox/.test(ua);
	return isApple ? 'apple' : 'spotify';
}

function load(): Platform {
	if (!browser) return 'spotify';
	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved === 'spotify' || saved === 'deezer' || saved === 'apple') return saved;
	return detectDefault();
}

function createPlatformStore() {
	let value = $state<Platform>(load());

	return {
		get value() {
			return value;
		},
		set(next: Platform) {
			value = next;
			if (browser) localStorage.setItem(STORAGE_KEY, next);
		}
	};
}

export const playerPlatform = createPlatformStore();
