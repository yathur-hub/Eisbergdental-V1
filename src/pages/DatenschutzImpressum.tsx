import React, { useState } from 'react';
import { PageId, ValItem } from '../types';
import { datenschutzContent } from '../content/pages/datenschutz';
import { impressumContent } from '../content/pages/impressum';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import { Shield, FileText, Scale } from 'lucide-react';

interface DatenschutzImpressumProps {
  initialTab?: 'datenschutz' | 'impressum';
  valItems?: ValItem[];
}

/**
 * DATENSCHUTZ UND IMPRESSUM PAGE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Minimalistische, hochpräzise B2B Schweizer Rechts-Dokumentation.
 * - Nutzt die standardisierten Design-Tokens (Off-white-Hintergrund, knappe Serif-Überschriften).
 * - Enthält die geforderten rechtlichen Disclaimers und Kommentare für Datenschutz-Prüfungen in der Schweiz.
 */
export default function DatenschutzImpressum({ initialTab = 'datenschutz' }: DatenschutzImpressumProps) {
  const [activeTab, setActiveTab] = useState<'datenschutz' | 'impressum'>(initialTab);

  return (
    <div className="bg-[var(--color-bg-canvas)] min-h-screen py-16 md:py-24">
      <div className="container max-w-4xl">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-[var(--color-border-subtle)] mb-12 gap-8">
          <button
            onClick={() => setActiveTab('datenschutz')}
            className={`pb-4 text-xs font-mono font-semibold uppercase tracking-wider border-b-2 transition cursor-pointer select-none ${
              activeTab === 'datenschutz'
                ? 'text-[var(--color-text-accent)] border-[var(--color-copper-600)]'
                : 'text-[var(--color-text-tertiary)] border-transparent hover:text-[var(--color-text-primary)]'
            }`}
          >
            Datenschutzerklärung
          </button>
          <button
            onClick={() => setActiveTab('impressum')}
            className={`pb-4 text-xs font-mono font-semibold uppercase tracking-wider border-b-2 transition cursor-pointer select-none ${
              activeTab === 'impressum'
                ? 'text-[var(--color-text-accent)] border-[var(--color-copper-600)]'
                : 'text-[var(--color-text-tertiary)] border-transparent hover:text-[var(--color-text-primary)]'
            }`}
          >
            Impressum
          </button>
        </div>

        {activeTab === 'datenschutz' ? (
          /* DATENSCHUTZERKLÄRUNG ZONE */
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-serif text-h1 text-[var(--color-text-primary)] mb-4">
                {datenschutzContent.intro.heading}
              </h1>
              <WaterlineDivider className="mb-6" />
            </div>

            {/* Legal Sections */}
            <div className="space-y-8">
              {datenschutzContent.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3 border-b border-[var(--color-border-subtle)] pb-6 last:border-none">
                  <h2 className="font-sans text-h4 font-bold text-[var(--color-text-primary)]">
                    {sec.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* IMPRESSUM ZONE */
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-serif text-h1 text-[var(--color-text-primary)] mb-4">
                {impressumContent.intro.heading}
              </h1>
              <WaterlineDivider className="mb-6" />
            </div>

            {/* Impressum Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[var(--color-bg-surface)] p-6 md:p-8 border border-[var(--color-border-default)]">
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[10px] text-[var(--color-text-accent)] uppercase tracking-widest block mb-1">
                    Betreiberin der Website
                  </span>
                  <p className="font-sans text-body-sm font-bold text-[var(--color-text-primary)]">
                    {impressumContent.details.firmenname}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                    {impressumContent.details.adresse}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[var(--color-text-accent)] uppercase tracking-widest block mb-1">
                    Vertretungsberechtigte Person
                  </span>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {impressumContent.details.inhaber}
                  </p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    Inhaber / {impressumContent.details.rechtsform}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[10px] text-[var(--color-text-accent)] uppercase tracking-widest block mb-1">
                    Handelsregister & UID
                  </span>
                  <p className="text-sm text-[var(--color-text-primary)] font-semibold">
                    {impressumContent.details.uid}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[var(--color-text-accent)] uppercase tracking-widest block mb-1">
                    Kontakt & Auskunft
                  </span>
                  <p className="text-sm text-[var(--color-text-primary)] space-y-1">
                    <span className="block">Telefon: {impressumContent.details.phone}</span>
                    <span className="block">E-Mail: {impressumContent.details.email}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Haftung & Urheberrecht clauses */}
            <div className="space-y-6 border-t border-[var(--color-border-subtle)] pt-8">
              <div className="space-y-2">
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  Haftungsausschluss
                </h3>
                <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                  {impressumContent.haftungsausschluss}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  Urheberrecht
                </h3>
                <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                  {impressumContent.urheberrecht}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
