/**
 * METADATA UTILITY — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Stellt konsistente Seitentitel mit dem Suffix " | Eisberg Dental" bereit.
 * - Liefert Fallback-Beschreibungen für SEO-Zwecke.
 * - Wird von den Seitenkomponenten verwendet, um Dokumententitel dynamisch im Client anzupassen.
 */

export interface PageMetadata {
  title: string;
  description: string;
}

const DEFAULT_METADATA: PageMetadata = {
  title: "Eisberg Dental – Zahntechnik für Implantate & Ästhetik, Zürich",
  description: "Zahntechnisches Labor in Zürich, spezialisiert auf Implantatprothetik, Full Arch und Pink/White-Ästhetik. Persönlich geführt, fachlich fundiert."
};

export function getPageMetadata(title?: string, description?: string): PageMetadata {
  return {
    title: title ? `${title}` : DEFAULT_METADATA.title,
    description: description || DEFAULT_METADATA.description
  };
}

/**
 * Updates the document title in a client-side React SPA environment.
 */
export function updateDocumentMetadata(title?: string, description?: string) {
  if (typeof window === 'undefined') return;
  const meta = getPageMetadata(title, description);
  document.title = meta.title;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', meta.description);
  } else {
    const newMetaDesc = document.createElement('meta');
    newMetaDesc.setAttribute('name', 'description');
    newMetaDesc.setAttribute('content', meta.description);
    document.head.appendChild(newMetaDesc);
  }
}
