import React from 'react';

interface HoneypotProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * HONEYPOT SPAM PROTECTION COMPONENT
 * 
 * DESIGN-STRATEGIE:
 * - Ein per CSS absolut unsichtbares Feld (ausserhalb des sichtbaren Viewports, opacity-0, pointer-events-none).
 * - Screenreader-Nutzer werden durch ein aria-hidden="true" oder klare Labels geschützt.
 * - Bots füllen dieses Feld automatisch aus, was serverseitig zur stillschweigenden Ablehnung führt.
 */
export default function Honeypot({ value, onChange }: HoneypotProps) {
  return (
    <div className="absolute opacity-0 pointer-events-none -z-50 h-0 overflow-hidden" aria-hidden="true">
      <label htmlFor="website_hp_field">Do not fill this field if you are a human:</label>
      <input
        type="text"
        id="website_hp_field"
        name="website_hp_field"
        value={value}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
