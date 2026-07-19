// RECHTLICHER HINWEIS: Dies ist KEINE fertige Rechtsberatung. Der finale Text muss von einer für Schweizer Datenschutzrecht qualifizierten Stelle erstellt/geprüft werden, bevor die Seite live geschaltet wird.
// Verwende durchgehend die formelle "Sie"-Anrede.

export interface LegalSection {
  title: string;
  text: string;
  placeholder?: boolean;
}

export interface DatenschutzContent {
  seo: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
    notice: string;
  };
  sections: LegalSection[];
}

export const datenschutzContent: DatenschutzContent = {
  seo: {
    title: "Datenschutzerklärung – Eisberg Dental Zürich",
    description: "Datenschutzerklärung für die Website von Eisberg Dental Zürich – Informationen zur Erhebung und Verarbeitung von Daten."
  },
  intro: {
    heading: "Datenschutzerklärung",
    notice: "WICHTIGER RECHTLICHER HINWEIS: Der folgende Text stellt das strukturelle Skelett der Datenschutzerklärung dar. Der vollständige, rechtsverbindliche Inhalt muss vor Live-Schaltung von einer für Schweizer Datenschutzrecht qualifizierten Fachperson freigegeben werden."
  },
  sections: [
    {
      title: "1. Allgemeine Hinweise",
      text: "Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist Eisberg Dental, Thomas Barandun, Forchstrasse 261, 8032 Zürich.",
      placeholder: false
    },
    {
      title: "2. Rechtsgrundlagen der Verarbeitung",
      text: "Die Verarbeitung personenbezogener Daten erfolgt in erster Linie im Einklang mit dem Schweizer Datenschutzgesetz (DSG). Soweit anwendbar, werden auch die Bestimmungen der europäischen Datenschutz-Grundverordnung (DSGVO) berücksichtigt.",
      placeholder: false
    },
    {
      title: "3. Hosting & Webseitenbetrieb",
      text: "Diese Website wird auf Servern in der Schweiz bzw. Europa gehostet, um ein angemessenes Datenschutzniveau zu gewährleisten.",
      placeholder: false
    },
    {
      title: "4. Erhebung und Verarbeitung personenbezogener Daten",
      text: "Beim Besuch unserer Website oder der Nutzung unseres Kontaktformulars werden personenbezogene Daten erhoben und verarbeitet, um unsere Dienste bereitzustellen und Ihre Anfrage zu beantworten. Die genauen Details richten sich nach den gesetzlichen Bestimmungen.",
      placeholder: false
    },
    {
      title: "5. Cookies & Einwilligungsmanager",
      text: "Wir nutzen Cookies nur für technisch notwendige Funktionen sowie anonymisierte statistische Zwecke mit Ihrer Zustimmung. Über den Cookie-Manager können Sie Ihre Einstellungen jederzeit anpassen.",
      placeholder: false
    },
    {
      title: "6. Weitergabe an Dritte",
      text: "Eine Weitergabe Ihrer persönlichen Daten an Dritte erfolgt nur, soweit dies zur Vertragserfüllung oder gesetzlichen Verpflichtung erforderlich ist.",
      placeholder: false
    },
    {
      title: "7. Datensicherheit",
      text: "Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, um Ihre Daten gegen Manipulation, Verlust oder unbefugten Zugriff zu schützen.",
      placeholder: false
    },
    {
      title: "8. Rechte der betroffenen Person (nach Schweizer DSG)",
      text: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Sperrung Ihrer gespeicherten personenbezogenen Daten gemäss den Bestimmungen des Schweizer DSG.",
      placeholder: false
    },
    {
      title: "9. Änderungen dieser Erklärung",
      text: "Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit an veränderte rechtliche oder technische Rahmenbedingungen anzupassen.",
      placeholder: false
    },
    {
      title: "10. Urheberrecht an Bildmaterial",
      text: "Sämtliches Bildmaterial auf dieser Website ist urheberrechtlich geschützt. Lizenzen und Bildrechte liegen bei Eisberg Dental bzw. den jeweiligen Fotografen oder Bildplattformen.",
      placeholder: false
    },
    {
      title: "11. Links zu anderen Websites",
      text: "Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte und Datenschutzpraktiken wir keinen Einfluss haben.",
      placeholder: false
    },
    {
      title: "12. Server-Logs",
      text: "Der Provider dieser Website erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (z.B. IP-Adresse, Browsertyp, Datum/Uhrzeit).",
      placeholder: false
    }
  ]
};
