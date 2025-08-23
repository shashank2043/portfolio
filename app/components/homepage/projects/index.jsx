import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-0 z-50 bg-[#0d1224] py-4">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projectsData.slice(0, 9).map((project, index) => (
            <div
              key={index}
              className="w-full"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] hover:shadow-[0_0_40px_0_rgba(0,0,0,0.4)]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
          
          {/* Shadow Project Card for odd number of projects */}
          {projectsData.length % 2 === 1 && (
            <div className="w-full">
              <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full h-full min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#16f2b3] text-6xl mb-4 animate-pulse">🚀</div>
                  <h3 className="text-[#16f2b3] text-xl font-semibold mb-2">Building...</h3>
                  <p className="text-gray-400 text-sm">Next amazing project coming soon!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;