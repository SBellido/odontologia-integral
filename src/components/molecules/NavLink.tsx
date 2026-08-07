import type { ReactNode } from 'react';
import Link from '@mui/material/Link';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      underline="hover"
      sx={{
        fontSize: 14,
        color: 'text.secondary',
        '&:hover': { color: 'text.primary' },
      }}
    >
      {children}
    </Link>
  );
}
