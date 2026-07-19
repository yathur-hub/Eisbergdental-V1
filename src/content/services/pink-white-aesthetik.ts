import { ServiceContent } from './types';

export const pinkWhiteContent: ServiceContent = {
  id: "pink-white-aesthetik",
  seo: {
    title: "Pink/White-Ästhetik – Zahntechnik Zürich | Eisberg Dental",
    description: "Zahntechnische Umsetzung von Pink/White-Ästhetik bei komplexen Implantat- und Frontzahnfällen – Zürich."
  },
  title: "Pink/White-Ästhetik in komplexen Fällen",
  definition: "'Pink/White-Ästhetik' bezeichnet das Zusammenspiel von Zahnfleisch ('Pink') und sichtbarem Zahnersatz ('White') in Fällen, in denen beide Komponenten gemeinsam über das ästhetische Ergebnis entscheiden – typischerweise bei Implantatversorgungen und komplexen Frontzahnfällen. Eisberg Dental übernimmt hierbei die zahntechnische Umsetzung, die dieses Zusammenspiel abbildet, etwa bei der Gestaltung des Emergenzprofils oder der farblichen Abstimmung von Keramik und Weichgewebe. Diese Leistung richtet sich an Zahnärztinnen und Zahnärzte, die für ästhetisch anspruchsvolle Fälle im sichtbaren Bereich eine zahntechnische Umsetzung mit hohem gestalterischem Anspruch benötigen.",
  indications: [
    "Implantatversorgung im sichtbaren Frontzahnbereich mit Anspruch an ein natürlich wirkendes Durchtrittsprofil.",
    "Fälle mit Weichgewebsrezession oder unregelmässiger Zahnfleischlinie, die in der Gestaltung des Zahnersatzes mitberücksichtigt werden muss.",
    "Komplexe Restaurationen, bei denen Zahnfarbe, -form und Zahnfleischverlauf gemeinsam auf den Patienten abgestimmt werden."
  ],
  specifications: {
    service: "Gestaltung des Zahnersatzes unter Berücksichtigung des Weichgewebeverlaufs, inklusive farblicher und formaler Abstimmung auf die individuelle Situation.",
    materials: "Anwendung von Verfahren wie monolithisches Zirkon, Infiltrationstechnik und Microlayeringtechnik zur präzisen Rekonstruktion.",
    technology: "Digitale Modellation des Zusammenspiels von roter und weisser Ästhetik im Labor."
  },
  steps: [
    {
      title: "Ausgangssituation erfassen",
      description: "Fotos, Abformung/Scan und Angaben zur Weichgewebssituation werden übermittelt."
    },
    {
      title: "Gestaltung abstimmen",
      description: "Farbe, Form und Übergang zum Weichgewebe werden bei Bedarf direkt besprochen."
    },
    {
      title: "Fertigung",
      description: "Umsetzung im Labor."
    },
    {
      title: "Qualitätsprüfung und Lieferung",
      description: "Prüfung vor Auslieferung zur Einprobe."
    }
  ],
  benefits: {
    practice: "Eine sorgfältig abgestimmte Pink/White-Gestaltung reduziert das Risiko, dass der Patient das Ergebnis bei der Einprobe als unstimmig empfindet, und unterstützt damit ein reibungsloses Behandlungsende.",
    patient: "Ein Zahnersatz, der im Zusammenspiel mit dem Zahnfleisch natürlich wirkt, unterstützt ein unauffälliges, stimmiges Erscheinungsbild – gerade im sichtbaren Frontzahnbereich."
  },
  qualityText: "Prüfung jeder Arbeit vor der Auslieferung zur Gewährleistung der ästhetischen Vorgaben.",
  faqs: [
    {
      question: "Was bedeutet 'Pink/White-Ästhetik' konkret?",
      answer: "Siehe Definition oben. Es bezeichnet das harmonische Zusammenspiel von künstlichem Zahnfleischverlauf und der eigentlichen Zahnkrone."
    },
    {
      question: "Für welche Fälle ist diese Leistung besonders relevant?",
      answer: "Für Implantatversorgungen und Restaurationen im sichtbaren Bereich, bei denen Weichgewebe und Zahnersatz gemeinsam betrachtet werden müssen."
    },
    {
      question: "Fragen zu Farbnahme vor Ort oder konkretem Fallbeispiel-Umfang?",
      answer: "Sprechen Sie uns direkt an – wir klären das individuell mit Ihnen."
    }
  ],
  cta: {
    heading: "Besprechen wir Ihren ästhetischen Fall.",
    text: "Zeigen Sie uns die Ausgangssituation – wir stimmen die Gestaltung gemeinsam mit Ihnen ab.",
    primary: {
      text: "Ästhetik-Fall besprechen",
      pageId: "kontakt",
      search: "?anlass=fall&thema=pink-white"
    },
    secondary: {
      text: "Fallbeispiele ansehen",
      pageId: "referenzen"
    }
  },
  related: [
    { id: "implantatprothetik", title: "Implantatprothetik" },
    { id: "full-arch", title: "Full Arch auf Implantaten" }
  ]
};
