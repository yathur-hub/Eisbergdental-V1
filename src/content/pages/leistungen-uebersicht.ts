// VAL-010: Keine Aussage über "vollständiges Angebot" getroffen.

export interface LeistungenUebersichtContent {
  seo: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
    text: string;
  };
  items: Array<{
    id: string;
    title: string;
    description: string;
    ctaText: string;
  }>;
  transition: {
    text: string;
    ctaWorkflow: { text: string; pageId: string };
    ctaQualitaet: { text: string; pageId: string };
  };
  abschlussCta: {
    heading: string;
    text: string;
    ctaText: string;
    pageId: string;
    search: string;
  };
}

export const leistungenUebersichtContent: LeistungenUebersichtContent = {
  seo: {
    title: "Leistungen – Zahntechnik Zürich | Eisberg Dental",
    description: "Implantatprothetik, Full Arch, Pink/White-Ästhetik und Vollkeramik: Das Leistungsportfolio von Eisberg Dental im Überblick."
  },
  intro: {
    heading: "Unsere Leistungen",
    text: "Eisberg Dental konzentriert sich auf vier Leistungsfelder, die eine enge fachliche Abstimmung zwischen Praxis und Labor erfordern: Implantatprothetik, Full-Arch-Versorgungen auf Implantaten, Pink/White-Ästhetik sowie Vollkeramik-Restaurationen. Jede Leistung ist auf einer eigenen Seite mit Indikationen, Ablauf und Ansprechpunkten beschrieben."
  },
  items: [
    {
      id: "implantatprothetik",
      title: "Implantatprothetik",
      description: "Suprakonstruktionen und Abutments für den Einzelzahn- bis Mehrzahnersatz auf Implantaten – von der Planung bis zur Eingliederung.",
      ctaText: "Leistung ansehen"
    },
    {
      id: "full-arch",
      title: "Full Arch auf Implantaten",
      description: "Planung und Fertigung von Vollbogenversorgungen für den zahnlosen oder stark reduzierten Kiefer, in enger Abstimmung mit der chirurgischen Planung.",
      ctaText: "Leistung ansehen"
    },
    {
      id: "pink-white-aesthetik",
      title: "Pink/White-Ästhetik",
      description: "Kombinierte Weichgewebs- und Zahnästhetik für Fälle, in denen das Zusammenspiel von Zahnfleisch und Zahnersatz über das Ergebnis entscheidet.",
      ctaText: "Leistung ansehen"
    },
    {
      id: "vollkeramik",
      title: "Vollkeramik",
      description: "Kronen und Brücken aus Zirkonoxid und Glaskeramik, individuell geschichtet oder monolithisch gefertigt – je nach Indikation.",
      ctaText: "Leistung ansehen"
    }
  ],
  transition: {
    text: "Wie die Zusammenarbeit im Detail abläuft, lesen Sie auf der Seite 'Digitaler Workflow'. Informationen zu Qualitätssicherung und regulatorischen Grundlagen finden Sie unter 'Qualität & Sicherheit'.",
    ctaWorkflow: {
      text: "Workflow ansehen",
      pageId: "workflow"
    },
    ctaQualitaet: {
      text: "Qualität & Sicherheit ansehen",
      pageId: "qualitaet-sicherheit"
    }
  },
  abschlussCta: {
    heading: "Ihr Fall passt in keine Kategorie eindeutig?",
    text: "Besprechen Sie ihn direkt mit uns – wir klären gemeinsam, ob und wie wir Sie unterstützen können.",
    ctaText: "Fall besprechen",
    pageId: "kontakt",
    search: "?anlass=fall"
  }
};
