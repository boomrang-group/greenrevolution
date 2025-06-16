import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <MapPin className="h-6 w-6 text-green-700 mt-1" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
          <p className="mt-1 text-gray-600">
            1, avenue BAKOLE, C/LEMBA Q/SALONGO-NORD <br />
            Kinshasa,RD Congo
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <Phone className="h-6 w-6 text-green-700 mt-1" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
          <p className="mt-1 text-gray-600">+243 848 920 421</p>
        </div>
      </div>
      <div className="flex items-start">
        <Mail className="h-6 w-6 text-green-700 mt-1" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Email</h3>
          <p className="mt-1 text-gray-600">contact@greenrevolution.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;