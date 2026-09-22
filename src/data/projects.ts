import type { ProjectItem } from '../types/content';

export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Iniciativa de producto digital',
    description:
      'Iniciativa personal enfocada en convertir una idea en una experiencia digital clara, útil y técnicamente sostenible.',
    impact:
      'En etapa de definición y construcción. La publicación llegará tras validar alcance, experiencia y calidad técnica.',
    technologies: ['En desarrollo'],
    filePath: 'proyecto-1/README.md',
  },
  {
    id: 'proj-2',
    title: 'Segunda iniciativa en construcción',
    description:
      'Proyecto personal en el que exploro el problema, la solución técnica y los primeros flujos de usuario.',
    impact:
      'En implementación. Priorizo una base sólida y una propuesta de valor clara antes de abrirlo públicamente.',
    technologies: ['En implementación'],
    filePath: 'proyecto-2/README.md',
  },
];
