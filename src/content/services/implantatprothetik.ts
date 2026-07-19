import { ServiceContent } from './types';

export const implantatprothetikContent: ServiceContent = {
  id: "implantatprothetik",
  seo: {
    title: "Implantatprothetik – Zahntechnik Zürich | Eisberg Dental",
    description: "Suprakonstruktionen und Abutments für Implantatversorgungen – zahntechnische Umsetzung in enger Abstimmung mit Ihrer Praxis, Zürich."
  },
  title: "Implantatprothetik",
  definition: "Implantatprothetik bezeichnet die zahntechnische Planung und Fertigung des Zahnersatzes, der auf einem Zahnimplantat befestigt wird – vom Einzelzahnersatz bis zur mehrgliedrigen Brücke. Eisberg Dental übernimmt dabei den Teil der Versorgung, der auf die chirurgische und prothetische Planung Ihrer Praxis folgt: die Konstruktion und Fertigung der Suprakonstruktion. Diese Leistung richtet sich an Zahnärztinnen und Zahnärzte sowie Oralchirurgen, die für einzelne Fälle oder im Rahmen einer laufenden Zusammenarbeit eine zahntechnische Umsetzung benötigen, die die Planungslogik der Implantatversorgung mitdenkt.",
  indications: [
    "Einzelzahnersatz auf einem Implantat, bei dem Ästhetik und Emergenzprofil im Frontzahnbereich besonders relevant sind.",
    "Mehrgliedriger Ersatz auf mehreren Implantaten, bei dem die Passung der Suprakonstruktion über die Langzeitstabilität mitentscheidet.",
    "Fälle mit erhöhtem Anspruch an das Zusammenspiel von Implantatposition, Weichgewebe und sichtbarem Zahnersatz (siehe auch Pink/White-Ästhetik)."
  ],
  specifications: {
    service: "Konstruktion und Fertigung von Abutments und Suprakonstruktionen auf Basis der von Ihnen bereitgestellten Planungsunterlagen (Implantatposition, Abformung bzw. digitaler Scan).",
    materials: "Auswahl biokompatibler Werkstoffe (wie monolithisches Zirkonoxid oder Titanlegierungen) passend für die jeweilige Indikationslage.",
    technology: "CAD/CAM-gestützte Konstruktion und Präzisionsfertigung zur passgenauen Umsetzung der Suprakonstruktion."
  },
  steps: [
    {
      title: "Fall übermitteln",
      description: "Sie teilen die Implantatposition und Planungsunterlagen mit."
    },
    {
      title: "Rückfragen klären",
      description: "Bei Unklarheiten (z. B. Emergenzprofil, Materialwahl) stimmen wir uns direkt mit Ihnen ab."
    },
    {
      title: "Konstruktion und Fertigung",
      description: "Die Suprakonstruktion wird geplant und im Labor gefertigt."
    },
    {
      title: "Qualitätsprüfung",
      description: "Passung und Ausarbeitung werden vor Auslieferung geprüft."
    },
    {
      title: "Lieferung",
      description: "Sie erhalten die fertige Arbeit zur Einprobe/Eingliederung."
    }
  ],
  benefits: {
    practice: "Eine direkt mit Ihnen abgestimmte Suprakonstruktion reduziert das Risiko von Nachkorrekturen am Behandlungsstuhl und schafft Planungssicherheit für den Eingliederungstermin.",
    patient: "Eine passgenau geplante Implantatversorgung unterstützt Funktion und Ästhetik der Restauration und reduziert die Zahl notwendiger Nachjustierungen."
  },
  qualityText: "Jede Implantatarbeit wird vor der Auslieferung geprüft.",
  faqs: [
    {
      question: "Wie läuft die Abstimmung bei einem komplexen Fall ab?",
      answer: "Komplexe Fälle werden direkt mit Thomas Barandun besprochen – telefonisch, per E-Mail oder im persönlichen Gespräch im Labor."
    },
    {
      question: "Unterstützte Implantatsysteme, Unterlagenanforderung und Durchlaufzeit?",
      answer: "Sprechen Sie uns direkt an – wir klären das individuell mit Ihnen."
    }
  ],
  cta: {
    heading: "Besprechen wir Ihren Implantatfall.",
    text: "Schildern Sie uns die Ausgangslage – wir klären gemeinsam die nächsten Schritte.",
    primary: {
      text: "Implantatfall besprechen",
      pageId: "kontakt",
      search: "?anlass=fall&thema=implantatprothetik"
    },
    secondary: {
      text: "Fallbeispiele ansehen",
      pageId: "referenzen"
    }
  },
  related: [
    { id: "full-arch", title: "Full Arch auf Implantaten" },
    { id: "pink-white-aesthetik", title: "Pink/White-Ästhetik" }
  ]
};
