import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import Logo from './ui/Logo';
import MegaMenu from './navigation/MegaMenu';

interface HeaderProps {
  currentPageId: PageId;
  onNavigate: (pageId: PageId) => void;
}

/**
 * HEADER-KOMPONENTE — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Sticky-Header, der sich beim Scrollen (> 80px) weich verkleinert und kompakter wird.
 * - Nutzt die Logo-Komponente (links) und den einheitlichen Mega-Menü Trigger für Desktop & Mobile.
 * - Bietet volle Tastaturbedienbarkeit und Screenreader-Unterstützung.
 */
export default function Header({ currentPageId, onNavigate }: HeaderProps) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[150] w-full backdrop-blur-md transition-[background-color,border-color,padding,box-shadow] duration-200 ease-in-out border-b ${
        isCompact 
          ? 'py-3 bg-[var(--color-bg-canvas)] border-[var(--color-border-default)] shadow-raised' 
          : 'py-5 md:py-7 bg-[var(--color-bg-canvas)]/90 border-[var(--color-border-subtle)]'
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        {/* Logo - click navigates to Home */}
        <Logo
          variant="standard"
          onClick={() => onNavigate('home')}
          heightClass="h-24 md:h-[120px]"
          className="shrink-0 transition-transform duration-300 active:scale-95 cursor-pointer"
        />

        {/* Menu Trigger Container */}
        <div className="flex items-center gap-4">
          {/* Unified Responsive Mega Menu Trigger & Overlay */}
          <MegaMenu currentPageId={currentPageId} onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  );
}

