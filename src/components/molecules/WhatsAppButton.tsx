import { Button } from '../atoms/Button';
import { contactInfo } from '../../data/content';
import { logContactClick } from '../../firebase/contacts';

interface WhatsAppButtonProps {
  source: string;
  label?: string;
  message?: string;
  variant?: 'solid' | 'outline';
}

export function WhatsAppButton({
  source,
  label = 'Agendar consulta',
  message = 'Hola, quiero consultar sobre un turno en Odontología Integral.',
  variant = 'solid',
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      onClick={() => {
        // Best-effort: si falla el registro en Firestore, no debe impedir que el usuario contacte
        logContactClick(source).catch(() => {});
      }}
    >
      {label}
    </Button>
  );
}
