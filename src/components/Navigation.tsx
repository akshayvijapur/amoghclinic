import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND } from '../constants/branding';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 text-xl font-bold">{BRAND.name}</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-200 font-medium`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
              Book Appointment
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                } block px-3 py-2 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
  onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=+918050318808&text=I%20want%20to%20book%20an%20appointment'}
  className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
>
  Book Appointment
</button>
          </div>
        </div>
      )}
    </nav>
  );
}