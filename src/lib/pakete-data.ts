export type ProcessStep = {
  nr: string;
  title: string;
  body: string;
};

export type Szenario = {
  title: string;
  story: string;
  image?: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ForWhomItem = {
  label: string;
  desc: string;
};

export type CtaStat = {
  value: string;
  label: string;
};

export type Paket = {
  slug: string | null;
  spur: string;
  name: string;
  desc: string;
  price: string | null;
  each: string | null;
  features: string[];
  muted: string[];
  featured: boolean;
  tag: string | null;
  heroImage?: string;
  longDesc?: string;
  processSteps?: ProcessStep[];
  forWhom?: ForWhomItem[];
  forWhomIntro?: string;
  szenario?: Szenario;
  faq?: FaqItem[];
  ctaHeadline?: string;
  ctaNote?: string;
  ctaStats?: CtaStat[];
};

export const pakete: Paket[] = [
  {
    slug: null,
    spur: 'Web-Präsenz',
    name: 'Website Launch',
    desc: 'Für Betriebe mit alter oder fehlender Website. Nur das Fundament.',
    price: '790 €',
    each: 'einmalig · 49 €/Monat · zzgl. MwSt.',
    features: [
      'Ein- oder mehrseitige Website',
      'Mobile Optimierung',
      'Kontaktformular',
      'Google Business + Local-SEO-Basis',
      'Hosting + Domain im Monatspaket',
    ],
    muted: ['Kein strukturiertes Anfrage-System'],
    featured: false,
    tag: null,
  },
  {
    slug: 'digitale-rezeption',
    spur: 'Empfang',
    name: 'Digitale Rezeption',
    desc: 'Kein Anruf geht verloren. Ihr KI-Assistent ist rund um die Uhr erreichbar.',
    price: '390 €',
    each: 'einmalig · 49 €/Monat · zzgl. MwSt.',
    heroImage: 'https://images.unsplash.com/photo-1742459785723-667110cf8326?w=1400&h=520&fit=crop&auto=format',
    features: [
      '24/7 erreichbar',
      'Nimmt Anliegen vollständig auf',
      'Keine verpassten Anrufe mehr',
      'Lead-Zusammenfassung per E-Mail',
      'Rückruflogik & Priorisierung',
      'Einrichtung inklusive',
    ],
    muted: [],
    featured: false,
    tag: null,
    longDesc: `Ihre Telefonleitung ist besetzt, Sie befinden sich im Kundengespräch, oder es ist 22 Uhr — und ein potenzieller Neukunde ruft an. Ohne digitale Rezeption geht dieser Anruf verloren. Mit unserem KI-Assistenten wird jeder Anruf professionell entgegengenommen, das Anliegen vollständig erfasst und Ihnen als strukturierte E-Mail-Zusammenfassung zugestellt. Sie entscheiden dann, wann und wie Sie antworten — der erste Kontakt ist bereits geglückt.

Der Assistent ist in unter einer Woche eingerichtet, klingt natürlich, nicht roboterhaft, und lernt die wichtigsten Informationen zu Ihrem Betrieb auswendig: Öffnungszeiten, Leistungen, Anfahrt. Er priorisiert Dringendes, leitet Notfälle weiter und fasst alles andere strukturiert zusammen.`,
    processSteps: [
      {
        nr: '01',
        title: 'Onboarding-Gespräch',
        body: 'In 45 Minuten besprechen wir Ihr Betriebsprofil: Leistungen, Öffnungszeiten, häufige Anrufgründe, Weiterleitungsregeln für Notfälle.',
      },
      {
        nr: '02',
        title: 'Konfiguration & Stimme',
        body: 'Wir richten den Assistenten ein, wählen eine passende Stimme und trainieren ihn auf die häufigsten Szenarien Ihres Betriebs.',
      },
      {
        nr: '03',
        title: 'Testphase (3 Tage)',
        body: 'Sie rufen selbst an, prüfen das Ergebnis, geben Feedback. Wir justieren bis alles stimmt — bevor der Assistent live geht.',
      },
      {
        nr: '04',
        title: 'Go-Live & Monitoring',
        body: 'Ihre Rufnummer wird auf den Assistenten weitergeleitet. Jede Zusammenfassung landet per E-Mail bei Ihnen. Wir monitoren die ersten Wochen aktiv.',
      },
    ],
    forWhomIntro: 'Überall dort, wo Anrufe die Brücke zum Kunden sind — und jeder verpasste Anruf ein verpasster Auftrag.',
    forWhom: [
      { label: 'Zahnarztpraxen', desc: 'Anrufe nach Praxisschluss automatisch entgegennehmen und Rückrufbedarf priorisieren.' },
      { label: 'Hausverwaltung', desc: 'Mieteranfragen und Störungsmeldungen rund um die Uhr strukturiert erfassen, ohne Unterbrechung.' },
      { label: 'Handwerksbetriebe', desc: 'Kundenanfragen und Kostenvoranschläge auch auf der Baustelle nicht mehr verpassen.' },
      { label: 'Hausmeister Services', desc: 'Auftragsanfragen und Störungsmeldungen automatisch entgegennehmen und weiterleiten.' },
      { label: 'Beratungsbüros', desc: 'Erstanfragen qualifizieren und Kontaktdaten strukturiert erfassen — vor dem ersten Gespräch.' },
      { label: 'Fahrschulen', desc: 'Rückfragen zu Terminen, Prüfungen und Kursen automatisch beantworten.' },
      { label: 'Tierarztpraxen', desc: 'Notfallmeldungen sofort erkennen und priorisieren, Routineanfragen selbstständig bearbeiten.' },
      { label: 'Steuerberater', desc: 'Mandantenanliegen geordnet erfassen — ohne Unterbrechungen im laufenden Arbeitsbetrieb.' },
    ],
    szenario: {
      title: 'Herr Schulz ruft an, während Sie auf dem Gerüst stehen.',
      story: 'Es ist 14:23 Uhr, Sie sind mitten in der Dacharbeit. Herr Schulz ruft an — sein Dach ist undicht, er braucht dringend jemanden. Statt der Mailbox meldet sich eine freundliche Stimme, fragt nach dem Problem, der Adresse und der Dringlichkeit. Um 17:10 Uhr finden Sie in Ihrem Postfach: Name, Adresse, Schadensbeschreibung, Dringlichkeitsstufe — alles bereit für den Rückruf. Kein Auftrag verloren, keine Notiz auf einem Zettel.',
      image: 'https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=480&h=320&fit=crop&auto=format',
    },
    faq: [
      {
        q: 'Klingt das wirklich natürlich?',
        a: 'Ja. Wir verwenden aktuelle Sprachmodelle, die fließend und natürlich klingen. Anrufer bemerken oft erst im Nachhinein, dass sie mit einem Assistenten gesprochen haben — wenn überhaupt.',
      },
      {
        q: 'Was passiert bei Notfällen?',
        a: 'Sie legen vorab Weiterleitungsregeln fest. Bei definierten Schlüsselwörtern ("Unfall", "starke Blutung", "Notfall") leitet der Assistent direkt auf eine von Ihnen hinterlegte Notfallnummer weiter.',
      },
      {
        q: 'Bekomme ich alle Anrufe als Zusammenfassung?',
        a: 'Ja. Jedes Gespräch erzeugt eine strukturierte E-Mail: Name, Anliegen, Rückrufwunsch, Priorität. Optional als tägliche Zusammenfassung oder in Echtzeit.',
      },
      {
        q: 'Muss ich meine Nummer wechseln?',
        a: 'Nein. Wir richten eine Weiterleitung von Ihrer bestehenden Rufnummer ein. Für Anrufer bleibt alles wie gewohnt.',
      },
      {
        q: 'Was kostet der laufende Betrieb?',
        a: '49 € pro Monat decken Betrieb, Monitoring, ein monatliches Inhalt-Update (z.B. neue Öffnungszeiten) und technischen Support.',
      },
      {
        q: 'Kann ich kündigen?',
        a: 'Monatlich kündbar nach dem ersten Monat. Kein Jahresvertrag, keine Mindestlaufzeit.',
      },
    ],
    ctaHeadline: 'Was diese Investition wirklich wert ist.',
    ctaNote: 'Ein typischer Handwerks- oder Dienstleistungsbetrieb verpasst täglich 3–7 Anrufe außerhalb der Öffnungszeiten. Bei einem durchschnittlichen Auftragswert von 300 € sind das bis zu 2.100 € potenzieller Umsatz — pro Tag, der unsichtbar liegenbleibt. Die Digitale Rezeption schließt diese Lücke vollständig: rund um die Uhr, ohne Personal, ohne Mehraufwand. Die Einrichtungsgebühr amortisiert sich bei den meisten Betrieben innerhalb von zwei bis drei Wochen.',
    ctaStats: [
      { value: '85 %', label: 'weniger verpasste Anrufe im Schnitt' },
      { value: '2–3 Wo.', label: 'typische Amortisationszeit' },
      { value: '24 / 7', label: 'Erreichbarkeit ohne Personal' },
    ],
  },
  {
    slug: 'workflow-automation',
    spur: 'Automation',
    name: 'Workflow-Automation',
    desc: 'Für Büros, die ihre Wiederholungsarbeit endlich loswerden wollen.',
    price: 'ab 2.500 €',
    each: 'einmalig · ab 49 €/Monat · zzgl. MwSt.',
    heroImage: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1400&h=520&fit=crop&auto=format',
    features: [
      'Prozessanalyse zu Beginn',
      'Individuelle n8n-Workflows',
      'Anfrage, CRM, Kalender, Ticket',
      'Schadenmeldung & Ticketlogik',
      'Anbindung an bestehende Tools',
      'Kombinierbar mit Paket 01-02',
    ],
    muted: [],
    featured: false,
    tag: null,
    longDesc: `Jeder Betrieb hat Aufgaben, die sich täglich wiederholen: Anfragen manuell weiterleiten, Termine eintragen, Bestätigungen verschicken, Schadenmeldungen kategorisieren. Diese Arbeit frisst Zeit — und sie ist vollständig automatisierbar. Mit n8n entwickeln wir individuelle Workflows, die genau diese Engpässe beseitigen.

Wir beginnen mit einer Prozessanalyse: Was läuft heute manuell? Wo entsteht Reibung? Wo wird Copy-Paste betrieben? Dann bauen wir Schritt für Schritt die Automatisierungen, die den größten Hebel haben — und verbinden sie mit den Tools, die Sie bereits nutzen: E-Mail, Kalender, CRM, Ticketsystem oder eigene Datenbanken.`,
    processSteps: [
      {
        nr: '01',
        title: 'Prozessanalyse',
        body: 'Wir schauen uns Ihren Arbeitsalltag an: welche Aufgaben wiederholen sich, wo wird Zeit verschwendet, welche Tools sind bereits im Einsatz. Ergebnis: eine Priorisierungsliste.',
      },
      {
        nr: '02',
        title: 'Konzept & Aufwandsschätzung',
        body: 'Auf Basis der Analyse definieren wir die konkreten Workflows, ihre Trigger, Logik und Ziel-Systeme. Sie erhalten eine klare Aufwandsschätzung vor dem Start.',
      },
      {
        nr: '03',
        title: 'Entwicklung & Anbindung',
        body: 'Wir bauen die Workflows in n8n, binden Ihre bestehenden Tools an und testen jeden Ablauf gründlich — zuerst mit Testdaten, dann mit echten Szenarien.',
      },
      {
        nr: '04',
        title: 'Übergabe & Betrieb',
        body: 'Nach dem Go-Live dokumentieren wir alles verständlich und übergeben. Die Monatspauschale sichert Betrieb, Monitoring und Anpassungen bei Änderungen.',
      },
    ],
    forWhomIntro: 'Für alle Betriebe, die täglich mit wiederkehrenden Datenprozessen arbeiten und manuelle Schritte endlich eliminieren wollen.',
    forWhom: [
      { label: 'Versicherungsbüros', desc: 'Schadenmeldungen und Formulareinreichungen vollautomatisch erfassen und weiterverarbeiten.' },
      { label: 'Praxisverwaltungen', desc: 'Patientendaten und Abrechnungen ohne manuelle Zwischenschritte an die richtigen Stellen weitergeben.' },
      { label: 'Handwerksbetriebe', desc: 'Auftragsabwicklung vom Eingang bis zur Rechnung lückenlos automatisieren.' },
      { label: 'Immobilienbüros', desc: 'Anfragen, Besichtigungstermine und Vertragsunterlagen nahtlos koordinieren und dokumentieren.' },
      { label: 'Steuerberatungen', desc: 'Belegerfassung und Mandantenkommunikation strukturiert und sicher automatisieren.' },
      { label: 'Logistikbetriebe', desc: 'Lieferstatus, Bestelldaten und Lagerbestände in Echtzeit automatisch synchronisieren.' },
      { label: 'Bildungseinrichtungen', desc: 'Anmeldungen, Kursunterlagen und Teilnehmerbenachrichtigungen automatisch verwalten.' },
      { label: 'E-Commerce-Betreiber', desc: 'Bestellungen, Retouren und Kundenkommunikation ohne Handarbeit reibungslos abwickeln.' },
    ],
    szenario: {
      title: 'Eine Schadenmeldung. Kein manueller Aufwand.',
      story: 'Ein Kunde füllt das Schadensformular auf Ihrer Website aus. Automatisch wird ein Ticket erstellt, die Schadensnummer vergeben, der Kunde per E-Mail bestätigt, der zuständige Sachbearbeiter benachrichtigt und der Eintrag ins CRM gesetzt. Was früher 15 Minuten Copy-Paste bedeutete, passiert in unter drei Sekunden — ohne dass jemand am Rechner sitzt.',
      image: 'https://picsum.photos/seed/automation-office/480/320',
    },
    faq: [
      {
        q: 'Mit welchen Tools funktioniert das?',
        a: 'n8n verbindet sich mit fast allem: Google Workspace, Outlook, HubSpot, Pipedrive, Lexoffice, Sevdesk, Slack, Trello, Notion, eigene Datenbanken und viele weitere über APIs.',
      },
      {
        q: 'Muss ich selbst programmieren?',
        a: 'Nein. Wir entwickeln und pflegen die Workflows. Sie sehen in einem verständlichen Dashboard, was passiert — aber Sie müssen nichts selbst bauen oder warten.',
      },
      {
        q: 'Was kostet das genau?',
        a: 'Der Einmalpreis hängt von Anzahl und Komplexität der Workflows ab — ab 2.500 €. Nach der Prozessanalyse erhalten Sie eine verbindliche Schätzung vor dem Start.',
      },
      {
        q: 'Kann ich spätere Anpassungen machen lassen?',
        a: 'Ja. Die Monatspauschale (ab 49 €) umfasst Monitoring und kleinere Anpassungen. Größere Erweiterungen werden separat kalkuliert.',
      },
      {
        q: 'Was passiert, wenn ein Workflow ausfällt?',
        a: 'Wir monitoren alle Workflows aktiv. Bei Fehlern werden wir automatisch benachrichtigt und kümmern uns — bevor Sie es überhaupt bemerken.',
      },
      {
        q: 'Lässt sich das mit der Digitalen Rezeption kombinieren?',
        a: 'Ja, ausdrücklich. Paket 02 (Digitale Rezeption) und Paket 03 (Workflow-Automation) ergänzen sich: Eingehende Anruf-Zusammenfassungen können direkt in Ihren CRM-Workflow fließen.',
      },
    ],
    ctaHeadline: 'Verborgenes Potenzial — sichtbar gemacht.',
    ctaNote: 'Manuelle Datenprozesse kosten im Schnitt 6–8 Arbeitsstunden pro Woche — oft jahrelang unbemerkt. Bei einem internen Stundensatz von 40 € sind das über 15.000 € Personalaufwand pro Jahr für Aufgaben, die vollständig automatisierbar sind. Hinzu kommt das Fehlerrisiko: Jede manuelle Übertragung ist ein potenzieller Fehler. Workflow-Automation beseitigt beides — und skaliert ohne Mehrkosten mit, wenn Ihr Betrieb wächst.',
    ctaStats: [
      { value: '6–8 h', label: 'Zeitersparnis pro Woche im Schnitt' },
      { value: '< 3 Sek.', label: 'statt 15 Min. pro manuellem Vorgang' },
      { value: '0 €', label: 'Mehrkosten beim Skalieren' },
    ],
  },
  {
    slug: null,
    spur: 'Individual',
    name: 'Individualentwicklung',
    desc: 'Komplexe Anforderungen, die kein Standardpaket abbildet.',
    price: null,
    each: null,
    features: [
      'Individuelle Beratung & Konzeption',
      'Maßgeschneiderte Web-Applikationen',
      'KI-Integration & Automatisierung',
      'API-Anbindungen & Drittsysteme',
      'Langfristige Entwicklungspartnerschaft',
    ],
    muted: [],
    featured: false,
    tag: null,
  },
];

export function getPaketBySlug(slug: string): Paket | undefined {
  return pakete.find((p) => p.slug === slug);
}

export function getSlugs(): string[] {
  return pakete.filter((p) => p.slug !== null).map((p) => p.slug as string);
}
