# CV personal — Jackson Londoño

Portafolio/CV interactivo con **Astro**, **TypeScript** y **Tailwind CSS**.

Producción: **https://cv-portfolio.developmentjack05.workers.dev**  
Repo: [github.com/DevJL7/cv_personal](https://github.com/DevJL7/cv_personal)

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Repo y remoto

```bash
git remote add origin https://github.com/DevJL7/cv_personal.git
# si ya existe origin con otra URL:
# git remote set-url origin https://github.com/DevJL7/cv_personal.git
```

## Deploy en Cloudflare Workers

El sitio usa `@astrojs/cloudflare` y se publica con Wrangler (plan gratis, URL `*.workers.dev`, sin dominio propio).

### Deploy manual (desde tu máquina)

```bash
npm install
npx wrangler login   # solo la primera vez
npm run deploy
```

Tras el deploy, Wrangler muestra la URL activa (ej. `https://cv-portfolio.developmentjack05.workers.dev`).

### Auto-deploy desde GitHub (opcional)

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application**
2. **Import a repository** → GitHub → repo `DevJL7/cv_personal`
3. Configuración:

| Campo | Valor |
|-------|--------|
| Worker name | `cv-portfolio` (debe coincidir con `wrangler.jsonc`) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

4. **Environment variables** (opcional):

| Variable | Valor |
|----------|--------|
| `NODE_VERSION` | `22` |
| `SITE_URL` | `https://cv-portfolio.developmentjack05.workers.dev` |

5. **Save and Deploy** — cada push a `main` vuelve a publicar.

### CI en GitHub

El workflow `.github/workflows/ci.yml` valida que el proyecto compila en cada PR. El deploy lo haces con `npm run deploy` o con Workers Builds en Cloudflare.

## Flujo de trabajo (ramas)

| Rama | Uso |
|------|-----|
| `main` | Producción — merge aquí → `npm run deploy` o auto-deploy |
| `feat/*`, `fix/*`, `content/*` | Cambios vía PR |

```bash
git checkout main && git pull
git checkout -b content/actualizar-cv
# editar src/data/..., npm run build
git commit -m "content: actualizar experiencia"
git push -u origin content/actualizar-cv
# PR en GitHub → merge → deploy
```

## Contenido editable

Datos del CV en `src/data/` (`site.ts`, `experience.ts`, `projects.ts`, `skills.ts`, …).

## Stack

Astro · TypeScript · Tailwind CSS v4 · Cloudflare Workers · Lucide icons
