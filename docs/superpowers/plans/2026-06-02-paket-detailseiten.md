# Paket-Detailseiten Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Zwei individuelle Detailseiten `/pakete/digitale-rezeption` und `/pakete/workflow-automation` mit vollständiger Inhaltserklärung, Prozessablauf, Szenario, FAQ und CTA erstellen.

**Architecture:** Zentrale Datendatei `pakete-data.ts` hält alle Paket-Daten (Karte + Detailseite). Eine dynamische Next.js-Route `/pakete/[slug]/page.tsx` rendert sieben spezialisierte Detail-Komponenten. `PaketeSection.tsx` wird auf die gemeinsame Datendatei umgestellt und der CTA-Button für slugged Pakete wird zu "Mehr erfahren".

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS v3, globale CSS-Klassen (Projektkonvention), shadcn Accordion (`src/components/ui/accordion.tsx`), Vitest + React Testing Library.

**Pattern:** Alle Komponenten nutzen globale CSS-Klassen aus `globals.css` — KEINE Tailwind-Utilities direkt in TSX-Dateien (Projektkonvention).

---

## File Map

| Datei | Aktion | Verantwortung |
|-------|--------|---------------|
| `src/lib/pakete-data.ts` | NEU | Zentrale Datenquelle für alle 4 Pakete |
| `src/app/pakete/[slug]/page.tsx` | NEU | Dynamische Route, generateStaticParams, generateMetadata, notFound |
| `src/components/paket-detail/PaketHero.tsx` | NEU | Hero-Section (Asymmetric Split) |
| `src/components/paket-detail/PaketWasIstEs.tsx` | NEU | Ausführliche Beschreibung |
| `src/components/paket-detail/PaketProcess.tsx` | NEU | Schritt-für-Schritt Ablauf (2x2 Grid) |
| `src/components/paket-detail/PaketFuerWen.tsx` | NEU | Zielgruppen-Pills |
| `src/components/paket-detail/PaketSzenario.tsx` | NEU | Konkretes Anwendungsbeispiel (invertierter Block) |
| `src/components/paket-detail/PaketFAQ.tsx` | NEU | FAQ mit shadcn Accordion |
| `src/components/paket-detail/PaketPreisCTA.tsx` | NEU | Preis + finale CTAs |
| `src/app/globals.css` | ANGEPASST | CSS-Klassen für alle Detail-Komponenten |
| `src/components/sections/PaketeSection.tsx` | ANGEPASST | Datenimport + CTA-Button-Logik |
| `src/lib/pakete-data.test.ts` | NEU | Datenstruktur-Tests |
| `src/app/pakete/[slug]/page.test.tsx` | NEU | Route-Tests |

---

## Task 1: Datendatei `pakete-data.ts` erstellen

**Files:**
- Create: `src/lib/pakete-data.ts`
- Create: `src/lib/pakete-data.test.ts`

- [ ] **Schritt 1.1: Test schreiben**

```ts
// src/lib/pakete-data.test.ts
import { describe, it, expect } from 'vitest';
import { pakete, getPaketBySlug, getSlugs } from './pakete-data';

describe('pakete-data', () => {
  it('exports an array of 4 packages', () => {
    expect(pakete).toHaveLength(4);
  });

  it('getSlugs returns only packages with a slug', () => {
    const slugs = getSlugs();
    expect(slugs).toEqual(['digitale-rezeption', 'workflow-automation']);
  });

  it('getPaketBySlug returns the correct package', () => {
    const p = getPaketBySlug('digitale-rezeption');
    expect(p?.name).toBe('Digitale Rezeption');
  });

  it('getPaketBySlug returns undefined for unknown slug', () => {
    expect(getPaketBySlug('unbekannt')).toBeUndefined();
  });

  it('getPaketBySlug returns undefined for null-slug packages', () => {
    expect(getPaketBySlug('website-launch')).toBeUndefined();
  });

  it('slugged packages have all required detail fields', () => {
    for (const slug of getSlugs()) {
      const p = getPaketBySlug(slug)!;
      expect(p.longDesc).toBeTruthy();
      expect(p.processSteps).toHaveLength(4);
      expect(p.forWhom!.length).toBeGreaterThanOrEqual(4);
      expect(p.szenario?.title).toBeTruthy();
      expect(p.faq!.length).toBeGreaterThanOrEqual(5);
    }
  });
});
```

