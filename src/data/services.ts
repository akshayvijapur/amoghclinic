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
    title: 'Neurology',
    description: 'Expert care for neurological conditions and disorders',
    icon: Brain,
  },
  {
    id: '4',
    title: 'Ophthalmology',
    description: 'Complete eye care and vision correction services',
    icon: Eye,
  },
  {
    id: '5',
    title: 'Orthopedics',
    description: 'Specialized care for bones, joints, and muscles',
    icon: Bone,
  },
  {
    id: '6',
    title: 'Emergency Care',
    description: '24/7 emergency medical services',
    icon: Stethoscope, // Changed from FirstAid to Stethoscope
  },
];