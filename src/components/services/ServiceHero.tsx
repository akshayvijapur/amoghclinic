import React from 'react';

export function ServiceHero() {
  return (
    <div className="relative bg-blue-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
          src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80"
          alt="Medical facility"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Medical Services</h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          We provide comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals.
        </p>
      </div>
    </div>
  );
}