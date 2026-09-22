// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

const site =
  process.env.SITE_URL ?? 'https://cv-portfolio.developmentjack05.workers.dev';

// https://astro.build/config
export default defineConfig({
  site,
  compressHTML: true,
  // Sitio estático: desactiva el aprovisionamiento automático de KV para sesiones.
  session: false,

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // No se usa optimización de imágenes ni sesiones en tiempo de ejecución.
  adapter: cloudflare({ imageService: 'passthrough' }),
});
