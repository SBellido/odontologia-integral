import type { ReactNode } from 'react';
import './NavLink.css';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a className="nav-link" href={href}>
      {children}
    </a>
  );
}
