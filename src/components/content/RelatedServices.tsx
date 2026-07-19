import React from 'react';
import Icon, { IconName } from '../ui/Icon';

interface RelatedItem {
  id: string;
  title: string;
}

interface RelatedServicesProps {
  related: RelatedItem[];
  onNavigate: (pageId: string) => void;
}

const RELATED_ICONS: Record<string, IconName> = {
  'implantatprothetik': 'activity',
  'full-arch': 'shield',
  'pink-white-aesthetik': 'smile',
  'vollkeramik': 'layers'
};

/**
 * RELATED SERVICES COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Listet verwandte Spezialleistungen am Seitenende auf.
 * - Nutzt die `.card-facet` Klasse mit ansprechenden Lucide-Symbolen.
 * - Garantiert exakte interne Verlinkung zur Erhöhung der Verweildauer (keine toten Links).
 */
export default function RelatedServices({ related, onNavigate }: RelatedServicesProps) {
  if (!related || related.length === 0) return null;

  return (
    <div id="related-services-component" className="mt-16 pt-12 border-t border-[var(--color-border-subtle)]">
      <div className="mb-8">
        <h3 className="font-serif text-h3 text-[var(--color-text-primary)] font-medium">
          Weitere Leistungen im Fokus
        </h3>
        <p className="text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider mt-1">
          Spezialisierungen unseres Zürcher Dentalateliers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {related.map((item) => {
          const iconName = RELATED_ICONS[item.id] || 'layers';
          return (
            <div
              key={item.id}
              id={`related-service-card-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className="card-facet p-6 flex items-center justify-between hover:border-[var(--color-interactive-accent)] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[var(--color-bg-canvas)] border border-[var(--color-border-subtle)] text-[var(--color-text-accent)] group-hover:text-[var(--color-interactive-primary)] transition-colors">
                  <Icon name={iconName} size="1.2rem" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-interactive-accent)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--color-text-tertiary)] uppercase font-mono tracking-wider mt-0.5">
                    Leistungsfeld
                  </p>
                </div>
              </div>

              <div className="text-[var(--color-interactive-primary)] group-hover:text-[var(--color-interactive-accent)] transform group-hover:translate-x-1 transition-all">
                <Icon name="arrow-right" size="1.1rem" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
