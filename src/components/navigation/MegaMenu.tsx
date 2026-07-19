import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../../types';
import Icon from '../ui/Icon';

interface MegaMenuProps {
  currentPageId: PageId;
  onNavigate: (pageId: PageId) => void;
}

export default function MegaMenu({ currentPageId, onNavigate }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesAccordionOpen, setIsServicesAccordionOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Toggle open / close
  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle click outside menu content to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Focus trap implementation
  useEffect(() => {
    if (!isOpen) return;

    const modalElement = menuRef.current;
    if (!modalElement) return;

    // Wait a brief tick to let elements render and animate
    const focusableElements = modalElement.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleTab(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }

    modalElement.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => {
      modalElement.removeEventListener('keydown', handleTab);
    };
  }, [isOpen, isServicesAccordionOpen]); // re-run if accordion alters the visible focusable elements list

  const leistungenList = [
    {
      id: 'implantatprothetik' as PageId,
      label: 'Implantatprothetik',
      description: 'Suprakonstruktionen und Abutments auf Implantaten',
    },
    {
      id: 'full-arch' as PageId,
      label: 'Full Arch auf Implantaten',
      description: 'Vollbogenversorgungen für den zahnlosen Kiefer',
    },
    {
      id: 'pink-white-aesthetik' as PageId,
      label: 'Pink/White-Ästhetik',
      description: 'Zusammenspiel von Zahnfleisch- und Zahnersatzgestaltung',
    },
    {
      id: 'vollkeramik' as PageId,
      label: 'Vollkeramik',
      description: 'Kronen und Brücken aus Zirkonoxid und Glaskeramik',
    },
  ];

  const mainNavItems = [
    { id: 'leistungen' as PageId, label: 'Leistungen' },
    { id: 'workflow' as PageId, label: 'Digitaler Workflow' },
    { id: 'qualitaet-sicherheit' as PageId, label: 'Qualität & Sicherheit' },
    { id: 'ueber-uns' as PageId, label: 'Über uns' },
    { id: 'referenzen' as PageId, label: 'Referenzen' },
    { id: 'wissen-faq' as PageId, label: 'Wissen & FAQ' },
    { id: 'kontakt' as PageId, label: 'Kontakt' },
  ];

  const secondaryNavItems = [
    { id: 'downloads' as PageId, label: 'Downloads' },
    { id: 'datenschutz' as PageId, label: 'Datenschutzerklärung' },
    { id: 'impressum' as PageId, label: 'Impressum' },
  ];

  const handleItemClick = (id: PageId) => {
    setIsOpen(false);
    onNavigate(id);
    // Return focus to trigger button
    triggerRef.current?.focus();
  };

  return (
    <>
      {/* Unified Navigation Trigger Button */}
      <button
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-controls="mega-menu-panel"
        onClick={toggleMenu}
        className={`min-h-[44px] flex items-center justify-center gap-2.5 border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] font-display font-medium text-sm hover:border-[var(--color-interactive-primary)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-focus-ring)] transition-all duration-200 select-none group ${
          isOpen ? 'px-5 min-w-[120px]' : 'w-11'
        }`}
      >
        {isOpen && (
          <span className="uppercase tracking-wider text-[11px] font-bold">
            Schliessen
          </span>
        )}
        
        {/* Animated Custom SVG Hamburger Line-based Icon */}
        <div className="w-4 h-4 flex items-center justify-center relative">
          <span 
            className={`absolute block h-[1.5px] w-4 bg-current transition-transform duration-300 ease-[var(--easing-standard)] ${
              isOpen ? 'rotate-45 translate-y-0' : '-translate-y-[5px]'
            }`} 
          />
          <span 
            className={`absolute block h-[1.5px] w-4 bg-current transition-all duration-300 ease-[var(--easing-standard)] ${
              isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
            }`} 
          />
          <span 
            className={`absolute block h-[1.5px] w-4 bg-current transition-transform duration-300 ease-[var(--easing-standard)] ${
              isOpen ? '-rotate-45 translate-y-0' : 'translate-y-[5px]'
            }`} 
          />
        </div>
      </button>

      {/* Full-width Responsive Mega Menu Panel */}
      {isOpen && (
        <div 
          ref={menuRef}
          id="mega-menu-panel"
          className="absolute inset-x-0 top-full h-[calc(100vh-100%)] z-[140] text-[var(--color-text-secondary-ondark)] border-t border-[var(--color-brand-700)] overflow-hidden flex flex-col transition-all animate-fade-in scroll-parallax-aurora bg-[var(--color-bg-canvas-dark)]"
          style={{ background: 'var(--gradient-aurora)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Hauptnavigation"
        >
          {/* Fine decorative noise/grain overlay */}
          <div className="grain-overlay" aria-hidden="true" />

          {/* Decorative Contour Lines (Schichtlinien-Textur) */}
          <div className="absolute inset-0 pointer-events-none select-none flex flex-col justify-around py-16" aria-hidden="true">
            <div className="h-[1px] w-full bg-[var(--color-brand-700)]/5" />
            <div className="h-[1px] w-full bg-[var(--color-brand-700)]/6" />
            <div className="h-[1px] w-full bg-[var(--color-brand-700)]/4" />
            <div className="h-[1px] w-full bg-[var(--color-brand-700)]/5" />
            <div className="h-[1px] w-full bg-[var(--color-brand-700)]/7" />
          </div>

          <div 
            className="container relative z-10 flex-1 overflow-y-auto py-12 md:py-16 flex flex-col justify-between"
          >
            {/* Mega-Grid for Desktop & Tablet, fallback to Single Stack on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* SPALTE 1: MAIN NAVIGATION LINKS (Desktop/Tablet) */}
              <div className="hidden md:block lg:col-span-5 space-y-6 lg:space-y-8 animate-slide-in">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-secondary-ondark)]/40 block">
                  Atelier Navigation
                </span>
                <nav className="flex flex-col gap-3 lg:gap-4 align-start">
                  {mainNavItems.map((item) => {
                    const isActive = currentPageId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`text-left font-serif text-h2 md:text-h2 lg:text-h1 font-medium tracking-tight hover:text-[var(--color-copper-500)] focus:text-[var(--color-copper-500)] focus-visible:outline-none transition-colors duration-200 cursor-pointer block group ${
                          isActive ? 'text-[var(--color-copper-500)]' : 'text-[var(--color-text-primary-ondark)]'
                        }`}
                      >
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* SPALTE 2: SERVICES (Desktop/Tablet) */}
              <div className="hidden md:block lg:col-span-4 space-y-6 lg:space-y-8 animate-slide-in [animation-delay:80ms]">
                <div className="flex items-center justify-between border-b border-[var(--color-brand-700)] pb-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-secondary-ondark)]/40 block">
                    Leistungen & Angebote
                  </span>
                  <button
                    onClick={() => handleItemClick('leistungen')}
                    className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-copper-500)] hover:underline focus:underline cursor-pointer"
                  >
                    Alle ansehen →
                  </button>
                </div>

                <div className="flex flex-col gap-5 lg:gap-6">
                  {leistungenList.map((item) => {
                    const isActive = currentPageId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`text-left block space-y-1.5 p-3 -mx-3 hover:bg-[var(--color-brand-700)]/30 border-l-2 transition-all duration-200 cursor-pointer focus-visible:outline-none ${
                          isActive 
                            ? 'border-[var(--color-copper-600)] bg-[var(--color-brand-700)]/50' 
                            : 'border-transparent hover:border-[var(--color-brand-500)]'
                        }`}
                      >
                        <h4 className="font-display text-sm font-semibold text-[var(--color-text-primary-ondark)] uppercase tracking-wide">
                          {item.label}
                        </h4>
                        <p className="text-xs text-[var(--color-text-secondary-ondark)] leading-relaxed font-sans max-w-sm">
                          {item.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SPALTE 3: CONTACT & PROOF POINT (Desktop/Tablet) */}
              <div className="hidden md:block col-span-1 md:col-span-2 lg:col-span-3 card-glass space-y-6 lg:space-y-8 animate-slide-in [animation-delay:160ms]">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-secondary-ondark)]/40 block">
                  Direkter Draht
                </span>

                <div className="space-y-6 text-sm text-[var(--color-text-secondary-ondark)]">
                  {/* Telephone */}
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-secondary-ondark)]/60 block">Telefon</span>
                    <a 
                      href="tel:+41434990256" 
                      className="font-bold text-base text-[var(--color-text-primary-ondark)] hover:text-[var(--color-copper-500)] transition-colors hover:underline block"
                    >
                      +41 43 499 02 56
                    </a>
                  </div>

                  {/* E-Mail */}
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-secondary-ondark)]/60 block">E-Mail</span>
                    <a 
                      href="mailto:info@eisberg-dental.ch" 
                      className="font-bold text-sm text-[var(--color-text-primary-ondark)] hover:text-[var(--color-copper-500)] transition-colors hover:underline block"
                    >
                      info@eisberg-dental.ch
                    </a>
                  </div>

                  {/* Address */}
                  <div className="space-y-1 pt-2 border-t border-[var(--surface-glass-border)]">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-secondary-ondark)]/60 block">Atelieradresse</span>
                    <p className="leading-relaxed text-xs">
                       Forchstrasse 261<br />
                      8032 Zürich
                    </p>
                  </div>
                </div>

                {/* Proof Point Info Box */}
                <div className="p-4 border border-[var(--surface-glass-border)] rounded bg-[rgba(255,255,255,0.03)] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-copper-500)] font-bold block">
                    Atelierleitung
                  </span>
                  <p className="text-xs leading-relaxed text-[var(--color-text-secondary-ondark)]">
                    Persönlicher Ansprechpartner für zahntechnische Fallberatungen:
                  </p>
                  <p className="font-display text-xs font-bold text-[var(--color-text-primary-ondark)] uppercase tracking-wide">
                    Thomas Barandun
                  </p>
                </div>

                {/* CTA Button in Column */}
                <button
                  onClick={() => handleItemClick('kontakt')}
                  className="w-full btn btn-accent text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Kontakt
                </button>
              </div>

              {/* --- FALLBACK FOR MOBILE VIEWPORTS (< 768px) --- */}
              <div className="md:hidden flex flex-col gap-6 animate-slide-in">
                
                {/* Accordion for Leistungen on Mobile */}
                <div className="border border-[var(--color-brand-700)] bg-[var(--color-brand-700)]/20 rounded-[var(--radius-xs)]">
                  <button
                    onClick={() => setIsServicesAccordionOpen(!isServicesAccordionOpen)}
                    className="w-full min-h-[44px] px-4 py-3 flex justify-between items-center text-left text-sm font-semibold tracking-wide uppercase text-[var(--color-text-primary-ondark)] focus:outline-none"
                  >
                    <span>Leistungen</span>
                    <span className="font-mono text-xs text-[var(--color-copper-500)]">
                      {isServicesAccordionOpen ? '[ WENIGER ]' : '[ MEHR ]'}
                    </span>
                  </button>

                  {isServicesAccordionOpen && (
                    <div className="px-4 pb-4 border-t border-[var(--color-brand-700)]/60 pt-3 space-y-4 animate-fade-in">
                      <button
                        onClick={() => handleItemClick('leistungen')}
                        className="text-left font-display text-xs font-bold uppercase text-[var(--color-copper-500)] hover:underline block"
                      >
                        Alle Leistungen im Überblick →
                      </button>
                      <div className="space-y-4 pt-1">
                        {leistungenList.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleItemClick(item.id)}
                            className="w-full text-left block space-y-1 border-l border-[var(--color-brand-500)] pl-3"
                          >
                            <h5 className="font-display text-xs font-bold uppercase text-[var(--color-text-primary-ondark)]">
                              {item.label}
                            </h5>
                            <p className="text-[11px] text-[var(--color-text-secondary-ondark)]/80 leading-relaxed font-sans">
                              {item.description}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Main Links List */}
                <div className="flex flex-col gap-1.5">
                  {mainNavItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full min-h-[44px] flex items-center text-left px-4 py-2 font-display text-sm font-medium tracking-wide border border-transparent rounded-[var(--radius-xs)] hover:bg-[var(--color-brand-700)]/30 ${
                        currentPageId === item.id 
                          ? 'bg-[var(--color-brand-700)] text-[var(--color-copper-500)] border-l-2 border-l-[var(--color-copper-600)]' 
                          : 'text-[var(--color-text-primary-ondark)]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Contact Box Mobile */}
                <div className="card-glass space-y-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-secondary-ondark)]/40 block">
                    Kontakt & Anfahrt
                  </span>
                  
                  <div className="space-y-3.5 text-xs">
                    <a 
                      href="tel:+41434990256" 
                      className="flex items-center gap-2.5 font-bold text-[var(--color-text-primary-ondark)] hover:text-[var(--color-copper-500)]"
                    >
                      <Icon name="phone" size={14} className="text-[var(--color-copper-500)]" />
                      <span>+41 43 499 02 56</span>
                    </a>
                    <div className="text-[11px] text-[var(--color-text-secondary-ondark)] leading-relaxed pl-6">
                      Forchstrasse 261 &bull; 8032 Zürich
                    </div>
                  </div>

                  <button
                    onClick={() => handleItemClick('kontakt')}
                    className="w-full btn btn-accent text-xs font-bold uppercase tracking-widest"
                  >
                    Zusammenarbeit besprechen
                  </button>
                </div>

              </div>

            </div>

            {/* Footer Row (Downloads, Datenschutzerklärung, Impressum) */}
            <div className="mt-12 pt-6 border-t border-[var(--color-brand-700)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--color-text-secondary-ondark)]/60">
              <span className="text-[11px] text-center sm:text-left">
                &copy; {new Date().getFullYear()} Eisberg Dental. Alle Rechte vorbehalten.
              </span>
              <div className="flex flex-wrap gap-4 justify-center">
                {secondaryNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className="hover:text-[var(--color-copper-500)] focus:text-[var(--color-copper-500)] cursor-pointer text-[11px]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </>
  );
}
