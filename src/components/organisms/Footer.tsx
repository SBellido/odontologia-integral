import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { contactInfo } from '../../data/content';
import { Logo } from '../atoms/Logo';
import { Text } from '../atoms/Text';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
      <Box
        sx={{
          maxWidth: 1120,
          mx: 'auto',
          px: 3,
          py: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 1,
        }}
      >
        <Logo size={72} />
        <Text tone="muted" size="sm">
          {contactInfo.address}
        </Text>
        <Text tone="muted" size="sm" sx={{ mt: 2 }}>
          © {currentYear} Odontología Integral. Todos los derechos reservados.
        </Text>
        <Link
          href="https://mabell.ar"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ mt: 1, fontSize: 11, letterSpacing: '0.03em', color: 'grey.500' }}
        >
          Diseño y desarrollo MaBell Tecnología Creativa
        </Link>
      </Box>
    </Box>
  );
}
