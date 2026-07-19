import React from 'react';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

interface ProofPointItem {
  label: string;
  text: string;
}

interface ProfileInfo {
  initials: string;
  name: string;
  title: string;
  quote: string;
}

interface ProofPointsProps {
  overline: string;
  heading: string;
  points: ProofPointItem[];
  cta: { text: string; pageId: string };
  profile: ProfileInfo;
  onNavigate: (pageId: string) => void;
}

/**
 * PROOF POINTS COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Layout: Elegantes zweispaltiges Grid (Inhaber-Profil links, B2B-Proof-Points rechts).
 * - Proof-Points: Gerendert mit der `.card-facet` Klasse für abgeschrägtes Ecken-Design.
 * - Typografie: Zitate in 'Fraunces' (font-serif), Fakten in 'Inter' (font-sans) mit Mono-Schnittmarken.
 * - Kontrastreiches, ansprechendes B2B-Portrait ohne Stockfotos (Inhaber-Initialen-Avatar als Platzhalter).
 */
export default function ProofPoints({
  overline,
  heading,
  points,
  cta,
  profile,
  onNavigate
}: ProofPointsProps) {
  // Map index to a short technical code for aesthetic reasons
  const pointCodes = ['PERSÖNLICH', 'EXPERTISE', 'STANDORT'];
  const pointSources = ['Handelsregister Zürich', 'OCTC Alumni / UZH', 'Forchstrasse 261'];

  return (
    <section id="proof-points-section" className="py-16 md:py-24 bg-[var(--color-bg-canvas)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Owner Profile / Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {overline && <span className="text-overline block mb-3">{overline}</span>}
              <h2 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium tracking-tight mb-8">
                {heading}
              </h2>

              {/* Inhaber Statement Card */}
              <div className="bg-[var(--color-bg-surface)] border-l-2 border-[var(--color-interactive-accent)] p-8 mb-8 relative">
                <Icon name="quote" className="absolute top-4 right-4 text-[var(--color-slate-200)] opacity-40" size="2rem" />
                
                <p className="font-serif text-lg italic text-[var(--color-text-primary)] leading-relaxed mb-6 relative z-10">
                  "{profile.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  {/* Real Portrait Avatar */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-interactive-accent)] bg-[var(--color-brand-100)] shrink-0 shadow-sm">
                    <img
                      src="https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/refs/heads/main/thomas%20barandun.avif"
                      alt="Thomas Barandun Portrait"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-[var(--color-text-primary)]">
                      {profile.name}
                    </h4>
                    <p className="text-xs text-[var(--color-text-tertiary)] bg-[var(--color-bg-canvas)] px-2 py-0.5 rounded border border-[var(--color-border-subtle)] inline-block mt-1">
                      {profile.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div>
              <Button
                id="about-cta"
                variant="primary"
                onClick={() => onNavigate(cta.pageId)}
                iconRight="arrow-right"
              >
                {cta.text}
              </Button>
            </div>
          </div>

          {/* Right Column: B2B Proof Points (FacetCards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-1 gap-6">
            {points.map((point, index) => (
              <div 
                key={point.label}
                id={`proof-point-card-${index}`}
                className="card-facet flex flex-col justify-between p-8 hover:border-[var(--color-interactive-primary)] transition-all duration-300 reveal-on-scroll"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div>
                  {/* Tag / Meta in IBM Plex Mono */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-accent)] font-semibold">
                      {pointCodes[index] || 'CERTIFIED'}
                    </span>
                    <span className="font-mono text-xs text-[var(--color-text-tertiary)] uppercase">
                      REF-{100 + index}
                    </span>
                  </div>

                  {/* Benefit Label */}
                  <h3 className="font-sans text-base font-semibold text-[var(--color-text-primary)] mb-2">
                    {point.label}
                  </h3>

                  {/* Fact text */}
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {point.text}
                  </p>
                </div>

                {/* Source Verification Footer */}
                <div className="border-t border-[var(--color-border-subtle)] pt-3 flex items-center justify-between mt-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--color-text-tertiary)]">
                    Quelle: {pointSources[index]}
                  </span>
                  <Icon name="check" className="text-[var(--color-success-700)]" size="1rem" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
