import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Amogha Hospital is our family's go-to for healthcare. They provide comprehensive services, and the doctors are knowledgeable and caring. I trust them with my family's health.",
    author: "Mahesh Mirgi",
    role: "Patient",
  },
  {
    id: 2,
    content: "I visited Amogha Hospital for my father health check-up. Doctor is well experienced and treated my father for diabetes.",
    author: "Akshay vijapur",
    role: "Patient",
  },
  {
    id: 3,
    content: "I've been coming to Amogha for my diabetes care, and the doctors are fantastic. They helped me manage my condition effectively. The staff is caring and professional",
    author: "Shridhar Nimbargi",
    role: "Patient",
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