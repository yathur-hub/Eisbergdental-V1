import React from 'react';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

/**
 * TIMELINE COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Reduziertes Schweizer Design mit asymmetrischem Layout.
 * - Die Jahre stehen im kräftigen 'IBM Plex Mono' (text-data, var(--color-text-accent)).
 * - Feine vertikale Linie verbindet die Ereignisse.
 * - Extrem flache Hierarchie, grosszügige Abstände für maximale Lesbarkeit.
 */
export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative border-l border-[var(--color-border-default)] pl-6 ml-4 sm:ml-6 space-y-12 py-2">
      {events.map((event, index) => (
        <div key={index} className="relative group">
          {/* Timeline bullet (quadratisch, passend zum B2B-Thema) */}
          <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-[var(--color-bg-canvas)] border-2 border-[var(--color-copper-600)] transition-transform group-hover:scale-125 duration-200" />

          {/* Event Content */}
          <div className="space-y-1.5">
            {/* Year Tag */}
            <span className="font-mono text-xs font-semibold text-[var(--color-text-accent)] uppercase tracking-wider block">
              {event.year}
            </span>
            
            {/* Event Title */}
            <h3 className="font-serif text-h4 font-medium text-[var(--color-text-primary)]">
              {event.title}
            </h3>
            
            {/* Event Description */}
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-prose">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
