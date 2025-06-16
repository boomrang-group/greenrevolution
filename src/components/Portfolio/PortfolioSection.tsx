import React from 'react';
import PortfolioCard from './PortfolioCard';

const projects = [
  {
    title: "Aménagement d'une route d'accès vers un site",
    description: 'Installation complète de panneaux solaires et système domotique',
    image: './route1.jpg',
    category: 'Énergie Solaire'
  },
  {
    title: 'Complex Commercial Eco',
    description: 'Construction durable avec matériaux recyclés',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    category: 'Construction'
  },
  {
    title: 'Résidence Les Jardins',
    description: 'Gestion immobilière et rénovation écologique',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80',
    category: 'Gestion Immobilière'
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Réalisations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez nos projets les plus remarquables
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;