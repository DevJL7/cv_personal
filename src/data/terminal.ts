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
      'Jackson Londoño · IA Software Developer · frontend · UX · automatización',
  },
  about: {
    command: 'about',
    output: [
      'Desarrollador con foco en frontend, UX y automatización.',
      'Conecto experiencia de usuario, negocio y ejecución técnica.',
      'Curso Ingeniería de Sistemas en la CUN.',
      'Me interesan IA aplicada, CI/CD y mejora continua.',
      'Empresa: SL Humanik (Insights & Archetypes)',
    ],
  },
  skills: {
    command: 'skills',
    output: [
      'Fuerte:    React, Vite, Blazor, UX, diseño',
      'También:   C#, .NET, SQL, PostgreSQL',
      'Automatizo:n8n, GitHub Actions, CI/CD',
      'Datos:     Power BI, SQL, PostgreSQL',
      'IA:        Cursor, Claude, Copilot',
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
      'LinkedIn:  linkedin.com/in/alexxis4ever07',
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
