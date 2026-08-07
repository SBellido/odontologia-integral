import type { Doctor } from '../../types';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import './DoctorCard.css';

interface DoctorCardProps {
  doctor: Doctor;
  tone: 'dark' | 'light';
}

export function DoctorCard({ doctor, tone }: DoctorCardProps) {
  return (
    <article className={`doctor-card doctor-card--${tone}`}>
      <div className="doctor-card__specialties">
        {doctor.specialties.map((specialty) => (
          <Badge key={specialty} tone={tone === 'dark' ? 'inverted' : 'default'}>
            {specialty}
          </Badge>
        ))}
      </div>
      <Heading level={3}>{doctor.name}</Heading>
      <Text tone={tone === 'dark' ? 'inverted' : 'soft'} size="sm">
        {doctor.bio}
      </Text>
      <span className="doctor-card__license">{doctor.licenseNumber}</span>
    </article>
  );
}
