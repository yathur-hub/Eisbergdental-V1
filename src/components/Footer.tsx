import React from 'react';
import { PageId } from '../types';
import Logo from './ui/Logo';
import Icon from './ui/Icon';

interface FooterProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * FOOTER-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Dunkles Canvas (var(--color-bg-canvas-dark)) mit feiner horizontaler Schichtlinien-Textur
 *   (CSS-basierte Linien mit 5% Deckkraft in var(--color-brand-700) auf var(--color-brand-900)).
 * - Invertiertes Logo + exakter human-designed Kurzclaim (Zahntechnisches Labor für Implantatprothetik und Ästhetik – Zürich).
 * - Klickbare Kontaktkanäle (Telefon, Mail) und exakter Schweizer Standort (Forchstrasse 261, 8032 Zürich).
 * - Vorbereiteter, aber bewusst leerer/verborgener Zertifizierungs-Container (keine Erfindungen).
 * - Sprungmarke "Nach oben" zum rasanten Scrollen zurück zum Seitenanfang.
 */
export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative text-[var(--color-text-secondary-ondark)] font-sans border-t border-[var(--color-brand-700)] overflow-hidden py-16 md:py-24 bg-[var(--color-bg-canvas-dark)]"
      style={{ background: 'var(--gradient-depth)' }}
    >
      {/* Decorative Schichtlinien-Textur (3-6 horizontal lines, opacity 4-8% in var(--color-brand-700)) */}
      <div className="schichtlinien-container" aria-hidden="true">
        <div className="schichtlinie" />
        <div className="schichtlinie" />
        <div className="schichtlinie" />
        <div className="schichtlinie" />
        <div className="schichtlinie" />
      </div>

      <div className="container relative z-10 space-y-12 md:space-y-16">
        {/* Top Section: Logo & Kurzclaim */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-[var(--color-brand-700)] pb-10">
          <div className="space-y-3 max-w-md">
            <Logo variant="inverted" onClick={() => navigateTo('home')} heightClass="h-24 md:h-[120px]" className="cursor-pointer" />
            <p className="text-xs md:text-sm text-[var(--color-text-secondary-ondark)] font-sans leading-relaxed">
              Zahntechnisches Labor für Implantatprothetik und Ästhetik – Zürich.
            </p>
          </div>

          {/* Sprungmarke: Nach oben */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 text-xs font-display font-medium tracking-wide text-[var(--color-text-secondary-ondark)] hover:text-white transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-focus-ring)] p-2"
            aria-label="Nach oben scrollen"
          >
            <span>Nach oben</span>
            <span className="inline-block transition-transform duration-200 group-hover:-translate-y-1">
              <Icon name="arrow" size={14} className="-rotate-90" />
            </span>
          </button>
        </div>

        {/* Middle Section: Sitemap columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Leistungen */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary-ondark)] border-b border-[var(--color-brand-700)] pb-2">
              Leistungen
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('implantatprothetik')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Implantatprothetik
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('full-arch')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Full Arch auf Implantaten
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('pink-white-aesthetik')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Pink/White-Ästhetik
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('vollkeramik')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Vollkeramik
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Unternehmen */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary-ondark)] border-b border-[var(--color-brand-700)] pb-2">
              Unternehmen
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('workflow')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Digitaler Workflow
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('qualitaet-sicherheit')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Qualität & Sicherheit
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('ueber-uns')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('referenzen')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Referenzen
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('wissen-faq')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Wissen & FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('kontakt')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Rechtliches & Downloads */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary-ondark)] border-b border-[var(--color-brand-700)] pb-2">
              Materialien & Downloads
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('downloads')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Downloads & Formulare
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('datenschutz')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Datenschutzerklärung
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('impressum')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                >
                  Impressum
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontakt & Standort */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary-ondark)] border-b border-[var(--color-brand-700)] pb-2">
              Labor & Erreichbarkeit
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <Icon name="phone" size={14} className="text-[var(--color-slate-400)] mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href="tel:+41434990256"
                    className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                  >
                    Tel. +41 43 499 02 56
                  </a>
                  <a
                    href="mailto:info@eisberg-dental.ch"
                    className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]"
                  >
                    info@eisberg-dental.ch
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--color-slate-400)] text-sm font-semibold select-none leading-none">📍</span>
                <span className="leading-relaxed">
                  Forchstrasse 261,<br />
                  8032 Zürich
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Empty/Hidden structurally prepared certifications/associations container */}
        {/* 
          <div className="hidden border-t border-[var(--color-brand-700)] pt-6 flex justify-start gap-4">
            [Zertifikats-Badges nach Freigabe hier einbinden]
          </div>
        */}

        {/* Bottom Section: Copyright & Legal Disclaimer links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-t border-[var(--color-brand-700)] pt-8">
          <p className="text-[var(--color-slate-400)] text-center md:text-left">
            © {currentYear} Eisberg Dental. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-3 text-[var(--color-slate-400)]">
            <button
              onClick={() => navigateTo('datenschutz')}
              className="hover:text-white transition-colors cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)] px-1"
            >
              Datenschutzerklärung
            </button>
            <span className="text-[var(--color-brand-700)] select-none">·</span>
            <button
              onClick={() => navigateTo('impressum')}
              className="hover:text-white transition-colors cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)] px-1"
            >
              Impressum
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
