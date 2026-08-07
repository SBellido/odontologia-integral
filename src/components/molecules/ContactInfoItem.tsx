import type { ReactNode } from 'react';
import { Text } from '../atoms/Text';
import './ContactInfoItem.css';

interface ContactInfoItemProps {
  label: string;
  children: ReactNode;
}

export function ContactInfoItem({ label, children }: ContactInfoItemProps) {
  return (
    <div className="contact-info-item">
      <span className="contact-info-item__label">{label}</span>
      <Text tone="soft" size="md">
        {children}
      </Text>
    </div>
  );
}
