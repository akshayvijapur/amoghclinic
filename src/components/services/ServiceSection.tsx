import React from 'react';
import type { Service } from '../../types';
import { ServiceCard } from './ServiceCard';

interface ServiceSectionProps {
  title: string;
  services: Service[];
}

export function ServiceSection({ title, services }: ServiceSectionProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}