import React, { useEffect } from 'react';
import { PageId, ValItem } from '../types';
import { referenzenContent } from '../content/pages/referenzen';
import { updateDocumentMetadata } from '../lib/metadata';
import CaseStudy from '../components/content/CaseStudy';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import Button from '../components/ui/Button';
import { Info, ShieldAlert } from 'lucide-react';

interface ReferenzenProps {
  onNavigate: (pageId: PageId, search?: string) => void;
  valItems?: ValItem[];
}

/**
 * REFERENZEN PAGE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Schweizer Ästhetik zur Dokumentation klinischer Rekonstruktionen.
 * - Nutzt CaseStudy mit der "Tiefenschnitt-Bildmaske" (Ergebnis/Prozess Trennung).
 * - Beachtet die Wahrheitspflicht – Ausblendung unbestätigter Zahnarzt-Zitate (VAL-095).
 */
export default function Referenzen({ onNavigate }: ReferenzenProps) {
  useEffect(() => {
    updateDocumentMetadata(referenzenContent.seo.title, referenzenContent.seo.description);
  }, []);

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <span className="text-overline block">
              Fallbeispiele
            </span>
            <h1 className="font-serif text-h1 text-[var(--color-text-primary)] font-medium tracking-tight animate-fade-in">
              {referenzenContent.intro.heading}
            </h1>
            <p className="text-lead text-[var(--color-text-secondary)]">
              {referenzenContent.intro.text}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Cases List (Tiefenschnitt-Bildmaske) */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-subtle)]">
        <div className="container space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <span className="text-overline block">Fallstudien</span>
            <h2 className="font-serif text-h2 font-medium">
              Ausgewählte Laborrekonstruktionen
            </h2>
            <WaterlineDivider className="my-4" />
          </div>

          <div className="space-y-16">
            {referenzenContent.cases.map((item) => (
              <CaseStudy key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Action CTA */}
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
            {referenzenContent.abschlussCta.heading}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary-ondark)] max-w-lg mx-auto">
            {referenzenContent.abschlussCta.text}
          </p>
          <div className="pt-4 flex justify-center">
            <Button
              id="referenzen-cta-primary"
              variant="primary"
              onClick={() => onNavigate(referenzenContent.abschlussCta.cta.pageId as PageId, referenzenContent.abschlussCta.cta.search)}
              className="px-8 font-semibold"
            >
              {referenzenContent.abschlussCta.cta.text}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
