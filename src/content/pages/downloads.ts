export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  status: 'In Vorbereitung';
}

export interface DownloadsContent {
  seo: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
    text: string;
  };
  items: DownloadItem[];
  abschlussCta: {
    heading: string;
    text: string;
    cta: { text: string; pageId: string; search: string };
  };
}

export const downloadsContent: DownloadsContent = {
  seo: {
    title: "Downloads für Praxen – Eisberg Dental Zürich",
    description: "Auftragsformular, Workflow-Leitfaden und Materialübersicht für die Zusammenarbeit mit Eisberg Dental."
  },
  intro: {
    heading: "Downloads für Praxen",
    text: "Hier finden Sie Unterlagen, die die Zusammenarbeit mit Eisberg Dental erleichtern."
  },
  items: [
    {
      id: "auftragsformular",
      title: "Auftragsformular",
      description: "Für die strukturierte Übermittlung eines neuen Falls.",
      status: "In Vorbereitung"
    },
    {
      id: "workflow-leitfaden",
      title: "Workflow-Leitfaden",
      description: "Beschreibt den Ablauf von der Datenübermittlung bis zur Lieferung.",
      status: "In Vorbereitung"
    },
    {
      id: "materialuebersicht",
      title: "Materialübersicht",
      description: "Übersicht der verwendeten Keramik- und Zirkonoxid-Systeme mit Indikationsbezug.",
      status: "In Vorbereitung"
    }
  ],
  abschlussCta: {
    heading: "Dokument nicht dabei oder noch nicht verfügbar?",
    text: "Fragen Sie die gewünschten Unterlagen direkt bei uns an.",
    cta: {
      text: "Unterlagen anfordern",
      pageId: "kontakt",
      search: "?anlass=unterlagen"
    }
  }
};
