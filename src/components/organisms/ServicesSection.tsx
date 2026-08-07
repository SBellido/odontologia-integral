import { services } from '../../data/content';
import { Heading } from '../atoms/Heading';
import { ServiceCard } from '../molecules/ServiceCard';
import './ServicesSection.css';

export function ServicesSection() {
  return (
    <section id="servicios" className="services-section">
      <Heading level={2}>Servicios</Heading>
      <div className="services-section__grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
