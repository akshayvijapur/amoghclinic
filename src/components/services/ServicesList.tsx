import React from 'react';
import { medicalServices } from '../../data/medicalServices';
import { obgyServices } from '../../data/obgyServices';
import { ServiceSection } from './ServiceSection';

export function ServicesList() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceSection title="Medical Services" services={medicalServices} />
        <ServiceSection title="Obstetrics & Gynecology Services" services={obgyServices} />
      </div>
    </div>
  );
}