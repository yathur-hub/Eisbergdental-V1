import React from 'react';

interface WaterlineDividerProps {
  accent?: boolean; // Set true to make the whole divider copper-colored, or partial copper.
  thickness?: '1px' | '2px';
  className?: string;
}

/**
 * WATERLINE-DIVIDER-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Die "Schnittlinie" (Waterline) bildet das fundamentale Gestaltungsraster.
 * - Teilt die Horizontale asymmetrisch im architektonischen Verhältnis 1:3.
 * - Ein Segment (1/4 der Breite) leuchtet im edlen Kupfer-Farbton (var(--color-copper-600)),
 *   der Rest verbleibt im unaufdringlichen Standard-Grauton (var(--color-border-default)).
 * - Steht sinnbildlich für den Eisberg (Schnitt über/unter Wasser) sowie präzise zahntechnische Schleifkanten.
 */
export default function WaterlineDivider({
  accent = false,
  thickness = '1px',
  className = '',
}: WaterlineDividerProps) {
  const heightClass = thickness === '2px' ? 'h-[2px]' : 'h-[1px]';

  return (
    <div className={`w-full flex items-center ${heightClass} overflow-hidden draw-line ${className}`} role="separator">
      {accent ? (
        // Full Accent Waterline
        <div className={`w-full h-full bg-[var(--color-copper-600)]`} />
      ) : (
        // Structural 1:3 Waterline Divider
        <>
          {/* Accent segment (1 part, 25% width) */}
          <div className={`w-1/4 h-full bg-[var(--color-copper-600)] transition-colors duration-300`} />
          {/* Default segment (3 parts, 75% width) */}
          <div className={`w-3/4 h-full bg-[var(--color-border-default)] opacity-40`} />
        </>
      )}
    </div>
  );
}
