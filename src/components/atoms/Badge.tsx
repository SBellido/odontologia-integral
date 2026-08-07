import type { ReactNode } from 'react';
import Chip from '@mui/material/Chip';

interface BadgeProps {
  children: ReactNode;
  tone?: 'default' | 'inverted';
}

export function Badge({ children, tone = 'default' }: BadgeProps) {
  const isInverted = tone === 'inverted';
  return (
    <Chip
      label={children}
      size="small"
      variant="outlined"
      sx={{
        color: isInverted ? 'rgba(255,255,255,0.85)' : 'text.secondary',
        borderColor: isInverted ? 'rgba(255,255,255,0.25)' : 'divider',
        height: 'auto',
        '& .MuiChip-label': { px: 1.25, py: 0.5 },
      }}
    />
  );
}
