import type React from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { gradientDark } from '../../theme';

interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'color'> {
  variant?: 'solid' | 'outline';
  component?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({ variant = 'solid', sx, ...rest }: ButtonProps) {
  const variantSx =
    variant === 'solid'
      ? {
          background: gradientDark,
          color: '#ffffff',
          '&:hover': { background: gradientDark, opacity: 0.88 },
        }
      : {
          border: '1px solid',
          borderColor: 'divider',
          color: 'text.primary',
          '&:hover': { borderColor: 'text.primary', backgroundColor: 'transparent' },
        };

  return <MuiButton disableElevation sx={{ ...variantSx, ...sx }} {...rest} />;
}
