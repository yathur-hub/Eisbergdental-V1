export interface IntentConfig {
  id: string;
  label: string;
  description: string;
  expectation: string;
  buttonLabel: string;
}

export interface KontaktContent {
  seo: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
    text: string;
  };
  intents: IntentConfig[];
  validation: {
    required: string;
    invalidEmail: string;
    success: string;
    error: string;
    privacyNote: string;
  };
  sidebar: {
    heading: string;
    phone: string;
    email: string;
    address: string;
  };
}

export const kontaktContent: KontaktContent = {
  seo: {
    title: "Kontakt – Eisberg Dental Zahntechnik Zürich",
    description: "Zusammenarbeit besprechen, einen Fall abstimmen oder eine Reparatur anfragen – Ihre Kontaktmöglichkeiten bei Eisberg Dental."
  },
  intro: {
    heading: "Kontakt",
    text: "Wählen Sie den für Ihr Anliegen passenden Kontaktweg – so können wir Ihre Anfrage direkt richtig einordnen und schneller antworten."
  },
  intents: [
    {
      id: "zusammenarbeit",
      label: "Zusammenarbeit besprechen",
      description: "Sie möchten Eisberg Dental grundsätzlich als Laborpartner kennenlernen.",
      expectation: "Wir melden uns für ein erstes Gespräch – persönlich, telefonisch oder auf Wunsch online nach Ihrer Wahl.",
      buttonLabel: "Zusammenarbeit anfragen"
    },
    {
      id: "fall",
      label: "Fall besprechen",
      description: "Sie haben einen konkreten Fall aus den Bereichen Implantatprothetik, Full Arch, Pink/White-Ästhetik oder Vollkeramik.",
      expectation: "Beschreiben Sie den Fall so konkret wie möglich – wir melden uns mit Rückfragen oder einer Einschätzung.",
      buttonLabel: "Fallanfrage senden"
    },
    {
      id: "workflow",
      label: "Digitalen Workflow einrichten",
      description: "Sie möchten klären, wie die digitale Datenübermittlung für Ihre Praxis funktioniert.",
      expectation: "Wir klären gemeinsam, welche Systeme und Formate Sie nutzen und wie die Übermittlung ablaufen kann.",
      buttonLabel: "Schnittstellen klären"
    },
    {
      id: "reparatur",
      label: "Reparatur oder Notfall melden",
      description: "Sie benötigen eine kurzfristige Reparatur oder Anpassung.",
      expectation: "Bitte schildern Sie die Dringlichkeit – wir melden uns zur Abklärung der Machbarkeit und Logistik.",
      buttonLabel: "Reparatur melden"
    },
    {
      id: "farbnahme",
      label: "Farbnahme koordinieren",
      description: "Sie möchten eine Farbnahme für einen laufenden Fall abstimmen.",
      expectation: "Wir setzen uns mit Ihnen in Verbindung, um die Farbbestimmung optimal zu koordinieren.",
      buttonLabel: "Farbnahme abstimmen"
    },
    {
      id: "rueckruf",
      label: "Rückruf anfordern",
      description: "Sie möchten lieber direkt am Telefon sprechen.",
      expectation: "Wir rufen Sie zur angegebenen Zeit zurück.",
      buttonLabel: "Rückrufanfrage senden"
    },
    {
      id: "laborbesuch",
      label: "Laborbesuch vereinbaren",
      description: "Sie möchten das Labor persönlich kennenlernen.",
      expectation: "Wir vereinbaren einen Termin an der Forchstrasse 261 in Zürich.",
      buttonLabel: "Laborbesuch anfragen"
    },
    {
      id: "unterlagen",
      label: "Unterlagen anfordern",
      description: "Sie möchten Auftragsformular, Workflow-Leitfaden oder Materialübersicht erhalten.",
      expectation: "Wir senden Ihnen die gewünschten Unterlagen per E-Mail zu, sobald diese verfügbar sind.",
      buttonLabel: "Unterlagen anfordern"
    },
    {
      id: "daten",
      label: "Daten übermitteln",
      description: "Sie möchten Scan- oder Falldaten sicher übermitteln.",
      expectation: "Die Übermittlung sensibler Patienten- und Falldaten stimmen wir nach Ihrer Kontaktaufnahme individuell und sicher mit Ihnen ab.",
      buttonLabel: "Übermittlung anfragen"
    }
  ],
  validation: {
    required: "Dieses Feld wird benötigt, damit wir Ihre Anfrage bearbeiten können.",
    invalidEmail: "Bitte prüfen Sie die E-Mail-Adresse – das Format scheint nicht vollständig zu sein.",
    success: "Ihre Anfrage ist eingegangen. Wir melden uns in der Regel innert Kürze bei Ihnen.",
    error: "Die Übermittlung hat nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@eisberg-dental.ch.",
    privacyNote: "Ihre Angaben werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet. Details in der Datenschutzerklärung."
  },
  sidebar: {
    heading: "Standort und Direktkontakt",
    phone: "+41 43 499 02 56",
    email: "info@eisberg-dental.ch",
    address: "Forchstrasse 261, 8032 Zürich"
  }
};
