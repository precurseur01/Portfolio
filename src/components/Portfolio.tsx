import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import projectsData from '../constant/data/project';


const Portfolio = () => {
  const { t } = useTranslation()
  const projects = projectsData()
  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projects.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-sm h-96 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubLink &&
                    <a
                      href={project.githubLink}
                      className="flex items-center text-gray-700 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </a>}
                  <a
                    href={project.liveLink}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;