export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface UeberUnsContent {
  seo: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
  };
  haltung: {
    heading: string;
    text: string;
  };
  timeline: {
    heading: string;
    events: TimelineEvent[];
  };
  qualitaet: {
    heading: string;
    text: string;
    cta: { text: string; pageId: string };
  };
  kooperation: {
    heading: string;
    text: string;
    cta: { text: string; pageId: string };
  };
  verantwortung: {
    heading: string;
    text: string;
    paragraphs?: string[];
  };
  standort: {
    heading: string;
    text: string;
    cta: { text: string; pageId: string; search: string };
  };
  abschlussCta: {
    heading: string;
    text: string;
    ctaPrimary: { text: string; pageId: string; search: string };
    ctaSecondary: { text: string; pageId: string; search: string };
  };
}

export const ueberUnsContent: UeberUnsContent = {
  seo: {
    title: "Über Eisberg Dental – Zahntechnik Zürich",
    description: "Eisberg Dental wird von Thomas Barandun geführt – Ausbildung u. a. am Osaka Ceramic Training Center und an der Universität Zürich."
  },
  intro: {
    heading: "Über Eisberg Dental"
  },
  haltung: {
    heading: "Fokus auf Qualität statt Breite",
    text: "Eisberg Dental konzentriert sich bewusst auf ein enges Leistungsspektrum – Implantatprothetik, Full-Arch-Versorgungen und Pink/White-Ästhetik – statt auf ein möglichst breites Angebot. Diese Fokussierung erlaubt es, jeden Fall direkt und persönlich zu begleiten, statt Anfragen über wechselnde Ansprechpartner zu leiten."
  },
  timeline: {
    heading: "Werdegang von Thomas Barandun",
    events: [
      {
        year: "2018",
        title: "Geschäftsführende Funktion",
        description: "Thomas Barandun war vor der Gründung von Eisberg Dental ab 2018 in geschäftsführender Funktion tätig."
      },
      {
        year: "2018 – 2022",
        title: "Spezialisierte Ausbildungen",
        description: "Durchlaufene Ausbildungsstationen am Osaka Ceramic Training Center (OCTC) in Japan sowie an der Universität Zürich im Bereich rekonstruktive Zahnmedizin bei Prof. Hämmerle und Prof. Jung."
      },
      {
        year: "Seit 2022",
        title: "Gründung & Laborleitung Eisberg Dental",
        description: "Führung von Eisberg Dental als eigenes Labor an der Forchstrasse 261 in Zürich."
      }
    ]
  },
  qualitaet: {
    heading: "Unser Qualitätsverständnis",
    text: "Qualität bedeutet bei Eisberg Dental in erster Linie: eine Arbeit, die ohne Nachkorrektur am Behandlungsstuhl eingegliedert werden kann, und ein direkter Ansprechpartner bei Rückfragen.",
    cta: {
      text: "Mehr zu Qualität & Sicherheit",
      pageId: "qualitaet-sicherheit"
    }
  },
  kooperation: {
    heading: "Wie die Zusammenarbeit funktioniert",
    text: "Anfragen und Fallabstimmungen laufen direkt über Thomas Barandun – ohne zwischengeschaltete Kontaktstellen. Das bedeutet kurze Kommunikationswege, insbesondere bei Rückfragen zu komplexen Fällen.",
    cta: {
      text: "Ablauf im Detail: Digitaler Workflow ansehen",
      pageId: "workflow"
    }
  },
  verantwortung: {
    heading: "Persönliche Verantwortung",
    text: "Thomas Barandun übernimmt die fachliche Verantwortung für jeden Fall persönlich – unabhängig davon, wie komplex die Ausgangslage ist oder wie viele Rückfragen sich während der Fertigung ergeben.",
    paragraphs: [
      "Jede Arbeit, die das Labor verlässt, durchläuft von der Planung bis zur Endkontrolle dieselben Hände: Thomas Barandun übernimmt die fachliche Verantwortung für jeden Fall persönlich – unabhängig davon, wie komplex die Ausgangslage ist oder wie viele Rückfragen sich während der Fertigung ergeben.",
      "Für Sie als Praxis bedeutet das: keine Übergabe zwischen wechselnden Zuständigkeiten und keine Verwässerung der Verantwortung über mehrere Stationen hinweg. Wenn Sie eine Frage zu einem laufenden Fall haben, sprechen Sie direkt mit der Person, die ihn tatsächlich bearbeitet – nicht mit einer vorgeschalteten Kontaktstelle."
    ]
  },
  standort: {
    heading: "Laborstandort",
    text: "Das Labor befindet sich an der Forchstrasse 261 in Zürich.",
    cta: {
      text: "Laborbesichtigung anfragen",
      pageId: "kontakt",
      search: "?anlass=laborbesuch"
    }
  },
  abschlussCta: {
    heading: "Lernen wir uns kennen.",
    text: "Ob telefonisch, per E-Mail oder im Labor – wir freuen uns auf den fachlichen Austausch.",
    ctaPrimary: {
      text: "Kennenlerngespräch vereinbaren",
      pageId: "kontakt",
      search: "?anlass=zusammenarbeit"
    },
    ctaSecondary: {
      text: "Laborbesichtigung anfragen",
      pageId: "kontakt",
      search: "?anlass=laborbesuch"
    }
  }
};
