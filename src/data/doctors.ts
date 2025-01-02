import { type Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Avadusidda Arakeri',
    credentials: 'MBBS, MD (General Medicine), FICC, PG Diploma in Diabetology',
    specialty: 'Consultant Physician and Cardio-Diabetologist',
    imageUrl: 'https://amoghamultispecialityclinic.github.io/img/team1.jpg',
    biography: 'Dr. Avadusidda Arakeri is a highly qualified Consultant Physician and Cardio-Diabetologist with extensive experience in managing complex medical conditions. He completed his MBBS from KMC Hubli (RGUHS Bangalore), MD in General Medicine from RUHS Jaipur, and holds additional qualifications including FICC from Apollo Hospitals and PG Diploma in Diabetology from Himalayan University.',
    education: [
      'MBBS - KMC Hubli, RGUHS Bangalore',
      'MD General Medicine - RUHS Jaipur',
      'FICC - Apollo Hospitals',
      'PG Diploma in Diabetology - Himalayan University'
    ],
    specializations: [
      'Diabetes Care',
      'Non-Interventional Cardiology',
      'Hypertension Management',
      'Intensive Care',
      'Infectious Disease Treatment'
    ],
    experience: [
      'Published research in reputed international and national journals',
      'Extensive COVID-19 experience as frontline worker at Sardar Patel Medical College and PBM Hospitals'
    ]
  },
  {
    id: '2',
    name: 'Dr. Santosh Arakeri',
    credentials: 'M.B.B.S., MS (OBGY), D.N.B.',
    specialty: 'Obstetrician and Gynaecologist',
    imageUrl: 'https://raw.githubusercontent.com/akshayvijapur/amoghamultispecialityclinic.github.io/refs/heads/main/santu.jpeg',
    biography: 'Dr. Santosh Arakeri is an experienced Obstetrician and Gynaecologist with extensive training from prestigious institutions. She has served as Senior Resident at K.B. Bhabha Hospital & Nowrosjee Wadia Maternity Hospital, Mumbai, and completed her residency at KEM Hospital.',
    education: [
      'M.B.B.S.',
      'MS (OBGY)',
      'D.N.B.'
    ],
    specializations: [
      'High-risk obstetrics management',
      'Advanced gynecological surgeries',
      'Infertility treatment and counseling',
      'Hysteroscopy and laparoscopic procedures',
      'Colposcopy and related procedures',
      'Obstetric & Gynecological Ultrasonography'
    ],
    experience: [
      'Senior Resident at K.B. Bhabha Hospital & Nowrosjee Wadia Maternity Hospital, Mumbai',
      'Residency at KEM Hospital and Nowrosjee Wadia Maternity Hospital',
      'Internship at KIMS Hubli',
      'COVID-19 frontline experience at KEM Hospital'
    ]
  }
];