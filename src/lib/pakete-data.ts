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
  forWhom?: string[];
  szenario?: Szenario;
  faq?: FaqItem[];
};

export const pakete: Paket[] = [
  {
    slug: null,
    spur: 'Empfang',
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
    heroImage: 'https://picsum.photos/seed/phone-reception-office/1400/520',
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
    forWhom: [
      'Zahnarztpraxen',
      'Physiotherapie',
      'Handwerksbetriebe',
      'Friseursalons',
      'Beratungsbüros',
      'Fahrschulen',
      'Tierarztpraxen',
      'Steuerberater',
    ],
    szenario: {
      title: 'Frau Weber ruft um 22:47 Uhr an.',
      story: 'Frau Weber hat Zahnschmerzen und ruft Ihre Praxis an. Statt der Mailbox meldet sich eine freundliche Stimme, nimmt ihr Anliegen auf und fragt, ob es dringend ist. Um 8:03 Uhr am nächsten Morgen finden Sie in Ihrem Postfach: Name, Telefonnummer, Schmerzlokalisation, Dringlichkeitsstufe — bereit für den Rückruf. Kein Anruf verloren, keine Notiz auf einem Zettel.',
      image: 'https://picsum.photos/seed/night-phone-call/480/320',
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
  },
  {
    slug: 'workflow-automation',
    spur: 'Automation',
    name: 'Workflow-Automation',
    desc: 'Für Büros, die ihre Wiederholungsarbeit endlich loswerden wollen.',
    price: 'ab 2.500 €',
    each: 'einmalig · ab 49 €/Monat · zzgl. MwSt.',
    heroImage: 'https://picsum.photos/seed/workflow-laptop-desk/1400/520',
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
    forWhom: [
      'Versicherungsbüros',
      'Praxisverwaltungen',
      'Handwerksbetriebe',
      'Immobilienbüros',
      'Steuerberatungen',
      'Logistikbetriebe',
      'Bildungseinrichtungen',
      'E-Commerce-Betreiber',
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
