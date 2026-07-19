import React, { useState, useEffect, useRef } from 'react';

interface FacetCardProps {
  metric: string;
  explanation: string;
  source: string; // CRITICAL: Strict constraint - never render without source!
  className?: string;
}

/**
 * FACET-CARD-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Nutzt die `.card-facet`-Klasse mit abgeschrägtem Ecken-Design (Tiefenschnitt-Metapher).
 * - Grosse B2B-Kennzahl oben, gerendert in 'IBM Plex Mono' (text-data).
 * - Erläuterungstext in 'Inter' darunter (text-body-sm / text-secondary).
 * - Pflicht-Quellenangabe (source) ganz unten in Inter Caption / color-text-tertiary.
 * - Sichert B2B-Präzision: Es ist strengstens verboten, eine Kennzahl ohne Beleg anzuzeigen.
 * - Animation: Zählt beim Eintritt in den Viewport einmalig von 0 auf den Zielwert hoch.
 */
export default function FacetCard({ metric, explanation, source, className = '' }: FacetCardProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCountUp();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [metric, hasAnimated]);

  const startCountUp = () => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(metric);
      return;
    }

    // Extract numbers and surrounding non-digit suffixes/prefixes
    const numericMatch = metric.match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(metric);
      return;
    }

    const targetNum = parseInt(numericMatch[0], 10);
    const prefix = metric.substring(0, numericMatch.index);
    const suffix = metric.substring((numericMatch.index || 0) + numericMatch[0].length);

    const duration = 800; // Matches --duration-counter
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Decelerate/ease-out calculation
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = Math.floor(easeProgress * targetNum);

      setDisplayValue(`${prefix}${currentNum}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(metric);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <div 
      ref={cardRef}
      className={`card-facet flex flex-col justify-between min-h-[160px] reveal-on-scroll ${className}`}
    >
      <div>
        {/* Metric in IBM Plex Mono */}
        <div className="font-mono text-3xl font-bold tracking-tight text-[var(--color-text-accent)] mb-2">
          {displayValue}
        </div>
        
        {/* Explanation in Inter */}
        <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {explanation}
        </p>
      </div>

      {/* Mandatory Source citation */}
      <div className="font-sans text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)] border-t border-[var(--color-border-subtle)] pt-2 mt-auto">
        Quelle: {source}
      </div>
    </div>
  );
}
