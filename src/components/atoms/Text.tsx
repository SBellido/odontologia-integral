import type { ReactNode } from 'react';
import './Text.css';

interface TextProps {
  children: ReactNode;
  tone?: 'default' | 'soft' | 'muted' | 'inverted';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Text({ children, tone = 'default', size = 'md', className }: TextProps) {
  const classes = ['text', `text--${tone}`, `text--${size}`, className].filter(Boolean).join(' ');
  return <p className={classes}>{children}</p>;
}
