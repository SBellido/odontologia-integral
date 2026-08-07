import Box from '@mui/material/Box';
import logoSrc from '../../assets/logo.svg';

interface LogoProps {
  size?: number;
}

export function Logo({ size = 40 }: LogoProps) {
  return (
    <Box
      component="img"
      src={logoSrc}
      alt="Odontología Integral"
      sx={{ height: size, width: 'auto', display: 'block' }}
    />
  );
}
