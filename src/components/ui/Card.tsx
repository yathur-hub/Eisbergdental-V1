import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * CARD-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Nutzt die `.card`-Klasse aus tokens.css für das Standard-Kartendesign.
 * - Strenge B2B-Radien (0px bzw. 2px, kein unprofessionelles Abrunden).
 * - Bietet eine optionale interaktive Hover-Erfahrung, falls ein onClick-Handler übergeben wird.
 */
export default function Card({ children, className = '', onClick }: CardProps) {
  const isClickable = !!onClick;
  
  return (
    <div
      className={`card ${
        isClickable
          ? 'cursor-pointer hover:border-[var(--color-interactive-primary)] hover:shadow-raised transition-all duration-200'
          : ''
      } ${className}`}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
