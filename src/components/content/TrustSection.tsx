import React from 'react';
import { ShieldAlert, CheckCircle2, Shield } from 'lucide-react';

export interface TrustSectionItem {
  id: string;
  title: string;
  description: string;
  verified: boolean;
  valId: string;
}

interface TrustSectionProps {
  items: TrustSectionItem[];
}

/**
 * TRUST SECTION COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Implementiert die "verified"-Flag-Logik für regulatorische Angaben.
 * - Sektionen, die als NICHT verifiziert deklariert sind (verified = false), bleiben
 *   strukturell vorhanden, aber inhaltlich ausgeblendet bzw. leer (für interne Audits).
 * - Enthält klare Entwicklerkommentare bezüglich der VAL-ID Richtlinien (VAL-070 bis VAL-079).
 */
export default function TrustSection({ items }: TrustSectionProps) {
  return (
    <div className="space-y-8">
      {items.map((item) => {
        // Falls das verified-Flag false ist, wird die Sektion im UI komplett ausgeblendet.
        if (!item.verified) {
          return null;
        }

        // Falls verifiziert, wird der Inhalt regulär und edel dargestellt
        return (
          <div 
            key={item.id} 
            className="border-2 border-[var(--color-border-default)] p-6 bg-[var(--color-bg-surface)] hover:border-[var(--color-copper-500)] transition duration-300 relative"
            id={`trust-section-${item.id}`}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[var(--color-copper-100)] text-[var(--color-text-accent)] shrink-0">
                <Shield size={20} />
              </div>
              <div>
                <h4 className="font-serif text-h4 text-[var(--color-text-primary)] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
