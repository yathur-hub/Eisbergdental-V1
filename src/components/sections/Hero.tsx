import React from 'react';
import Button from '../ui/Button';

interface HeroProps {
  badge: string;
  heading: string;
  subline: string;
  ctaPrimary: { text: string; pageId: string; search?: string };
  ctaSecondary: { text: string; pageId: string };
  onNavigate: (pageId: string, search?: string) => void;
}

/**
 * HERO COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Hintergrund: var(--gradient-depth) (Tiefer Premium-Dunkelverlauf).
 * - Textfarbe: Kontraststarkes Off-White auf dunklem Hintergrund (var(--color-text-primary-ondark)).
 * - Überschrift: H1 in der Serifenschrift 'Fraunces' (font-serif) für B2B-Eleganz.
 * - Call to Action: Ein prominenter Akzent-Button (btn-accent) zur Konversion.
 * - Strikte Einhaltung des B2B-Layouts mit viel negativem Raum und sanfter Animation.
 */
export default function Hero({
  badge,
  heading,
  subline,
  ctaPrimary,
  ctaSecondary,
  onNavigate
}: HeroProps) {
  return (
    <section 
      id="hero-section"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32 scroll-parallax-aurora bg-[var(--color-bg-canvas-dark)]"
      style={{ background: 'var(--gradient-aurora)' }}
    >
      {/* Decorative subtle ambient highlight */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-radial-gradient from-[var(--color-brand-500)] to-transparent opacity-5 pointer-events-none blur-3xl" />
      
      {/* Fine decorative noise/grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Decorative Schichtlinien-Textur */}
      <div className="schichtlinien-container" aria-hidden="true">
        <div className="schichtlinie" />
        <div className="schichtlinie" />
        <div className="schichtlinie" />
        <div className="schichtlinie" />
        <div className="schichtlinie" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, subheadline, actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Tag / Badge */}
            {badge && (
              <div className="inline-block animate-fade-in">
                <span className="text-overline px-3 py-1 bg-[rgba(241,223,203,0.1)] border border-[rgba(241,223,203,0.15)] text-[var(--color-copper-500)] text-xs font-semibold tracking-wider">
                  {badge}
                </span>
              </div>
            )}

            {/* Heading */}
            <h1 className="font-serif text-h1 hero-gradient-text font-semibold tracking-tight leading-tight max-w-3xl animate-slide-in">
              {heading}
            </h1>

            {/* Subline / Description */}
            <p className="text-lead text-[var(--color-text-secondary-ondark)] max-w-2xl leading-relaxed font-sans opacity-95 animate-fade-in [animation-delay:100ms]">
              {subline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in [animation-delay:200ms] pt-2">
              <Button
                id="hero-cta-primary"
                variant="primary"
                onClick={() => onNavigate(ctaPrimary.pageId, ctaPrimary.search)}
                iconRight="arrow-right"
                className="w-full sm:w-auto"
              >
                {ctaPrimary.text}
              </Button>
              
              <Button
                id="hero-cta-secondary"
                variant="secondary"
                onClick={() => onNavigate(ctaSecondary.pageId)}
                className="w-full sm:w-auto border-[var(--color-brand-300)] text-[var(--color-text-primary-ondark)] hover:bg-[rgba(255,255,255,0.05)]"
              >
                {ctaSecondary.text}
              </Button>
            </div>
          </div>

          {/* Right Column: Thomas Barandun image & description */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start animate-fade-in [animation-delay:300ms]">
            <div className="w-full max-w-[380px] lg:max-w-none bg-[var(--color-brand-900)]/40 border border-[var(--color-brand-700)] rounded-sm p-4 space-y-4">
              <div className="aspect-[4/5] w-full overflow-hidden border border-[var(--color-brand-700)] bg-[var(--color-brand-950)] relative">
                <img
                  src="https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/refs/heads/main/thomas%20barandun.avif"
                  alt="Thomas Barandun Portrait"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-950)]/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="space-y-2">
                <div className="font-mono text-[9px] text-[var(--color-copper-500)] uppercase tracking-widest font-semibold">
                  Thomas Barandun — Inhaber
                </div>
                <p className="font-sans text-xs sm:text-sm text-[var(--color-text-secondary-ondark)] leading-relaxed">
                  Thomas Barandun gehört zu den führenden Zahntechnikern Europas. Dort, wo Standardlösungen aufhören, beginnt seine Stärke: individuelle High-End-Arbeiten, die Funktion, Ästhetik und modernste Technologie vereinen.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
