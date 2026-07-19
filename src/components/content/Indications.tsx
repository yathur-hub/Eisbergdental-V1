import React from 'react';
import Icon from '../ui/Icon';

interface IndicationsProps {
  indications: string[];
}

/**
 * INDICATIONS COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Struktur: Zweispaltiges B2B-Layout für Indikationen.
 * - Indikatoren: Strukturierte Listenelemente mit asymmetrischen Akzenten (border-l-2 copper).
 * - Ästhetik: Generöser Leerraum (negative space), feine Haarlinientrenner zur Abgrenzung.
 */
export default function Indications({ indications }: IndicationsProps) {
  if (!indications || indications.length === 0) return null;

  return (
    <div id="indications-component" className="my-12">
      <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
        <h3 className="font-serif text-h3 text-[var(--color-text-primary)] font-medium">
          Indikationen & Einsatzbereiche
        </h3>
        <p className="text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider mt-1">
          Klinische und zahntechnische Anwendungsbereiche
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {indications.map((indication, index) => (
          <div
            key={index}
            id={`indication-item-${index}`}
            className="flex items-start gap-4 p-5 bg-[var(--color-bg-surface)] border-l-2 border-[var(--color-interactive-accent)]"
          >
            <div className="text-[var(--color-text-accent)] mt-0.5 shrink-0">
              <Icon name="check" size="1.15rem" />
            </div>
            
            <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {indication}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
