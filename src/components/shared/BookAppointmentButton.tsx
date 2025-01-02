import React from 'react';
import { openWhatsAppChat } from '../../utils/contact';
import { CONTACT } from '../../constants/contact';

export function BookAppointmentButton() {
  const handleClick = () => {
    openWhatsAppChat(CONTACT.phone, 'I want to book an appointment');
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
    >
      Book Appointment
    </button>
  );
}