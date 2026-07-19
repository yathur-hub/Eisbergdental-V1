import React from 'react';
import LeistungenOverview from '../../pages/LeistungenOverview';

/**
 * NEXT.JS COMPATIBLE ROUTE — Leistungen Overview
 * 
 * DESIGN-STRATEGIE:
 * - Dient als Brücken-Komponente für Next.js-Sitemap-Anforderungen.
 * - Rendert die LeistungenOverview-Komponente.
 */
export default function Page() {
  const handleNavigate = (pageId: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/leistungen/${pageId}`;
    }
  };
  return <LeistungenOverview onNavigate={handleNavigate as any} />;
}
