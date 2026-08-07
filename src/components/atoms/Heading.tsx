import type { ReactNode } from 'react';
import './Heading.css';

interface HeadingProps {
  level: 1 | 2 | 3;
  children: ReactNode;
  className?: string;
}

export function Heading({ level, children, className }: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3';
  const classes = ['heading', `heading--h${level}`, className].filter(Boolean).join(' ');
  return <Tag className={classes}>{children}</Tag>;
}
