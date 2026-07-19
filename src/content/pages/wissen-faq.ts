export interface FaqRecord {
  question: string;
  answer: string;
}

export interface FaqCluster {
  id: string;
  title: string;
  items: FaqRecord[];
}

export interface WissenFaqContent {
  seo: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
    text: string;
  };
  clusters: FaqCluster[];
  abschlussCta: {
    heading: string;
    text: string;
    cta: { text: string; pageId: string; search: string };
  };
}

export const wissenFaqContent: WissenFaqContent = {
  seo: {
    title: "Wissen & FAQ für Zahnarztpraxen | Eisberg Dental",
    description: "Antworten auf häufige Fragen zu Zusammenarbeit, digitalem Workflow und Materialien – für Zahnarztpraxen."
  },
  intro: {
    heading: "Wissen & häufige Fragen",
    text: "Hier finden Sie Antworten auf häufige Fragen von Zahnarztpraxen zu unserer Zusammenarbeit, den Abläufen und den technischen Rahmenbedingungen."
  },
  clusters: [
    {
      id: "zusammenarbeit",
      title: "Zusammenarbeit",
      items: [
        {
          question: "Wie beginnt eine Zusammenarbeit mit Eisberg Dental?",
          answer: "Über ein erstes Gespräch – telefonisch, per E-Mail oder bei einem persönlichen Treffen bei uns im Labor. So können wir die gegenseitigen Erwartungen und Abläufe optimal aufeinander abstimmen."
        }
      ]
    },
    {
      id: "workflow",
      title: "Digitaler Workflow",
      items: [
        {
          question: "Was passiert, wenn meine Scandaten unvollständig sind?",
          answer: "Wir kontaktieren Sie direkt, bevor mit der Fertigung begonnen wird. Bei Unklarheiten klären wir die Details unkompliziert telefonisch oder per Bildschirmübertragung, um Verzögerungen oder Passungsfehler zu vermeiden."
        }
      ]
    },
    {
      id: "materialien",
      title: "Materialien & Systeme",
      items: [
        {
          question: "Welche Keramik- oder Implantatsysteme werden unterstützt?",
          answer: "Wir fertigen ein breites Spektrum an Versorgungen auf gängigen Systemen. Für spezifische Abstimmungen oder bei komplexen Indikationen kontaktieren Sie uns bitte direkt, damit wir den optimalen Werkstoff für Ihren Fall auswählen können."
        }
      ]
    },
    {
      id: "qualitaet",
      title: "Qualität und Abläufe",
      items: [
        {
          question: "Wie wird die Qualität einer Arbeit sichergestellt?",
          answer: "Jede Arbeit durchläuft vor der Auslieferung eine eingehende Qualitätsprüfung am Standort Zürich. Details hierzu finden Sie in unserer Rubrik 'Qualität & Sicherheit'."
        },
        {
          question: "Wer ist mein persönlicher Ansprechpartner?",
          answer: "Thomas Barandun, Geschäftsführer und Inhaber, ist Ihr direkter und persönlicher Ansprechpartner für alle fachlichen Rückfragen und Fallbesprechungen."
        }
      ]
    }
  ],
  abschlussCta: {
    heading: "Ihre Frage ist nicht dabei?",
    text: "Schreiben Sie uns direkt – wir beantworten Ihre Frage persönlich.",
    cta: {
      text: "Frage direkt stellen",
      pageId: "kontakt",
      search: "?anlass=fall"
    }
  }
};
