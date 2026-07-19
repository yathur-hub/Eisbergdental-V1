import React from 'react';
import { PageId } from '../types';
import Button from '../components/ui/Button';
import WaterlineDivider from '../components/ui/WaterlineDivider';

interface NotFoundProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * 404-SEITE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Minimalistische, edle und architektonisch strukturierte 404-Seite.
 * - Nutzt die exakt vorgegebene Microcopy.
 * - Gerahmt durch den globalen Header und Footer (eingebunden über App.tsx).
 * - Enthält den charakteristischen WaterlineDivider und den "Zur Startseite" CTA.
 */
export default function NotFound({ onNavigate }: NotFoundProps) {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center py-20 px-4 bg-[var(--color-bg-canvas)]">
      <div className="max-w-md w-full text-center space-y-8 animate-slide-in">
        
        {/* Large 404 Indicator in IBM Plex Mono */}
        <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-accent)]">
          Fehler 404 · Referenzfehler
        </div>

        {/* Heading */}
        <h1 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium tracking-tight leading-tight">
          Diese Seite gibt es nicht (mehr).
        </h1>

        {/* WaterlineDivider Accent */}
        <WaterlineDivider className="my-6 max-w-[120px] mx-auto" />

        {/* Text */}
        <p className="font-sans text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
          Der aufgerufene Link führt ins Leere. Nutzen Sie die Navigation oder kontaktieren Sie uns direkt, falls Sie einen bestimmten Inhalt gesucht haben.
        </p>

        {/* Actions */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
          <Button
            variant="primary"
            onClick={() => onNavigate('home')}
            iconLeft="arrow"
            className="w-full sm:w-auto shadow-raised"
          >
            Zur Startseite
          </Button>
          
          <Button
            variant="secondary"
            onClick={() => onNavigate('kontakt')}
            className="w-full sm:w-auto"
          >
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </div>
  );
}
