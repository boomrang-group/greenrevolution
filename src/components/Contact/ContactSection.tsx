import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Nous sommes à votre écoute pour tous vos projets
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;