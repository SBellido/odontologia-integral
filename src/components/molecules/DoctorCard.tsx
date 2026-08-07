import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { Doctor } from '../../types';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import { gradientDark } from '../../theme';

interface DoctorCardProps {
  doctor: Doctor;
  tone: 'dark' | 'light';
}

export function DoctorCard({ doctor, tone }: DoctorCardProps) {
  const isDark = tone === 'dark';

  return (
    <Box
      component="article"
      sx={{
        p: 5,
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        background: isDark ? gradientDark : 'background.paper',
        color: isDark ? '#ffffff' : 'text.primary',
      }}
    >
      <Stack direction="row" gap={1} flexWrap="wrap" mb={1}>
        {doctor.specialties.map((specialty) => (
          <Badge key={specialty} tone={isDark ? 'inverted' : 'default'}>
            {specialty}
          </Badge>
        ))}
      </Stack>
      <Heading level={3}>{doctor.name}</Heading>
      <Text tone={isDark ? 'inverted' : 'soft'} size="sm">
        {doctor.bio}
      </Text>
      <Typography sx={{ fontSize: 12, letterSpacing: '0.04em', opacity: 0.7, mt: 1 }}>
        {doctor.licenseNumber}
      </Typography>
    </Box>
  );
}
