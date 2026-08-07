import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface BaseProps {
  variant?: 'solid' | 'outline';
  children: ReactNode;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

export function Button(props: ButtonProps | LinkButtonProps) {
  const { variant = 'solid', children, className, as: _as, ...rest } = props;
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ');

  if (props.as === 'a') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
