export interface Doctor {
  id: string;
  name: string;
  specialties: string[];
  bio: string;
  photoUrl: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  whatsappNumber: string;
  whatsappDisplay: string;
  address: string;
  hours: string;
  mapEmbedUrl: string;
}
