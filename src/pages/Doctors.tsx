import React from 'react';
import { DoctorCard } from '../components/DoctorCard';
import { doctors } from '../data/doctors';

export default function Doctors() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Medical Team</h1>
          <p className="mt-4 text-xl text-gray-600">Expert doctors committed to your health</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}