import React from 'react';
import { ServicesList } from '../components/services/ServicesList';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceFeatures } from '../components/services/ServiceFeatures';

export default function Services() {
  return (
    <div className="bg-white">
      <ServiceHero />
      <ServicesList />
      <ServiceFeatures />
    </div>
  );
}