import type { IconName } from '../components/atoms/Icon';

export interface Doctor {
  id: string;
  name: string;
  specialties: string[];
  bio: string;
  licenseNumber: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: IconName;
}

export interface ContactInfo {
  whatsappNumber: string;
  whatsappDisplay: string;
  address: string;
  hours: string;
  mapEmbedUrl: string;
}

export interface InsuranceProvider {
  id: string;
  name: string;
  logoUrl: string;
}
