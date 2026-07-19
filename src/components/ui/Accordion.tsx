import React, { useState } from 'react';
import Icon from './Icon';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * ACCORDION-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Reduziertes FAQ- und Detail-Akkordeon.
 * - Header-Label in 'Space Grotesk' (font-display), Inhalt in gut lesbarem 'Inter' (font-sans).
 * - STRIKT KEINE Chevron-Icons (Sicherheitsausschluss, nur Plus/Minus).
 * - Ein sauberer Plus/Minus-Indikator, der präzise umschaltet.
 * - Vollständige Barrierefreiheit: Korrekte ARIA-Rollen (button, region, aria-expanded, aria-controls),
 *   vollständige Tastaturbedienung (Space/Enter).
 */
export default function Accordion({
  title,
  children,
  defaultOpen = false,
  className = '',
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = React.useId();
  const headerId = React.useId();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b border-[var(--color-border-subtle)] py-4 ${className}`}>
      <h3>
        <button
          id={headerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={handleToggle}
          className="w-full flex items-center justify-between text-left font-display font-medium text-base md:text-lg text-[var(--color-text-primary)] hover:text-[var(--color-interactive-accent)] transition-colors py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-focus-ring)] cursor-pointer group"
        >
          <span>{title}</span>
          <span className="ml-4 flex items-center justify-center w-6 h-6 border border-[var(--color-border-default)] rounded-[var(--radius-xs)] shrink-0 text-[var(--color-text-tertiary)] bg-[var(--color-bg-surface)] relative overflow-hidden">
            <Icon 
              name="plus" 
              size={12} 
              className={`absolute transition-all duration-300 transform ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} 
            />
            <Icon 
              name="minus" 
              size={12} 
              className={`absolute transition-all duration-300 transform text-[var(--color-text-accent)] ${isOpen ? 'opacity-100 scale-100 rotate-180' : 'opacity-0 scale-50 rotate-0'}`} 
            />
          </span>
        </button>
      </h3>
      
      <div
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden pr-8 font-sans text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
          <div className="pb-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
