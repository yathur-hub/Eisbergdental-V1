import React, { useState, useEffect } from 'react';
import { PageId, ContactIntent, ContactFormState } from '../../types';
import { validateEmail, validateRequired } from '../../lib/validation';
import Honeypot from './Honeypot';
import { kontaktContent } from '../../content/pages/kontakt';
import { ShieldCheck, Info, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';

interface ContactFormProps {
  onNavigate: (pageId: PageId) => void;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  acceptedTerms?: string;
}

export default function ContactForm({ onNavigate }: ContactFormProps) {
  // Initial state following ContactFormState type
  const [formState, setFormState] = useState<ContactFormState>({
    intent: 'zusammenarbeit',
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'implantatprothetik',
    scannerType: '',
    urgency: 'flexibel',
    preferredCallbackTime: '',
    preferredDate: '',
    requestedDocs: {
      auftragsformular: false,
      workflowLeitfaden: false,
      materialuebersicht: false,
    },
    acceptedTerms: false,
  });

  const [hpValue, setHpValue] = useState<string>(''); // Honeypot state
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle URL query parameters to preset intent (e.g. ?anlass=workflow)
  useEffect(() => {
    const handleUrlPreset = () => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const anlass = params.get('anlass') as ContactIntent;
        const validIntents: ContactIntent[] = [
          'zusammenarbeit',
          'fall',
          'workflow',
          'reparatur',
          'farbnahme',
          'rueckruf',
          'laborbesuch',
          'unterlagen',
          'daten',
        ];
        if (anlass && validIntents.includes(anlass)) {
          setFormState((prev) => ({ ...prev, intent: anlass }));
        }
      }
    };

    handleUrlPreset();
    window.addEventListener('popstate', handleUrlPreset);
    return () => {
      window.removeEventListener('popstate', handleUrlPreset);
    };
  }, []);

  // Sync title and specific fields on intent change
  const activeIntent = kontaktContent.intents.find((i) => i.id === formState.intent) || kontaktContent.intents[0];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === 'acceptedTerms') {
      setFormState((prev) => ({ ...prev, acceptedTerms: checked }));
      if (errors.acceptedTerms) {
        setErrors((prev) => ({ ...prev, acceptedTerms: undefined }));
      }
    }
  };

  const handleDocCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      requestedDocs: {
        ...prev.requestedDocs,
        [name]: checked,
      },
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateRequired(formState.firstName)) {
      newErrors.firstName = kontaktContent.validation.required;
    }
    if (!validateRequired(formState.lastName)) {
      newErrors.lastName = kontaktContent.validation.required;
    }
    if (!validateRequired(formState.email)) {
      newErrors.email = kontaktContent.validation.required;
    } else if (!validateEmail(formState.email)) {
      newErrors.email = kontaktContent.validation.invalidEmail;
    }
    if (!validateRequired(formState.message)) {
      newErrors.message = kontaktContent.validation.required;
    }
    if (!formState.acceptedTerms) {
      newErrors.acceptedTerms = kontaktContent.validation.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // POST request to api route
      const response = await fetch('/api/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          website_hp_field: hpValue, // Send the honeypot value to the API
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset state
        setFormState({
          intent: 'zusammenarbeit',
          company: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          serviceType: 'implantatprothetik',
          scannerType: '',
          urgency: 'flexibel',
          preferredCallbackTime: '',
          preferredDate: '',
          requestedDocs: {
            auftragsformular: false,
            workflowLeitfaden: false,
            materialuebersicht: false,
          },
          acceptedTerms: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[var(--color-bg-surface)] border-2 border-[var(--color-border-default)] p-6 md:p-8 rounded-none">
      {/* Honeypot anti-spam field */}
      <Honeypot value={hpValue} onChange={(e) => setHpValue(e.target.value)} />

      {/* Select Intent */}
      <div className="space-y-2">
        <label htmlFor="intent" className="text-overline block font-semibold">
          Worum geht es?
        </label>
        <select
          id="intent"
          name="intent"
          value={formState.intent}
          onChange={(e) => handleInputChange(e)}
          className="w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 border-[var(--color-border-default)] px-4 text-sm font-medium focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors"
        >
          {kontaktContent.intents.map((intent) => (
            <option key={intent.id} value={intent.id}>
              {intent.label}
            </option>
          ))}
        </select>
      </div>

      {/* Dynamic Intent Card Info */}
      <div className="p-4 bg-[var(--color-bg-canvas)] border-l-2 border-[var(--color-copper-600)] space-y-1.5">
        <h4 className="font-sans text-xs font-bold text-[var(--color-text-accent)] uppercase tracking-wider">
          {activeIntent.label}
        </h4>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          {activeIntent.description}
        </p>
        <div className="flex gap-1.5 items-start text-xs font-medium text-[var(--color-text-primary)] pt-1">
          <Info size={14} className="mt-0.5 shrink-0 text-[var(--color-copper-600)]" />
          <span>
            <strong>Erwartung:</strong> {activeIntent.expectation}
          </span>
        </div>
      </div>

      {/* Dynamic Fields based on active intent */}
      {formState.intent === 'fall' && (
        <div className="space-y-2 animate-slide-in">
          <label htmlFor="serviceType" className="text-overline block font-semibold">
            Betroffene Leistung
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formState.serviceType}
            onChange={(e) => handleInputChange(e)}
            className="w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 border-[var(--color-border-default)] px-4 text-sm font-medium focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors"
          >
            <option value="implantatprothetik">Implantatprothetik</option>
            <option value="full-arch">Full Arch auf Implantaten</option>
            <option value="pink-white-aesthetik">Pink/White-Ästhetik</option>
            <option value="vollkeramik">Vollkeramik</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
        </div>
      )}

      {formState.intent === 'workflow' && (
        <div className="space-y-2 animate-slide-in">
          <label htmlFor="scannerType" className="text-overline block font-semibold">
            Welches Scanner-/Softwaresystem nutzen Sie?
          </label>
          <input
            id="scannerType"
            type="text"
            name="scannerType"
            value={formState.scannerType}
            onChange={handleInputChange}
            placeholder="z.B. Sirona CEREC, 3Shape TRIOS, Medit..."
            className="w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 border-[var(--color-border-default)] px-4 text-sm focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors"
          />
        </div>
      )}

      {formState.intent === 'reparatur' && (
        <div className="space-y-2 animate-slide-in">
          <label htmlFor="urgency" className="text-overline block font-semibold">
            Wie dringend ist die Anfrage?
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formState.urgency}
            onChange={(e) => handleInputChange(e)}
            className="w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 border-[var(--color-border-default)] px-4 text-sm font-medium focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors"
          >
            <option value="heute">heute</option>
            <option value="diese-woche">diese Woche</option>
            <option value="flexibel">flexibel</option>
          </select>
        </div>
      )}

      {formState.intent === 'rueckruf' && (
        <div className="space-y-2 animate-slide-in">
          <label htmlFor="preferredCallbackTime" className="text-overline block font-semibold">
            Bevorzugte Rückrufzeit
          </label>
          <input
            id="preferredCallbackTime"
            type="text"
            name="preferredCallbackTime"
            value={formState.preferredCallbackTime}
            onChange={handleInputChange}
            placeholder="z.B. Vormittags 09:00 - 11:30 oder Nachmittags"
            className="w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 border-[var(--color-border-default)] px-4 text-sm focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors"
          />
        </div>
      )}

      {formState.intent === 'laborbesuch' && (
        <div className="space-y-2 animate-slide-in">
          <label htmlFor="preferredDate" className="text-overline block font-semibold">
            Terminwunsch (Vorschläge)
          </label>
          <input
            id="preferredDate"
            type="text"
            name="preferredDate"
            value={formState.preferredDate}
            onChange={handleInputChange}
            placeholder="z.B. Nächsten Dienstag nachmittags"
            className="w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 border-[var(--color-border-default)] px-4 text-sm focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors"
          />
        </div>
      )}

      {formState.intent === 'unterlagen' && (
        <div className="space-y-3 p-4 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] animate-slide-in">
          <span className="text-overline block font-semibold text-xs text-[var(--color-text-accent)]">
            Gewünschte Unterlagen auswählen:
          </span>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="auftragsformular"
                checked={formState.requestedDocs.auftragsformular}
                onChange={handleDocCheckboxChange}
                className="accent-[var(--color-copper-600)]"
              />
              <span>Auftragsformular (In Vorbereitung)</span>
            </label>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="workflowLeitfaden"
                checked={formState.requestedDocs.workflowLeitfaden}
                onChange={handleDocCheckboxChange}
                className="accent-[var(--color-copper-600)]"
              />
              <span>Workflow-Leitfaden (In Vorbereitung)</span>
            </label>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="materialuebersicht"
                checked={formState.requestedDocs.materialuebersicht}
                onChange={handleDocCheckboxChange}
                className="accent-[var(--color-copper-600)]"
              />
              <span>Materialübersicht (In Vorbereitung)</span>
            </label>
          </div>
        </div>
      )}

      {/* Basic Input Fields (Praxis/Firma, Name, Email, Telefon) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5 md:col-span-2">
          <label htmlFor="company" className="text-overline block font-semibold text-xs">
            Praxis oder Klinik <span className="text-[var(--color-text-tertiary)] font-normal text-[10px]">(Optional)</span>
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={formState.company}
            onChange={handleInputChange}
            placeholder="z.B. Zahnarztpraxis Dr. Muster"
            className="w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 border-[var(--color-border-default)] px-4 text-sm focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="firstName" className="text-overline block font-semibold text-xs">
            Vorname*
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formState.firstName}
            onChange={handleInputChange}
            className={`w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 ${
              errors.firstName ? 'border-[var(--color-error-500)]' : 'border-[var(--color-border-default)]'
            } px-4 text-sm focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors`}
          />
          {errors.firstName && (
            <p className="text-xs text-[var(--color-error-700)] font-medium mt-1">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="lastName" className="text-overline block font-semibold text-xs">
            Nachname*
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formState.lastName}
            onChange={handleInputChange}
            className={`w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 ${
              errors.lastName ? 'border-[var(--color-error-500)]' : 'border-[var(--color-border-default)]'
            } px-4 text-sm focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors`}
          />
          {errors.lastName && (
            <p className="text-xs text-[var(--color-error-700)] font-medium mt-1">
              {errors.lastName}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-overline block font-semibold text-xs">
            E-Mail-Adresse*
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            placeholder="arzt@praxis.ch"
            className={`w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 ${
              errors.email ? 'border-[var(--color-error-500)]' : 'border-[var(--color-border-default)]'
            } px-4 text-sm focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors`}
          />
          <span className="text-[10px] text-[var(--color-text-tertiary)] block mt-0.5">
            Für die Rückmeldung zu Ihrer Anfrage.
          </span>
          {errors.email && (
            <p className="text-xs text-[var(--color-error-700)] font-medium mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-overline block font-semibold text-xs">
            Telefonnummer <span className="text-[var(--color-text-tertiary)] font-normal text-[10px]">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleInputChange}
            placeholder="+41 43 000 00 00"
            className="w-full min-h-[44px] bg-[var(--color-bg-canvas)] border-2 border-[var(--color-border-default)] px-4 text-sm focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors"
          />
          <span className="text-[10px] text-[var(--color-text-tertiary)] block mt-0.5">
            Optional – für eine schnellere Rückmeldung.
          </span>
        </div>
      </div>

      {/* Ihre Nachricht */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-overline block font-semibold text-xs">
          Ihre Nachricht*
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleInputChange}
          rows={5}
          placeholder="Beschreiben Sie Ihr Anliegen – je konkreter, desto schneller können wir antworten."
          className={`w-full bg-[var(--color-bg-canvas)] border-2 ${
            errors.message ? 'border-[var(--color-error-500)]' : 'border-[var(--color-border-default)]'
          } p-4 text-sm focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors resize-y`}
        />
        {errors.message && (
          <p className="text-xs text-[var(--color-error-700)] font-medium mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Datenschutz Checkbox */}
      <div className="space-y-2">
        <label className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] cursor-pointer select-none">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formState.acceptedTerms}
            onChange={handleCheckboxChange}
            className="mt-1 accent-[var(--color-copper-600)]"
          />
          <span>
            Ich habe die{' '}
            <button
              type="button"
              onClick={() => onNavigate('datenschutz')}
              className="text-[var(--color-text-accent)] font-semibold hover:underline cursor-pointer"
            >
              Datenschutzerklärung
            </button>{' '}
            gelesen und akzeptiere sie.*
          </span>
        </label>
        {errors.acceptedTerms && (
          <p className="text-xs text-[var(--color-error-700)] font-medium">
            {errors.acceptedTerms}
          </p>
        )}
      </div>

      {/* Submission Feedback Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-[var(--color-success-700)]/10 border border-[var(--color-success-700)]/20 text-sm text-[var(--color-success-700)] flex items-start gap-3">
          <CheckCircle size={18} className="shrink-0 mt-0.5" />
          <p>{kontaktContent.validation.success}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-[var(--color-error-700)]/10 border border-[var(--color-error-700)]/20 text-sm text-[var(--color-error-700)] flex items-start gap-3">
          <AlertTriangle size={18} className="shrink-0 mt-0.5" />
          <p>{kontaktContent.validation.error}</p>
        </div>
      )}

      {/* Absende-Button (Anlassspezifisch benannt) */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-accent w-full sm:w-auto font-semibold cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin mr-2" />
              Übermittlung läuft...
            </>
          ) : (
            activeIntent.buttonLabel
          )}
        </button>

        <span className="text-[11px] text-[var(--color-text-tertiary)] italic leading-relaxed sm:max-w-xs">
          {kontaktContent.validation.privacyNote}
        </span>
      </div>
    </form>
  );
}
