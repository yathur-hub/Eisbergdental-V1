import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

/**
 * PROCESS STEPS COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Struktur: Vertikale Prozesskette mit einer klaren, feinen Schnittkantenlinie (border-l-1.5).
 * - Nummerierung: Technische Indikationen in 'IBM Plex Mono' (text-data, var(--color-text-accent)).
 * - Ausrichtung: Präzises Spacing und klare Lesbarkeit für komplexe zahntechnische Laborabläufe.
 */
export default function ProcessSteps({ steps }: ProcessStepsProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div id="process-steps-component" className="my-12">
      <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-8">
        <h3 className="font-serif text-h3 text-[var(--color-text-primary)] font-medium">
          Ablauf & Zusammenarbeit
        </h3>
        <p className="text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider mt-1">
          Schritt-für-Schritt-Prozess der Laborfertigung
        </p>
      </div>

      <div className="relative pl-6 md:pl-8 border-l border-[var(--color-border-default)] ml-4 md:ml-6 flex flex-col gap-8 md:gap-10">
        {steps.map((step, index) => {
          const stepNum = String(index + 1).padStart(2, '0');
          return (
            <div 
              key={index} 
              id={`process-step-node-${index}`}
              className="relative group"
            >
              {/* Timeline dot showing step number */}
              <div className="absolute top-1 -left-[35px] md:-left-[43px] w-6 h-6 md:w-8 md:h-8 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] group-hover:border-[var(--color-interactive-accent)] rounded-none flex items-center justify-center transition-colors">
                <span className="font-mono text-[10px] md:text-xs text-[var(--color-text-accent)] font-semibold">
                  {stepNum}
                </span>
              </div>

              <div>
                <h4 className="font-sans text-base font-semibold text-[var(--color-text-primary)] mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
