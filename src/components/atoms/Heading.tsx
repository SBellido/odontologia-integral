import type { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';

interface HeadingProps {
  level: 1 | 2 | 3;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const variantByLevel = { 1: 'h1', 2: 'h2', 3: 'h3' } as const;
const sizeByLevel = {
  1: { fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1 },
  2: { fontSize: 'clamp(26px, 3.5vw, 34px)', lineHeight: 1.15 },
  3: { fontSize: 'clamp(20px, 2.5vw, 25px)', lineHeight: 1.2 },
} as const;

export function Heading({ level, children, sx }: HeadingProps) {
  return (
    <Typography
      variant={variantByLevel[level]}
      component={`h${level}` as 'h1' | 'h2' | 'h3'}
      sx={{ m: 0, textWrap: 'balance', ...sizeByLevel[level], ...sx }}
    >
      {children}
    </Typography>
  );
}
