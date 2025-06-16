import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductsSection from './components/Products/ProductsSection';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import ContactSection from './components/Contact/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProductsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;