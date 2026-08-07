import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Logo } from '../atoms/Logo';
import { NavLink } from '../molecules/NavLink';
import { WhatsAppButton } from '../molecules/WhatsAppButton';

export function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={3}
        sx={{ maxWidth: 1120, mx: 'auto', px: 3, py: 1 }}
      >
        <Box component="a" href="#top" aria-label="Odontología Integral — inicio" sx={{ display: 'flex' }}>
          <Logo size={88} />
        </Box>
        <Stack
          direction="row"
          gap={3}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#obras-sociales">Obras sociales</NavLink>
          <NavLink href="#nosotros">Nosotros</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </Stack>
        <WhatsAppButton source="header" label="Contactar por WhatsApp" variant="outline" iconOnly />
      </Stack>
    </Box>
  );
}
