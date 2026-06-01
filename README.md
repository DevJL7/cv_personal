# CV personal — Jackson Londoño

Portafolio/CV interactivo con **Astro**, **TypeScript** y **Tailwind CSS**.

Desplegado en **Cloudflare Pages** (conectado a [github.com/DevJL7/cv_personal](https://github.com/DevJL7/cv_personal)).

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

## Deploy en Cloudflare Pages

### 1. Conectar el repo (solo una vez)

1. Entra a [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
2. **Pages** → **Connect to Git** → elige **GitHub** → repo `DevJL7/cv_personal`
3. Configuración del build:

| Campo | Valor |
|-------|--------|
| Production branch | `main` |
| Framework preset | Astro (o None) |
| Build command | `npm run build` |
| Build output directory | `dist` |

4. **Environment variables** (Settings → Environment variables):

| Variable | Production | Preview |
|----------|------------|---------|
| `NODE_VERSION` | `22` | `22` |
| `SITE_URL` | `https://TU-PROYECTO.pages.dev` | `https://TU-PROYECTO.pages.dev` |

Sustituye `TU-PROYECTO` por la URL que te asigne Cloudflare (ej. `cv-personal.pages.dev`).  
Si usas dominio propio, pon esa URL en `SITE_URL` (ej. `https://jackson.dev`).

5. **Save and Deploy**

### 2. Qué pasa en cada push

| Acción | Resultado |
|--------|-----------|
| Push / merge a `main` | Deploy de **producción** |
| Pull Request | **Preview URL** única (pruebas antes de merge) |

Cloudflare hace el build y el deploy; no hace falta GitHub Actions para publicar.

### 3. CI en GitHub (opcional)

El workflow `.github/workflows/ci.yml` valida que el proyecto compila en cada PR. El deploy lo gestiona Cloudflare.

## Flujo de trabajo (ramas)

| Rama | Uso |
|------|-----|
| `main` | Producción — merge aquí → deploy en Cloudflare |
| `feat/*`, `fix/*`, `content/*` | Cambios vía PR + preview URL |

```bash
git checkout main && git pull
git checkout -b content/actualizar-cv
# editar src/data/..., npm run build
git commit -m "content: actualizar experiencia"
git push -u origin content/actualizar-cv
# PR en GitHub → revisar preview de Cloudflare → merge
```

## Contenido editable

Datos del CV en `src/data/` (`site.ts`, `experience.ts`, `projects.ts`, `skills.ts`, …).

## Stack

Astro · TypeScript · Tailwind CSS v4 · Cloudflare Pages · Lucide icons
