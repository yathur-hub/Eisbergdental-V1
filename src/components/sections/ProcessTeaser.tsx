import React from 'react';
import Button from '../ui/Button';
import WaterlineDivider from '../ui/WaterlineDivider';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTeaserProps {
  overline: string;
  heading: string;
  description: string;
  steps: ProcessStep[];
  cta: { text: string; pageId: string };
  onNavigate: (pageId: string) => void;
}

/**
 * PROCESS TEASER COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Hintergrund: Elegantes warmes Off-White (var(--color-bg-surface)).
 * - Trenner: Strukturelle Waterline-Dividers unterteilen das Layout im 1:3-Verhältnis.
 * - Nummerierung: Grosse Sequenznummern (01, 02, 03) in 'IBM Plex Mono' (text-data, var(--color-text-accent)).
 * - B2B-Prozessklarheit: Reduzierter Informationsballast, klar strukturierte, verständliche Ablauflogik.
 */
export default function ProcessTeaser({
  overline,
  heading,
  description,
  steps,
  cta,
  onNavigate
}: ProcessTeaserProps) {
  return (
    <section id="process-teaser-section" className="py-16 md:py-24 bg-[var(--color-bg-surface)] border-y border-[var(--color-border-subtle)]">
      <div className="container">
        {/* Intro Section */}
        <div className="max-w-3xl mb-12">
          {overline && <span className="text-overline block mb-3">{overline}</span>}
          <h2 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium tracking-tight mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-body text-[var(--color-text-secondary)]">
              {description}
            </p>
          )}
        </div>

        {/* Elegant Accent Divider line */}
        <WaterlineDivider className="mb-12" />

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col justify-between group">
              <div>
                {/* Large Serial Number in IBM Plex Mono */}
                <div className="font-mono text-5xl font-light text-[var(--color-text-accent)] mb-4 select-none opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </div>
                
                {/* Step Title */}
                <h3 className="font-sans text-h4 font-semibold text-[var(--color-text-primary)] mb-3">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-prose">
                  {step.description}
                </p>
              </div>

              {/* Mobile-only divider between steps */}
              {idx < steps.length - 1 && (
                <div className="block md:hidden border-b border-[var(--color-border-subtle)] my-6" />
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA Link */}
        <div className="flex justify-center md:justify-start pt-4 border-t border-[var(--color-border-subtle)]">
          <Button
            id="process-detail-cta"
            variant="ghost"
            onClick={() => onNavigate(cta.pageId)}
            iconRight="arrow-right"
            className="text-sm font-semibold tracking-wide hover:translate-x-1 transition-transform duration-200"
          >
            {cta.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
