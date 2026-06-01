<div align="center">

# 👨‍💻 Jackson Londoño — CV & Portafolio

**IA Software Developer** · Frontend · UX · Producto digital

[![Live Demo](https://img.shields.io/badge/🌐_Demo-en_vivo-6366f1?style=for-the-badge)](https://cv-portfolio.developmentjack05.workers.dev)
[![GitHub](https://img.shields.io/badge/GitHub-DevJL7-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DevJL7)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexxis4ever)

Portafolio/CV interactivo construido con **Astro**, **TypeScript** y **Tailwind CSS**.  
Diseño tipo IDE, terminal integrada, modo oscuro y despliegue en el edge.

[Ver sitio en vivo →](https://cv-portfolio.developmentjack05.workers.dev) · [Descargar CV (PDF)](https://cv-portfolio.developmentjack05.workers.dev/cv.pdf)

</div>

---

## 📋 Tabla de contenidos

- [Para reclutadores](#-para-reclutadores)
- [Para desarrolladores](#-para-desarrolladores)
- [Características](#-características)
- [Stack tecnológico](#-stack-tecnológico)
- [Inicio rápido](#-inicio-rápido)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Personalizar contenido](#-personalizar-contenido)
- [Scripts disponibles](#-scripts-disponibles)
- [Despliegue](#-despliegue)
- [CI / Calidad](#-ci--calidad)

---

## 👔 Para reclutadores

| | |
|---|---|
| 🌍 **Ubicación** | Bogotá, Colombia |
| 💼 **Rol actual** | IA Software Developer @ SL Humanik |
| 🎯 **Enfoque** | Frontend, UX y producto digital |
| 🛠️ **Stack principal** | React, TypeScript, Astro, .NET, PERN, Supabase |
| 📄 **CV descargable** | Disponible en el sitio (`/cv.pdf`) |

**Qué encontrarás en el sitio:**

- Perfil profesional, experiencia y proyectos destacados
- Terminal interactiva con comandos (`help`, `skills`, `experience`…)
- Paleta de comandos (`Ctrl+K`) para navegar rápido
- Modo claro/oscuro y animaciones sutiles
- Sitio rápido, accesible y optimizado para SEO

> 💡 **Tip:** Abre el sitio y prueba la terminal del hero o pulsa `Ctrl+K` para explorar.

---

## 🧑‍💻 Para desarrolladores

Este repo es un **sitio estático** generado con Astro 6 y servido desde **Cloudflare Workers** (plan gratuito, sin dominio propio requerido).

**Decisiones técnicas destacadas:**

- 📦 Contenido desacoplado en `src/data/` — sin CMS, fácil de mantener
- 🎨 Tailwind CSS v4 + tipografías variable (Inter, Geist Mono)
- 🔒 Cabeceras de seguridad HTTP en `public/_headers`
- 🗺️ Sitemap y meta tags configurables vía `SITE_URL`
- ⚡ Build estático + adapter Cloudflare para edge delivery

**Requisitos:** Node.js **22+** (ver `.node-version`)

---

## ✨ Características

| Feature | Descripción |
|---------|-------------|
| 🖥️ **UI estilo IDE** | Grid decorativo, status bar y cursor de desarrollador |
| ⌨️ **Terminal interactiva** | Comandos simulados con respuestas del CV |
| 🔍 **Command palette** | Navegación rápida con atajos de teclado |
| 🌓 **Tema claro/oscuro** | Persistencia en `localStorage` |
| 📱 **Responsive** | Mobile-first, tipografía fluida |
| ♿ **Accesibilidad** | Semántica HTML, ARIA y contraste cuidado |
| 🚀 **Performance** | HTML comprimido, CSS minificado, fuentes self-hosted |
| 🔐 **Security headers** | CSP, X-Frame-Options, Referrer-Policy y más |

---

## 🛠 Stack tecnológico

![Astro](https://img.shields.io/badge/Astro-6.4-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?logo=tailwindcss&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

| Capa | Tecnologías |
|------|-------------|
| **Framework** | [Astro](https://astro.build) 6, [@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) |
| **Estilos** | Tailwind CSS v4, tailwindcss-animate |
| **Tipografías** | Inter, Geist Mono (@fontsource-variable) |
| **Iconos** | [Lucide](https://lucide.dev) (lucide-astro) |
| **SEO** | @astrojs/sitemap, meta Open Graph |
| **Deploy** | Wrangler 4, Cloudflare Workers (assets estáticos) |
| **CI** | GitHub Actions |

---

## 🚀 Inicio rápido

```bash
# 1. Clonar e instalar
git clone https://github.com/DevJL7/cv_personal.git
cd cv_personal
npm install

# 2. Desarrollo local
npm run dev        # → http://localhost:4321

# 3. Build de producción
npm run build

# 4. Preview local (simula Cloudflare)
npm run preview
```

---

## 📁 Estructura del proyecto

```
cv_personal/
├── public/                 # Assets estáticos (_headers, favicon, cv.pdf)
├── src/
│   ├── components/         # UI: Hero, Experience, Terminal, Layout…
│   │   ├── motion/         # Animaciones de entrada
│   │   └── ui/             # Badge, ThemeToggle, SectionHeader
│   ├── data/               # 📝 Contenido del CV (editar aquí)
│   │   ├── site.ts         # Nombre, rol, redes, SEO
│   │   ├── about.ts        # Perfil
│   │   ├── experience.ts   # Experiencia laboral
│   │   ├── projects.ts     # Proyectos
│   │   ├── skills.ts       # Habilidades
│   │   ├── terminal.ts     # Comandos de la terminal
│   │   └── palette-commands.ts
│   ├── lib/                # Lógica cliente (theme, terminal, scroll…)
│   ├── pages/              # Rutas (index, robots.txt)
│   ├── styles/             # global.css
│   └── types/              # Tipos TypeScript del contenido
├── astro.config.mjs
├── wrangler.jsonc          # Config de despliegue Cloudflare
└── package.json
```

---

## 📝 Personalizar contenido

Todo el contenido del CV vive en **`src/data/`**. No hace falta tocar componentes para actualizar texto.

| Archivo | Qué editar |
|---------|------------|
| `site.ts` | Nombre, rol, ubicación, redes sociales, SEO |
| `about.ts` | Texto del perfil |
| `experience.ts` | Empresas, cargos, logros |
| `projects.ts` | Proyectos y tecnologías |
| `skills.ts` | Categorías de habilidades |
| `terminal.ts` | Respuestas de la terminal interactiva |
| `palette-commands.ts` | Acciones del command palette |

Después de editar:

```bash
npm run dev      # revisar en local
npm run build    # validar que compila
```

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Build + preview con Wrangler (entorno Cloudflare) |
| `npm run deploy` | Build + despliegue a producción |
| `npm run generate-types` | Genera tipos de Wrangler |

---

## ☁️ Despliegue

El sitio se publica en **Cloudflare Workers** con el plan gratuito. La URL pública usa el subdominio `*.workers.dev` — no se requiere dominio propio.

### Deploy manual

```bash
npm install
npx wrangler login   # solo la primera vez
npm run deploy
```

Wrangler mostrará la URL de producción al finalizar.

### Variable de entorno (opcional)

| Variable | Uso |
|----------|-----|
| `SITE_URL` | URL canónica para sitemap y meta tags (ej. `https://tu-proyecto.workers.dev`) |

Si no se define, se usa el valor por defecto en `astro.config.mjs`.

### Auto-deploy desde GitHub (opcional)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create application**
2. **Import a repository** → selecciona este repo
3. Configura:

| Campo | Valor |
|-------|--------|
| Worker name | `cv-portfolio` (debe coincidir con `wrangler.jsonc`) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| `NODE_VERSION` | `22` |

---

## ✅ CI / Calidad

El workflow [`.github/workflows/ci.yml`](.github/workflows/ci.yml) ejecuta `npm ci` + `npm run build` en cada push y pull request a `main`, garantizando que el proyecto compila antes de merge.

---

<div align="center">

**Jackson Londoño** · Bogotá, Colombia

[🌐 Sitio](https://cv-portfolio.developmentjack05.workers.dev) · [GitHub](https://github.com/DevJL7) · [LinkedIn](https://www.linkedin.com/in/alexxis4ever)

Hecho con Astro · TypeScript · Tailwind · Cloudflare Workers

</div>
