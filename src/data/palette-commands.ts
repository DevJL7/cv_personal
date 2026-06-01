import type { PaletteCommand } from '../types/content';
import { getGmailComposeUrl } from '../lib/contact';
import { site } from './site';

export const paletteCommands: PaletteCommand[] = [
  {
    id: 'about',
    label: 'Ir a Perfil',
    hint: '#about',
    keywords: 'sobre mi perfil about',
    action: 'navigate',
    target: '#about',
  },
  {
    id: 'experience',
    label: 'Ir a Experiencia',
    hint: '#experience',
    keywords: 'trabajo experiencia work',
    action: 'navigate',
    target: '#experience',
  },
  {
    id: 'projects',
    label: 'Ir a Proyectos',
    hint: '#projects',
    keywords: 'portfolio proyectos',
    action: 'navigate',
    target: '#projects',
  },
  {
    id: 'skills',
    label: 'Ir a Skills',
    hint: '#skills',
    keywords: 'stack habilidades tecnologias',
    action: 'navigate',
    target: '#skills',
  },
  {
    id: 'hero',
    label: 'Volver al inicio',
    hint: 'Home',
    keywords: 'inicio hero top',
    action: 'navigate',
    target: '#hero',
  },
  {
    id: 'terminal',
    label: 'Abrir terminal',
    hint: 'bash',
    keywords: 'consola terminal help whoami',
    action: 'terminal',
  },
  {
    id: 'cv',
    label: 'Descargar CV',
    hint: '.pdf',
    keywords: 'curriculum descargar pdf',
    action: 'link',
    target: site.cvPdfPath,
  },
  {
    id: 'github',
    label: 'Abrir GitHub',
    hint: 'DevJL7',
    keywords: 'github codigo repo',
    action: 'link',
    target: 'https://github.com/DevJL7',
  },
  {
    id: 'email',
    label: 'Contactar por correo',
    hint: 'Gmail',
    keywords: 'email correo contacto gmail escribir',
    action: 'link',
    target: site.email ? getGmailComposeUrl(site.email) : '#',
  },
  {
    id: 'theme',
    label: 'Cambiar tema claro / oscuro',
    hint: 'Theme',
    keywords: 'dark light modo tema',
    action: 'theme',
  },
];
