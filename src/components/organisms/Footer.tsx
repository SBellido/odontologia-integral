import { contactInfo } from '../../data/content';
import { Logo } from '../atoms/Logo';
import { Text } from '../atoms/Text';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Logo size={28} />
        <Text tone="muted" size="sm">
          {contactInfo.address}
        </Text>
        <Text tone="muted" size="sm">
          {contactInfo.whatsappDisplay}
        </Text>
      </div>
    </footer>
  );
}
