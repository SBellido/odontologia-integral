import { contactInfo } from '../../data/content';
import { Heading } from '../atoms/Heading';
import { ContactInfoItem } from '../molecules/ContactInfoItem';
import { WhatsAppButton } from '../molecules/WhatsAppButton';
import './ContactSection.css';

export function ContactSection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-section__info">
        <Heading level={2}>Contacto</Heading>
        <ContactInfoItem label="WhatsApp">{contactInfo.whatsappDisplay}</ContactInfoItem>
        <ContactInfoItem label="Horarios">{contactInfo.hours}</ContactInfoItem>
        <ContactInfoItem label="Dirección">{contactInfo.address}</ContactInfoItem>
        <WhatsAppButton source="contact-section" />
      </div>
      <iframe
        className="contact-section__map"
        title="Ubicación de Odontología Integral"
        src={contactInfo.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
