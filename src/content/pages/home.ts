export interface HomeContent {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    heading: string;
    subline: string;
    ctaPrimary: { text: string; pageId: string; search: string };
    ctaSecondary: { text: string; pageId: string };
  };
  kurzpositionierung: {
    heading: string;
    text: string;
    textLink: { text: string; pageId: string };
    card: {
      overline: string;
      quote: string;
      location: string;
      est: string;
    };
  };
  schwerpunkte: {
    heading: string;
    cta: { text: string; pageId: string };
    items: Array<{
      id: string;
      title: string;
      description: string;
      ctaText: string;
    }>;
  };
  workflow: {
    overline: string;
    heading: string;
    description: string;
    cta: { text: string; pageId: string };
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  trust: {
    overline: string;
    heading: string;
    points: Array<{
      label: string;
      text: string;
    }>;
    cta: { text: string; pageId: string };
    profile: {
      initials: string;
      name: string;
      title: string;
      quote: string;
    };
  };
  differenzierung: {
    overline: string;
    heading: string;
    text: string;
  };
  ansprechpartner: {
    overline: string;
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

export const homeContent: HomeContent = {
  seo: {
    title: "Eisberg Dental – Zahntechnik für Implantate & Ästhetik, Zürich",
    description: "Zahntechnisches Labor in Zürich, spezialisiert auf Implantatprothetik, Full Arch und Pink/White-Ästhetik. Persönlich geführt, fachlich fundiert."
  },
  hero: {
    badge: "Einzigartiger Fokus & Präzision",
    heading: "Ihr Labor für die Fälle, bei denen Standardlösungen nicht mehr ausreichen.",
    subline: "Eisberg Dental unterstützt Zahnarztpraxen in Zürich bei komplexen Implantat- und Ästhetikfällen – mit direkter, persönlicher Abstimmung und fachlicher Tiefe statt Standardlösungen.",
    ctaPrimary: {
      text: "Zusammenarbeit besprechen",
      pageId: "kontakt",
      search: "?anlass=zusammenarbeit"
    },
    ctaSecondary: {
      text: "Leistungen ansehen",
      pageId: "leistungen"
    }
  },
  kurzpositionierung: {
    heading: "Fokus auf das Wesentliche",
    text: "Eisberg Dental ist ein zahntechnisches Labor in Zürich mit Fokus auf drei Feldern: Implantatprothetik, Full-Arch-Versorgungen auf Implantaten und Pink/White-Ästhetik in anspruchsvollen Fällen. Statt ein möglichst breites Leistungsspektrum abzudecken, konzentriert sich das Labor auf Fälle, die eine enge fachliche Abstimmung zwischen Praxis und Labor erfordern – von der Planung bis zur Eingliederung.",
    textLink: {
      text: "Mehr zu unserer Spezialisierung",
      pageId: "ueber-uns"
    },
    card: {
      overline: "WERTE & POSITIONIERUNG",
      quote: "Thomas Barandun führt Eisberg Dental als inhabergeführtes Atelier. Fachliche Tiefe, direkte Erreichbarkeit und Schweizer Werkstoffqualität stehen über der schieren Masse.",
      location: "ZÜRICH, SCHWEIZ",
      est: "EST. 2022"
    }
  },
  schwerpunkte: {
    heading: "Unsere Schwerpunkte",
    cta: {
      text: "Alle Leistungen im Überblick",
      pageId: "leistungen"
    },
    items: [
      {
        id: "implantatprothetik",
        title: "Implantatprothetik",
        description: "Suprakonstruktionen und Abutments für den Einzelzahn- bis Mehrzahnersatz auf Implantaten.",
        ctaText: "Leistung ansehen"
      },
      {
        id: "full-arch",
        title: "Full Arch auf Implantaten",
        description: "Planung und Fertigung von Vollbogenversorgungen in enger Abstimmung mit der Praxis.",
        ctaText: "Leistung ansehen"
      },
      {
        id: "pink-white-aesthetik",
        title: "Pink/White-Ästhetik",
        description: "Weichgewebs- und Zahnästhetik in Kombination, für Fälle mit hohem ästhetischem Anspruch.",
        ctaText: "Leistung ansehen"
      },
      {
        id: "vollkeramik",
        title: "Vollkeramik",
        description: "Kronen und Brücken aus Zirkonoxid und Keramik, mit individueller Schichtung.",
        ctaText: "Leistung ansehen"
      }
    ]
  },
  workflow: {
    overline: "DIGITAL & ANALOG",
    heading: "So arbeiten wir zusammen",
    description: "Eine klare Aufteilung sichert den reibungslosen Workflow für Ihre Praxis.",
    cta: {
      text: "Workflow im Detail ansehen",
      pageId: "workflow"
    },
    steps: [
      {
        number: "01",
        title: "Fall abstimmen",
        description: "Sie schildern den Fall, wir klären offene Fragen direkt mit Ihnen."
      },
      {
        number: "02",
        title: "Planen und fertigen",
        description: "Die Versorgung wird nach Absprache geplant und im Labor gefertigt."
      },
      {
        number: "03",
        title: "Liefern und begleiten",
        description: "Sie erhalten die fertige Arbeit; bei Rückfragen sind wir persönlich erreichbar."
      }
    ]
  },
  trust: {
    overline: "VERANTWORTUNG",
    heading: "Worauf Sie sich verlassen können",
    points: [
      {
        label: "Persönliche Verantwortung",
        text: "Thomas Barandun führt Eisberg Dental seit 2022 in Zürich und verantwortet die fachliche Umsetzung jeder Arbeit persönlich."
      },
      {
        label: "Fachliche Ausbildung",
        text: "Ausbildungsstationen am Osaka Ceramic Training Center (OCTC) sowie an der Universität Zürich im Bereich rekonstruktive Zahnmedizin (bei Prof. Hämmerle / Prof. Jung)."
      },
      {
        label: "Standort",
        text: "Eigenes Labor an der Forchstrasse 261 in Zürich."
      }
    ],
    cta: {
      text: "Mehr über Eisberg Dental",
      pageId: "ueber-uns"
    },
    profile: {
      initials: "TB",
      name: "Thomas Barandun",
      title: "Inhaber & Zahntechnikermeister",
      quote: "Ich habe mich bewusst auf die anspruchsvollen Fälle in der Implantatprothetik und Ästhetik spezialisiert. Jede Arbeit ist ein Unikat, das nach den strengen Qualitätskriterien unseres Zürcher Ateliers entsteht."
    }
  },
  differenzierung: {
    overline: "DIE REINE LEHRE",
    heading: "Fokus statt Vollsortiment",
    text: "Eisberg Dental deckt bewusst nicht jedes zahntechnische Leistungsfeld ab. Der Fokus liegt auf Implantatprothetik, Full-Arch-Versorgungen und ästhetisch anspruchsvollen Fällen – Feldern, die eine enge fachliche Abstimmung zwischen Zahnarzt und Labor erfordern. Diese Spezialisierung bedeutet: Rückfragen werden direkt mit der verantwortlichen Person geklärt, nicht über wechselnde Ansprechpartner."
  },
  ansprechpartner: {
    overline: "DIREKTKONTAKT",
    heading: "Ihr direkter Ansprechpartner",
    text: "Thomas Barandun, Zahntechnikermeister und Geschäftsführer, ist Ihr persönlicher Ansprechpartner für fachliche Rückfragen, Fallplanung und Auftragsklärung – ohne Callcenter-Struktur dazwischen.",
    cta: {
      text: "Direkt Kontakt aufnehmen",
      pageId: "kontakt",
      search: "?anlass=zusammenarbeit"
    }
  },
  abschlussCta: {
    heading: "Besprechen wir Ihren Fall.",
    text: "Ob Erstkontakt, konkrete Fallfrage oder Interesse an einer Zusammenarbeit – wir melden uns persönlich zurück.",
    ctaPrimary: {
      text: "Zusammenarbeit besprechen",
      pageId: "kontakt",
      search: "?anlass=zusammenarbeit"
    },
    ctaSecondary: {
      text: "Rückruf anfordern",
      pageId: "kontakt",
      search: "?anlass=rueckruf"
    }
  }
};
