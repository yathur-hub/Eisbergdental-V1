/**
 * VALIDATION HELPER UTILITIES — Eisberg Dental
 * 
 * DESIGN-STRATEGIE:
 * - Strikte Validierungsfunktionen für Formularfelder zur Einhaltung regulatorischer Richtlinien.
 * - Teilt Validierungsregeln zwischen Client und Server (API Route).
 */

/**
 * Validiert das E-Mail-Format gemäss RFC 5322.
 */
export function validateEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Überprüft, ob ein Pflichtfeld ausgefüllt wurde.
 */
export function validateRequired(value: string | boolean | undefined): boolean {
  if (value === undefined || value === null) return false;
  if (typeof value === 'boolean') return value;
  return value.toString().trim().length > 0;
}
