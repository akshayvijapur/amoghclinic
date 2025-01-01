import React from 'react';
import { DoctorCard } from '../components/DoctorCard';

const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    credentials: 'MD, MBBS',
    specialty: 'Cardiologist',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    biography: 'Dr. Johnson is a renowned cardiologist with over 15 years of experience in treating complex cardiac conditions.'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    credentials: 'MD, DM',
    specialty: 'Neurologist',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    biography: 'Dr. Chen specializes in neurological disorders and has pioneered several innovative treatment methods.'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    credentials: 'MBBS, MS',
    specialty: 'Orthopedic Surgeon',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    biography: 'Dr. Rodriguez is an expert in joint replacement surgery and sports medicine.'
  }
];

export default function Doctors() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Medical Team</h1>
          <p className="mt-4 text-xl text-gray-600">Expert doctors committed to your health</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}