import React from 'react';
import Accordion from '../ui/Accordion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

/**
 * FAQ ACCORDION COMPONENT — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Renderordnung: Diskrete Fragen und schlichte Antworten.
 * - Integration: Nutzt die vorgegebene Accordion-Komponente mit Plus/Minus-Indikatoren.
 * - Barrierefreiheit: Korrekte ARIA-Rollen und Tastaturunterstützung.
 */
export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div id="faq-accordion-component" className="my-16">
      <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
        <h3 className="font-serif text-h3 text-[var(--color-text-primary)] font-medium">
          Häufige Fragen (FAQ)
        </h3>
        <p className="text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider mt-1">
          Hintergründe, Materialfragen und Durchlaufzeiten
        </p>
      </div>

      <div className="flex flex-col">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[var(--color-border-subtle)] last:border-none">
            <Accordion 
              title={faq.question}
            >
              <p className="font-sans text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                {faq.answer}
              </p>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
