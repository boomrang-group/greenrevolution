import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    title: 'Peinture Formule Pro-Extra Mat',
    description: 'Peinture haute qualité pour intérieur, finition mate parfaite',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    rating: 5,
    price: '25.000 FCFA'
  },
  {
    title: 'Peinture Formule Pro-Extra Satin',
    description: 'Finition satinée élégante pour murs intérieurs',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80',
    rating: 4,
    price: '28.000 FCFA'
  },
  {
    title: 'Peinture Formule Pro-Extra Brillant',
    description: 'Peinture brillante résistante pour extérieur',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80',
    rating: 5,
    price: '30.000 FCFA'
  }
];

const ProductsSection = () => {
  return (
    <section id="produits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Produits
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez notre gamme de peintures Formule Pro-Extra
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;