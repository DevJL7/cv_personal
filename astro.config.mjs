// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

const site =
  process.env.SITE_URL ?? 'https://cv-personal.pages.dev';

// https://astro.build/config
export default defineConfig({
  site,
  compressHTML: true,

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

  adapter: cloudflare(),
});