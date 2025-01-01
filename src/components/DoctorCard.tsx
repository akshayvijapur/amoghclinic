import React from 'react';

interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    credentials: string;
    specialty: string;
    imageUrl: string;
    biography: string;
  };
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
        <p className="text-gray-500 text-sm line-clamp-3">{doctor.biography}</p>
        <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
          View Profile
        </button>
      </div>
    </div>
  );
}