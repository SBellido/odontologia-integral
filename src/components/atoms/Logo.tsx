import logoSrc from '../../assets/logo.svg';
import './Logo.css';

interface LogoProps {
  size?: number;
}

export function Logo({ size = 40 }: LogoProps) {
  return <img className="logo" src={logoSrc} alt="Odontología Integral" style={{ height: size }} />;
}
