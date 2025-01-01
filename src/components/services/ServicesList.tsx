import React from 'react';
import { detailedServices } from '../../data/detailedServices';

export function ServicesList() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {detailedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg object-cover w-full h-96"
                  />
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="p-3 bg-blue-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-xl text-gray-600">{service.description}</p>
                  <ul className="space-y-4">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1.5">
                          <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Book Appointment
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}