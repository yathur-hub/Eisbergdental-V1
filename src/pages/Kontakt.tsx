import React, { useEffect } from 'react';
import { PageId, ValItem } from '../types';
import { kontaktContent } from '../content/pages/kontakt';
import { updateDocumentMetadata } from '../lib/metadata';
import ContactForm from '../components/forms/ContactForm';
import WaterlineDivider from '../components/ui/WaterlineDivider';
import { Phone, Mail, MapPin } from 'lucide-react';

interface KontaktProps {
  onNavigate: (pageId: PageId) => void;
  valItems?: ValItem[];
}

/**
 * KONTAKT PAGE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Schweizer B2B Kontakthub.
 * - Teilt den Bildschirm in ein hochfunktionales Formular (links) und direkt erreichbare Kontaktpunkte (rechts) auf.
 * - Betont Transparenz und Verzicht auf ungesicherte Reaktionszeit-Zusagen.
 */
export default function Kontakt({ onNavigate }: KontaktProps) {
  useEffect(() => {
    updateDocumentMetadata(kontaktContent.seo.title, kontaktContent.seo.description);
  }, []);

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <span className="text-overline block">Direkter Draht</span>
            <h1 className="font-serif text-h1 text-[var(--color-text-primary)] font-medium tracking-tight animate-fade-in">
              Kontakt & Fallberatung
            </h1>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Wählen Sie den passenden Anlass für Ihre Anfrage. So können wir uns gezielt vorbereiten und Sie verlässlich beraten.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Form & Contact Details Grid */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: ContactForm Component */}
            <div className="lg:col-span-8">
              <ContactForm onNavigate={onNavigate} />
            </div>

            {/* Right: Direct contact & directions */}
            <div className="lg:col-span-4 space-y-8">
              
              <div className="space-y-6">
                <h3 className="font-serif text-h3 font-medium">Direktkontakt</h3>
                <WaterlineDivider className="my-2" />
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] text-[var(--color-text-accent)] shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                        Telefon
                      </span>
                      <a 
                        href="tel:+41434990256" 
                        className="font-sans font-bold text-sm text-[var(--color-text-primary)] hover:underline block"
                      >
                        +41 43 499 02 56
                      </a>
                      <span className="text-[11px] text-[var(--color-text-tertiary)] block">
                        Persönliche Fallabstimmung
                      </span>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] text-[var(--color-text-accent)] shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                        E-Mail
                      </span>
                      <a 
                        href="mailto:info@eisberg-dental.ch" 
                        className="font-sans font-bold text-sm text-[var(--color-text-primary)] hover:underline block"
                      >
                        info@eisberg-dental.ch
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] text-[var(--color-text-accent)] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                        Atelieradresse
                      </span>
                      <p className="font-sans font-bold text-sm text-[var(--color-text-primary)]">
                        Forchstrasse 261<br />
                        8032 Zürich
                      </p>
                      <span className="text-[11px] text-[var(--color-text-tertiary)] block">
                        Tramhaltestelle Burgwies (Linie 11)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Atelier / Office image card */}
              <div className="bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] overflow-hidden group">
                <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--color-brand-100)] relative">
                  <img
                    src="https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/refs/heads/main/Bu%CC%88ro%20Eisbergdental.avif"
                    alt="Eisberg Dental Atelier / Büro"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-4 space-y-1 bg-[var(--color-bg-surface)]">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-tertiary)] block">
                    Unser Atelier in Zürich
                  </span>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Willkommen bei Eisberg Dental – wo handwerkliche Perfektion und modernste CAD/CAM-Technologie in hellem, produktivem Ambiente entstehen.
                  </p>
                </div>
              </div>

              {/* Minimalist Swiss Grid Tram Station Map */}
              <div className="bg-[var(--color-bg-canvas)] p-6 border border-[var(--color-border-default)] space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-tertiary)] block">
                  Anfahrt Burgwies
                </span>
                
                {/* Google Maps Embed for Burgwies location */}
                <div className="w-full h-40 border border-[var(--color-border-default)] relative overflow-hidden">
                  <iframe
                    title="Google Maps - Eisberg Dental Burgwies Anfahrt"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src="https://maps.google.com/maps?q=Forchstrasse%20261,%208032%20Z%C3%BCrich&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Wir befinden uns direkt an der Forchstrasse, verkehrsgünstig gelegen bei der Haltestelle Burgwies. Kundenparkplätze stehen im Innenhof zur Verfügung.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
