import React from 'react';
import type { Service } from '../../types';
import { BookAppointmentButton } from '../shared/BookAppointmentButton';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-duration-300">
      <div className="relative h-48">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-blue-100 rounded-lg">
            <IconComponent className="h-6 w-6 text-blue-600" />
          </span>
          <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        {service.details && (
          <ul className="space-y-2 mb-6">
            {service.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <span className="mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
        <BookAppointmentButton />
      </div>
    </div>
  );
}