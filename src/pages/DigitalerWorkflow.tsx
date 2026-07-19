import React, { useState, useEffect } from 'react';
import { PageId, ValItem } from '../types';
import { workflowContent } from '../content/pages/workflow';
import { updateDocumentMetadata } from '../lib/metadata';
import ProcessSteps8 from '../components/sections/ProcessSteps8';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import Button from '../components/ui/Button';
import { Shield, Info, HelpCircle } from 'lucide-react';

interface DigitalerWorkflowProps {
  onNavigate: (pageId: PageId, search?: string) => void;
  valItems?: ValItem[];
}

/**
 * DIGITALER WORKFLOW PAGE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Schweizer B2B Präzisionsthematik für digitale Zahnmedizin.
 * - Nutzt ProcessSteps8 für den vollen 8-Schritte-Workflow.
 * - Strikte Tonalität, keine spekulativen Dateispezifikationen.
 */
export default function DigitalerWorkflow({ onNavigate }: DigitalerWorkflowProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    updateDocumentMetadata(workflowContent.seo.title, workflowContent.seo.description);
  }, []);

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen">
      
      {/* 1. Hero / Intro Section */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <span className="text-overline block">
              Präzision & Ablauf
            </span>
            <h1 className="font-serif text-h1 text-[var(--color-text-primary)] font-medium tracking-tight">
              {workflowContent.intro.heading}
            </h1>
            <p className="text-lead text-[var(--color-text-secondary)]">
              {workflowContent.intro.text}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Process Section */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <span className="text-overline block mb-6">Acht strukturierte Laborschritte</span>
          <ProcessSteps8 steps={workflowContent.steps} />
        </div>
      </section>

      {/* 3. Supported Systems Section */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-overline block">Digitale Anbindung</span>
              <h2 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium tracking-tight">
                {workflowContent.datenuebermittlung.heading}
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {workflowContent.datenuebermittlung.text}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] p-6 md:p-8 space-y-4">
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-text-accent)]">
                  CAD/CAM Verfahren
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Für die Konstruktion und Fertigung setzen wir moderne digitale CAD/CAM-Verfahren ein. Wie Sie Ihre Falldaten am einfachsten und sicher übermitteln, klären wir direkt mit Ihnen.
                </p>
              </div>
              
              <div className="aspect-[16/9] w-full overflow-hidden border border-[var(--color-border-default)] group relative">
                <img
                  src="https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/main/Zahntechnik.png"
                  alt="Digitale Zahntechnik und CAD/CAM Technologie"
                  className="w-full h-full object-cover transition-all duration-500 ease-out scale-100 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Data Privacy Notice */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-subtle)]">
        <div className="container max-w-3xl space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[var(--color-copper-700)]">
              <Shield size={20} />
              <h2 className="font-serif text-h3 font-medium">
                {workflowContent.datenschutz.heading}
              </h2>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {workflowContent.datenschutz.intro}
            </p>
          </div>

          {/* Structured points with bold inline labels */}
          <div className="space-y-6 border-l border-[var(--color-border-default)] pl-6 py-1">
            {workflowContent.datenschutz.points.map((point, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  {point.label}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4 border-t border-[var(--color-border-subtle)]">
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">
              {workflowContent.datenschutz.note}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {workflowContent.datenschutz.outro}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button
                id="datenschutz-cta-primary"
                variant="primary"
                onClick={() => onNavigate('kontakt', '?anlass=workflow')}
                className="text-xs font-bold uppercase tracking-wider"
              >
                Übertragungsweg klären
              </Button>
              <button
                id="datenschutz-cta-secondary"
                onClick={() => onNavigate('datenschutz')}
                className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-accent)] hover:underline cursor-pointer"
              >
                Datenschutzerklärung ansehen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Analog Workflow Section */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-serif text-h3 font-medium text-[var(--color-text-primary)]">
            {workflowContent.analog.heading}
          </h2>
          
          <div className="space-y-4">
            {workflowContent.analog.paragraphs.map((p, index) => (
              <p key={index} className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="pt-4">
            <Button
              id="analog-cta"
              variant="secondary"
              onClick={() => onNavigate('kontakt', '?anlass=workflow')}
              className="text-xs font-bold uppercase tracking-wider"
            >
              Analogen Übergabeweg klären
            </Button>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-subtle)]">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-h3 text-center mb-10 font-medium">
            Workflow FAQ
          </h2>
          <div className="space-y-4">
            {workflowContent.faqs.map((faq, idx) => (
              <div key={idx} className="border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)]">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center cursor-pointer hover:bg-[var(--color-bg-surface)] transition duration-250"
                >
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {faq.question}
                  </span>
                  <span className="text-[var(--color-text-accent)] text-xs font-mono ml-4 shrink-0">
                    {openFaq === idx ? '[ SCHLIESSEN ]' : '[ ÖFFNEN ]'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="p-5 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]/50 text-sm text-[var(--color-text-secondary)] space-y-3 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Action CTA Banner */}
      <section 
        className="py-20 text-center relative text-[var(--color-text-primary-ondark)] bg-[var(--color-bg-canvas-dark)]"
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

        <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
          <h2 className="font-serif text-h2 text-[var(--color-text-primary-ondark)] font-medium">
            {workflowContent.abschlussCta.heading}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary-ondark)] max-w-lg mx-auto">
            {workflowContent.abschlussCta.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              id="workflow-cta-primary"
              variant="primary"
              onClick={() => onNavigate(workflowContent.abschlussCta.ctaPrimary.pageId as PageId, workflowContent.abschlussCta.ctaPrimary.search)}
              className="px-8 font-semibold"
            >
              {workflowContent.abschlussCta.ctaPrimary.text}
            </Button>
            <Button
              id="workflow-cta-secondary"
              variant="secondary"
              onClick={() => onNavigate(workflowContent.abschlussCta.ctaSecondary.pageId as PageId)}
              className="border-[var(--color-brand-300)] text-[var(--color-text-primary-ondark)] hover:bg-[rgba(255,255,255,0.05)] px-8 font-semibold"
            >
              {workflowContent.abschlussCta.ctaSecondary.text}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
