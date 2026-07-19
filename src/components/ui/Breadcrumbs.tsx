import React from 'react';
import { PageId } from '../../types';

interface BreadcrumbsProps {
  currentPageId: PageId;
  onNavigate: (pageId: PageId) => void;
  className?: string;
}

interface BreadcrumbItem {
  id: PageId;
  label: string;
}

/**
 * BREADCRUMBS-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Semantisches nav-Element mit aria-label="Breadcrumb" zur Erhöhung der SEO und Barrierefreiheit.
 * - Zeigt den genauen Pfad von der Startseite bis zur aktuellen Seite an.
 * - Letztes (aktuelles) Element ist reiner Text und nicht verlinkt.
 * - Nutzt Space Grotesk und Inter zur perfekten Einbindung in das restliche Gestaltungsraster.
 */
export default function Breadcrumbs({ currentPageId, onNavigate, className = '' }: BreadcrumbsProps) {
  // Mapping of pages to their hierarchy and names
  const pageMap: Record<PageId, { label: string; parent?: PageId }> = {
    home: { label: 'Startseite' },
    leistungen: { label: 'Leistungen', parent: 'home' },
    implantatprothetik: { label: 'Implantatprothetik', parent: 'leistungen' },
    'full-arch': { label: 'Full Arch auf Implantaten', parent: 'leistungen' },
    'pink-white-aesthetik': { label: 'Pink/White-Ästhetik', parent: 'leistungen' },
    vollkeramik: { label: 'Vollkeramik', parent: 'leistungen' },
    'herausnehmbarer-zahnersatz': { label: 'Herausnehmbarer Zahnersatz', parent: 'leistungen' },
    reparaturen: { label: 'Reparaturen', parent: 'leistungen' },
    workflow: { label: 'Digitaler Workflow', parent: 'home' },
    'qualitaet-sicherheit': { label: 'Qualität & Sicherheit', parent: 'home' },
    'ueber-uns': { label: 'Über uns', parent: 'home' },
    team: { label: 'Team', parent: 'ueber-uns' },
    referenzen: { label: 'Referenzen', parent: 'home' },
    'wissen-faq': { label: 'Wissen & FAQ', parent: 'home' },
    downloads: { label: 'Downloads', parent: 'home' },
    kontakt: { label: 'Kontakt', parent: 'home' },
    datenschutz: { label: 'Datenschutzerklärung', parent: 'home' },
    impressum: { label: 'Impressum', parent: 'home' },
  };

  // Build breadcrumb items array
  const items: BreadcrumbItem[] = [];
  let currentId: PageId | undefined = currentPageId;

  while (currentId && pageMap[currentId]) {
    items.unshift({
      id: currentId,
      label: pageMap[currentId].label,
    });
    currentId = pageMap[currentId].parent;
  }

  // If the current page is 'home', we can display a single breadcrumb or hide it.
  if (currentPageId === 'home') {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 px-4 md:px-0 text-xs font-sans text-[var(--color-text-tertiary)] flex items-center flex-wrap gap-1 md:gap-2 ${className}`}
    >
      <button
        onClick={() => onNavigate('home')}
        className="hover:text-[var(--color-interactive-accent)] transition-colors cursor-pointer font-medium focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)] px-1"
      >
        Eisberg Dental
      </button>

      {items.map((item, index) => {
        // Skip home item since we already rendered "Eisberg Dental" as start link
        if (item.id === 'home') return null;

        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={item.id}>
            <span className="text-[var(--color-neutral-300)] mx-1" aria-hidden="true">/</span>
            {isLast ? (
              <span className="text-[var(--color-text-primary)] font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => onNavigate(item.id)}
                className="hover:text-[var(--color-interactive-accent)] transition-colors cursor-pointer font-medium focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)] px-1"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
