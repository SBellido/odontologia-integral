import type { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';

interface TextProps {
  children: ReactNode;
  tone?: 'default' | 'soft' | 'muted' | 'inverted';
  size?: 'sm' | 'md' | 'lg';
  sx?: SxProps<Theme>;
}

const colorByTone = {
  default: 'text.primary',
  soft: 'text.secondary',
  muted: 'grey.500',
  inverted: 'rgba(255,255,255,0.85)',
} as const;

const fontSizeBySize = { sm: 13, md: 15, lg: 17 } as const;

export function Text({ children, tone = 'default', size = 'md', sx }: TextProps) {
  return (
    <Typography
      component="p"
      sx={{
        m: 0,
        lineHeight: 1.6,
        maxWidth: '65ch',
        color: colorByTone[tone],
        fontSize: fontSizeBySize[size],
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
