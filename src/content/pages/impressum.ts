export interface ImpressumContent {
  seo: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
  };
  details: {
    firmenname: string;
    inhaber: string;
    rechtsform: string;
    uid: string;
    adresse: string;
    email: string;
    phone: string;
  };
  haftungsausschluss: string;
  urheberrecht: string;
}

export const impressumContent: ImpressumContent = {
  seo: {
    title: "Impressum – Eisberg Dental Zürich",
    description: "Impressum von Eisberg Dental Zürich mit gesetzlichen Angaben zum Unternehmen."
  },
  intro: {
    heading: "Impressum"
  },
  details: {
    firmenname: "Eisberg Dental",
    inhaber: "Thomas Barandun",
    rechtsform: "Einzelunternehmen",
    uid: "CHE-221.354.054",
    adresse: "Forchstrasse 261, 8032 Zürich",
    email: "info@eisberg-dental.ch",
    phone: "+41 43 499 02 56"
  },
  haftungsausschluss: "Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.",
  urheberrecht: "Urheberrecht: Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der vorherigen schriftlichen Zustimmung des Inhabers."
};
