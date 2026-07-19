export interface TrustPoint {
  title: string;
  text: string;
  verified: boolean;
  valId?: string;
}

export interface QualitaetContent {
  seo: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
    text: string;
  };
  facts: string[];
  structuralSections: {
    zertifizierungen: TrustPoint;
    materialueberwachung: TrustPoint;
    garantie: TrustPoint;
  };
  faq: {
    heading: string;
    text: string;
    ctaText: string;
    pageId: string;
  };
  abschlussCta: {
    heading: string;
    text: string;
    cta: { text: string; pageId: string; search: string };
  };
}

export const qualitaetContent: QualitaetContent = {
  seo: {
    title: "Qualität & Sicherheit – Zahntechnik Zürich | Eisberg Dental",
    description: "Wie Eisberg Dental Qualität und Rückverfolgbarkeit in der zahntechnischen Fertigung sicherstellt – Zürich."
  },
  intro: {
    heading: "Qualität & Sicherheit",
    text: "Für Zahnarztpraxen ist die Frage nach Qualitätssicherung und regulatorischer Konformität des zahntechnischen Partners nicht nur eine Vertrauensfrage, sondern auch für die eigene Haftung relevant."
  },
  facts: [
    "Jede Arbeit durchläuft vor der Auslieferung eine Qualitätsprüfung.",
    "Die zahntechnische Fertigung von Medizinprodukten unterliegt in der Schweiz der Medizinprodukteverordnung (MepV) und der Aufsicht durch Swissmedic.",
    "Eisberg Dental fertigt am eigenen Standort an der Forchstrasse 261 in Zürich."
  ],
  structuralSections: {
    zertifizierungen: {
      title: "Zertifizierungen & Verbandsmitgliedschaften",
      text: "Zertifizierungen wie der VZLS-Mitgliedsstatus oder DENTIC befinden sich derzeit in der internen Verifizierung und werden nach Erbringung der offiziellen Nachweise aufgeschaltet.",
      verified: false,
      valId: "VAL-070"
    },
    materialueberwachung: {
      title: "Materialrückverfolgbarkeit",
      text: "Detaillierte Informationen zur Chargenrückverfolgbarkeit und Materialdeklaration werden nach Abschluss des internen Qualitätsaudits freigeschaltet.",
      verified: false,
      valId: "VAL-075"
    },
    garantie: {
      title: "Garantie & Korrekturen",
      text: "Die exakten Laborbestimmungen und Garantiebedingungen sind in redaktioneller Abstimmung und werden nach Freigabe veröffentlicht.",
      verified: false,
      valId: "VAL-078"
    }
  },
  faq: {
    heading: "Regulatorische Fragen",
    text: "Sprechen Sie uns direkt an.",
    ctaText: "Weitere Frage stellen",
    pageId: "wissen-faq"
  },
  abschlussCta: {
    heading: "Fragen zu Qualität und Dokumentation?",
    text: "Wir stellen Ihnen auf Anfrage die relevanten Informationen zur Verfügung.",
    cta: {
      text: "Qualitätsdokumentation anfragen",
      pageId: "kontakt",
      search: "?anlass=unterlagen&thema=qualitaet"
    }
  }
};
