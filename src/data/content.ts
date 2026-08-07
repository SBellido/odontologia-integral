import type { ContactInfo, Doctor, InsuranceProvider, Service } from '../types';
import sancorLogo from '../assets/insurance/sancor.jpg';
import swissMedicalLogo from '../assets/insurance/swiss-medical.jpg';
import ospitLogo from '../assets/insurance/ospit.jpg';

export const doctors: Doctor[] = [
  {
    id: 'adrian-nader',
    name: 'Adrián Nader',
    specialties: ['Endodoncia', 'Implantes dentales'],
    bio: 'Especialista en tratamientos de conducto, preservación dental e implantes.',
    licenseNumber: 'MP 13452',
  },
  {
    id: 'carolina-bellido',
    name: 'Carolina Bellido',
    specialties: ['Odontopediatría', 'Ortodoncia'],
    bio: 'Cuidado dental para niños y tratamientos de ortodoncia para todas las edades.',
    licenseNumber: 'MP 80534',
  },
];

export const services: Service[] = [
  {
    id: 'endodoncia',
    name: 'Endodoncia',
    description: 'Tratamientos de conducto para preservar la pieza dental original.',
    icon: 'tooth',
  },
  {
    id: 'implantes',
    name: 'Implantes dentales',
    description: 'Reemplazo de piezas perdidas con implantes de calidad.',
    icon: 'implant',
  },
  {
    id: 'odontopediatria',
    name: 'Odontopediatría',
    description: 'Atención dental pensada especialmente para niños.',
    icon: 'child',
  },
  {
    id: 'ortodoncia',
    name: 'Ortodoncia',
    description: 'Corrección de la alineación dental para todas las edades.',
    icon: 'braces',
  },
];

export const insuranceProviders: InsuranceProvider[] = [
  { id: 'sancor-salud', name: 'SanCor Salud', logoUrl: sancorLogo },
  { id: 'swiss-medical', name: 'Swiss Medical', logoUrl: swissMedicalLogo },
  { id: 'ospit', name: 'OSPIT', logoUrl: ospitLogo },
];

// wa.me necesita el número sin espacios ni signos, con código de país
export const contactInfo: ContactInfo = {
  whatsappNumber: '5491158348249',
  whatsappDisplay: '+54 9 11 5834-8249',
  address: 'Domingo de Acassuso 6201, B1606 Carapachay, Provincia de Buenos Aires, Argentina',
  hours: 'Lunes a Viernes, 9:00 a 20:00 hs',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Domingo+de+Acassuso+6201,+B1606+Carapachay,+Buenos+Aires,+Argentina&output=embed',
};
