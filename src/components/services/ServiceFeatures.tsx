import React from 'react';
import { Clock, Award, Users, Shield } from 'lucide-react';

const features = [
  {
    name: '24/7 Availability',
    description: 'Round-the-clock medical services for all your healthcare needs',
    icon: Clock,
  },
  {
    name: 'Expert Staff',
    description: 'Highly qualified and experienced medical professionals',
    icon: Award,
  },
  {
    name: 'Patient-Centered Care',
    description: 'Personalized treatment plans focused on your well-being',
    icon: Users,
  },
  {
    name: 'Quality Assurance',
    description: 'Adherence to highest medical standards and safety protocols',
    icon: Shield,
  },
];

export function ServiceFeatures() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We are committed to providing exceptional healthcare services
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.name} className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}