import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&h=500',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Tableau de bord analytique avec visualisation de données en temps réel.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&h=500',
    tags: ['Vue.js', 'D3.js', 'Firebase'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Social Media App',
    description: 'Application de réseau social avec messagerie instantanée et partage de médias.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?fit=crop&w=800&h=500',
    tags: ['React Native', 'GraphQL', 'AWS'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
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
                  <a 
                    href={project.githubLink}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
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