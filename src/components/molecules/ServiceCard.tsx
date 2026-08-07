import type { Service } from '../../types';
import { Icon } from '../atoms/Icon';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import './ServiceCard.css';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card">
      <Icon symbol={service.icon} label={service.name} />
      <Heading level={3}>{service.name}</Heading>
      <Text tone="soft" size="sm">
        {service.description}
      </Text>
    </article>
  );
}
