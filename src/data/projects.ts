import type { ProjectItem } from '../types/content';

export const projects: ProjectItem[] = [
  {
    id: 'proj-humanik',
    title: 'Insights & Archetypes',
    description:
      'Producto digital de SL Humanik en el que participo como IA Software Developer.',
    impact:
      'Contribución en módulos de frontend y full stack, con foco en experiencia de usuario, integraciones y despliegues confiables.',
    technologies: [
      'React',
      'Vite',
      'Blazor',
      'C#',
      '.NET',
      'PERN',
      'Supabase',
      'Cloudinary',
      'UX',
      'IA',
    ],
    filePath: 'src/products/insights-archetypes.tsx',
    featured: true,
  },
  {
    id: 'proj-portfolio',
    title: 'Portafolio personal',
    description:
      'Este sitio: CV interactivo con Astro, TypeScript y terminal integrado.',
    impact:
      'Rápido, accesible y fácil de actualizar — el contenido vive en archivos de datos tipados.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'UX'],
    filePath: 'src/pages/index.astro',
    codeUrl: 'https://github.com/DevJL7',
    featured: true,
  },
  {
    id: 'proj-github',
    title: 'GitHub — DevJL7',
    description: 'Experimentos, aprendizaje y código abierto.',
    impact:
      'Espacio para probar herramientas, documentar avances y mostrar cómo resuelvo problemas técnicos.',
    technologies: ['Git', 'GitHub'],
    filePath: 'github.com/DevJL7/README.md',
    codeUrl: 'https://github.com/DevJL7',
  },
];
