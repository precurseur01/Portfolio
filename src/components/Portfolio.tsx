import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import projectsData from '../constant/data/project';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const Portfolio = () => {
  const { t } = useTranslation()
  const projects = projectsData()
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3"
          >
            {t('projects.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {t('projects.completedProjects')}

          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            {t('projects.description')}
           
          </motion.p>
        </motion.div>


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