import React, { useEffect } from 'react';
import { PageId, ValItem } from '../types';
import { downloadsContent } from '../content/pages/downloads';
import { updateDocumentMetadata } from '../lib/metadata';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import Button from '../components/ui/Button';
import { FileText, Download, Info } from 'lucide-react';

interface DownloadsProps {
  onNavigate: (pageId: PageId, search?: string) => void;
  valItems?: ValItem[];
}

/**
 * DOWNLOADS PAGE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Reduziertes Schweizer B2B Formular- und Serviceportal.
 * - Drei Soll-Dokumente sind transparent als "In Vorbereitung" gekennzeichnet.
 * - Direkte Downloads sind deaktiviert (aus Gründen der Wahrheitspflicht).
 * - Übergreifender Workflow führt direkt zum Kontaktformular (?anlass=unterlagen).
 */
export default function Downloads({ onNavigate }: DownloadsProps) {
  useEffect(() => {
    updateDocumentMetadata(downloadsContent.seo.title, downloadsContent.seo.description);
  }, []);

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <span className="text-overline block">
              Servicebereich
            </span>
            <h1 className="font-serif text-h1 text-[var(--color-text-primary)] font-medium tracking-tight animate-fade-in">
              {downloadsContent.intro.heading}
            </h1>
            <p className="text-lead text-[var(--color-text-secondary)]">
              {downloadsContent.intro.text}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Document List (Soll-Dokumente) */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-subtle)]">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-h3 font-medium">
                Soll-Dokumente zur Zusammenarbeit
              </h2>
              <span className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase">
                Stand: In Vorbereitung
              </span>
            </div>
            
            <WaterlineDivider className="my-4" />

            <div className="space-y-4">
              {downloadsContent.items.map((doc) => (
                <div 
                  key={doc.id}
                  className="bg-[var(--color-bg-canvas)] p-6 border border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hover:border-[var(--color-copper-500)] transition duration-250"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] text-[var(--color-text-accent)] shrink-0">
                      <FileText size={20} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-sans text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {doc.description}
                      </p>
                      
                      <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-tertiary)] italic pt-1">
                        <Info size={12} className="text-[var(--color-copper-600)]" />
                        <span>In Vorbereitung. Sobald das Dokument freigegeben ist, steht es hier zum Download bereit.</span>
                      </div>
                    </div>
                  </div>

                  {/* Deaktivierte Download Schaltfläche */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[var(--color-error-700)] uppercase font-semibold">
                      {doc.status}
                    </span>
                    <button 
                      disabled
                      aria-label={`${doc.title} herunterladen (derzeit in Vorbereitung)`}
                      className="p-3 bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] text-[var(--color-text-disabled)] shrink-0 cursor-not-allowed opacity-50"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA to Request Documents via Form */}
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
            {downloadsContent.abschlussCta.heading}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary-ondark)] max-w-lg mx-auto">
            {downloadsContent.abschlussCta.text}
          </p>
          <div className="pt-4 flex justify-center">
            <Button
              id="downloads-cta-primary"
              variant="primary"
              onClick={() => onNavigate(downloadsContent.abschlussCta.cta.pageId as PageId, downloadsContent.abschlussCta.cta.search)}
              className="px-8 font-semibold"
            >
              {downloadsContent.abschlussCta.cta.text}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
