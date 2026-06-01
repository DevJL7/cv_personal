import type { SiteConfig } from '../types/content';

export const site: SiteConfig = {
  name: 'Jackson Londoño',
  role: 'IA Software Developer',
  roleFocus: 'Frontend · UX · producto digital',
  heroLead:
    'Diseño y desarrollo interfaces que se sienten claras, rápidas y fáciles de usar — con código mantenible detrás.',
  tagline:
    'Soy desarrollador con perfil amplio: fuerte en frontend y experiencia de usuario, cómodo en backend (.NET, Blazor, PERN) y en constante aprendizaje hacia DevOps. En SL Humanik trabajo en Insights & Archetypes; uso IA y Cursor para entregar con más calidad y velocidad.',
  location: 'Bogotá, Colombia',
  employer: 'SL Humanik · Insights & Archetypes',
  cvPdfPath: '/cv.pdf',
  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/DevJL7',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alexxis4ever',
      icon: 'linkedin',
    },
  ],
  seo: {
    title: 'Jackson Londoño — IA Software Developer',
    description:
      'Portafolio de Jackson Londoño: IA Software Developer, frontend y UX. .NET, React, PERN, Supabase. Bogotá, Colombia.',
    ogImage: '/og-image.png',
  },
};
