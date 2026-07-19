import React from 'react';
import Startseite from '../pages/Startseite';

/**
 * NEXT.JS COMPATIBLE ROUTE — Home Page
 * 
 * DESIGN-STRATEGIE:
 * - Dient als Brücken-Komponente für Next.js-Sitemap-Anforderungen.
 * - Rendert die verifizierte Startseite.
 */
export default function Page() {
  const handleNavigate = (pageId: string, search?: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/${pageId}${search || ''}`;
    }
  };
  return <Startseite onNavigate={handleNavigate as any} />;
}
