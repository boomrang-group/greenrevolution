import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, rating, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center mt-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-green-700">{price}</span>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors">
            Commander
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;