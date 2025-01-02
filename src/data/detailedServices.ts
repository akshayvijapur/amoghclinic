import { Heart, Stethoscope, Brain, UserCog } from 'lucide-react';

export const detailedServices = [
  {
    id: '1',
    title: 'Cardiology',
    description: 'Comprehensive heart care and treatment by expert cardiologists',
    icon: Heart,
    details: [
      'Non-invasive cardiac evaluation',
      'Heart disease management',
      'Hypertension treatment',
      'Preventive cardiology services',
      'Cardiac rehabilitation guidance'
    ],
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: '2',
    title: 'Internal Medicine',
    description: 'Complete care for adult health conditions',
    icon: Stethoscope,
    details: [
      'Preventive care and wellness visits',
      'Chronic disease management',
      'Diagnostic services',
      'Health screenings',
      'Vaccination services'
    ],
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: '3',
    title: 'Diabetes Care',
    description: 'Expert care for Diabetes',
    icon: Brain,
    details: [
      'Personalized blood sugar management and monitoring',
      'Lifestyle changes and dietary counseling for diabetes',
      'Diabetic neuropathy treatment and prevention',
      'Education on insulin and medication management',
      'Managing diabetes-related complications'
    ],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: '4',
    title: 'Obstetrics & Gynecology (OBG)',
    description: 'Complete care throughout pregnancy and womens health',
    icon: UserCog,
    details: [
      'Comprehensive prenatal care and monitoring',
      'High-risk pregnancy management',
      'Gynecological exams and screenings',
      'Infertility treatment and counseling',
      'Advanced gynecological procedures'
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
  }
];