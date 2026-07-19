import React from 'react';

export type BadgeType = 'default' | 'success' | 'warning' | 'error' | 'info' | 'copper';

interface BadgeProps {
  children: string;
  type?: BadgeType;
  className?: string;
}

/**
 * BADGE-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Streng rechtwinklig (radius-none), vermittelt B2B-Präzision und Konstruktionscharakter.
 * - Typografie: Space Grotesk, Medium (500), Uppercase (text-overline).
 * - Statusfarben basierend auf tokens.css (success, warning, error, info, copper, default).
 * - Enthält immer Text (niemals nur eine reine Farbkugel, da dies nicht barrierefrei ist).
 */
export default function Badge({ children, type = 'default', className = '' }: BadgeProps) {
  let colorClass = '';

  switch (type) {
    case 'success':
      colorClass = 'bg-[var(--color-success-500)]/10 text-[var(--color-success-700)] border-[var(--color-success-500)]/30';
      break;
    case 'warning':
      colorClass = 'bg-[var(--color-warning-500)]/10 text-[var(--color-warning-700)] border-[var(--color-warning-500)]/30';
      break;
    case 'error':
      colorClass = 'bg-[var(--color-error-500)]/10 text-[var(--color-error-700)] border-[var(--color-error-500)]/30';
      break;
    case 'info':
      colorClass = 'bg-[var(--color-info-500)]/10 text-[var(--color-info-700)] border-[var(--color-info-500)]/30';
      break;
    case 'copper':
      colorClass = 'bg-[var(--color-copper-500)]/10 text-[var(--color-copper-700)] border-[var(--color-copper-500)]/30';
      break;
    case 'default':
    default:
      colorClass = 'bg-[var(--color-brand-100)]/30 text-[var(--color-brand-900)] border-[var(--color-border-default)]';
      break;
  }

  return (
    <span
      className={`inline-flex items-center justify-center px-2.5 py-1 text-[10px] font-display font-semibold uppercase tracking-wider border rounded-[var(--radius-none)] select-none ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
}
