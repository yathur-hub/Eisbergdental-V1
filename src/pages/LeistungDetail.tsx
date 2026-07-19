import React, { useEffect } from 'react';
import { PageId, ValItem } from '../types';
import { implantatprothetikContent } from '../content/services/implantatprothetik';
import { fullArchContent } from '../content/services/full-arch';
import { pinkWhiteContent } from '../content/services/pink-white-aesthetik';
import { vollkeramikContent } from '../content/services/vollkeramik';
import { ServiceContent } from '../content/services/types';
import { updateDocumentMetadata } from '../lib/metadata';

// Sections & content blocks
import Indications from '../components/content/Indications';
import ProcessSteps from '../components/content/ProcessSteps';
import FaqAccordion from '../components/content/FaqAccordion';
import RelatedServices from '../components/content/RelatedServices';
import Button from '../components/ui/Button';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import Icon from '../components/ui/Icon';

interface LeistungDetailProps {
  pageId: PageId;
  onNavigate: (pageId: PageId, search?: string) => void;
  valItems?: ValItem[];
}

const serviceConfigs: Record<string, ServiceContent> = {
  'implantatprothetik': implantatprothetikContent,
  'full-arch': fullArchContent,
  'pink-white-aesthetik': pinkWhiteContent,
  'vollkeramik': vollkeramikContent
};

/**
 * LEISTUNG DETAIL PAGE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Strukturierte Inhaltsabstraktion: Konsumiert statisch typisierte ServiceContent-Objekte.
 * - Flexibilität: Unterstützt blockierte Platzhalterseiten (herausnehmbarer Zahnersatz, Reparaturen)
 *   und die vier aktiven Kernleistungen.
 * - Integration: Bindet die spezialisierten Inhaltskomponenten (Indications, ProcessSteps, FaqAccordion, RelatedServices) ein.
 * - Visuelles Finish: Nutzt das helle Off-White B2B Schema mit asymmetrischem Layout und Waterline-Dividern.
 */
