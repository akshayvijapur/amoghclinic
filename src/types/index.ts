export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  imageUrl: string;
  biography: string;
  education: string[];
  certifications: string[];
  languages: string[];
  availableSlots: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}