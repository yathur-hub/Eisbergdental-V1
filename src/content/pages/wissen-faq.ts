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
          answer: "Über ein erstes Gespräch – telefonisch, per E-Mail oder im Labor."
        },
        {
          question: "Muss ich exklusiv mit Eisberg Dental zusammenarbeiten, oder kann ich parallel mit anderen Laboren arbeiten?",
          answer: "Sie entscheiden frei, mit welchen Laborpartnern Sie zusammenarbeiten möchten – es gibt keine Exklusivitätsbindung."
        },
        {
          question: "Was benötige ich für die erste Kontaktaufnahme?",
          answer: "Für ein erstes Gespräch genügt eine kurze Beschreibung Ihres Anliegens über das Kontaktformular oder ein Anruf. Alle weiteren Details – etwa zu einem konkreten Fall – klären wir gemeinsam im Gespräch."
        },
        {
          question: "Gibt es eine Testphase für neue Praxen?",
          answer: "*(noch offen)*"
        },
        {
          question: "Für welche Regionen arbeitet Eisberg Dental?",
          answer: "*(noch offen; Standort ist Zürich, Forchstrasse 261 – konkretes Einzugsgebiet nicht bestätigt)*"
        },
        {
          question: "Ist eine Zusammenarbeit auch überregional oder international möglich?",
          answer: "*(noch offen)*"
        },
        {
          question: "Unterstützt Eisberg Dental meine Praxis auch, wenn ich noch überwiegend analog arbeite?",
          answer: "Ja. Eine digitale Grundausstattung ist keine Voraussetzung für die Zusammenarbeit."
        }
      ]
    },
    {
      id: "workflow",
      title: "Digitaler Workflow und Datenübermittlung",
      items: [
        {
          question: "Welche Intraoralscanner werden unterstützt?",
          answer: "*(noch offen)*"
        },
        {
          question: "In welchen Dateiformaten kann ich meine Daten übermitteln?",
          answer: "*(noch offen; hängt von der finalen Schnittstellenklärung ab)*"
        },
        {
          question: "Wie übermittle ich Patientendaten sicher?",
          answer: "Wird ergänzt, sobald ein geprüfter, DSG-konformer Übertragungsweg eingerichtet ist."
        },
        {
          question: "Was passiert, wenn meine Scandaten unvollständig sind?",
          answer: "Wir kontaktieren Sie direkt, bevor mit der Fertigung begonnen wird."
        },
        {
          question: "Ist auch eine rein analoge Zusammenarbeit ohne digitale Datenübermittlung möglich?",
          answer: "Ja."
        }
      ]
    },
    {
      id: "materialien",
      title: "Leistungen und Materialien",
      items: [
        {
          question: "Welche Zirkonoxid-Generation wird verwendet?",
          answer: "*(noch offen)*"
        },
        {
          question: "Wann eignet sich monolithisches Zirkon, wann eine individuelle Schichtung?",
          answer: "Allgemein gilt in der Zahntechnik: Monolithisches Zirkon wird durchgehend aus einem Werkstoffblock gefräst und bietet dadurch hohe Bruchfestigkeit bei geringerem Fertigungsaufwand – es eignet sich besonders dort, wo die mechanische Belastung im Vordergrund steht, etwa bei Seitenzahnkronen, Brücken oder grösseren Spannweiten. Eine individuelle keramische Schichtung erlaubt dagegen eine feinere Steuerung von Transluzenz, Farbverlauf und Lichtverhalten und wird typischerweise dort eingesetzt, wo die Ästhetik im sichtbaren Frontzahnbereich im Vordergrund steht. Welche Lösung im Einzelfall passt, hängt von Position im Kiefer, Kaubelastung und ästhetischem Anspruch ab – das besprechen wir gemeinsam anhand Ihres konkreten Falls."
        },
        {
          question: "Werden Implantatsysteme bestimmter Hersteller unterstützt?",
          answer: "*(noch offen)*"
        },
        {
          question: "Was bedeutet „Pink/White-Ästhetik\" genau?",
          answer: "Das Zusammenspiel von Zahnfleisch- („Pink\") und Zahnersatzgestaltung („White\") in Fällen, bei denen beide gemeinsam über das ästhetische Ergebnis entscheiden."
        },
        {
          question: "Was unterscheidet Full Arch von einer klassischen Implantatprothetik?",
          answer: "Implantatprothetik umfasst den Einzelzahn- bis Mehrzahnersatz auf Implantaten. Full Arch bezeichnet speziell die Versorgung eines zahnlosen oder stark reduzierten Kiefers mit einer durchgehenden Brückenkonstruktion auf mehreren Implantaten."
        },
        {
          question: "Bietet Eisberg Dental eine Materialberatung für einen konkreten Fall an?",
          answer: "Ja – sprechen Sie uns bei Fragen zur passenden Materialwahl direkt an."
        }
      ]
    },
    {
      id: "qualitaet",
      title: "Qualität, Herkunft und Sicherheit",
      items: [
        {
          question: "Wie wird die Qualität einer Arbeit sichergestellt?",
          answer: "Jede Arbeit wird vor der Auslieferung sorgfältig geprüft."
        },
        {
          question: "Wie lange dauert die Fertigung im Durchschnitt?",
          answer: "*(noch offen)*"
        },
        {
          question: "Was passiert bei einer Reklamation?",
          answer: "Melden Sie sich bei einer Rückfrage zu einer gelieferten Arbeit direkt bei Thomas Barandun. Der Fall wird persönlich geprüft, die Ursache eingeordnet und die Korrektur ohne Umweg über weitere Stellen direkt mit Ihnen abgestimmt und umgesetzt – da jede Arbeit ohnehin durch dieselbe Person geht, die sie ursprünglich gefertigt hat, entfällt die sonst übliche Weiterleitung zwischen verschiedenen Zuständigkeiten."
        },
        {
          question: "Ist Eisberg Dental zertifiziert?",
          answer: "*(noch offen – aktueller Status nicht bestätigt)*"
        },
        {
          question: "Fertigt Eisberg Dental ausschliesslich in der Schweiz?",
          answer: "Ja, am eigenen Standort an der Forchstrasse 261 in Zürich."
        }
      ]
    },
    {
      id: "referenzen",
      title: "Referenzen und Fallbeispiele",
      items: [
        {
          question: "Kann ich Beispiele früherer Arbeiten ansehen?",
          answer: "Ja, ausgewählte Fallbeispiele finden Sie auf der Referenzen-Seite."
        },
        {
          question: "Kann meine Praxis als Referenz genannt werden, wenn wir zusammenarbeiten?",
          answer: "Gerne – sprechen Sie uns an, wenn Sie an einer Nennung als Referenzpraxis interessiert sind. Wir klären das Vorgehen und die nötigen Einverständnisse gemeinsam mit Ihnen."
        }
      ]
    },
    {
      id: "kontakt",
      title: "Kontakt und Erreichbarkeit",
      items: [
        {
          question: "Wer ist mein persönlicher Ansprechpartner?",
          answer: "Thomas Barandun, Geschäftsführer, ist direkter Ansprechpartner für fachliche Rückfragen."
        },
        {
          question: "Kann ich das Labor persönlich besuchen?",
          answer: "Ja, eine Laborbesichtigung lässt sich über die Kontaktseite mit dem Anlass „Laborbesuch vereinbaren“ anfragen."
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
