import type { ReactNode } from 'react';
import './GradientText.css';

interface GradientTextProps {
  children: ReactNode;
}

export function GradientText({ children }: GradientTextProps) {
  return <span className="gradient-text">{children}</span>;
}
