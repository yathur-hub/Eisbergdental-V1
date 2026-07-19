export type PageId =
  | 'home'
  | 'leistungen'
  | 'implantatprothetik'
  | 'full-arch'
  | 'pink-white-aesthetik'
  | 'vollkeramik'
  | 'herausnehmbarer-zahnersatz'
  | 'reparaturen'
  | 'workflow'
  | 'qualitaet-sicherheit'
  | 'ueber-uns'
  | 'team'
  | 'referenzen'
  | 'wissen-faq'
  | 'downloads'
  | 'kontakt'
  | 'datenschutz'
  | 'impressum';

export interface FaqItem {
  question: string;
  answer: string;
  category: 'zusammenarbeit' | 'workflow' | 'materialien' | 'qualitaet';
}

export interface ValItem {
  id: string;
  page: string;
  location: string;
  statement: string;
  sourceNeeded: string;
  risk: string;
  priority: 'Kritisch' | 'Wichtig' | 'Ergänzend';
  status: 'Offen' | 'Geklärt';
}

export type ContactIntent =
  | 'zusammenarbeit'
  | 'fall'
  | 'workflow'
  | 'reparatur'
  | 'farbnahme'
  | 'rueckruf'
  | 'laborbesuch'
  | 'unterlagen'
  | 'daten';

export interface ContactFormState {
  intent: ContactIntent;
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  serviceType?: string;
  scannerType?: string;
  urgency?: string;
  preferredCallbackTime?: string;
  preferredDate?: string;
  requestedDocs: {
    auftragsformular: boolean;
    workflowLeitfaden: boolean;
    materialuebersicht: boolean;
  };
  acceptedTerms: boolean;
}
