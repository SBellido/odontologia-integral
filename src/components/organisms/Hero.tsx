import Box from '@mui/material/Box';
import bannerSrc from '../../assets/banner.jpg';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { WhatsAppButton } from '../molecules/WhatsAppButton';

export function Hero() {
  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: 'relative',
        minHeight: { xs: 520, sm: 640 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={bannerSrc}
        alt="Instrumental odontológico y productos de Odontología Integral"
        sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.85) 100%)',
            sm: 'linear-gradient(90deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.15) 100%)',
          },
        }}
      />
      <Box
        sx={{
          position: 'relative',
          maxWidth: 1120,
          width: '100%',
          mx: 'auto',
          px: 3,
          py: { xs: 10, sm: 14 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 3,
        }}
      >
        <Text
          tone="inverted"
          size="sm"
          sx={{ textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: 11 }}
        >
          Odontología Integral
        </Text>
        <Heading level={1} sx={{ color: '#ffffff' }}>
          Cuidado dental de confianza, para toda la familia
        </Heading>
        <Text tone="inverted" size="lg" sx={{ maxWidth: 480 }}>
          Endodoncia, implantes dentales, odontopediatría y ortodoncia, con atención cercana y
          tecnología actual.
        </Text>
        <WhatsAppButton source="hero" />
      </Box>
    </Box>
  );
}
