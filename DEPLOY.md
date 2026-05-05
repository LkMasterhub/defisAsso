# Déploiement — defis.lafondationofficiel.fr/defis/

## Vue d'ensemble

Le site est livré sous le sous-chemin `/defis` de `defis.lafondationofficiel.fr`.
Le base path est piloté par la variable d'environnement `BASE_PATH`
(`svelte.config.js` la lit au build, vide en dev local).

## Variables d'environnement

À définir au build (et au runtime pour adapter-node) :

```bash
BASE_PATH=/defis
DATABASE_URL=mysql://user:pass@host:3306/dbname   # si DB MySQL utilisée
BETTER_AUTH_SECRET=<générer avec openssl rand -base64 32>
BETTER_AUTH_URL=https://defis.lafondationofficiel.fr/defis
```

## Deux scénarios PlanetHoster

### Scénario A — N0C / HybridCloud (Node.js)

Conserver l'adapter actuel `@sveltejs/adapter-node` et garder l'admin
DB-backed (Drizzle + Better-Auth) fonctionnel.

```bash
BASE_PATH=/defis npm run build
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
   BASE_PATH=/defis npm run build
   # uploader le contenu de build/ dans le sous-dossier /defis du domaine
   ```

Sous ce scénario :
- ✅ Landing, sections Fondation/Boutique/Soutenir/Contact (visuel)
- ❌ CRUD admin actions, login, formulaire contact (POST → DB)
- ➡️ Le `+page.server.ts` de la home utilisera son fallback hardcodé
  (3 actions : Maraudes, Activités, Point Fixe).

## Vérifications avant push

```bash
BASE_PATH=/defis npm run build
BASE_PATH=/defis npm run preview
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
