import './Icon.css';

interface IconProps {
  symbol: string;
  label: string;
}

// Íconos como emoji: livianos, sin dependencias, suficiente para el alcance actual
export function Icon({ symbol, label }: IconProps) {
  return (
    <span className="icon" role="img" aria-label={label}>
      {symbol}
    </span>
  );
}
