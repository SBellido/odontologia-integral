import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { insuranceProviders } from '../../data/content';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function InsuranceSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <Box
      component="section"
      id="obras-sociales"
      ref={ref}
      sx={{
        maxWidth: 1120,
        mx: 'auto',
        px: 3,
        py: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <Heading level={2}>Obras sociales</Heading>
      <Text tone="soft" size="md" sx={{ maxWidth: 640 }}>
        Trabajamos con las siguientes obras sociales.
      </Text>
      {insuranceProviders.length > 0 && (
        <Stack direction="row" gap={5} alignItems="center" sx={{ overflowX: 'auto', py: 2 }}>
          {insuranceProviders.map((provider) => (
            <Box
              key={provider.id}
              component="img"
              src={provider.logoUrl}
              alt={provider.name}
              sx={{ height: 56, width: 'auto', flexShrink: 0 }}
            />
          ))}
        </Stack>
      )}
      <Text tone="muted" size="sm">
        ¿No encontrás tu obra social? Consultanos — también atendemos pacientes particulares.
      </Text>
    </Box>
  );
}
