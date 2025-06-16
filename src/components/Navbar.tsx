import React from 'react';
import Logo from './logo.png';
import { Menu, X, Sun, Building2, Home, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
            <Sun className="h-8 w-8 text-green-700" />
              <span className="ml-2 text-xl font-bold text-gray-800">GREEN REVOLUTION</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium">
              Accueil
            </a>
            <a href="#services" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="#produits" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium">
              Produits
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium">
              Contact
            </a>
            <button className="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800">
              Demander un devis
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#accueil" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700">
              Accueil
            </a>
            <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700">
              Services
            </a>
            <a href="#produits" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700">
              Produits
            </a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700">
              Contact
            </a>
            <button className="w-full text-left bg-green-700 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-green-800">
              Demander un devis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;