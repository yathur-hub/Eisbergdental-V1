import React, { useState, useEffect } from 'react';
import { PageId } from './types';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import Startseite from './pages/Startseite';
import LeistungenOverview from './pages/LeistungenOverview';
import LeistungDetail from './pages/LeistungDetail';
import DigitalerWorkflow from './pages/DigitalerWorkflow';
import QualitaetSicherheit from './pages/QualitaetSicherheit';
import UeberUns from './pages/UeberUns';
import Referenzen from './pages/Referenzen';
import WissenFaq from './pages/WissenFaq';
import Downloads from './pages/Downloads';
import Kontakt from './pages/Kontakt';
import DatenschutzImpressum from './pages/DatenschutzImpressum';
import NotFound from './pages/NotFound';

import { AnimatePresence, motion } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

export default function App() {
  const [currentPageId, setCurrentPageId] = useState<PageId>('home');
  const valItems: any[] = [];
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  // Smooth scroll to top and initialize scroll reveal / line-draw animations on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    let timeoutId2: NodeJS.Timeout | null = null;

    const setupObserver = () => {
      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );

      const animElements = document.querySelectorAll('.reveal-on-scroll, .draw-line');
      animElements.forEach((el) => {
        observer?.observe(el);
      });
    };

    // First try: setup observer quickly (e.g. for initial page load when there's no exit animation)
    timeoutId = setTimeout(() => {
      setupObserver();
    }, 150);

    // Second try: setup observer after AnimatePresence exit transitions are complete (duration: 350ms)
    timeoutId2 = setTimeout(() => {
      setupObserver();
    }, 450);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (timeoutId2) clearTimeout(timeoutId2);
      if (observer) observer.disconnect();
    };
  }, [currentPageId]);

  const handleNavigation = (pageId: PageId, search?: string) => {
    setCurrentPageId(pageId);
    if (search && typeof window !== 'undefined') {
      const newUrl = `${window.location.origin}${window.location.pathname}${search}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
      
      // Dispatch a popstate or custom event to notify components that need to read the search string
      window.dispatchEvent(new Event('popstate'));
    } else if (typeof window !== 'undefined') {
      const newUrl = `${window.location.origin}${window.location.pathname}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    }
  };

  const renderActivePage = () => {
    switch (currentPageId) {
      case 'home':
        return <Startseite onNavigate={handleNavigation} valItems={valItems} />;
      case 'leistungen':
        return <LeistungenOverview onNavigate={handleNavigation} valItems={valItems} />;
      case 'implantatprothetik':
      case 'full-arch':
      case 'pink-white-aesthetik':
      case 'vollkeramik':
      case 'herausnehmbarer-zahnersatz':
      case 'reparaturen':
        return (
          <LeistungDetail
            pageId={currentPageId}
            onNavigate={handleNavigation}
            valItems={valItems}
          />
        );
      case 'workflow':
        return <DigitalerWorkflow onNavigate={handleNavigation} valItems={valItems} />;
      case 'qualitaet-sicherheit':
        return <QualitaetSicherheit onNavigate={handleNavigation} valItems={valItems} />;
      case 'ueber-uns':
      case 'team':
        return <UeberUns onNavigate={handleNavigation} valItems={valItems} />;
      case 'referenzen':
        return <Referenzen onNavigate={handleNavigation} valItems={valItems} />;
      case 'wissen-faq':
        return <WissenFaq onNavigate={handleNavigation} valItems={valItems} />;
      case 'downloads':
        return <Downloads onNavigate={handleNavigation} valItems={valItems} />;
      case 'kontakt':
        return <Kontakt onNavigate={handleNavigation} valItems={valItems} />;
      case 'datenschutz':
        return <DatenschutzImpressum initialTab="datenschutz" valItems={valItems} />;
      case 'impressum':
        return <DatenschutzImpressum initialTab="impressum" valItems={valItems} />;
      default:
        return <NotFound onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] min-h-screen flex flex-col font-sans selection:bg-[var(--color-copper-500)]/20 selection:text-[var(--color-copper-700)]">
      {/* Header */}
      <Header currentPageId={currentPageId} onNavigate={handleNavigation} />

      {/* Main Content Stage with transition animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPageId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* High Fidelity Swiss-compliant Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 z-40 w-[calc(100%-2rem)] sm:w-full max-w-sm bg-[var(--color-bg-canvas-dark)] text-[var(--color-text-secondary-ondark)] border border-[var(--color-brand-700)] p-5 rounded-[var(--radius-xs)] shadow-overlay text-xs space-y-4 animate-slide-in">
          <div className="flex items-start gap-3">
            <ShieldCheck className="text-[var(--color-copper-500)] shrink-0 mt-0.5" size={18} />
            <div className="space-y-1">
              <h4 className="font-semibold text-[var(--color-text-primary-ondark)] tracking-wide">Datenschutz & Cookies</h4>
              <p className="text-[var(--color-text-secondary-ondark)] leading-relaxed">
                Diese Website verwendet nur technisch notwendige Cookies sowie – mit Ihrer Einwilligung – Statistik-Cookies. Details in unserer{' '}
                <button
                  onClick={() => handleNavigation('datenschutz')}
                  className="text-[var(--color-copper-500)] hover:underline inline cursor-pointer"
                >
                  Datenschutzerklärung
                </button>
                .
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowCookieBanner(false)}
              className="flex-1 py-2 bg-[var(--color-interactive-accent)] hover:bg-[var(--color-interactive-accent-hover)] text-[var(--color-bg-canvas-dark)] font-bold rounded-[var(--radius-xs)] transition cursor-pointer"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={() => setShowCookieBanner(false)}
              className="flex-1 py-2 bg-[var(--color-brand-700)] hover:bg-[var(--color-brand-500)] text-[var(--color-text-primary-ondark)] font-semibold rounded-[var(--radius-xs)] border border-[var(--color-brand-500)] transition cursor-pointer"
            >
              Nur notwendige
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
