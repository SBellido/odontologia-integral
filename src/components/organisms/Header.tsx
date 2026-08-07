import { Logo } from '../atoms/Logo';
import { NavLink } from '../molecules/NavLink';
import { WhatsAppButton } from '../molecules/WhatsAppButton';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__brand" aria-label="Odontología Integral — inicio">
          <Logo size={36} />
        </a>
        <nav className="header__nav">
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#nosotros">Nosotros</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </nav>
        <div className="header__cta">
          <WhatsAppButton source="header" label="WhatsApp" variant="outline" />
        </div>
      </div>
    </header>
  );
}
