export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  imageUrl: string;
  biography: string;
  education: string[];
  specializations: string[];
  experience: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  details?: string[];
  image?: string;
}