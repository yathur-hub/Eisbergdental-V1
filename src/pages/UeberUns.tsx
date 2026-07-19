import React, { useEffect } from 'react';
import { PageId, ValItem } from '../types';
import { ueberUnsContent } from '../content/pages/ueber-uns';
import { updateDocumentMetadata } from '../lib/metadata';
import Timeline from '../components/content/Timeline';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import Button from '../components/ui/Button';
import { Compass, Eye, MapPin, Users, ArrowUpRight, Info } from 'lucide-react';

interface UeberUnsProps {
  onNavigate: (pageId: PageId, search?: string) => void;
  valItems?: ValItem[];
}

/**
 * ÜBER UNS / LABOR PORTRAIT PAGE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Schweizer Atelierästhetik mit viel Freiraum, asymmetrischen Linien.
 * - Nutzt Timeline für Thomas Baranduns Werdegang.
 * - Strikte, belegbare Kommunikation – Verzicht auf den unbestätigten "Europaweit führend" Claim.
 */
export default function UeberUns({ onNavigate }: UeberUnsProps) {
  useEffect(() => {
    updateDocumentMetadata(ueberUnsContent.seo.title, ueberUnsContent.seo.description);
  }, []);

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Biography & Intro */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-overline block">
                Labor-Portrait
              </span>
              <h1 className="font-serif text-h1 text-[var(--color-text-primary)] font-medium tracking-tight animate-fade-in leading-tight">
                {ueberUnsContent.intro.heading}
              </h1>
              <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
                {ueberUnsContent.haltung.text}
              </p>
              <div className="p-4 bg-[var(--color-bg-surface)] border-l-2 border-[var(--color-interactive-accent)] text-sm italic text-[var(--color-text-secondary)] mt-6">
                "Als inhabergeführtes Atelier steht mein Name für Schweizer Präzision, fachliche Tiefe und kompromisslose Werkstoffqualität." – Thomas Barandun
              </div>
            </div>

            {/* Right Column: Founder Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-sm rounded-lg overflow-hidden border border-[var(--color-border-default)] shadow-raised bg-[var(--color-bg-surface)] p-3 transition-transform duration-300 hover:translate-y-[-4px]">
                <div className="aspect-[4/5] w-full overflow-hidden rounded bg-[var(--color-brand-100)] relative">
                  <img
                    src="https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/refs/heads/main/thomas%20barandun.avif"
                    alt="Thomas Barandun - Zahntechniker-Meister und Geschäftsführer"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle decorative grid/overlay element */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <p className="font-sans text-[10px] font-mono uppercase tracking-wider opacity-90">Gründer & Inhaber</p>
                    <p className="font-serif text-lg font-medium leading-tight">Thomas Barandun</p>
                  </div>
                </div>
                <div className="pt-3 px-1 text-center lg:text-left">
                  <p className="text-[10px] text-[var(--color-text-tertiary)] font-mono uppercase tracking-wider">
                    Zahntechniker-Meister & Geschäftsführer
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Chronology & Qualifications (Timeline) */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-overline block">Werdegang</span>
              <h2 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium tracking-tight">
                {ueberUnsContent.timeline.heading}
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Qualifikationen durch renommierte Schweizer und internationale Institute belegen das tiefe Werkstoff- und Anatomieverständnis von Thomas Barandun.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[var(--color-bg-canvas)] p-6 md:p-8 border border-[var(--color-border-default)]">
              <span className="text-overline block text-xs mb-6">Meilensteine Thomas Barandun</span>
              <Timeline events={ueberUnsContent.timeline.events} />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Principles Grid */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[var(--color-text-accent)]">
                <Eye size={18} />
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider">
                  {ueberUnsContent.qualitaet.heading}
                </h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {ueberUnsContent.qualitaet.text}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate(ueberUnsContent.qualitaet.cta.pageId as PageId)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-accent)] hover:underline cursor-pointer"
                >
                  {ueberUnsContent.qualitaet.cta.text}
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[var(--color-text-accent)]">
                <Compass size={18} />
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider">
                  {ueberUnsContent.kooperation.heading}
                </h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {ueberUnsContent.kooperation.text}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate(ueberUnsContent.kooperation.cta.pageId as PageId)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-accent)] hover:underline cursor-pointer"
                >
                  {ueberUnsContent.kooperation.cta.text}
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Single Ownership / Personal Responsibility */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container max-w-3xl space-y-4">
          <h3 className="font-serif text-h3 font-medium text-[var(--color-text-primary)]">
            {ueberUnsContent.verantwortung.heading}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {ueberUnsContent.verantwortung.text}
          </p>
        </div>
      </section>

      {/* 6. Location Details */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-[var(--color-text-accent)]">
                <MapPin size={18} />
                <h2 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium">
                  {ueberUnsContent.standort.heading}
                </h2>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {ueberUnsContent.standort.text}
              </p>
              
              <div className="text-xs text-[var(--color-text-tertiary)]">
                Das Liefer- und Botengebiet umfasst Zürich und angrenzende Kantone.
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate(ueberUnsContent.standort.cta.pageId as PageId, ueberUnsContent.standort.cta.search)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-accent)] hover:underline cursor-pointer"
                >
                  {ueberUnsContent.standort.cta.text}
                  <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="pt-4 aspect-[16/9] w-full overflow-hidden border border-[var(--color-border-default)] relative group">
                <img
                  src="https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/refs/heads/main/Bu%CC%88ro%20Eisbergdental.avif"
                  alt="Eisberg Dental Atelier / Büro Innenhof"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-6 bg-[var(--color-bg-surface)] p-6 border border-[var(--color-border-default)] space-y-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-tertiary)] block">
                Adresse & Anfahrt Burgwies
              </span>
              <p className="font-mono text-xs text-[var(--color-text-primary)] font-bold">
                Eisberg Dental &bull; Forchstrasse 261 &bull; 8032 Zürich
              </p>
              
              {/* Google Maps Embed for Burgwies location */}
              <div className="w-full h-44 border border-[var(--color-border-default)] relative overflow-hidden">
                <iframe
                  title="Google Maps - Eisberg Dental Burgwies"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src="https://maps.google.com/maps?q=Forchstrasse%20261,%208032%20Z%C3%BCrich&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Action CTA */}
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
            {ueberUnsContent.abschlussCta.heading}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary-ondark)] max-w-lg mx-auto">
            {ueberUnsContent.abschlussCta.text}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              id="ueberuns-cta-primary"
              variant="primary"
              onClick={() => onNavigate(ueberUnsContent.abschlussCta.ctaPrimary.pageId as PageId, ueberUnsContent.abschlussCta.ctaPrimary.search)}
              className="px-8 font-semibold"
            >
              {ueberUnsContent.abschlussCta.ctaPrimary.text}
            </Button>
            <Button
              id="ueberuns-cta-secondary"
              variant="secondary"
              onClick={() => onNavigate(ueberUnsContent.abschlussCta.ctaSecondary.pageId as PageId, ueberUnsContent.abschlussCta.ctaSecondary.search)}
              className="border-[var(--color-brand-300)] text-[var(--color-text-primary-ondark)] hover:bg-[rgba(255,255,255,0.05)] px-8 font-semibold"
            >
              {ueberUnsContent.abschlussCta.ctaSecondary.text}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
