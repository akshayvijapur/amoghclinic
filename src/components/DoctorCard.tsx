import React from 'react';
import type { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-64 object-cover"
        src={doctor.imageUrl}
        alt={doctor.name}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
        <p className="text-sm text-blue-600 mb-2">{doctor.credentials}</p>
        <p className="text-gray-600 mb-4">{doctor.specialty}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900">Specializations</h4>
            <ul className="mt-2 list-disc list-inside text-gray-600 text-sm">
              {doctor.specializations?.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900">Experience</h4>
            <ul className="mt-2 list-disc list-inside text-gray-600 text-sm">
              {doctor.experience?.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=+918050318808&text=I%20want%20to%20book%20an%20appointment'}
          className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}