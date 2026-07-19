import { ServiceContent } from './types';

export const vollkeramikContent: ServiceContent = {
  id: "vollkeramik",
  seo: {
    title: "Vollkeramik & Zirkon – Zahntechnik Zürich | Eisberg Dental",
    description: "Kronen und Brücken aus Zirkonoxid und Glaskeramik – monolithisch oder individuell geschichtet, gefertigt in Zürich."
  },
  title: "Vollkeramik",
  definition: "Vollkeramik-Restaurationen – Kronen und Brücken aus Zirkonoxid oder Glaskeramik – bilden die Materialbasis vieler Versorgungen bei Eisberg Dental, sowohl als monolithische Lösung als auch mit individueller keramischer Schichtung. Diese Seite beschreibt die Materialleistung eigenständig, unabhängig von der jeweiligen Indikation.",
  indications: [
    "Monolithisches Zirkon: durchgehend aus einem Werkstoffblock gefräst, hohe Stabilität, reduzierter individueller Schichtaufwand.",
    "Infiltrationstechnik: Farblich und strukturell optimierte Veredelung des Rohlings vor dem Sinterprozess.",
    "Microlayeringtechnik: Feinstschichtung im ästhetischen Sichtbereich für lebendige Lichtreflexion."
  ],
  specifications: {
    service: "Konstruktion, Fräsung bzw. Fertigung und – je nach Indikation – individuelle keramische Schichtung der Restauration.",
    materials: "Monolithisches Zirkon sowie Keramiken für Infiltrationstechnik und Microlayeringtechnik.",
    technology: "Einsatz moderner CAD/CAM-Verfahren und digitalem 3D-Druck im zahntechnischen Laboralltag."
  },
  steps: [
    {
      title: "Fall und Farbwunsch übermitteln",
      description: "Auftragsdaten inkl. Farb-/Formwunsch."
    },
    {
      title: "Konstruktion",
      description: "Digitale oder analoge Modellation der Restauration."
    },
    {
      title: "Fertigung",
      description: "Fräsung und, sofern erforderlich, individuelle Schichtung."
    },
    {
      title: "Qualitätsprüfung und Lieferung",
      description: "Prüfung vor Auslieferung."
    }
  ],
  benefits: {
    practice: "Die Wahl zwischen monolithischer und individuell geschichteter Lösung erlaubt es, Stabilität und Ästhetik je nach Fall gezielt zu gewichten – eine fundierte Materialberatung unterstützt diese Entscheidung im Praxisalltag.",
    patient: "Vollkeramische Restaurationen bieten eine metallfreie Alternative mit natürlicher Lichtdurchlässigkeit."
  },
  qualityText: "Prüfung aller Arbeiten im Labor zur Gewährleistung höchster Passgenauigkeit.",
  faqs: [
    {
      question: "Welches Material eignet sich am besten für meinen Fall?",
      answer: "Das hängt stark von der mechanischen Belastung (Front- vs. Seitenzahn) und dem ästhetischen Anspruch ab. Wir beraten Sie dazu gerne individuell."
    },
    {
      question: "Fragen zu Entscheidungskriterien monolithisch/geschichtet, Zirkonoxid-Generation und Downloads?",
      answer: "Sprechen Sie uns direkt an – wir klären das individuell mit Ihnen."
    }
  ],
  cta: {
    heading: "Welches Material passt zu Ihrem Fall?",
    text: "Wir beraten Sie zur passenden keramischen Lösung für Ihre Indikation.",
    primary: {
      text: "Materialberatung anfragen",
      pageId: "kontakt",
      search: "?anlass=fall&thema=material"
    },
    secondary: {
      text: "Downloadbereich öffnen",
      pageId: "downloads"
    }
  },
  related: [
    { id: "implantatprothetik", title: "Implantatprothetik" },
    { id: "pink-white-aesthetik", title: "Pink/White-Ästhetik" }
  ]
};
