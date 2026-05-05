// Phusion Passenger Node.js entry point — N0C / PlanetHoster.
// Le projet est ESM ("type": "module") donc ce fichier l'est aussi (le
// nom .cjs.js est seulement le suffixe imposé par Passenger sur N0C).
//
// 1. Charge ./.env si présent (KEY=value, parse maison).
// 2. Compose DATABASE_URL à partir de DB_USER/DB_PASSWORD/DB_NAME si
//    DATABASE_URL n'est pas explicitement définie.
// 3. Génère et persiste BETTER_AUTH_SECRET au premier boot.
// 4. Démarre le handler SvelteKit (adapter-node) sur le port Passenger.

import { createServer } from 'node:http';
import { readFileSync, appendFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { randomBytes } from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ENV_PATH = join(__dirname, '.env');

function loadDotenv(path) {
	if (!existsSync(path)) return;
	const raw = readFileSync(path, 'utf8');
	for (const line of raw.split(/\r?\n/)) {
		const t = line.trim();
		if (!t || t.startsWith('#')) continue;
		const eq = t.indexOf('=');
		if (eq === -1) continue;
		const key = t.slice(0, eq).trim();
		let value = t.slice(eq + 1).trim();
		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}
		if (process.env[key] === undefined) process.env[key] = value;
	}
}

loadDotenv(ENV_PATH);

// Compose DATABASE_URL si nécessaire
if (!process.env.DATABASE_URL && process.env.DB_USER && process.env.DB_NAME) {
	const user = encodeURIComponent(process.env.DB_USER);
	const pwd = encodeURIComponent(process.env.DB_PASSWORD ?? '');
	const host = process.env.DB_HOST ?? 'localhost';
	const port = process.env.DB_PORT ?? '3306';
	const name = process.env.DB_NAME;
	process.env.DATABASE_URL = `mysql://${user}:${pwd}@${host}:${port}/${name}`;
}

// Génère et persiste un BETTER_AUTH_SECRET stable au premier boot
if (!process.env.BETTER_AUTH_SECRET) {
	const secret = randomBytes(32).toString('hex');
	process.env.BETTER_AUTH_SECRET = secret;
	try {
		appendFileSync(ENV_PATH, `\nBETTER_AUTH_SECRET=${secret}\n`);
		console.log('[passenger] BETTER_AUTH_SECRET généré et persisté dans .env');
	} catch (err) {
		console.warn('[passenger] impossible de persister BETTER_AUTH_SECRET dans .env:', err.message);
	}
}

import('./handler.js')
	.then(({ handler }) => {
		const port = parseInt(process.env.PORT, 10) || 0;
		const server = createServer(handler);
		server.listen(port, () => {
			const addr = server.address();
			console.log(
				`[passenger] SvelteKit up — port=${typeof addr === 'object' && addr ? addr.port : addr}`
			);
		});
	})
	.catch((err) => {
		console.error('[passenger] startup failed:', err);
		process.exit(1);
	});
