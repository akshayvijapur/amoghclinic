import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
    </div>
  );
}