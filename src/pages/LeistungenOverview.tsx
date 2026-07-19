import React, { useEffect } from 'react';
import { PageId, ValItem } from '../types';
import { leistungenUebersichtContent } from '../content/pages/leistungen-uebersicht';
import { updateDocumentMetadata } from '../lib/metadata';
import ServiceOverview from '../components/sections/ServiceOverview';
import Button from '../components/ui/Button';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import Icon from '../components/ui/Icon';

interface LeistungenOverviewProps {
  onNavigate: (pageId: PageId) => void;
  valItems?: ValItem[];
}

/**
 * LEISTUNGEN OVERVIEW PAGE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Konsumiert leistungenUebersichtContent für alle Übersichtsdaten.
 * - Nutzt die ServiceOverview-Sektionskomponente für die Hauptleistungen.
 * - Rendert nicht verifizierte/blockierte B2B-Angebotsleistungen (Herausnehmbarer Zahnersatz, Reparaturen)
 *   klar deklariert als "In Verifizierung" (Sitemap-Sperren-Indikation), um B2B-Klarheit zu schaffen.
 * - Einheitliche Typografie mit Fraunces/Inter und Einbettung von WaterlineDividern.
 */
export default function LeistungenOverview({ onNavigate, valItems }: LeistungenOverviewProps) {
  useEffect(() => {
    updateDocumentMetadata(leistungenUebersichtContent.seo.title, leistungenUebersichtContent.seo.description);
  }, []);

  const { intro, items, transition, abschlussCta } = leistungenUebersichtContent;

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen animate-fade-in">
      
      {/* 1. INTRO / HEADER */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]">
        <div className="container max-w-4xl">
          <span className="text-overline block mb-3">
            LEISTUNGSPORTFOLIO
          </span>
          <h1 className="font-serif text-h1 text-[var(--color-text-primary)] font-medium tracking-tight mb-6">
            {intro.heading}
          </h1>
          <p className="text-lead text-[var(--color-text-secondary)] font-sans leading-relaxed max-w-3xl">
            {intro.text}
          </p>
        </div>
      </section>

      {/* 2. CHOSEN CORE SERVICES (ServiceOverview) */}
      <ServiceOverview
        heading="Unsere Kernschwerpunkte"
        items={items}
        onNavigate={(id) => onNavigate(id as PageId)}
      />

      {/* 3. BLOCKED / SITEMAP OPTIONAL ENTRIES */}
      <section className="py-12 md:py-16 bg-[var(--color-bg-canvas)] border-t border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="mb-8 max-w-2xl">
            <h3 className="font-sans text-base font-semibold text-[var(--color-text-primary)]">
              Weitere Leistungen (In Verifizierung)
            </h3>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-1">
              Diese Positionen aus der Sitemap befinden sich aktuell in der internen Abklärung durch Eisberg Dental und sind vorübergehend blockiert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Herausnehmbarer Zahnersatz - Blocked */}
            <div
              id="blocked-service-1"
              className="p-6 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex items-center justify-between opacity-75 select-none relative"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[var(--color-bg-canvas)] text-[var(--color-text-tertiary)] flex items-center justify-center font-mono text-xs border border-[var(--color-border-subtle)]">
                  ?
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[var(--color-text-primary)]">
                    Herausnehmbarer Zahnersatz
                  </h4>
                  <p className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">
                    Modellguss, Totalprothetik — Portfolioabdeckung in Verifizierung
                  </p>
                </div>
              </div>
              <span className="text-[9px] font-mono bg-[var(--color-bg-canvas)] border border-[var(--color-border-subtle)] text-[var(--color-text-accent)] px-2 py-0.5 rounded-none shrink-0 uppercase tracking-wider font-semibold">
                Sperre
              </span>
            </div>

            {/* Reparaturen - Blocked */}
            <div
              id="blocked-service-2"
              className="p-6 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex items-center justify-between opacity-75 select-none relative"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[var(--color-bg-canvas)] text-[var(--color-text-tertiary)] flex items-center justify-center font-mono text-xs border border-[var(--color-border-subtle)]">
                  ?
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[var(--color-text-primary)]">
                    Reparaturen & Express-Service
                  </h4>
                  <p className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">
                    SLA-Abwicklungsgeschwindigkeit noch nicht bestätigt
                  </p>
                </div>
              </div>
              <span className="text-[9px] font-mono bg-[var(--color-bg-canvas)] border border-[var(--color-border-subtle)] text-[var(--color-text-accent)] px-2 py-0.5 rounded-none shrink-0 uppercase tracking-wider font-semibold">
                Sperre
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSITION / HOW WE COOPERATE */}
      <section className="py-16 bg-[var(--color-bg-surface)] border-y border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="card bg-[var(--color-bg-canvas)] p-8 md:p-10 border border-[var(--color-border-default)] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-xl">
              <h3 className="font-sans text-base font-semibold text-[var(--color-text-primary)] mb-2">
                Datenübermittlung und Qualitätsanspruch
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {transition.text}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <Button
                id="transition-workflow"
                variant="primary"
                onClick={() => onNavigate(transition.ctaWorkflow.pageId as PageId)}
                iconRight="arrow-right"
                className="w-full sm:w-auto"
              >
                {transition.ctaWorkflow.text}
              </Button>
              
              <Button
                id="transition-qualitaet"
                variant="secondary"
                onClick={() => onNavigate(transition.ctaQualitaet.pageId as PageId)}
                className="w-full sm:w-auto"
              >
                {transition.ctaQualitaet.text}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA SECTION */}
      <section 
        className="py-20 md:py-24 text-center relative text-[var(--color-text-primary-ondark)] bg-[var(--color-bg-canvas-dark)]"
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

        <div className="container max-w-3xl space-y-6 relative z-10">
          <h2 className="font-serif text-h2 text-[var(--color-text-primary-ondark)] font-medium tracking-tight">
            {abschlussCta.heading}
          </h2>
          
          <p className="text-sm md:text-base text-[var(--color-text-secondary-ondark)] max-w-lg mx-auto leading-relaxed">
            {abschlussCta.text}
          </p>

          <WaterlineDivider accent className="max-w-xs mx-auto my-6" />

          <div className="pt-2">
            <Button
              id="overview-abschluss-cta"
              variant="primary"
              onClick={() => onNavigate(abschlussCta.pageId as PageId)}
              iconRight="arrow-right"
            >
              {abschlussCta.ctaText}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
