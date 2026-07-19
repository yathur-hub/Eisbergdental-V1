import React, { useEffect } from 'react';
import { PageId, ValItem } from '../types';
import { homeContent } from '../content/pages/home';
import Hero from '../components/sections/Hero';
import ServiceOverview from '../components/sections/ServiceOverview';
import ProcessTeaser from '../components/sections/ProcessTeaser';
import ProofPoints from '../components/sections/ProofPoints';
import { updateDocumentMetadata } from '../lib/metadata';
import Button from '../components/ui/Button';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import Icon from '../components/ui/Icon';

interface StartseiteProps {
  onNavigate: (pageId: PageId, search?: string) => void;
  valItems?: ValItem[];
}

/**
 * STARTSEITE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Rendert die neue Premium-Startseite unter Verwendung der Design-Tokens aus tokens.css.
 * - Konsumiert das strukturierte homeContent-Objekt für vollständige Inhaltsabstraktion.
 * - Nutzt die spezialisierten Sektionskomponenten (Hero, ServiceOverview, ProcessTeaser, ProofPoints).
 * - Aktualisiert die SEO-Metadaten im useEffect.
 * - Integriert asymmetrische Visualisierungsakzente (WaterlineDivider, FacetCard-Raster).
 */
export default function Startseite({ onNavigate, valItems }: StartseiteProps) {
  useEffect(() => {
    updateDocumentMetadata(homeContent.seo.title, homeContent.seo.description);
  }, []);

  const {
    hero,
    kurzpositionierung,
    schwerpunkte,
    workflow,
    trust,
    differenzierung,
    ansprechpartner,
    abschlussCta
  } = homeContent;

  const handleNavigation = (pageId: string, search?: string) => {
    onNavigate(pageId as PageId, search);
  };

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <Hero
        badge={hero.badge}
        heading={hero.heading}
        subline={hero.subline}
        ctaPrimary={hero.ctaPrimary}
        ctaSecondary={hero.ctaSecondary}
        onNavigate={handleNavigation}
      />

      {/* 2. KURZPOSITIONIERUNG SECTION */}
      <section id="kurzpositionierung" className="py-16 md:py-24 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-canvas)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side - Positionierungs-Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-overline block">
                {kurzpositionierung.card.overline}
              </span>
              <h2 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium tracking-tight">
                {kurzpositionierung.heading}
              </h2>
              
              <p className="text-body text-[var(--color-text-secondary)] leading-relaxed font-sans">
                {kurzpositionierung.text}
              </p>
              
              <div className="pt-4">
                <Button
                  id="kurzpos-cta"
                  variant="ghost"
                  onClick={() => handleNavigation(kurzpositionierung.textLink.pageId)}
                  iconRight="arrow-right"
                  className="text-sm font-semibold text-[var(--color-interactive-primary)]"
                >
                  {kurzpositionierung.textLink.text}
                </Button>
              </div>
            </div>

            {/* Right side - Design-Statement-Card with brand visual */}
            <div className="lg:col-span-5 relative overflow-hidden border border-[var(--color-border-default)] group bg-[var(--color-bg-surface)] flex flex-col justify-between">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--color-brand-100)] relative">
                <img
                  src="https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/refs/heads/main/Eisbergdental.avif"
                  alt="Eisberg Dental - Zahn im Eisberg Visual"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="font-mono text-[9px] text-[var(--color-text-accent)] uppercase tracking-widest font-semibold">
                    STRENG OFF-LINE FIRST
                  </div>
                  <p className="font-serif text-base italic text-[var(--color-text-primary)] leading-relaxed">
                    "{kurzpositionierung.card.quote}"
                  </p>
                </div>
                
                <div className="font-mono text-[10px] text-[var(--color-text-tertiary)] pt-4 mt-4 border-t border-[var(--color-border-subtle)] flex justify-between">
                  <span>{kurzpositionierung.card.location}</span>
                  <span>{kurzpositionierung.card.est}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SCHWERPUNKTE (ServiceOverview) */}
      <ServiceOverview
        heading={schwerpunkte.heading}
        items={schwerpunkte.items}
        cta={schwerpunkte.cta}
        onNavigate={(id) => handleNavigation(id)}
      />

      {/* 4. WORKFLOW (ProcessTeaser) */}
      <ProcessTeaser
        overline={workflow.overline}
        heading={workflow.heading}
        description={workflow.description}
        steps={workflow.steps}
        cta={workflow.cta}
        onNavigate={(id) => handleNavigation(id)}
      />

      {/* 5. TRUST (ProofPoints) */}
      <ProofPoints
        overline={trust.overline}
        heading={trust.heading}
        points={trust.points}
        cta={trust.cta}
        profile={trust.profile}
        onNavigate={(id) => handleNavigation(id)}
      />

      {/* 6. DIFFERENZIERUNG SECTION */}
      <section id="differenzierung" className="py-16 md:py-24 bg-[var(--color-bg-canvas)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <span className="text-overline block mb-3">
              {differenzierung.overline}
            </span>
            
            <h2 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium tracking-tight mb-6">
              {differenzierung.heading}
            </h2>
            
            <p className="text-body text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
              {differenzierung.text}
            </p>
          </div>
        </div>
      </section>

      {/* 7. DIREKTKONTAKT & ANSPECHPARTNER */}
      <section id="ansprechpartner" className="py-16 md:py-24 bg-[var(--color-bg-canvas)]">
        <div className="container">
          <div className="card bg-[var(--color-bg-surface)] p-8 md:p-12 border border-[var(--color-border-default)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-8 space-y-4">
                <span className="text-overline block">
                  {ansprechpartner.overline}
                </span>
                <h3 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium tracking-tight">
                  {ansprechpartner.heading}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                  {ansprechpartner.text}
                </p>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <Button
                  id="ansprechpartner-cta"
                  variant="primary"
                  onClick={() => handleNavigation(ansprechpartner.cta.pageId, ansprechpartner.cta.search)}
                  iconRight="arrow-right"
                  className="w-full md:w-auto"
                >
                  {ansprechpartner.cta.text}
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. ABSCHLUSS CTA */}
      <section 
        className="py-20 md:py-28 relative overflow-hidden text-center text-[var(--color-text-primary-ondark)] bg-[var(--color-bg-canvas-dark)]"
        style={{ background: 'var(--gradient-aurora-violet)' }}
      >
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

        {/* Subtle highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-radial-gradient from-[rgba(241,223,203,0.05)] to-transparent pointer-events-none blur-3xl" />
        
        <div className="container relative z-10 max-w-3xl space-y-6">
          <h2 className="font-serif text-h2 text-[var(--color-text-primary-ondark)] font-medium tracking-tight">
            {abschlussCta.heading}
          </h2>
          
          <p className="text-sm sm:text-base text-[var(--color-text-secondary-ondark)] max-w-xl mx-auto leading-relaxed">
            {abschlussCta.text}
          </p>

          <WaterlineDivider accent className="my-8 max-w-xs mx-auto" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              id="abschluss-cta-primary"
              variant="primary"
              onClick={() => handleNavigation(abschlussCta.ctaPrimary.pageId, abschlussCta.ctaPrimary.search)}
              iconRight="arrow-right"
              className="w-full sm:w-auto"
            >
              {abschlussCta.ctaPrimary.text}
            </Button>
            
            <Button
              id="abschluss-cta-secondary"
              variant="secondary"
              onClick={() => handleNavigation(abschlussCta.ctaSecondary.pageId, abschlussCta.ctaSecondary.search)}
              className="w-full sm:w-auto border-[var(--color-brand-300)] text-[var(--color-text-primary-ondark)] hover:bg-[rgba(255,255,255,0.05)]"
            >
              {abschlussCta.ctaSecondary.text}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
