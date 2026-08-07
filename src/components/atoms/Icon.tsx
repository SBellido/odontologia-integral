import './Icon.css';

export type IconName = 'tooth' | 'implant' | 'child' | 'braces';

interface IconProps {
  name: IconName;
  label: string;
}

// Íconos como SVG en línea: livianos, sin dependencias externas, coherentes con la paleta blanco/negro
const paths: Record<IconName, JSX.Element> = {
  tooth: (
    <path d="M12 3c-2 0-3 1.2-4 1.2S6.3 3 4.7 3C2.6 3 1 4.9 1 7.5c0 2.6.9 4.3 1.8 6.6.7 1.9 1.1 5.4 2.3 5.9.9.4 1.4-2.4 1.9-4.3.3-1.1.6-1.7 1-1.7s.7.6 1 1.7c.5 1.9 1 4.7 1.9 4.3 1.2-.5 1.6-4 2.3-5.9.9-2.3 1.8-4 1.8-6.6C15 4.9 13.4 3 11.3 3c-1.6 0-2.3 1.2-4.3 1.2" />
  ),
  implant: (
    <>
      <path d="M12 2 8 5v3l4 2 4-2V5l-4-3Z" />
      <path d="M12 10v4" />
      <path d="M9 14h6l-1 8h-4l-1-8Z" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
    </>
  ),
  braces: (
    <>
      <path d="M4 9c1 5 4 9 8 9s7-4 8-9" />
      <path d="M7 9v2M10 9v3M14 9v3M17 9v2" />
    </>
  ),
};

export function Icon({ name, label }: IconProps) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
