import React from 'react';

interface LogoProps {
  variant?: 'standard' | 'inverted';
  className?: string;
  onClick?: () => void;
  heightClass?: string;
}

/**
 * LOGO-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Typografische Wortmarke "Eisberg Dental" in Space Grotesk, Gemischtschreibung.
 * - KEIN erfundenes Signet, kein Zahn-Icon, kein Eisberg-Symbol (Zahn-Icons sind unprofessionelles Slop).
 * - Ein klarer Platzhalter im Code dokumentiert die Warteposition auf das "Tiefenschnitt-Signet".
 * - Zwei Farbvarianten: Standard (dunkle Schrift auf hellem Grund) und Inverted (helle Schrift auf dunklem Grund).
 */
export default function Logo({ variant = 'standard', className = '', onClick, heightClass }: LogoProps) {
  const logoUrl = 'https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/main/EisbergDentalLogo_500x500.png';

  const defaultHeight = variant === 'inverted' ? 'h-10 md:h-12' : 'h-8 md:h-10';
  const resolvedHeight = heightClass || defaultHeight;

  return (
    <div 
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label="Eisberg Dental Logo"
    >
      <img
        src={logoUrl}
        alt="Eisberg Dental"
        className={`${resolvedHeight} w-auto object-contain transition-all duration-300`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
