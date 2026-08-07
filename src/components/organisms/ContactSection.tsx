import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { contactInfo } from '../../data/content';
import { Heading } from '../atoms/Heading';
import { ContactInfoItem } from '../molecules/ContactInfoItem';
import { WhatsAppButton } from '../molecules/WhatsAppButton';
import { logContactClick } from '../../firebase/contacts';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const whatsappHref = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
  'Hola, quiero consultar sobre un turno en Odontología Integral.',
)}`;

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <Box
      component="section"
      id="contacto"
      ref={ref}
      sx={{
        maxWidth: 1120,
        mx: 'auto',
        px: 3,
        py: { xs: 8, sm: 12 },
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: 5,
        alignItems: 'stretch',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Heading level={2}>Contacto</Heading>
        <ContactInfoItem label="WhatsApp">
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="text.secondary"
            onClick={() => {
              logContactClick('contact-section-number').catch(() => {});
            }}
          >
            {contactInfo.whatsappDisplay}
          </Link>
        </ContactInfoItem>
        <ContactInfoItem label="Horarios">{contactInfo.hours}</ContactInfoItem>
        <ContactInfoItem label="Dirección">{contactInfo.address}</ContactInfoItem>
        <WhatsAppButton source="contact-section" />
      </Box>
      <Box
        component="iframe"
        title="Ubicación de Odontología Integral"
        src={contactInfo.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sx={{
          width: '100%',
          minHeight: 320,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
        }}
      />
    </Box>
  );
}
