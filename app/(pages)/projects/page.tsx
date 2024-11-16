import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import { Project } from '@/app/types/globals';

export default function Projects() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {projects
        ? projects.map((project: Project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        : null}
    </div>
  );
}
