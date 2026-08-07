import Box from '@mui/material/Box';
import { services } from '../../data/content';
import { Heading } from '../atoms/Heading';
import { ServiceCard } from '../molecules/ServiceCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <Box
      component="section"
      id="servicios"
      ref={ref}
      sx={{
        maxWidth: 1120,
        mx: 'auto',
        px: 3,
        py: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <Heading level={2}>Servicios</Heading>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3,
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Box>
    </Box>
  );
}
