import React from 'react';
import WaterlineDivider from '../ui/WaterlineDivider';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessSteps8Props {
  steps: Step[];
}

/**
 * PROCESS STEPS 8 COMPONENT
 * 
 * DESIGN-STRATEGIE:
 * - Quadratische Knoten (Square Nodes) im 2px B2B Eisberg-Look.
 * - Jeder Knoten zeigt die Nummer im IBM Plex Mono Schriftstil.
 * - Verbunden durch feine, dezente Linien, die den logischen Ablauf darstellen.
 * - Bietet eine hervorragende, gut lesbare Übersicht des gesamten Ablaufs.
 */
export default function ProcessSteps8({ steps }: ProcessSteps8Props) {
  return (
    <div className="w-full">
      {/* Visual Header */}
      <div className="mb-12">
        <h2 className="font-serif text-h3 text-[var(--color-text-primary)] font-medium mb-4">
          Unser strukturierter Ablauf in 8 Schritten
        </h2>
        <WaterlineDivider className="mb-8" />
      </div>

      {/* Grid of steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
        {steps.map((step, idx) => {
          return (
            <div key={step.number} className="flex flex-col relative group">
              {/* Square Node Indicator with 2px borders and IBM Plex Mono */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[var(--color-bg-surface)] border-2 border-[var(--color-copper-600)] text-[var(--color-text-accent)] flex items-center justify-center font-mono font-semibold text-sm rounded-none select-none shrink-0 transition-all duration-300 group-hover:bg-[var(--color-copper-100)]">
                  {step.number}
                </div>
                {/* Horizontal flow line for desktop */}
                <div className="hidden lg:block h-[1.5px] bg-[var(--color-border-subtle)] flex-grow" />
              </div>

              {/* Step Info */}
              <div className="space-y-2">
                <h3 className="font-sans text-body-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Vertical line connection for mobile */}
              {idx < steps.length - 1 && (
                <div className="block md:hidden border-l-2 border-dashed border-[var(--color-border-default)] h-8 ml-6 my-2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
