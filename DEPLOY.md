# Déploiement — defis.lafondationofficiel.fr

## Vue d'ensemble

Le site est servi à la racine du sous-domaine `defis.lafondationofficiel.fr`.
Côté serveur N0C, l'application est dans le dossier `~/defis/` (filesystem
path uniquement — pas un sous-chemin URL). Le base path SvelteKit est donc
**vide** (`BASE_PATH=` au build), piloté par `svelte.config.js`.

## Variables d'environnement

À définir côté serveur (via `~/defis/.env`) :

```bash
DB_USER=…
DB_PASSWORD=…
DB_NAME=…
# DB_HOST=localhost     (défaut)
# DB_PORT=3306          (défaut)
# BETTER_AUTH_SECRET    (auto-généré et persisté par app.cjs.js au 1er boot)
```

`DATABASE_URL` est composée automatiquement par `app.cjs.js` à partir des
`DB_*`. Côté `.htaccess` (déjà configuré) :

```apache
SetEnv ORIGIN https://defis.lafondationofficiel.fr
SetEnv NODE_ENV production
```

## Coordonnées serveur (PlanetHoster N0C)

```
Hôte SSH  : node179-eu.n0c.com (185.221.182.146)
Port SSH  : 5022
Domaine   : defis.lafondationofficiel.fr (racine, pas de sous-chemin)
App root  : /home/khvkwydh/defis
Clé SSH   : ~/.ssh/defis (publique : ~/.ssh/defis.pub)
```

Entrée à ajouter dans `~/.ssh/config` :

```sshconfig
Host planethoster-defis
  HostName node179-eu.n0c.com
  Port 5022
  User <ton-compte-n0c>
  IdentityFile ~/.ssh/defis
  IdentitiesOnly yes
```

Puis tester : `ssh planethoster-defis`.

Avant la première connexion, copier la clé publique dans le panel N0C
(SSH Access → Manage Authorized Keys → Coller le contenu de `~/.ssh/defis.pub`).

## Deux scénarios PlanetHoster

### Scénario A — N0C / HybridCloud (Node.js) ← **retenu pour cette démo**

Conserver l'adapter actuel `@sveltejs/adapter-node` et garder l'admin
DB-backed (Drizzle + Better-Auth) fonctionnel.

```bash
BASE_PATH= npm run build
node build/index.js   # le serveur écoute sur PORT (défaut 3000)
```

Configurer dans le panel N0C :
- Type d'application : Node.js (≥ 20)
- Point d'entrée : `build/index.js`
- Variables d'env : `BASE_PATH`, `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `PORT` (auto)
- Reverse proxy : `defis.lafondationofficiel.fr/defis/*` → app Node

Initialiser le compte admin une fois en prod via `/admin/setup`
(la route est rendue publique tant qu'aucun admin n'existe).

### Scénario B — hébergement mutualisé (statique uniquement)

Bascule sur `@sveltejs/adapter-static` :

1. `npm i -D @sveltejs/adapter-static`
2. Dans `svelte.config.js`, remplacer l'import par `adapter-static`
   et configurer `pages: 'build', assets: 'build', fallback: '404.html'`.
3. Déclarer `export const prerender = true;` dans `src/routes/+layout.ts`.
4. Pour les routes admin (form actions, DB) : exclure du prerender ou
   les supprimer du build de démo — elles ne fonctionnent pas en statique.
5. Build et upload :
   ```bash
   BASE_PATH= npm run build
   # uploader le contenu de build/ dans le sous-dossier /defis du domaine
   ```

Sous ce scénario :
- ✅ Landing, sections Fondation/Boutique/Soutenir/Contact (visuel)
- ❌ CRUD admin actions, login, formulaire contact (POST → DB)
- ➡️ Le `+page.server.ts` de la home utilisera son fallback hardcodé
  (3 actions : Maraudes, Activités, Point Fixe).

## Vérifications avant push

```bash
BASE_PATH= npm run build
BASE_PATH= npm run preview
# ouvrir http://localhost:4173/defis/ et vérifier :
# - images chargées (membres, galerie, favicon)
# - liens header/footer pointent vers /defis/...
# - lecteur Spotify/Deezer/Apple s'affiche
```

## Limites connues

- Les images dans `static/images/lafondation/` font ~26 Mo non optimisé.
  À compresser (target ≤ 200 KB par photo) avant prod sérieuse.
- `static/images/defis/` contient des photos WhatsApp brutes — à
  restructurer/renommer/retoucher avant câblage côté code.