export default function LeistungDetail({ pageId, onNavigate, valItems }: LeistungDetailProps) {
  
  // 1. Handle Blocked / Placeholder Pages
  const isBlocked = pageId === 'herausnehmbarer-zahnersatz' || pageId === 'reparaturen';

  useEffect(() => {
    if (isBlocked) {
      updateDocumentMetadata(
        isBlocked ? (pageId === 'herausnehmbarer-zahnersatz' ? 'Herausnehmbarer Zahnersatz' : 'Reparaturen & Express-Service') : 'Leistungsdetail',
        'Zahntechnische Leistungen von Eisberg Dental.'
      );
    } else {
      const config = serviceConfigs[pageId];
      if (config) {
        updateDocumentMetadata(config.seo.title, config.seo.description);
      }
    }
  }, [pageId, isBlocked]);

  if (isBlocked) {
    const isHerausnehmbar = pageId === 'herausnehmbarer-zahnersatz';
    return (
      <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen py-16 md:py-24 animate-fade-in">
        <div className="container max-w-4xl">
          {/* Back button */}
          <Button
            id="back-to-services-blocked"
            variant="ghost"
            onClick={() => onNavigate('leistungen')}
            iconLeft="arrow-left"
            className="text-xs mb-8 pl-0 text-[var(--color-text-secondary)] hover:text-[var(--color-interactive-primary)]"
          >
            Zurück zur Übersicht
          </Button>

          {/* Blocked Box */}
          <div className="card bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] p-8 md:p-12 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase bg-[var(--color-bg-canvas)] border border-[var(--color-border-subtle)] text-[var(--color-text-accent)] px-3 py-1 font-semibold tracking-wider">
                In Vorbereitung
              </span>
              
              <h1 className="font-serif text-h1 text-[var(--color-text-primary)] font-medium tracking-tight">
                {isHerausnehmbar ? 'Herausnehmbarer Zahnersatz' : 'Reparaturen & Express-Service'}
              </h1>
              
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-sans">
                Dieses Dokument befindet sich aktuell in Vorbereitung. Kontaktieren Sie uns – wir stellen Ihnen die gewünschten Informationen gerne direkt zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Handle core verified pages
  const config = serviceConfigs[pageId];

  if (!config) {
    return (
      <div className="p-16 text-center text-[var(--color-text-tertiary)] bg-[var(--color-bg-canvas)]">
        <p className="mb-4">Leistung nicht gefunden.</p>
        <Button onClick={() => onNavigate('leistungen')} variant="primary">Zurück zur Übersicht</Button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen pb-16 md:pb-24 animate-fade-in">
      
      {/* 2.1 INTRO SECTION */}
      <section className="py-12 md:py-16 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-subtle)]">
        <div className="container max-w-4xl">
          <Button
            id="back-to-services-active"
            variant="ghost"
            onClick={() => onNavigate('leistungen')}
            iconLeft="arrow-left"
            className="text-xs mb-6 pl-0 text-[var(--color-text-secondary)] hover:text-[var(--color-interactive-primary)]"
          >
            Zurück zur Übersicht
          </Button>

          <div className="space-y-4">
            <span className="text-overline block">
              SPEZIALISIERUNG
            </span>
            <h1 className="font-serif text-h1 text-[var(--color-text-primary)] font-semibold tracking-tight">
              {config.title}
            </h1>
            <p className="text-sm font-mono text-[var(--color-text-tertiary)] tracking-wide uppercase">
              {config.seo.description}
            </p>
            
            <WaterlineDivider className="my-4" />
            
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed font-sans pt-2">
              {config.definition}
            </p>
          </div>
        </div>
      </section>

      {/* 2.2 MAIN CONTENT SECTION */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          
          {/* A. INDICATIONS BLOCK */}
          <Indications indications={config.indications} />

          {/* B. TECHNICAL SPECIFICATIONS GRID */}
          <div className="my-16">
            <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-8">
              <h3 className="font-serif text-h3 text-[var(--color-text-primary)] font-medium">
                Technische Spezifikationen
              </h3>
              <p className="text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider mt-1">
                Materialien, Abwicklung und Präzision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service */}
              <div className="space-y-3 p-6 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)]">
                <h4 className="font-mono text-xs font-bold text-[var(--color-text-accent)] uppercase tracking-wider">
                  Laborleistung
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {config.specifications.service}
                </p>
              </div>

              {/* Materials */}
              <div className="space-y-3 p-6 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)]">
                <h4 className="font-mono text-xs font-bold text-[var(--color-text-accent)] uppercase tracking-wider">
                  Werkstoffe
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {config.specifications.materials}
                </p>
              </div>

              {/* Technology */}
              <div className="space-y-3 p-6 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)]">
                <h4 className="font-mono text-xs font-bold text-[var(--color-text-accent)] uppercase tracking-wider">
                  Technologien
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {config.specifications.technology}
                </p>
              </div>
            </div>
          </div>

          {/* C. DETAILED PROCESS STEPS */}
          <ProcessSteps steps={config.steps} />

          {/* D. CLINICAL / PRACTICAL BENEFIT */}
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-[var(--color-bg-surface)] border border-[var(--color-border-default)]">
              <span className="font-mono text-[10px] text-[var(--color-text-accent)] tracking-wider block uppercase mb-3 font-semibold">
                Nutzwert für die Praxis
              </span>
              <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {config.benefits.practice}
              </p>
            </div>

            <div className="p-8 bg-[var(--color-bg-surface)] border border-[var(--color-border-default)]">
              <span className="font-mono text-[10px] text-[var(--color-text-accent)] tracking-wider block uppercase mb-3 font-semibold">
                Nutzwert für Patienten
              </span>
              <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {config.benefits.patient}
              </p>
            </div>
          </div>

          {/* E. QUALITY & TRUST STATEMENT */}
          <div className="my-12 p-8 bg-[var(--color-bg-surface)] border-l-2 border-[var(--color-success-700)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-xl">
              <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                Qualitätssicherung
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {config.qualityText}
              </p>
            </div>
            
            <Button
              id="quality-safety-cta"
              variant="secondary"
              onClick={() => onNavigate('qualitaet-sicherheit')}
              className="text-xs shrink-0 w-full md:w-auto"
            >
              Mehr zu Qualität & Sicherheit
            </Button>
          </div>

          {/* F. FAQS ACCORDION */}
          <FaqAccordion faqs={config.faqs} />

          {/* G. RELATED SERVICES */}
          <RelatedServices
            related={config.related}
            onNavigate={(id) => onNavigate(id as PageId)}
          />

          {/* H. CLOSING CTA BLOCK */}
          <div className="card bg-[var(--color-bg-surface)] p-8 md:p-12 border border-[var(--color-border-default)] text-center my-16 space-y-6">
            <h3 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium">
              {config.cta.heading}
            </h3>
            <p className="font-sans text-sm md:text-base text-[var(--color-text-secondary)] max-w-prose mx-auto">
              {config.cta.text}
            </p>
            
            <WaterlineDivider className="max-w-xs mx-auto" />
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                id="active-cta-primary"
                variant="accent"
                onClick={() => onNavigate(config.cta.primary.pageId as PageId, config.cta.primary.search)}
                iconRight="arrow-right"
              >
                {config.cta.primary.text}
              </Button>
              
              <Button
                id="active-cta-secondary"
                variant="secondary"
                onClick={() => onNavigate(config.cta.secondary.pageId as PageId)}
              >
                {config.cta.secondary.text}
              </Button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
