import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Text } from '../atoms/Text';

interface ContactInfoItemProps {
  label: string;
  children: ReactNode;
}

export function ContactInfoItem({ label, children }: ContactInfoItemProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <Typography
        sx={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'grey.500' }}
      >
        {label}
      </Typography>
      <Text tone="soft" size="md">
        {children}
      </Text>
    </Box>
  );
}
