export interface CaseStudyItem {
  id: string;
  title: string;
  imageResultUrl: string; // Obere Zone (1:3 Schnitt)
  imageProcessUrl?: string; // Untere Zone (1:3 Schnitt)
  fields: {
    ausgangslage: string;
    leistungsfeld: string;
    vorgehen: string;
    ergebnis: string;
  };
}

export interface ReferenzenContent {
  seo: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
    text: string;
  };
  cases: CaseStudyItem[];
  abschlussCta: {
    heading: string;
    text: string;
    cta: { text: string; pageId: string; search: string };
  };
}

export const referenzenContent: ReferenzenContent = {
  seo: {
    title: "Referenzen & Fallbeispiele – Eisberg Dental Zürich",
    description: "Ausgewählte Fallbeispiele aus der zahntechnischen Arbeit von Eisberg Dental – Implantatprothetik und Ästhetik im Vergleich."
  },
  intro: {
    heading: "Referenzen",
    text: "Die folgenden Fallbeispiele zeigen ausgewählte Arbeiten aus dem Labor. Jedes Beispiel ist mit Ausgangslage, Vorgehen und Ergebnis beschrieben – so weit dies mit dem Einverständnis der jeweiligen Praxis bzw. Patientin oder des Patienten möglich ist."
  },
  cases: [
    {
      id: "case-01",
      title: "Komplexe Implantatversorgung (Frontzahn-Rekonstruktion)",
      imageResultUrl: "https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/main/zahntechnik%20v2.png", // Real dental ceramic workflow v2
      imageProcessUrl: "https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/main/zahntechnik%20v3.png", // Real CAD design process v3
      fields: {
        ausgangslage: "Fallbeschreibung folgt (in redaktioneller Abstimmung).",
        leistungsfeld: "Implantatprothetik / Pink-White-Ästhetik",
        vorgehen: "Fallbeschreibung folgt (in redaktioneller Abstimmung).",
        ergebnis: "Fallbeschreibung folgt (in redaktioneller Abstimmung)."
      }
    },
    {
      id: "case-02",
      title: "Vollkeramische Sanierung (Full-Arch Oberkiefer)",
      imageResultUrl: "https://raw.githubusercontent.com/yathur-hub/eisbergdental-assets/main/Zahntechnik%20v4.png", // Real prosthetic work Zahntechnik v4
      fields: {
        ausgangslage: "Fallbeschreibung folgt (in redaktioneller Abstimmung).",
        leistungsfeld: "Full Arch / Vollkeramik",
        vorgehen: "Fallbeschreibung folgt (in redaktioneller Abstimmung).",
        ergebnis: "Fallbeschreibung folgt (in redaktioneller Abstimmung)."
      }
    }
  ],
  abschlussCta: {
    heading: "Ihr Fall könnte ähnlich gelagert sein?",
    text: "Besprechen Sie ihn mit uns – wir ordnen gemeinsam ein, welches Vorgehen sich eignet.",
    cta: {
      text: "Ähnlichen Fall besprechen",
      pageId: "kontakt",
      search: "?anlass=fall"
    }
  }
};
