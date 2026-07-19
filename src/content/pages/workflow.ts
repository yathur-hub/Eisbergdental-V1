export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

export interface WorkflowContent {
  seo: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
    text: string;
  };
  steps: WorkflowStep[];
  datenuebermittlung: {
    heading: string;
    text: string;
    ctaText: string;
  };
  datenschutz: {
    heading: string;
    intro: string;
    points: Array<{ label: string; text: string }>;
    note: string;
    outro: string;
  };
  analog: {
    heading: string;
    paragraphs: string[];
  };
  faqs: Array<{ question: string; answer: string }>;
  abschlussCta: {
    heading: string;
    text: string;
    ctaPrimary: { text: string; pageId: string; search: string };
    ctaSecondary: { text: string; pageId: string };
  };
  uploader: {
    helpText: string;
    successText: string;
    errorFormat: string;
    errorSize: string;
    privacyNote: string;
  };
}

export const workflowContent: WorkflowContent = {
  seo: {
    title: "Digitaler Workflow – Zahntechnik Zürich | Eisberg Dental",
    description: "Wie die digitale Zusammenarbeit mit Eisberg Dental abläuft – von der Datenübermittlung bis zur fertigen Arbeit."
  },
  intro: {
    heading: "Digitaler Workflow",
    text: "Die Zusammenarbeit mit Eisberg Dental beginnt mit der Übermittlung Ihrer Fallunterlagen – ob digital oder analog. Diese Seite beschreibt den Ablauf von der Datenübermittlung bis zur fertigen Arbeit."
  },
  steps: [
    {
      number: "01",
      title: "Fall übermitteln",
      description: "Sie senden uns die Fallunterlagen (Planungsdaten, Scan oder Abformung)."
    },
    {
      number: "02",
      title: "Daten und Anforderungen prüfen",
      description: "Wir prüfen die eingegangenen Unterlagen auf Vollständigkeit."
    },
    {
      number: "03",
      title: "Rückfragen klären",
      description: "Bei Unklarheiten kontaktieren wir Sie direkt, bevor die Fertigung beginnt."
    },
    {
      number: "04",
      title: "Planung abstimmen",
      description: "Bei komplexen Fällen (z. B. Full Arch, Pink/White-Ästhetik) erfolgt eine gemeinsame Abstimmung der Planungsgrundlage."
    },
    {
      number: "05",
      title: "Fertigung",
      description: "Die Arbeit wird im Labor konstruiert und hergestellt."
    },
    {
      number: "06",
      title: "Qualitätskontrolle",
      description: "Prüfung vor Auslieferung."
    },
    {
      number: "07",
      title: "Lieferung",
      description: "Übergabe der fertigen Arbeit."
    },
    {
      number: "08",
      title: "Nachbetreuung",
      description: "Bei Rückfragen nach der Einprobe/Eingliederung stehen wir für Korrekturen zur Verfügung."
    }
  ],
  datenuebermittlung: {
    heading: "Digitale Datenübermittlung",
    text: "Welche digitalen Schnittstellen für Ihre Praxis passen, klären wir direkt im Gespräch.",
    ctaText: "Workflow-Leitfaden anfordern"
  },
  datenschutz: {
    heading: "Datenschutz bei der Übermittlung",
    intro: "Bei der Übermittlung von Fall- und Patientendaten gilt das Schweizer Datenschutzgesetz (DSG). Gesundheitsbezogene Personendaten gehören zu den besonders schützenswerten Personendaten im Sinne des DSG – entsprechend sorgfältig behandeln wir jede Übermittlung, unabhängig vom gewählten Übertragungsweg.",
    points: [
      {
        label: "Persönliche Verantwortung statt anonymer Bearbeitung",
        text: "Eingehende Fall- und Patientendaten werden ausschliesslich von Thomas Barandun persönlich entgegengenommen und bearbeitet. Es sind keine weiteren Personen oder externen Dienstleister zwischengeschaltet."
      },
      {
        label: "Zweckbindung",
        text: "Übermittelte Daten werden ausschliesslich zur Bearbeitung des jeweiligen Falls verwendet und nicht für andere Zwecke weiterverarbeitet oder an Dritte weitergegeben."
      },
      {
        label: "Praktische Empfehlung zur Datenminimierung",
        text: "Wo immer möglich, empfehlen wir, Fälle mit einer Praxis-internen Fallnummer oder Initialen statt mit dem vollständigen Patientennamen zu kennzeichnen. Das reduziert das Risiko bei jeder Übermittlung zusätzlich – unabhängig davon, auf welchem Weg die Daten letztlich übertragen werden."
      }
    ],
    note: "Ein konkretes technisches Sicherheitskonzept für den Datentransfer (z. B. ein verschlüsselter Upload-Kanal) befindet sich aktuell in Abstimmung. Bis dahin klären wir den für Ihre Praxis passenden, sichersten Übertragungsweg im direkten Gespräch.",
    outro: "Weitere Details zur Verarbeitung Ihrer Daten finden Sie in unserer Datenschutzerklärung."
  },
  analog: {
    heading: "Analoge Zusammenarbeit",
    paragraphs: [
      "Nicht jede Praxis arbeitet bereits vollständig digital – und das muss sie auch nicht. Auch die Zusammenarbeit auf Basis konventioneller Abformungen ist bei Eisberg Dental möglich: Sie übermitteln die Abformung auf dem für Ihre Praxis gewohnten Weg, wir übernehmen die weitere Bearbeitung im Labor nach demselben Ablauf wie bei digital eingereichten Fällen – inklusive Rückfragen, gemeinsamer Planungsabstimmung bei komplexen Fällen und Qualitätsprüfung vor der Auslieferung.",
      "Für Praxen, die zwischen digitalem und analogem Weg wechseln oder situativ beides nutzen, ist das kein Hindernis: Der fachliche Ablauf ab Schritt 2 ('Daten und Anforderungen prüfen') bleibt identisch – lediglich der erste Schritt, die Art der Übermittlung, unterscheidet sich.",
      "Der konkrete Logistikweg für analoge Abformungen (Kurier, Post oder persönliche Abholung) stimmen wir direkt mit Ihnen ab."
    ]
  },
  faqs: [
    {
      question: "Wie übermittle ich Patientendaten sicher?",
      answer: "Die Übermittlung von Patientendaten erfolgt über gesicherte, DSG-konforme Übertragungswege. Kontaktieren Sie uns für die Einrichtung."
    },
    {
      question: "Was passiert, wenn die übermittelten Daten unvollständig sind?",
      answer: "Wir kontaktieren Sie direkt, bevor mit der Fertigung begonnen wird."
    }
  ],
  abschlussCta: {
    heading: "Fragen zur digitalen Anbindung?",
    text: "Wir klären mit Ihnen gemeinsam, wie die Datenübermittlung für Ihre Praxis am einfachsten funktioniert.",
    ctaPrimary: {
      text: "Digitale Schnittstellen klären",
      pageId: "kontakt",
      search: "?anlass=workflow"
    },
    ctaSecondary: {
      text: "Workflow-Leitfaden anfordern",
      pageId: "downloads"
    }
  },
  uploader: {
    helpText: "Bitte laden Sie ausschliesslich anonymisierte oder für die Übermittlung freigegebene Patientendaten hoch.",
    successText: "Ihre Daten sind eingegangen. Wir prüfen sie und melden uns bei Rückfragen.",
    errorFormat: "Dieses Dateiformat wird aktuell nicht unterstützt. Bitte kontaktieren Sie uns, falls Sie unsicher sind.",
    errorSize: "Die Datei ist zu gross für den direkten Upload. Bitte kontaktieren Sie uns für einen alternativen Übertragungsweg.",
    privacyNote: "Ihre Daten werden ausschliesslich zur Bearbeitung Ihres Falls verwendet. Details in der Datenschutzerklärung."
  }
};
