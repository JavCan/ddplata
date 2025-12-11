import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import pedirUnDeseo from '../assets/pedir_un_deseo.JPG';
import servilletero from '../assets/servilletero.jpg';
import libelula from '../assets/libelula.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Pedir Un Deseo',
    category: 'Producto',
    year: '2025',
    image: pedirUnDeseo,
  },
  {
    id: 2,
    title: 'Amanecer',
    category: 'Producto',
    year: '2024',
    image: servilletero,
  },
  {
    id: 3,
    title: 'Seres Mutantes',
    category: 'Producto',
    year: '2023',
    image: libelula,
  }
];

export function Projects() {
  return (
    <section id="proyectos" className="px-6 py-16">
      <div className="max-w-lg mx-auto w-full text-left">
        <h2 className="text-neutral-900 mb-8">Proyectos</h2>
        <div className="space-y-10">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="group block cursor-pointer">
              <div className="relative aspect-auto bg-neutral-200 overflow-hidden mb-4">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-neutral-900">{project.title}</h3>
                <div className="flex items-center gap-3 text-sm text-neutral-500">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
