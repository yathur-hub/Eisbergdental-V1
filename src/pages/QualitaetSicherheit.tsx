import React, { useState } from 'react';
import { PageId, ValItem } from '../types';
import { qualitaetContent } from '../content/pages/qualitaet-sicherheit';
import TrustSection, { TrustSectionItem } from '../components/content/TrustSection';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import Button from '../components/ui/Button';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

interface QualitaetSicherheitProps {
  onNavigate: (pageId: PageId, search?: string) => void;
  valItems?: ValItem[];
}

/**
 * QUALITÄT UND SICHERHEIT PAGE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Schweizer Konformitätsästhetik mit reduzierten Farben und asymmetrischen Linien.
 * - Nutzt die TrustSection zur sicheren, gesetzeskonformen Vorhaltung unbestätigter Zertifikate.
 * - Schützt Zahnärzte vor Haftungsrisiken durch transparente MepV / Swissmedic Deklaration.
 */
export default function QualitaetSicherheit({ onNavigate }: QualitaetSicherheitProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Map the draft trust items with their verified flags set to FALSE per instructions
  const trustItems: TrustSectionItem[] = [
    {
      id: 'certifications',
      title: qualitaetContent.structuralSections.zertifizierungen.title,
      description: qualitaetContent.structuralSections.zertifizierungen.text,
      verified: qualitaetContent.structuralSections.zertifizierungen.verified,
      valId: qualitaetContent.structuralSections.zertifizierungen.valId
    },
    {
      id: 'traceability',
      title: qualitaetContent.structuralSections.materialueberwachung.title,
      description: qualitaetContent.structuralSections.materialueberwachung.text,
      verified: qualitaetContent.structuralSections.materialueberwachung.verified,
      valId: qualitaetContent.structuralSections.materialueberwachung.valId
    },
    {
      id: 'warranty',
      title: qualitaetContent.structuralSections.garantie.title,
      description: qualitaetContent.structuralSections.garantie.text,
      verified: qualitaetContent.structuralSections.garantie.verified,
      valId: qualitaetContent.structuralSections.garantie.valId
    }
  ];

  const faqs = [
    {
      question: "Ist Eisberg Dental DENTIC- oder VZLS-zertifiziert?",
      answer: "Zertifizierungen wie der VZLS-Mitgliedsstatus oder DENTIC befinden sich derzeit in der internen Verifizierung und werden nach Erbringung der offiziellen Nachweise aufgeschaltet.",
      valId: "VAL-079"
    }
  ];

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <span className="text-overline block">
              Haftung & Schutz
            </span>
            <h1 className="font-serif text-h1 text-[var(--color-text-primary)] font-medium tracking-tight">
              {qualitaetContent.intro.heading}
            </h1>
            <p className="text-lead text-[var(--color-text-secondary)]">
              {qualitaetContent.intro.text}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Internal QA Ateliers details */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-overline block">Atelier-Richtlinien</span>
              <h2 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium tracking-tight">
                Interne Qualitätssicherung
              </h2>
              <div className="space-y-4">
                {qualitaetContent.facts.map((fact, index) => (
                  <div key={index} className="flex gap-3 items-start text-sm text-[var(--color-text-secondary)]">
                    <div className="w-1.5 h-1.5 bg-[var(--color-copper-600)] mt-2 shrink-0" />
                    <p>{fact}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[var(--color-brand-900)] text-[var(--color-bone-50)] p-8 border border-[var(--color-brand-700)] shadow-xl relative">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-accent)] block mb-2">
                Haftung & Konformität
              </span>
              <h3 className="font-serif text-h3 font-medium mb-4 text-[var(--color-text-primary-ondark)]">
                Schweizer MepV Konformität
              </h3>
              <p className="text-xs text-[var(--color-text-secondary-ondark)] leading-relaxed">
                Sonderanfertigungen zahntechnischer Arbeiten unterliegen den strengen Regularien der Schweizer Medizinprodukteverordnung (MepV) sowie der Swissmedic-Aufsicht. Eisberg Dental garantiert die ausschliessliche Fertigung in Zürich und die lückenlose Erstellung von Konformitätserklärungen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Origin Certificate & Manufacturing */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-subtle)]">
        <div className="container max-w-3xl space-y-4">
          <h3 className="font-serif text-h3 font-medium text-[var(--color-text-primary)]">
            Herkunftsgarantie & Schweizer Wertschöpfung
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Die zahntechnische Fertigung von Medizinprodukten unterliegt in der Schweiz der Medizinprodukteverordnung (MepV). Als lokales Handwerksatelier fertigen wir jede einzelne zahntechnische Krone, Brücke und Implantatkonstruktion ausschliesslich an der Forchstrasse 261 in Zürich. Wir verzichten konsequent auf jegliches Outsourcing in Drittstaaten.
          </p>
        </div>
      </section>

      {/* 7. CTA Section */}
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
            {qualitaetContent.abschlussCta.heading}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary-ondark)] max-w-lg mx-auto">
            {qualitaetContent.abschlussCta.text}
          </p>
          <div className="pt-4 flex justify-center">
            <Button
              id="qualitaet-cta-primary"
              variant="primary"
              onClick={() => onNavigate(qualitaetContent.abschlussCta.cta.pageId as PageId, qualitaetContent.abschlussCta.cta.search)}
              className="px-8 font-semibold"
            >
              {qualitaetContent.abschlussCta.cta.text}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
