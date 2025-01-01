import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT } from '../../constants/contact';

export function ContactInfo() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Address</h3>
            <p className="mt-1 text-gray-600">
              {CONTACT.address.street}<br />
              {CONTACT.address.area}<br />
              {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.pincode}<br />
              {CONTACT.address.country}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <a href={`tel:${CONTACT.phone}`} className="mt-1 text-blue-600 hover:text-blue-800">
              {CONTACT.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <a href={`mailto:${CONTACT.email}`} className="mt-1 text-blue-600 hover:text-blue-800">
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Working Hours</h3>
            <p className="mt-1 text-gray-600">
              Weekdays: {CONTACT.workingHours.weekdays}<br />
              Weekends: {CONTACT.workingHours.weekends}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}