- [ ] **Schritt 1.2: Test ausführen — muss fehlschlagen**

```bash
cd Node-Nectar-Landingpage && npm test -- pakete-data
```

Erwartet: FAIL — "Cannot find module './pakete-data'"

- [ ] **Schritt 1.3: `pakete-data.ts` erstellen**

```ts
// src/lib/pakete-data.ts

export type ProcessStep = {
  nr: string;
  title: string;
  body: string;
};

export type Szenario = {
  title: string;
  story: string;
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
```

- [ ] **Schritt 1.4: Tests ausführen — müssen bestehen**

```bash
npm test -- pakete-data
```

Erwartet: PASS — 6 tests pass

- [ ] **Schritt 1.5: Committen**

```bash
git add src/lib/pakete-data.ts src/lib/pakete-data.test.ts
git commit -m "feat: add pakete-data.ts with detail content for Digitale Rezeption and Workflow-Automation"
```

---

## Task 2: `PaketeSection.tsx` auf `pakete-data.ts` umstellen

**Files:**
- Modify: `src/components/sections/PaketeSection.tsx`

- [ ] **Schritt 2.1: Komponente anpassen**

Ersetze die gesamte Datei mit folgendem Inhalt:

```tsx
// src/components/sections/PaketeSection.tsx
import { pakete } from '@/lib/pakete-data';

export default function PaketeSection() {
  return (
    <section id="pakete">
      <div className="container">
        <div className="section-head">
          <h2>Vier Pakete. Einzeln oder kombiniert.</h2>
          <p className="lede">Monatlich kündbar nach dem ersten Monat. Die Pauschale deckt Betrieb, Monitoring und ein Inhaltsupdate pro Monat.</p>
        </div>

        <div className="pkgs">
          {pakete.map((p) => (
            <div
              key={p.spur + p.name}
              className={[
                'pkg',
                p.featured ? 'featured' : '',
                p.price === null ? 'pkg-inquiry' : '',
              ].filter(Boolean).join(' ')}
            >
              {p.tag && <div className="pkg-tag">{p.tag}</div>}

              <div className="pkg-head">
                <div className="pkg-spur">{p.spur}</div>
                <div className="pkg-name">{p.name}</div>
              </div>
              <p className="pkg-for">{p.desc}</p>
              {p.price !== null ? (
                <div className="pkg-price-row">
                  <div className="price">{p.price}</div>
                  <div className="each">{p.each}</div>
                </div>
              ) : (
                <div className="pkg-price-row">
                  <div className="price pkg-price-on-request">Auf Anfrage</div>
                </div>
              )}
              <ul className="pkg-features">
                {p.features.map((f) => (
                  <li key={f} className="pkg-feature">{f}</li>
                ))}
                {p.muted.map((f) => (
                  <li key={f} className="pkg-feature mute">{f}</li>
                ))}
              </ul>
              {p.slug ? (
                <a href={`/pakete/${p.slug}`} className="btn btn-ghost">
                  Mehr erfahren <span className="arr">→</span>
                </a>
              ) : (
                <a href="#kontakt" className="btn btn-ghost">
                  Anfragen <span className="arr">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 2.2: Build prüfen**

```bash
npm run build 2>&1 | tail -20
```

Erwartet: kein TypeScript-Fehler, Build erfolgreich

- [ ] **Schritt 2.3: Committen**

```bash
git add src/components/sections/PaketeSection.tsx
git commit -m "refactor: PaketeSection uses pakete-data.ts, slug packages get 'Mehr erfahren' button"
```

---

## Task 3: CSS für Detail-Seiten in `globals.css` ergänzen

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Schritt 3.1: CSS ans Ende von globals.css anhängen**

Öffne `src/app/globals.css` und füge am Ende hinzu:

```css
/* ============================================================
   PAKET-DETAIL SEITEN
   ============================================================ */

