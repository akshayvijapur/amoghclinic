import React from 'react';
import { Baby, UserCog, Stethoscope, HeartPulse, Users } from 'lucide-react';
import type { Service } from '../types';

export const obgyServices: Service[] = [
  {
    id: 'antenatal',
    title: 'Antenatal & Postnatal Care',
    description:
      'Comprehensive care throughout pregnancy and after delivery. We provide regular check-ups, monitoring, and support for both mother and baby.',
    icon: Baby,
    details: [
      'Regular pregnancy check-ups',
      'Fetal monitoring',
      'Nutritional guidance',
      'Postnatal care',
      'Breastfeeding support',
    ],
    image:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'preconception',
    title: 'Preconceptional Screening & Diagnostic Testing',
    description:
      'Comprehensive screening and testing services before pregnancy. We help identify and address potential health concerns before conception.',
    icon: UserCog,
    details: [
      'Genetic screening',
      'Health assessment',
      'Diagnostic testing',
      'Counseling services',
      'Risk assessment',
    ],
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'gynecology',
    title: 'Gynecology Check Up',
    description:
      'Regular gynecological check-ups and screenings. We provide comprehensive women health services including preventive care and treatment.',
    icon: Stethoscope,
    details: [
      'Regular check-ups',
      'Cancer screening',
      'Preventive care',
      'Treatment for gynecological conditions',
      'Health education',
    ],
    image:
      'https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'infertility',
    title: 'Infertility Check Up & Treatment',
    description:
      'Comprehensive infertility evaluation and treatment services. We provide personalized care to help couples achieve their dream of parenthood.',
    icon: HeartPulse,
    details: [
      'Infertility evaluation',
      'Treatment planning',
      'Counseling services',
      'Advanced reproductive procedures',
      'Regular monitoring',
    ],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'family-planning',
    title: 'Family Planning',
    description:
      'Comprehensive family planning services and counseling. We help couples make informed decisions about their reproductive health.',
    icon: Users,
    details: [
      'Contraception counseling',
      'Family planning methods',
      'Health education',
      'Regular follow-up',
      'Counseling services',
    ],
    image:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
];
