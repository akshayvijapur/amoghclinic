import {
  Activity,
  Brain,
  Heart,
  Orbit,
  Stethoscope,
  Bone,
  Radio,
  Moon,
  Thermometer,
  Droplets,
} from 'lucide-react';
import type { Service } from '../types';

export const medicalServices: Service[] = [
  {
    id: 'endocrine',
    title: 'Endocrine Diseases',
    description:
      'Comprehensive management of endocrine disorders including diabetes, thyroid conditions, obesity, and bone mineral disorders. Our approach combines advanced diagnostics with personalized treatment plans.',
    icon: Activity,
    details: [
      'Diabetes management and complications prevention',
      'Thyroid disorder diagnosis and treatment',
      'Obesity management and lifestyle modification',
      'Bone mineral disorder treatment',
      'Regular monitoring and medication adjustment',
    ],
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'cardiac',
    title: 'Cardiac Diseases',
    description:
      'Expert care for heart conditions including hypertension and heart attack management. We provide comprehensive cardiac evaluation, treatment, and preventive care services.',
    icon: Heart,
    details: [
      'Hypertension management',
      'Heart attack prevention and treatment',
      'Cardiac evaluation and monitoring',
      'Risk factor modification',
      'Cardiac rehabilitation guidance',
    ],
    image:
      'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'kidney',
    title: 'Kidney & Urinary Tract Disorders',
    description:
      'Specialized care for kidney diseases and urinary tract disorders. Our services include comprehensive diagnosis, treatment, and management of acute and chronic kidney conditions.',
    icon: Orbit,
    details: [
      'Kidney disease management',
      'Urinary tract infection treatment',
      'Kidney stone management',
      'Preventive nephrology care',
      'Regular kidney function monitoring',
    ],
    image:
      'https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'neuro',
    title: 'Neurological Conditions',
    description:
      'Treatment of neurological disorders including stroke and seizure disorders. We provide comprehensive neurological evaluation and management with a focus on recovery and rehabilitation.',
    icon: Brain,
    details: [
      'Stroke prevention and management',
      'Seizure disorder treatment',
      'Neurological evaluation',
      'Rehabilitation therapy',
      'Regular monitoring and follow-up',
    ],
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'respiratory',
    title: 'Respiratory Disorders',
    description:
      'Expert care for respiratory conditions including TB, Asthma, and COPD. We provide comprehensive pulmonary evaluation, treatment, and management services.',
    icon: Stethoscope,
    details: [
      'TB diagnosis and treatment',
      'Asthma management',
      'COPD care',
      'Pulmonary function testing',
      'Respiratory rehabilitation',
    ],
    image:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'arthritis',
    title: 'Arthritis Diseases',
    description:
      'Comprehensive care for various types of arthritis and joint conditions. Our treatment approach includes both medication and physical therapy for optimal joint health.',
    icon: Bone,
    details: [
      'Arthritis diagnosis and treatment',
      'Joint pain management',
      'Physical therapy coordination',
      'Preventive care',
      'Regular monitoring',
    ],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'liver',
    title: 'Liver Disorders',
    description:
      'Specialized care for various liver conditions. We provide comprehensive hepatology services including diagnosis, treatment, and management of acute and chronic liver diseases.',
    icon: Radio,
    details: [
      'Liver disease diagnosis',
      'Hepatitis management',
      'Cirrhosis treatment',
      'Liver function monitoring',
      'Dietary counseling',
    ],
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'gastro',
    title: 'Gastrointestinal Disorders',
    description:
      'Treatment of various digestive system disorders. Our comprehensive approach includes diagnosis, treatment, and management of acute and chronic gastrointestinal conditions.',
    icon: Stethoscope,
    details: [
      'Digestive disorder treatment',
      'Gastritis management',
      'IBD/IBS care',
      'Nutritional counseling',
      'Preventive care',
    ],
    image:
      'https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'sleep',
    title: 'Sleep Diseases',
    description:
      'Expert care for various sleep disorders. We provide comprehensive evaluation and treatment to improve sleep quality and overall health.',
    icon: Moon,
    details: [
      'Sleep disorder diagnosis',
      'Sleep study interpretation',
      'Treatment planning',
      'Lifestyle modification guidance',
      'Regular follow-up care',
    ],
    image:
      'https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'fever',
    title: 'Fever Evaluation',
    description:
      'Comprehensive evaluation and treatment of fever conditions. We provide thorough diagnostic services to identify and treat the underlying cause of fever.',
    icon: Thermometer,
    details: [
      'Fever diagnosis',
      'Infection treatment',
      'Monitoring and follow-up',
      'Preventive care',
      'Patient education',
    ],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'blood',
    title: 'Blood Disorders',
    description:
      'Specialized care for various blood disorders. We provide comprehensive hematology services including diagnosis, treatment, and management of blood-related conditions.',
    icon: Droplets,
    details: [
      'Anemia treatment',
      'Blood disorder diagnosis',
      'Therapeutic management',
      'Regular monitoring',
      'Preventive care',
    ],
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
];
