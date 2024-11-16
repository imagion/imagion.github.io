import { Project } from '@/app/types/globals';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='rounded-lg border p-4 shadow-md transition-shadow duration-300 hover:shadow-lg'>
      <h2 className='text-lg font-semibold'>{project.name}</h2>
      <p className='text-sm text-gray-500'>{project.description}</p>
      <a
        href={project.demo}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:underline'>
        View Demo
      </a>{' '}
      |{' '}
      <a
        href={project.code}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:underline'>
        GitHub Page
      </a>
    </div>
  );
}
