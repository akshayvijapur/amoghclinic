import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The care I received was exceptional. The doctors were knowledgeable and caring, making me feel comfortable throughout my treatment.",
    author: "Sarah Johnson",
    role: "Patient",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    content: "State-of-the-art facilities and a compassionate staff. They went above and beyond to ensure my recovery was smooth.",
    author: "Michael Chen",
    role: "Patient",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    content: "The medical team here is simply outstanding. Their expertise and dedication to patient care is evident in everything they do.",
    author: "Emily Rodriguez",
    role: "Patient",
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

export function Testimonials() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Real experiences from our valued patients
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.imageUrl}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}