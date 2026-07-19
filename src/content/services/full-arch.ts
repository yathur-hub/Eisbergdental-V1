import { ServiceContent } from './types';

export const fullArchContent: ServiceContent = {
  id: "full-arch",
  seo: {
    title: "Full Arch auf Implantaten – Zahntechnik | Eisberg Dental",
    description: "Vollbogenversorgungen auf Implantaten – zahntechnische Planung und Fertigung in enger Abstimmung mit Ihrer Praxis, Zürich."
  },
  title: "Full Arch auf Implantaten",
  definition: "Full-Arch-Versorgungen ersetzen einen zahnlosen oder stark reduzierten Kiefer auf mehreren Implantaten mit einer durchgehenden Brückenkonstruktion. Diese Versorgungsform stellt hohe Anforderungen an die Abstimmung zwischen chirurgischer Implantatplanung und zahntechnischer Konstruktion, da Passung, Statik und Ästhetik über die gesamte Kieferbreite zusammenspielen müssen. Diese Leistung richtet sich an Zahnärztinnen und Zahnärzte sowie Oralchirurgen, die für Vollbogen-Fälle eine zahntechnische Umsetzung mit enger Rückkopplung zur Planung benötigen.",
  indications: [
    "Zahnloser Kiefer mit Versorgung auf 4 bis 6 Implantaten.",
    "Umstellung von einer herausnehmbaren auf eine festsitzende Versorgung.",
    "Fälle mit erhöhtem Anspruch an Lachlinie und Weichgewebsdarstellung (siehe Pink/White-Ästhetik)."
  ],
  specifications: {
    service: "Planung und Fertigung der Suprakonstruktion für den Vollbogen, auf Basis der chirurgischen Implantatplanung und der von Ihnen bereitgestellten Unterlagen. Dies umfasst in der Regel ein Backward-Planning-Vorgehen: Das prothetische Ziel wird vor der endgültigen Implantatpositionierung mitgedacht.",
    materials: "Einsatz bewährter, biokompatibler Werkstoffe für stabile und langlebige Brückengerüste.",
    technology: "Digitale Brückenkonstruktion zur Gewährleistung absoluter Spannungsfreiheit der Konstruktion."
  },
  steps: [
    {
      title: "Planung abstimmen",
      description: "Backward-Planning-Grundlagen und Implantatposition werden gemeinsam besprochen."
    },
    {
      title: "Fall übermitteln",
      description: "Unterlagen und Daten werden eingereicht."
    },
    {
      title: "Konstruktion und Rückfragen",
      description: "Bei Unklarheiten erfolgt eine direkte Abstimmung vor der Fertigung."
    },
    {
      title: "Fertigung und Qualitätsprüfung",
      description: "Herstellung der Suprakonstruktion inkl. Prüfung vor Auslieferung."
    },
    {
      title: "Lieferung und Einprobe",
      description: "Übergabe zur Einprobe/Eingliederung."
    }
  ],
  benefits: {
    practice: "Eine frühzeitig abgestimmte Planungslogik reduziert das risiko, dass die Implantatposition nachträglich mit der gewünschten prothetischen Lösung kollidiert – dies senkt den Korrekturaufwand am Behandlungsstuhl.",
    patient: "Eine im Vorfeld sorgfältig abgestimmte Vollbogenversorgung unterstützt sowohl die Funktion beim Kauen als auch ein natürlich wirkendes Erscheinungsbild."
  },
  qualityText: "Full-Arch-Versorgungen durchlaufen vor der Auslieferung eine Qualitätsprüfung.",
  faqs: [
    {
      question: "Ab wann sollte das Labor in die Planung einbezogen werden?",
      answer: "Für Full-Arch-Fälle empfiehlt sich eine frühzeitige Abstimmung, idealerweise bereits bei der Implantatplanung – so lässt sich das prothetische Ziel von Anfang an berücksichtigen."
    },
    {
      question: "Fragen zu Verbindungstyp, Implantatsystemen oder Fertigungsdauer?",
      answer: "Sprechen Sie uns direkt an – wir klären das individuell mit Ihnen."
    }
  ],
  cta: {
    heading: "Planen wir Ihren Full-Arch-Fall gemeinsam.",
    text: "Je früher wir eingebunden sind, desto besser lässt sich das prothetische Ziel in der Implantatplanung berücksichtigen.",
    primary: {
      text: "Full-Arch-Fall besprechen",
      pageId: "kontakt",
      search: "?anlass=fall&thema=full-arch"
    },
    secondary: {
      text: "Planungsgespräch anfragen",
      pageId: "kontakt",
      search: "?anlass=fall&thema=full-arch-planung"
    }
  },
  related: [
    { id: "implantatprothetik", title: "Implantatprothetik" },
    { id: "pink-white-aesthetik", title: "Pink/White-Ästhetik" }
  ]
};
