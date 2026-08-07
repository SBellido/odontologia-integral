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
        width: '100%',
        bgcolor: 'background.paper',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <Box
        sx={{
          maxWidth: 1120,
          mx: 'auto',
          px: 3,
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 3,
        }}
      >
        <Heading level={2}>Obras sociales</Heading>
        {insuranceProviders.length > 0 && (
          <Stack
            direction="row"
            gap={7}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            sx={{ py: 2, width: '100%' }}
          >
            {insuranceProviders.map((provider) => (
              <Box
                key={provider.id}
                component="img"
                src={provider.logoUrl}
                alt={provider.name}
                sx={{ height: { xs: 64, sm: 84 }, width: 'auto' }}
              />
            ))}
          </Stack>
        )}
        <Text tone="muted" size="sm">
          ¿No encontrás tu obra social? Consultanos — también atendemos pacientes particulares.
        </Text>
      </Box>
    </Box>
  );
}
