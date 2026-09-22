import type { SiteConfig } from '../types/content';
import { getGmailComposeUrl } from '../lib/contact';

const email = 'developmentjack05@gmail.com';

export const site: SiteConfig = {
  name: 'Jackson Londoño',
  role: 'Software Developer · Frontend, UX & Automatización',
  roleFocus: 'Frontend · UX · automatización',
  heroLead:
    'Construyo experiencias digitales claras y mantenibles, combinando frontend, automatización e IA aplicada para convertir necesidades de negocio en productos útiles.',
  tagline:
    'Soy desarrollador de software con experiencia en productos internos y orientados a clientes. Mi fortaleza está en frontend, UX y automatización, con criterio para conectar interfaces, lógica de negocio y datos. Actualmente curso Ingeniería de Sistemas en la CUN, consolidando una base profesional para diseñar soluciones escalables y generar impacto medible.',
  location: 'Bogotá, Colombia',
  employer: 'SL Humanik · Insights & Archetypes',
  email,
  cvPdfPath: '/cv.pdf',
  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/DevJL7',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alexxis4ever07/',
      icon: 'linkedin',
    },
    {
      label: 'Enviar correo',
      href: getGmailComposeUrl(email),
      icon: 'email',
    },
  ],
  seo: {
    title: 'Jackson Londoño — IA Software Developer',
    description:
      'Jackson Londoño, IA Software Developer en Bogotá. Frontend, UX, automatización e IA aplicada; estudiante de Ingeniería de Sistemas.',
    ogImage: '/og-image.png',
  },
};
