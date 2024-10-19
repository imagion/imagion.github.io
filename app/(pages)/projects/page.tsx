const projects = ['Todo', 'Chat', 3, 4, 5, 6];

export default function Projects() {
  return (
    <div className='grid gap-4 md:grid-cols-3'>
      {projects.map((project) => (
        <div
          key={project}
          className='rounded-lg border p-4 shadow-md transition-shadow duration-300 hover:shadow-lg'>
          <h2 className='text-lg font-semibold'>{project}</h2>
          <p className='text-sm text-gray-500'>Project description here...</p>
        </div>
      ))}
    </div>
  );
}
