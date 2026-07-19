import React from 'react';
import Button from '../ui/Button';
import Icon, { IconName } from '../ui/Icon';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
}

interface ServiceOverviewProps {
  heading: string;
  items: ServiceItem[];
  cta?: { text: string; pageId: string };
  onNavigate: (pageId: string) => void;
}

// Maps service ID to appropriate Lucide icons
const SERVICE_ICONS: Record<string, IconName> = {
  'implantatprothetik': 'activity',
  'full-arch': 'shield',
  'pink-white-aesthetik': 'smile',
  'vollkeramik': 'layers'
};

/**
 * SERVICE OVERVIEW COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Listet die vier Fokus-Leistungsbereiche des Zahnlabors auf.
 * - Jedes Element wird im abgeschrägten FacetCard-Design (.card-facet) gerendert.
 * - Nutzt die vordefinierte CSS-Klasse `.card-facet` für die physikalische Tiefenschnitt-Metapher.
 * - Klarer B2B-Informationsaufbau: Oberschrift in Fraunces, Beschreibung, sekundärer Aktionstaster.
 */
export default function ServiceOverview({
  heading,
  items,
  cta,
  onNavigate
}: ServiceOverviewProps) {
  return (
    <section id="services-overview-section" className="py-16 md:py-24 bg-[var(--color-bg-canvas)]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-overline block mb-3">
              FOKUSIERTE ZAHNTECHNIK
            </span>
            <h2 className="font-serif text-h2 text-[var(--color-text-primary)] font-medium tracking-tight">
              {heading}
            </h2>
          </div>
          
          {cta && (
            <div className="shrink-0">
              <Button
                id="all-services-cta"
                variant="secondary"
                onClick={() => onNavigate(cta.pageId)}
                iconRight="arrow-right"
              >
                {cta.text}
              </Button>
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const iconName = SERVICE_ICONS[item.id] || 'layers';
            return (
              <div 
                key={item.id}
                id={`service-card-${item.id}`}
                className="card-facet flex flex-col justify-between p-8 hover:border-[var(--color-interactive-accent)] transition-all duration-300 group cursor-pointer reveal-on-scroll"
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => onNavigate(item.id)}
              >
                <div>
                  {/* Icon & Overline */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[var(--color-bg-canvas)] border border-[var(--color-border-subtle)] text-[var(--color-text-accent)]">
                      <Icon name={iconName} size="1.25rem" />
                    </div>
                    <span className="text-overline text-xs tracking-wider opacity-80">
                      EISBERG ATELIER
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-h3 text-[var(--color-text-primary)] font-semibold mb-3 group-hover:text-[var(--color-interactive-accent)] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-prose">
                    {item.description}
                  </p>
                </div>

                {/* Footer action */}
                <div className="border-t border-[var(--color-border-subtle)] pt-4 mt-auto flex items-center justify-between">
                  <span className="text-button text-xs font-semibold text-[var(--color-interactive-primary)] group-hover:text-[var(--color-interactive-accent)] flex items-center gap-1 transition-colors">
                    {item.ctaText}
                    <Icon name="arrow-right" size="1rem" className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  <span className="text-caption text-xs uppercase font-mono tracking-wider">
                    {item.id.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
