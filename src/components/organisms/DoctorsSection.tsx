import { doctors } from '../../data/content';
import { Heading } from '../atoms/Heading';
import { DoctorCard } from '../molecules/DoctorCard';
import './DoctorsSection.css';

export function DoctorsSection() {
  return (
    <section id="nosotros" className="doctors-section">
      <Heading level={2}>Nosotros</Heading>
      <div className="doctors-section__grid">
        <DoctorCard doctor={doctors[0]} tone="light" />
        <DoctorCard doctor={doctors[1]} tone="light" />
      </div>
    </section>
  );
}
