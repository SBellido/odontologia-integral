import type { ReactNode } from 'react';
import './Badge.css';

interface BadgeProps {
  children: ReactNode;
  tone?: 'default' | 'inverted';
}

export function Badge({ children, tone = 'default' }: BadgeProps) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}
