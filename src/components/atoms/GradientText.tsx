import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { gradientText, gradientTextInverted } from '../../theme';

interface GradientTextProps {
  children: ReactNode;
  inverted?: boolean;
}

export function GradientText({ children, inverted = false }: GradientTextProps) {
  return (
    <Box
      component="span"
      sx={{
        background: inverted ? gradientTextInverted : gradientText,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {children}
    </Box>
  );
}
