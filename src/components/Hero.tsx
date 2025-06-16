import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-white h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Construction durable"
        />
        <div className="absolute inset-0 bg-green-900 bg-opacity-75 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Construire l'avenir avec des solutions durables et innovantes
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-100">
          GREEN REVOLUTION SARL vous accompagne dans vos projets de construction, d'énergie solaire
          et de gestion immobilière avec une approche éco-responsable et innovante.
        </p>
        <div className="mt-10 flex space-x-4">
          <button className="bg-white text-green-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
            Nos services
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-green-700">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;