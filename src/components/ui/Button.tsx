import React from 'react';
import Icon, { IconName } from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'tech';
  iconLeft?: IconName;
  iconRight?: IconName;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * BUTTON-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Vier Varianten: Primär, Akzent (Konversions-Highlight), Sekundär und Ghost.
 * - Nutzt die vordefinierten CSS-Klassen und -Variablen aus tokens.css.
 * - Strikte Einhaltung von Mindest-Touch-Target-Größen (mind. 44px Höhe).
 * - Fokusringe sind präzise konfiguriert (var(--color-focus-ring)).
 */
export default function Button({
  variant = 'primary',
  iconLeft,
  iconRight,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  // Base classes with robust focus transitions
  const baseClass = 'btn transition-all duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]';

  let variantClass = '';
  switch (variant) {
    case 'primary':
      variantClass = 'btn-primary';
      break;
    case 'accent':
      variantClass = 'btn-accent';
      break;
    case 'tech':
      variantClass = 'btn-tech';
      break;
    case 'secondary':
      variantClass = 'btn-secondary';
      break;
    case 'ghost':
      variantClass = 'btn-ghost';
      break;
  }

  return (
    <button
      className={`${baseClass} ${variantClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <Icon name={iconLeft} size="1.1em" className="mr-1 mt-[-1px]" />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size="1.1em" className="ml-1 mt-[-1px]" />}
    </button>
  );
}
