

import pipewedding from '@/components/assets/images/pipe.jpg';
import metal from '@/components/assets/images/metal.jpg';
import steel from '@/components/assets/images/steel.jpg';
import joins from '@/components/assets/images/joins.jpg';
import { ProjectCard, ProjectCardProps } from './ProjectCard';

const defaultProjects = [
  {
    image: steel,
    title: 'STEEL WELDING',
    category: 'FABRICATION',
  },
  {
    image: metal,
    title: 'METAL WORK',
    category: 'CONSTRUCTION',
  },
  {
    image: pipewedding,
    title: 'PIPE WELDING',
    category: 'INDUSTRIAL',
  },
  {
    image: joins,
    title: 'JOINS THE METAL',
    category: 'SPECIALTY',
  },
];

type Props = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  projects?: ProjectCardProps[];
};

const OurProject = (props: Props) => {
  const projects = props.projects || defaultProjects;
  const sectionTitle = props.sectionTitle || 'RECENT PROJECTS';

  return (
    <section className="relative">
      <div className="bg-[#CE9233] relative overflow-hidden py-16">
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <div className="mb-6 inline-block">
            <span className="bg-opacity-20 border-2 border-white px-4 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-sm">
              Our Closed Projects
            </span>
          </div>

        
          <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            {sectionTitle}
          </h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-white -mt-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
