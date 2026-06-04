import type { ProjectItem } from '../types/content';

export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Proyecto 1',
    description:
      'Iniciativa personal en la que estoy armando la idea, el alcance y las primeras pantallas.',
    impact:
      'Estado: en desarrollo. Aún no hay demo ni repositorio público — lo estoy construyendo paso a paso.',
    technologies: ['En desarrollo'],
    filePath: 'proyecto-1/README.md',
  },
  {
    id: 'proj-2',
    title: 'Proyecto 2',
    description:
      'Segundo proyecto en paralelo: definición técnica y primeras piezas de implementación.',
    impact:
      'Estado: en implementación. Sin enlaces externos por ahora; priorizo tener una base sólida antes de publicar.',
    technologies: ['En implementación'],
    filePath: 'proyecto-2/README.md',
  },
];
