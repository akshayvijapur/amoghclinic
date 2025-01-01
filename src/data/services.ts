import { Heart, Stethoscope, Brain, Eye, Bone } from 'lucide-react';

export const services = [
  {
    id: '1',
    title: 'Cardiology',
    description: 'Comprehensive heart care and treatment by expert cardiologists',
    icon: Heart,
  },
  {
    id: '2',
    title: 'General Medicine',
    description: 'Primary healthcare services for all your medical needs',
    icon: Stethoscope,
  },
  {
    id: '3',
    title: 'Diabetes care',
    description: 'Expert care for Diabetes',
    icon: Brain,
  },
  {
    id: '4',
    title: 'Obstetrics & Gynecology (OBG) services',
    description: 'Complete care of lifecycle from pregnancy to birth',
    icon: Eye,
  },
  {
    id: '5',
    title: 'Emergency Care',
    description: '24/7 emergency medical services',
    icon: Stethoscope, // Changed from FirstAid to Stethoscope
  },
];