import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;