/* Breadcrumb */
.pd-breadcrumb {
  padding: 20px 0 0;
}
.pd-breadcrumb a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--fg-muted);
  text-decoration: none;
  letter-spacing: 0.04em;
}
.pd-breadcrumb a:hover { color: var(--fg); }

/* Hero */
.pd-hero {
  padding: 48px 0 72px;
  border-bottom: 1px solid var(--border);
}
.pd-hero-inner {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 64px;
  align-items: start;
}
.pd-hero-spur {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fg-muted);
  margin-bottom: 16px;
}
.pd-hero-name {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.05;
  color: var(--fg);
  margin-bottom: 20px;
}
.pd-hero-desc {
  font-size: 18px;
  color: var(--fg-muted);
  line-height: 1.6;
  max-width: 55ch;
}
.pd-hero-box {
  border: 1px solid var(--border);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.pd-hero-price {
  font-family: 'Outfit', sans-serif;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--fg);
}
.pd-hero-each {
  font-size: 13px;
  color: var(--fg-muted);
  line-height: 1.5;
  margin-top: 4px;
}
.pd-hero-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid var(--border);
  padding-top: 20px;
}
.pd-hero-features li {
  font-size: 13px;
  color: var(--fg-muted);
  padding-left: 16px;
  position: relative;
}
.pd-hero-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--cesa-ink);
}

/* Was ist es */
.pd-was { padding: 72px 0; }
.pd-was h2 {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--fg);
  margin-bottom: 28px;
}
.pd-was-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.pd-was-body p {
  font-size: 17px;
  line-height: 1.75;
  color: var(--fg-muted);
  max-width: 65ch;
}

/* Prozess */
.pd-process {
  padding: 72px 0;
  background: var(--cesa-bone);
}
.pd-process-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fg-muted);
  margin-bottom: 16px;
}
.pd-process h2 {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--fg);
  margin-bottom: 48px;
}
.pd-steps {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}
.pd-step {
  padding: 36px 0;
  border-top: 1px solid var(--border);
}
.pd-step:nth-child(odd) { padding-right: 48px; }
.pd-step:nth-child(even) { padding-left: 48px; border-left: 1px solid var(--border); }
.pd-step-nr {
  font-family: 'JetBrains Mono', monospace;
  font-size: 56px;
  font-weight: 400;
  color: var(--cesa-fog);
  line-height: 1;
  margin-bottom: 16px;
}
.pd-step-title {
  font-family: 'Outfit', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--fg);
  margin-bottom: 10px;
}
.pd-step-body {
  font-size: 14px;
  line-height: 1.65;
  color: var(--fg-muted);
}

/* Für wen */
.pd-fuerwen { padding: 72px 0; }
.pd-fuerwen h2 {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--fg);
  margin-bottom: 32px;
}
.pd-fuerwen-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.pd-pill {
  border: 1px solid var(--border);
  padding: 8px 18px;
  font-size: 14px;
  color: var(--fg-muted);
  transition: border-color 0.15s, color 0.15s;
}
.pd-pill:hover {
  border-color: var(--cesa-ink);
  color: var(--fg);
}

/* Szenario */
.pd-szenario {
  padding: 72px 0;
  background: var(--cesa-ink);
  color: var(--cesa-bone);
}
.pd-szenario-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cesa-stone);
  margin-bottom: 16px;
}
.pd-szenario h3 {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--cesa-bone);
  margin-bottom: 24px;
}
.pd-szenario p {
  font-size: 17px;
  line-height: 1.75;
  color: rgba(244, 239, 230, 0.78);
  max-width: 60ch;
}

/* FAQ */
.pd-faq { padding: 72px 0; }
.pd-faq h2 {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--fg);
  margin-bottom: 40px;
}

