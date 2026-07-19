import React from 'react';

export type IconName = 'menu' | 'close' | 'phone' | 'arrow' | 'plus' | 'minus' | 'warning' | 'check' | 'activity' | 'shield' | 'smile' | 'layers' | 'arrow-right' | 'arrow-left' | 'quote';

interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
  ariaLabel?: string;
}

/**
 * ICON-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Minimalistischer SVG-Icon-Satz im einheitlichen Outline-Stil (Phosphor-Stil).
 * - Strikte Linienstärke von 1.5px für eine filigrane, architektonische Anmutung.
 * - 24x24 Viewbox mit currentColor-Verhalten für nahtlose Farbanpassungen.
 * - Automatische Barrierefreiheit: aria-hidden="true" bei rein dekorativer Verwendung,
 *   sonst mit individuellem aria-label bzw. sichtbarem Label.
 */
export default function Icon({ name, size = 20, className = '', ariaLabel }: IconProps) {
  const isDecorative = !ariaLabel;

  const svgProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.5',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: `inline-block shrink-0 ${className}`,
    'aria-hidden': isDecorative ? 'true' : undefined,
    'aria-label': ariaLabel || undefined,
    role: isDecorative ? undefined : 'img',
  };

  switch (name) {
    case 'menu':
      return (
        <svg {...svgProps}>
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      );
    case 'close':
      return (
        <svg {...svgProps}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...svgProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case 'arrow':
    case 'arrow-right':
      return (
        <svg {...svgProps}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case 'arrow-left':
      return (
        <svg {...svgProps}>
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      );
    case 'plus':
      return (
        <svg {...svgProps}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case 'minus':
      return (
        <svg {...svgProps}>
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case 'warning':
      return (
        <svg {...svgProps}>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case 'check':
      return (
        <svg {...svgProps}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case 'activity':
      return (
        <svg {...svgProps}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...svgProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'smile':
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...svgProps}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'quote':
      return (
        <svg {...svgProps}>
          <path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 3-1 6-4 8zm11 0c3 0 7-1 7-8V5h-7v8h4c0 3-1 6-4 8z" />
        </svg>
      );
    default:
      return null;
  }
}
