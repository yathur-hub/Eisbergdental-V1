import React, { useState, useEffect } from 'react';
import { PageId, ValItem } from '../types';
import { wissenFaqContent } from '../content/pages/wissen-faq';
import { updateDocumentMetadata } from '../lib/metadata';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import Button from '../components/ui/Button';
import { Search, MessageSquare } from 'lucide-react';

interface WissenFaqProps {
  onNavigate: (pageId: PageId, search?: string) => void;
  valItems?: ValItem[];
}

/**
 * WISSEN & FAQ PAGE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Schweizer B2B Informations-Portal.
 * - Schnelle Interaktion über Realtime-Suche und klickbare Kategorie-Filter.
 * - Nutzt Design-Tokens für konsistente Farbschemata (Off-white-Hintergrund, knappe Serif-Überschriften).
 */
export default function WissenFaq({ onNavigate }: WissenFaqProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  useEffect(() => {
    updateDocumentMetadata(wissenFaqContent.seo.title, wissenFaqContent.seo.description);
  }, []);

  const categories = [
    { id: 'all', label: 'Alle Themen' },
    { id: 'zusammenarbeit', label: 'Zusammenarbeit' },
    { id: 'workflow', label: 'Digitaler Workflow' },
    { id: 'materialien', label: 'Leistungen & Materialien' },
    { id: 'qualitaet', label: 'Qualität & Sicherheit' },
    { id: 'referenzen', label: 'Referenzen' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  // Flatten the clusters into flat records with their cluster id as category
  const allFaqs = wissenFaqContent.clusters.flatMap((cluster) =>
    cluster.items.map((item) => ({
      ...item,
      category: cluster.id
    }))
  );

  const filteredFaqs = allFaqs.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen">
      
      {/* 1. Hero / Intro */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <span className="text-overline block">
              Fachwissen & Auskunft
            </span>
            <h1 className="font-serif text-h1 text-[var(--color-text-primary)] font-medium tracking-tight animate-fade-in">
              {wissenFaqContent.intro.heading}
            </h1>
            <p className="text-lead text-[var(--color-text-secondary)]">
              {wissenFaqContent.intro.text}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Controls Section (Search & Filter) */}
      <section className="py-6 bg-[var(--color-bg-canvas)] border-y border-[var(--color-border-subtle)]">
        <div className="container flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          
          {/* Realtime Search Input */}
          <div className="relative w-full lg:max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[var(--color-text-tertiary)] pointer-events-none">
              <Search size={16} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenFaqIdx(null); // Reset open states
              }}
              placeholder="Begriffe filtern (z.B. Zirkon, Scanner)..."
              className="w-full bg-[var(--color-bg-canvas)] border-2 border-[var(--color-border-default)] py-3.5 pl-10 pr-4 text-xs sm:text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-focus-ring)] transition duration-250"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenFaqIdx(null);
                }}
                className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase border transition cursor-pointer select-none ${
                  activeCategory === cat.id
                    ? 'bg-[var(--color-interactive-primary)] text-[var(--color-bg-inverse)] border-[var(--color-interactive-primary)]'
                    : 'text-[var(--color-text-secondary)] border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] hover:border-[var(--color-text-accent)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Accordion List */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container max-w-3xl">
          {filteredFaqs.length === 0 ? (
            /* Empty State */
            <div className="text-center py-16 bg-[var(--color-bg-surface)] border-2 border-dashed border-[var(--color-border-default)] p-8 space-y-4">
              <div className="w-12 h-12 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] text-[var(--color-text-tertiary)] flex items-center justify-center mx-auto">
                <MessageSquare size={20} />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans text-sm font-bold text-[var(--color-text-primary)] uppercase">
                  Keine Ergebnisse gefunden
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Für Ihre Suche nach "{searchQuery}" konnten keine passenden Antworten ermittelt werden.
                </p>
              </div>
              <button
                onClick={() => onNavigate('kontakt')}
                className="btn btn-secondary px-6 font-semibold"
              >
                Frage direkt stellen
              </button>
            </div>
          ) : (
            /* Accordion Rendering */
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border-2 border-[var(--color-border-default)] bg-[var(--color-bg-surface)] reveal-on-scroll"
                  style={{ transitionDelay: `${(idx % 4) * 60}ms` }}
                >
                  <button
                    onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center cursor-pointer hover:bg-[var(--color-bg-canvas)]/30 transition select-none"
                  >
                    <span className="text-sm font-semibold text-[var(--color-text-primary)] pr-4">
                      {faq.question}
                    </span>
                    <span className="text-[var(--color-text-accent)] text-xs font-mono shrink-0">
                      {openFaqIdx === idx ? '[ SCHLIESSEN ]' : '[ DETAILS ]'}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      openFaqIdx === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-canvas)]/40 text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Action CTA */}
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
            {wissenFaqContent.abschlussCta.heading}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary-ondark)] max-w-lg mx-auto">
            {wissenFaqContent.abschlussCta.text}
          </p>
          <div className="pt-4 flex justify-center">
            <Button
              id="wissenfaq-cta-primary"
              variant="primary"
              onClick={() => onNavigate(wissenFaqContent.abschlussCta.cta.pageId as PageId, wissenFaqContent.abschlussCta.cta.search)}
              className="px-8 font-semibold"
            >
              {wissenFaqContent.abschlussCta.cta.text}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
