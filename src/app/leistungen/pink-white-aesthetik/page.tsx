import React from 'react';
import LeistungDetail from '../../../pages/LeistungDetail';

/**
 * NEXT.JS COMPATIBLE ROUTE — Pink/White-Ästhetik Detail Page
 */
export default function Page() {
  const handleNavigate = (pageId: string, search?: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/${pageId}${search || ''}`;
    }
  };
  return <LeistungDetail pageId="pink-white-aesthetik" onNavigate={handleNavigate as any} />;
}
