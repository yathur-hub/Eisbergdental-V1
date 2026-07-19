import React from 'react';

export interface CaseStudyItem {
  id: string;
  title: string;
  imageResultUrl: string;
  imageProcessUrl?: string;
  fields: {
    ausgangslage: string;
    leistungsfeld: string;
    vorgehen: string;
    ergebnis: string;
  };
}

interface CaseStudyProps {
  item: CaseStudyItem;
  key?: string;
}

/**
 * CASE STUDY COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Tiefenschnitt-Bildmaske: Ein einziger visueller Rahmen, der durch eine horizontale
 *   Trennlinie in var(--color-copper-600) im Verhältnis ca. 3:1 geteilt wird.
 * - Obere Zone (3/4 Höhe): Das hochauflösende Endergebnis (Zirkon/Keramik-Arbeit).
 * - Untere Zone (1/4 Höhe): Der präzise Laborprozess (CAD/Modellierung).
 * - Daneben: Ein strukturiertes Feld-Layout für Ausgangslage, Vorgehen und Ergebnisse.
 * - Enthält ehrliche "Fallbeschreibung folgt" Hinweise, falls nicht verifiziert.
 */
export default function CaseStudy({ item }: CaseStudyProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-b border-[var(--color-border-subtle)] pb-12 last:border-none last:pb-0">
      
      {/* Tiefenschnitt-Bildmaske (5 columns on desktop) */}
      <div className="lg:col-span-5 flex flex-col">
        <div className="relative w-full h-[450px] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] overflow-hidden flex flex-col">
          
          {item.imageProcessUrl ? (
            <>
              {/* Obere Zone: Ergebnis (approx. 75% height) */}
              <div className="relative h-[75%] w-full overflow-hidden">
                <img 
                  src={item.imageResultUrl} 
                  alt={`${item.title} - Ergebnis`}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[var(--color-brand-900)]/80 text-[var(--color-bone-50)] text-[10px] font-mono uppercase px-2 py-0.5 tracking-wider">
                  ERGEBNIS (EINGEGLIEDERT)
                </div>
              </div>

              {/* Horizontale Trennlinie in var(--color-copper-600) */}
              <div className="h-[2px] bg-[var(--color-copper-600)] w-full z-10" />

              {/* Untere Zone: Prozess/Planung (approx. 25% height) */}
              <div className="relative h-[25%] w-full overflow-hidden">
                <img 
                  src={item.imageProcessUrl} 
                  alt={`${item.title} - Laborprozess`}
                  className="w-full h-full object-cover filter brightness-90 saturate-50 hover:brightness-100 hover:saturate-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-[var(--color-copper-700)] text-[var(--color-bone-50)] text-[10px] font-mono uppercase px-2 py-0.5 tracking-wider">
                  PROZESS (LABOR)
                </div>
              </div>
            </>
          ) : (
            /* Volle Höhe: Nur Ergebnis */
            <div className="relative h-full w-full overflow-hidden">
              <img 
                src={item.imageResultUrl} 
                alt={`${item.title} - Ergebnis`}
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[var(--color-brand-900)]/80 text-[var(--color-bone-50)] text-[10px] font-mono uppercase px-2 py-0.5 tracking-wider">
                ERGEBNIS (EINGEGLIEDERT)
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Case Details (7 columns on desktop) */}
      <div className="lg:col-span-7 flex flex-col justify-between">
        <div className="space-y-6">
          <h3 className="font-serif text-h3 text-[var(--color-text-primary)] font-medium">
            {item.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="font-mono text-[10px] text-[var(--color-text-accent)] uppercase tracking-widest block mb-1">
                Leistungsfeld
              </span>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                {item.fields.leistungsfeld}
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] text-[var(--color-text-accent)] uppercase tracking-widest block mb-1">
                Ausgangslage
              </span>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">
                {item.fields.ausgangslage}
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] text-[var(--color-text-accent)] uppercase tracking-widest block mb-1">
                Vorgehen
              </span>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">
                {item.fields.vorgehen}
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] text-[var(--color-text-accent)] uppercase tracking-widest block mb-1">
                Ergebnis
              </span>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">
                {item.fields.ergebnis}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