/* Preis CTA */
.pd-cta {
  padding: 72px 0;
  background: var(--cesa-paper);
  border-top: 1px solid var(--border);
}
.pd-cta-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.pd-cta-price-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fg-muted);
  margin-bottom: 12px;
}
.pd-cta-price-big {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(36px, 4vw, 52px);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--fg);
  margin-bottom: 8px;
}
.pd-cta-price-each {
  font-size: 14px;
  color: var(--fg-muted);
  margin-bottom: 24px;
}
.pd-cta-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pd-cta-features li {
  font-size: 14px;
  color: var(--fg-muted);
  padding-left: 18px;
  position: relative;
}
.pd-cta-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--cesa-ink);
}
.pd-cta-actions {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
}

/* Scroll-Reveal Animation */
@media (prefers-reduced-motion: no-preference) {
  .pd-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .pd-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .pd-reveal:nth-child(2) { transition-delay: 0.06s; }
  .pd-reveal:nth-child(3) { transition-delay: 0.12s; }
  .pd-reveal:nth-child(4) { transition-delay: 0.18s; }
}
@media (prefers-reduced-motion: reduce) {
  .pd-reveal { opacity: 1; transform: none; }
}

/* Responsive */
@media (max-width: 768px) {
  .pd-hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .pd-hero-box { border: none; padding: 0; border-top: 1px solid var(--border); padding-top: 28px; }
  .pd-steps {
    grid-template-columns: 1fr;
  }
  .pd-step:nth-child(odd) { padding-right: 0; }
  .pd-step:nth-child(even) { padding-left: 0; border-left: none; }
  .pd-cta-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

- [ ] **Schritt 3.2: Build prüfen**

```bash
npm run build 2>&1 | tail -10
```

Erwartet: Build erfolgreich, keine CSS-Fehler

- [ ] **Schritt 3.3: Committen**

```bash
git add src/app/globals.css
git commit -m "feat: add pd-* CSS classes for paket detail page layout"
```

---

## Task 4: Detail-Komponenten erstellen

**Files:**
- Create: `src/components/paket-detail/PaketHero.tsx`
- Create: `src/components/paket-detail/PaketWasIstEs.tsx`
- Create: `src/components/paket-detail/PaketProcess.tsx`
- Create: `src/components/paket-detail/PaketFuerWen.tsx`
- Create: `src/components/paket-detail/PaketSzenario.tsx`
- Create: `src/components/paket-detail/PaketFAQ.tsx`
- Create: `src/components/paket-detail/PaketPreisCTA.tsx`

- [ ] **Schritt 4.1: Verzeichnis anlegen + PaketHero.tsx erstellen**

```tsx
// src/components/paket-detail/PaketHero.tsx
import type { Paket } from '@/lib/pakete-data';

type Props = { paket: Paket };

export default function PaketHero({ paket }: Props) {
  return (
    <section className="pd-hero">
      <div className="container">
        <nav className="pd-breadcrumb" aria-label="Breadcrumb">
          <a href="/#pakete">← Alle Pakete</a>
        </nav>
        <div className="pd-hero-inner" style={{ marginTop: '32px' }}>
          <div>
            <p className="pd-hero-spur">{paket.spur}</p>
            <h1 className="pd-hero-name">{paket.name}</h1>
            <p className="pd-hero-desc">{paket.desc}</p>
          </div>
          <div className="pd-hero-box">
            {paket.price ? (
              <>
                <div>
                  <div className="pd-hero-price">{paket.price}</div>
                  <div className="pd-hero-each">{paket.each}</div>
                </div>
                <ul className="pd-hero-features">
                  {paket.features.slice(0, 4).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="pd-hero-price">Auf Anfrage</div>
            )}
            <a href="#kontakt" className="btn btn-primary">
              Anfragen <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 4.2: PaketWasIstEs.tsx erstellen**

```tsx
// src/components/paket-detail/PaketWasIstEs.tsx
type Props = { longDesc: string };

export default function PaketWasIstEs({ longDesc }: Props) {
  const paragraphs = longDesc.split('\n\n').filter(Boolean);
  return (
    <section className="pd-was">
      <div className="container-narrow">
        <h2>Was steckt dahinter?</h2>
        <div className="pd-was-body">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 4.3: PaketProcess.tsx erstellen**

```tsx
// src/components/paket-detail/PaketProcess.tsx
'use client';

import { useEffect, useRef } from 'react';
import type { ProcessStep } from '@/lib/pakete-data';

type Props = { steps: ProcessStep[] };

export default function PaketProcess({ steps }: Props) {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = stepsRef.current?.querySelectorAll<HTMLElement>('.pd-reveal');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pd-process">
      <div className="container">
        <p className="pd-process-label">Ablauf</p>
        <h2>So funktioniert es.</h2>
        <div className="pd-steps" ref={stepsRef}>
          {steps.map((step) => (
            <div key={step.nr} className="pd-step pd-reveal">
              <div className="pd-step-nr">{step.nr}</div>
              <div className="pd-step-title">{step.title}</div>
              <p className="pd-step-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 4.4: PaketFuerWen.tsx erstellen**

```tsx
// src/components/paket-detail/PaketFuerWen.tsx
type Props = { forWhom: string[] };

export default function PaketFuerWen({ forWhom }: Props) {
  return (
    <section className="pd-fuerwen">
      <div className="container">
        <h2>Wer profitiert davon?</h2>
        <div className="pd-fuerwen-pills">
          {forWhom.map((item) => (
            <span key={item} className="pd-pill">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 4.5: PaketSzenario.tsx erstellen**

```tsx
// src/components/paket-detail/PaketSzenario.tsx
import type { Szenario } from '@/lib/pakete-data';

type Props = { szenario: Szenario };

export default function PaketSzenario({ szenario }: Props) {
  return (
    <section className="pd-szenario">
      <div className="container-narrow">
        <p className="pd-szenario-label">Beispiel</p>
        <h3>{szenario.title}</h3>
        <p>{szenario.story}</p>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 4.6: PaketFAQ.tsx erstellen**

```tsx
// src/components/paket-detail/PaketFAQ.tsx
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FaqItem } from '@/lib/pakete-data';

type Props = { faq: FaqItem[] };

export default function PaketFAQ({ faq }: Props) {
  return (
    <section className="pd-faq">
      <div className="container-narrow">
        <h2>Haufige Fragen.</h2>
        <Accordion type="single" collapsible>
          {faq.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold text-[15px]">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-relaxed text-[var(--fg-muted)]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 4.7: PaketPreisCTA.tsx erstellen**

```tsx
// src/components/paket-detail/PaketPreisCTA.tsx
import type { Paket } from '@/lib/pakete-data';

type Props = { paket: Paket };

export default function PaketPreisCTA({ paket }: Props) {
  return (
    <section className="pd-cta" id="anfragen">
      <div className="container">
        <div className="pd-cta-inner">
          <div>
            <p className="pd-cta-price-label">Investition</p>
            <div className="pd-cta-price-big">{paket.price ?? 'Auf Anfrage'}</div>
            {paket.each && <p className="pd-cta-price-each">{paket.each}</p>}
            <ul className="pd-cta-features">
              {paket.features.slice(0, 3).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="pd-cta-actions">
            <a href="/#kontakt" className="btn btn-primary">
              Anfragen <span className="arr">→</span>
            </a>
            <a href="/#pakete" className="btn btn-ghost">
              ← Alle Pakete
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 4.8: Build prüfen**

```bash
npm run build 2>&1 | tail -20
```

Erwartet: Build erfolgreich

- [ ] **Schritt 4.9: Committen**

```bash
git add src/components/paket-detail/
git commit -m "feat: add paket-detail components (Hero, WasIstEs, Process, FuerWen, Szenario, FAQ, PreisCTA)"
```

---

## Task 5: Dynamische Route `/pakete/[slug]/page.tsx` erstellen

**Files:**
- Create: `src/app/pakete/[slug]/page.tsx`
- Create: `src/app/pakete/[slug]/page.test.tsx`

- [ ] **Schritt 5.1: Test schreiben**

```tsx
// src/app/pakete/[slug]/page.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { getSlugs } from '@/lib/pakete-data';

// generateStaticParams behaviour
vi.mock('@/lib/pakete-data', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/lib/pakete-data')>();
  return actual;
});

describe('pakete/[slug] route', () => {
  it('getSlugs returns exactly the 2 slugged packages', () => {
    const slugs = getSlugs();
    expect(slugs).toContain('digitale-rezeption');
    expect(slugs).toContain('workflow-automation');
    expect(slugs).toHaveLength(2);
  });
});
```

- [ ] **Schritt 5.2: Test ausführen**

```bash
npm test -- "pakete/\[slug\]/page"
```

Erwartet: PASS

- [ ] **Schritt 5.3: `page.tsx` erstellen**

```tsx
// src/app/pakete/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaketHero from '@/components/paket-detail/PaketHero';
import PaketWasIstEs from '@/components/paket-detail/PaketWasIstEs';
import PaketProcess from '@/components/paket-detail/PaketProcess';
import PaketFuerWen from '@/components/paket-detail/PaketFuerWen';
import PaketSzenario from '@/components/paket-detail/PaketSzenario';
import PaketFAQ from '@/components/paket-detail/PaketFAQ';
import PaketPreisCTA from '@/components/paket-detail/PaketPreisCTA';
import { getPaketBySlug, getSlugs } from '@/lib/pakete-data';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paket = getPaketBySlug(slug);
  if (!paket) return {};
  const description = paket.longDesc
    ? paket.longDesc.slice(0, 160).replace(/\n/g, ' ')
    : paket.desc;
  return {
    title: `${paket.name} | NodeNectar`,
    description,
  };
}

export default async function PaketDetailPage({ params }: Props) {
  const { slug } = await params;
  const paket = getPaketBySlug(slug);

  if (!paket) notFound();

  return (
    <>
      <Header />
      <main>
        <PaketHero paket={paket} />
        {paket.longDesc && <PaketWasIstEs longDesc={paket.longDesc} />}
        {paket.processSteps && <PaketProcess steps={paket.processSteps} />}
        {paket.forWhom && <PaketFuerWen forWhom={paket.forWhom} />}
        {paket.szenario && <PaketSzenario szenario={paket.szenario} />}
        {paket.faq && <PaketFAQ faq={paket.faq} />}
        <PaketPreisCTA paket={paket} />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Schritt 5.4: Vollständigen Build prüfen**

```bash
npm run build 2>&1 | tail -30
```

Erwartet: Build erfolgreich, beide Routes erscheinen in der Build-Ausgabe:
```
/pakete/digitale-rezeption
/pakete/workflow-automation
```

- [ ] **Schritt 5.5: Dev-Server starten und beide Seiten manuell prüfen**

```bash
npm run dev
```

Prüfen:
- `http://localhost:3000/pakete/digitale-rezeption` rendert vollständig
- `http://localhost:3000/pakete/workflow-automation` rendert vollständig
- `http://localhost:3000/pakete/unbekannt` gibt 404
- Auf der Hauptseite (`http://localhost:3000/#pakete`) haben die Karten jetzt "Mehr erfahren" statt "Anfragen"

- [ ] **Schritt 5.6: Committen**

```bash
git add src/app/pakete/
git commit -m "feat: add /pakete/[slug] dynamic route with generateStaticParams and generateMetadata"
```

---

## Task 6: E2E-Test mit Playwright

**Files:**
- Create: `tests/paket-detail.spec.ts`

- [ ] **Schritt 6.1: E2E-Test erstellen**

```ts
// tests/paket-detail.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Paket Detail Pages', () => {
  test('Digitale Rezeption page renders all sections', async ({ page }) => {
    await page.goto('/pakete/digitale-rezeption');
    await expect(page.getByRole('heading', { name: 'Digitale Rezeption', level: 1 })).toBeVisible();
    await expect(page.getByText('Was steckt dahinter?')).toBeVisible();
    await expect(page.getByText('Ablauf')).toBeVisible();
    await expect(page.getByText('Wer profitiert davon?')).toBeVisible();
    await expect(page.getByText('Beispiel')).toBeVisible();
    await expect(page.getByText('Frau Weber ruft um 22:47 Uhr an.')).toBeVisible();
    await expect(page.getByText('Haufige Fragen.')).toBeVisible();
    await expect(page.getByText('390 €').first()).toBeVisible();
  });

  test('Workflow-Automation page renders all sections', async ({ page }) => {
    await page.goto('/pakete/workflow-automation');
    await expect(page.getByRole('heading', { name: 'Workflow-Automation', level: 1 })).toBeVisible();
    await expect(page.getByText('Eine Schadenmeldung. Kein manueller Aufwand.')).toBeVisible();
    await expect(page.getByText('ab 2.500 €').first()).toBeVisible();
  });

  test('unknown slug returns 404', async ({ page }) => {
    const response = await page.goto('/pakete/unbekannt');
    expect(response?.status()).toBe(404);
  });

  test('Pakete cards on main page show correct CTAs', async ({ page }) => {
    await page.goto('/#pakete');
    const digitaleLink = page.getByRole('link', { name: /Mehr erfahren/i }).first();
    await expect(digitaleLink).toHaveAttribute('href', /digitale-rezeption/);
  });

  test('Breadcrumb links back to main page pakete section', async ({ page }) => {
    await page.goto('/pakete/digitale-rezeption');
    const breadcrumb = page.getByRole('link', { name: '← Alle Pakete' });
    await expect(breadcrumb).toHaveAttribute('href', '/#pakete');
  });
});
```

- [ ] **Schritt 6.2: E2E-Test ausführen (Dev-Server muss laufen)**

```bash
npm run test:e2e -- paket-detail
```

Erwartet: alle 5 Tests PASS

- [ ] **Schritt 6.3: Committen**

```bash
git add tests/paket-detail.spec.ts
git commit -m "test(e2e): add Playwright tests for paket detail pages"
```

---

## Self-Review

### Spec-Abgleich

| Spec-Anforderung | Task |
|-----------------|------|
| Dynamische Route `/pakete/[slug]` | Task 5 |
| Zentrale Datendatei `pakete-data.ts` | Task 1 |
| PaketeSection: "Mehr erfahren" Button | Task 2 |
| Hero (Asymmetric Split) | Task 4.1 |
| Was ist es (Prosa, 2 Absätze) | Task 4.2 |
| Prozess 2x2 Bento-Grid | Task 4.3 |
| Zielgruppen-Pills | Task 4.4 |
| Szenario (ink-background) | Task 4.5 |
| FAQ mit Accordion | Task 4.6 |
| Preis + CTA | Task 4.7 |
| SEO generateMetadata | Task 5.3 |
| Pakete ohne slug -> 404 | Task 5.3 |
| CSS-Klassen (Projektkonvention) | Task 3 |
| Scroll-Reveal mit IntersectionObserver | Task 4.3 |
| prefers-reduced-motion | Task 3 (CSS) |
| Responsive (Mobile) | Task 3 (CSS) |

Kein Gap gefunden.

### Placeholder-Check

Keine TBDs, TODOs oder "ahnliches wie Task N"-Referenzen im Plan.

### Typ-Konsistenz

- `Paket` type: definiert in Task 1, genutzt in Tasks 4+5 — konsistent
- `ProcessStep`, `Szenario`, `FaqItem`: definiert in Task 1, genutzt in Task 4 — konsistent
- `getPaketBySlug`, `getSlugs`: definiert in Task 1, genutzt in Task 5 — konsistent
