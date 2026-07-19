import React from 'react';
import LeistungDetail from '../../../pages/LeistungDetail';

/**
 * NEXT.JS COMPATIBLE ROUTE — Implantatprothetik Detail Page
 */
export default function Page() {
  const handleNavigate = (pageId: string, search?: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/${pageId}${search || ''}`;
    }
  };
  return <LeistungDetail pageId="implantatprothetik" onNavigate={handleNavigate as any} />;
}
