import Stack from '@mui/material/Stack';
import { Button } from '../atoms/Button';
import { WhatsAppIcon } from '../atoms/WhatsAppIcon';
import { contactInfo } from '../../data/content';
import { logContactClick } from '../../firebase/contacts';

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
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      aria-label={iconOnly ? label : undefined}
      sx={iconOnly ? { minWidth: 'auto', p: 1.25, lineHeight: 0 } : undefined}
      onClick={() => {
        // Best-effort: si falla el registro en Firestore, no debe impedir que el usuario contacte
        logContactClick(source).catch(() => {});
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <WhatsAppIcon size={iconOnly ? 20 : 18} />
        {!iconOnly && label}
      </Stack>
    </Button>
  );
}
