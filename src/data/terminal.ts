import type { TerminalCommand } from '../types/content';

import { site } from './site';

export const terminalWelcome = [
  'Hola — soy el CV interactivo de Jackson.',
  'Escribe un comando y pulsa Enter.',
  'Tip: Ctrl+K abre la paleta de comandos.',
  'Sugerencia: help · whoami · about · work',
];

export const terminalCommands: Record<string, TerminalCommand> = {
  help: {
    command: 'help',
    output: [
      'Comandos disponibles (Enter para ejecutar):',
      '  help     — muestra esta ayuda',
      '  whoami   — perfil profesional',
      '  about    — cómo trabajo y qué me motiva',
      '  skills   — stack principal',
      '  stack    — detalle por ecosistema',
      '  contact  — formas de contacto',
      '  work     — empleo actual',
      '  ls       — lista secciones del CV',
      '  clear    — reinicia la consola',
      '',
      'Atajo: Ctrl+K — paleta de comandos (navegación rápida).',
      'Tip: ↑ ↓ para recorrer comandos anteriores.',
    ],
  },
  whoami: {
    command: 'whoami',
    output:
      'Jackson Londoño · IA Software Developer · frontend-first · UX · SL Humanik',
  },
  about: {
    command: 'about',
    output: [
      'Desarrollador amplio: más frontend, también backend.',
      'Me importan la UX, la facilidad y el diseño.',
      'Autodidacta: retos, automatizar, innovar.',
      'Me entusiasma crecer hacia DevOps.',
      'Empresa: SL Humanik (Insights & Archetypes)',
    ],
  },
  skills: {
    command: 'skills',
    output: [
      'Fuerte:    React, Vite, Blazor, UX, diseño',
      'También:   C#, .NET, PERN, Supabase',
      'Nube:      Cloudinary, Netlify, Render',
      'IA:        ChatGPT, Cursor, seguridad',
      'Exploro:   DevOps, CI/CD, automatización',
    ],
  },
  stack: {
    command: 'stack',
    output: [
      '── Frontend (foco) ──',
      '  React · Vite · Blazor · UX · diseño',
      '',
      '── Backend ──',
      '  C# · .NET · Node · Express · PostgreSQL · Supabase',
      '',
      '── Media & deploy ──',
      '  Cloudinary · Netlify · Render',
      '',
      '── DevOps (aprendiendo) ──',
      '  CI/CD · pipelines · automatización',
    ],
  },
  contact: {
    command: 'contact',
    output: [
      `Email:     ${site.email ?? 'developmentjack05@gmail.com'}`,
      'GitHub:    github.com/DevJL7',
      'Ubicación: Bogotá, Colombia (UTC-5)',
      '',
      'Tip: usa el botón Contactar o Ctrl+K → correo.',
    ],
  },
  work: {
    command: 'work',
    output: [
      'Empresa:   SL Humanik',
      'Producto:  Insights & Archetypes',
      'Rol:       IA Software Developer',
      'Enfoque:   Frontend + UX (también backend)',
      'Interés:   DevOps',
      'Desde:     Sep 2024 (empleado formal)',
    ],
  },
  ls: {
    command: 'ls',
    output: ['hero/', 'experience/', 'projects/', 'skills/', 'terminal/'],
  },
};
