import React from 'react';
import { ContactInfo } from '../components/shared/ContactInfo';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">Get in touch with our medical team</p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}