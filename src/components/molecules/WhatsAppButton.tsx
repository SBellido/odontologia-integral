import { Button } from '../atoms/Button';
import { WhatsAppIcon } from '../atoms/WhatsAppIcon';
import { contactInfo } from '../../data/content';
import { logContactClick } from '../../firebase/contacts';
import './WhatsAppButton.css';

interface WhatsAppButtonProps {
  source: string;
  label?: string;
  message?: string;
  variant?: 'solid' | 'outline';
  iconOnly?: boolean;
}

export function WhatsAppButton({
  source,
  label = 'Agendar consulta',
  message = 'Hola, quiero consultar sobre un turno en Odontología Integral.',
  variant = 'solid',
  iconOnly = false,
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      aria-label={iconOnly ? label : undefined}
      className={iconOnly ? 'whatsapp-button--icon-only' : undefined}
      onClick={() => {
        // Best-effort: si falla el registro en Firestore, no debe impedir que el usuario contacte
        logContactClick(source).catch(() => {});
      }}
    >
      <span className="whatsapp-button__content">
        <WhatsAppIcon size={iconOnly ? 20 : 18} />
        {!iconOnly && label}
      </span>
    </Button>
  );
}
