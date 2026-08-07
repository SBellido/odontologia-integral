import SvgIcon from '@mui/material/SvgIcon';

interface WhatsAppIconProps {
  size?: number;
}

// Ícono de chat/teléfono genérico (no es el logo oficial con marca registrada de WhatsApp)
export function WhatsAppIcon({ size = 22 }: WhatsAppIconProps) {
  return (
    <SvgIcon viewBox="0 0 32 32" aria-label="WhatsApp" titleAccess="WhatsApp" sx={{ width: size, height: size }}>
      <path d="M16 2C8.3 2 2 8.3 2 16c0 2.6.7 5.1 2.1 7.3L2 30l6.9-2c2.1 1.2 4.5 1.8 7.1 1.8 7.7 0 14-6.3 14-14S23.7 2 16 2Zm0 25.5c-2.3 0-4.5-.6-6.4-1.8l-.5-.3-4.1 1.2 1.2-4-.3-.5C4.6 20.3 4 18.2 4 16 4 9.4 9.4 4 16 4s12 5.4 12 12-5.4 11.5-12 11.5Z" />
      <path d="M22.4 18.9c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 2-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4Z" />
    </SvgIcon>
  );
}
