import Box from '@mui/material/Box';
import { doctors } from '../../data/content';
import { Heading } from '../atoms/Heading';
import { DoctorCard } from '../molecules/DoctorCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function DoctorsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <Box
      component="section"
      id="nosotros"
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
      <Heading level={2}>Nosotros</Heading>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 3,
          borderRadius: 1,
          overflow: 'hidden',
        }}
      >
        <DoctorCard doctor={doctors[0]} tone="light" />
        <DoctorCard doctor={doctors[1]} tone="light" />
      </Box>
    </Box>
  );
}
