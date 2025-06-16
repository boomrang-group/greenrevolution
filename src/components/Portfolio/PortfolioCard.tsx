import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, image, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6">
          <span className="text-green-400 text-sm font-medium">{category}</span>
          <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;