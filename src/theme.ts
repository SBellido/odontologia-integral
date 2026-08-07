import { createTheme } from '@mui/material/styles';

// Paleta fija blanco/negro (sin modo oscuro automático), con degradé como acento puntual
export const gradientDark = 'linear-gradient(160deg, #0a0a0a 0%, #2b2b2b 100%)';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f4f4f4',
    },
    text: {
      primary: '#0a0a0a',
      secondary: '#555555',
    },
    primary: {
      main: '#0a0a0a',
      contrastText: '#ffffff',
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 600, letterSpacing: '-0.01em' },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          padding: '12px 26px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'uppercase',
          fontSize: 11,
          letterSpacing: '0.08em',
        },
      },
    },
  },
});
