# Detailseiten Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Hero mit Foto-Overlay, verbundene Timeline-Prozessdarstellung, und optionales Szenario-Bild auf den /pakete/[slug] Detailseiten implementieren.

**Architecture:** Drei Komponenten werden ersetzt (PaketHero, PaketProcess, PaketSzenario), die Typen in pakete-data.ts um heroImage und szenario.image erweitert, und alle CSS-Klassen in globals.css aktualisiert. Keine neuen Dateien — nur gezielte Ersetzungen.

**Tech Stack:** Next.js 16 App Router, TypeScript, globale CSS-Klassen (globals.css), Vitest, Playwright.

---

## File Map

| Datei | Aktion |
|-------|--------|
| `src/lib/pakete-data.ts` | `heroImage?` zu `Paket`, `image?` zu `Szenario` hinzufügen + Daten befüllen |
| `src/components/paket-detail/PaketHero.tsx` | Komplett ersetzen — dunkler Hero mit Foto-Overlay |
| `src/components/paket-detail/PaketProcess.tsx` | Komplett ersetzen — verbundene Timeline |
| `src/components/paket-detail/PaketSzenario.tsx` | Ersetzen — optionales Bild rechts |
| `src/app/globals.css` | pd-hero-*, pd-steps, pd-step-*, pd-szenario-inner CSS ersetzen |

---

## Task 1: pakete-data.ts um heroImage und szenario.image erweitern

**Files:**
- Modify: `src/lib/pakete-data.ts`
- Modify: `src/lib/pakete-data.test.ts`

- [ ] **Schritt 1.1: Test ergänzen**

Öffne `src/lib/pakete-data.test.ts` und füge am Ende des `describe`-Blocks hinzu:

```ts
it('slugged packages have heroImage defined', () => {
  for (const slug of getSlugs()) {
    const p = getPaketBySlug(slug)!;
    expect(p.heroImage).toBeTruthy();
  }
});

it('slugged packages szenario has image defined', () => {
  for (const slug of getSlugs()) {
    const p = getPaketBySlug(slug)!;
    expect(p.szenario?.image).toBeTruthy();
  }
});
```

- [ ] **Schritt 1.2: Tests ausführen — müssen fehlschlagen**

```bash
npm test -- pakete-data
```

Erwartet: 2 neue Tests FAIL

- [ ] **Schritt 1.3: Typen in pakete-data.ts anpassen**

Ersetze die `Szenario`- und `Paket`-Typen (Zeilen 7-33):

```ts
export type Szenario = {
  title: string;
  story: string;
  image?: string;
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
```

- [ ] **Schritt 1.4: heroImage und szenario.image in den Paket-Daten befüllen**

Suche das Paket `digitale-rezeption` (slug: 'digitale-rezeption') und füge direkt nach `tag: null,` ein:

```ts
heroImage: 'https://picsum.photos/seed/phone-reception-office/1400/520',
```

Suche innerhalb desselben Pakets den `szenario`-Block und ersetze ihn durch:

```ts
szenario: {
  title: 'Frau Weber ruft um 22:47 Uhr an.',
  story: 'Frau Weber hat Zahnschmerzen und ruft Ihre Praxis an. Statt der Mailbox meldet sich eine freundliche Stimme, nimmt ihr Anliegen auf und fragt, ob es dringend ist. Um 8:03 Uhr am nächsten Morgen finden Sie in Ihrem Postfach: Name, Telefonnummer, Schmerzlokalisation, Dringlichkeitsstufe — bereit für den Rückruf. Kein Anruf verloren, keine Notiz auf einem Zettel.',
  image: 'https://picsum.photos/seed/night-phone-call/480/320',
},
```

Suche das Paket `workflow-automation` (slug: 'workflow-automation') und füge direkt nach `tag: null,` ein:

```ts
heroImage: 'https://picsum.photos/seed/workflow-laptop-desk/1400/520',
```

Suche innerhalb desselben Pakets den `szenario`-Block und ersetze ihn durch:

```ts
szenario: {
  title: 'Eine Schadenmeldung. Kein manueller Aufwand.',
  story: 'Ein Kunde füllt das Schadensformular auf Ihrer Website aus. Automatisch wird ein Ticket erstellt, die Schadensnummer vergeben, der Kunde per E-Mail bestätigt, der zuständige Sachbearbeiter benachrichtigt und der Eintrag ins CRM gesetzt. Was früher 15 Minuten Copy-Paste bedeutete, passiert in unter drei Sekunden — ohne dass jemand am Rechner sitzt.',
  image: 'https://picsum.photos/seed/automation-office/480/320',
},
```

- [ ] **Schritt 1.5: Tests ausführen — alle müssen bestehen**

```bash
npm test -- pakete-data
```

Erwartet: 8 Tests PASS

- [ ] **Schritt 1.6: Committen**

```bash
git add src/lib/pakete-data.ts src/lib/pakete-data.test.ts
git commit -m "feat(redesign): add heroImage and szenario.image to pakete-data"
```

---

## Task 2: CSS für neuen Hero in globals.css ersetzen

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Schritt 2.1: Alte pd-hero-* CSS-Regeln ersetzen**

In `src/app/globals.css`, ersetze den Block von `.pd-hero {` bis `.pd-hero-features li::before {` (ca. Zeilen 1246–1299) durch:

```css
/* Hero */
.pd-hero {
  position: relative;
  min-height: 480px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 72px 0;
  border-bottom: 1px solid rgba(244,239,230,0.12);
}
.pd-hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
}
.pd-hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 24, 22, 0.65);
  z-index: 1;
}
.pd-hero .container { position: relative; z-index: 2; width: 100%; }
.pd-breadcrumb { padding: 0 0 28px; }
.pd-breadcrumb a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: rgba(244,239,230,0.55);
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.15s;
}
.pd-breadcrumb a:hover { color: var(--cesa-bone); }
.pd-hero-inner {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 56px;
  align-items: start;
}
.pd-hero-spur {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(244,239,230,0.5);
  margin-bottom: 14px;
}
.pd-hero-name {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.05;
  color: var(--cesa-bone);
  margin-bottom: 18px;
}
.pd-hero-desc {
  font-size: 18px;
  color: rgba(244,239,230,0.72);
  line-height: 1.6;
  max-width: 52ch;
}
.pd-hero-box {
  border: 1px solid rgba(244,239,230,0.2);
  background: rgba(26,24,22,0.45);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
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
  color: var(--cesa-bone);
}
.pd-hero-each {
  font-size: 13px;
  color: rgba(244,239,230,0.55);
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
  border-top: 1px solid rgba(244,239,230,0.15);
  padding-top: 20px;
}
.pd-hero-features li {
  font-size: 13px;
  color: rgba(244,239,230,0.65);
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
  background: rgba(244,239,230,0.4);
}
.pd-hero-box .btn-primary {
  background: var(--cesa-bone);
  color: var(--cesa-ink);
  border-color: var(--cesa-bone);
}
.pd-hero-box .btn-primary:hover {
  background: var(--cesa-fog);
  border-color: var(--cesa-fog);
}
```

- [ ] **Schritt 2.2: Alte pd-steps / pd-step-* CSS ersetzen**

Ersetze den Block von `.pd-steps {` bis `.pd-step-body {` (ca. Zeilen 1331–1351) durch:

```css
/* Prozess — verbundene Timeline */
.pd-steps {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 640px;
}
.pd-step {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  align-items: start;
  padding: 0;
  border-top: none;
}
.pd-step-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pd-step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--cesa-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  color: var(--cesa-bone);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}
.pd-step-circle.last {
  background: transparent;
  border: 1px solid var(--cesa-fog);
  color: var(--fg-muted);
}
.pd-step-line {
  width: 1px;
  flex: 1;
  min-height: 32px;
  background: var(--cesa-fog);
  margin: 4px 0;
}
.pd-step-right {
  padding-bottom: 40px;
  padding-top: 8px;
}
.pd-step:last-child .pd-step-right { padding-bottom: 0; }
.pd-step-title {
  font-family: 'Outfit', sans-serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--fg);
  margin-bottom: 8px;
  line-height: 1.25;
}
.pd-step-body {
  font-size: 14px;
  line-height: 1.7;
  color: var(--fg-muted);
}
```

- [ ] **Schritt 2.3: pd-szenario-inner CSS hinzufügen**

Direkt nach dem Block `.pd-szenario p { ... }` (ca. Zeile 1393) einfügen:

```css
.pd-szenario-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.pd-szenario-inner.no-image {
  grid-template-columns: 1fr;
}
.pd-szenario-img {
  overflow: hidden;
  aspect-ratio: 3/2;
}
.pd-szenario-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.75;
  filter: grayscale(20%);
}
```

- [ ] **Schritt 2.4: Mobile-Regeln im @media-Block aktualisieren**

Ersetze im `@media (max-width: 768px)` Block die pd-hero und pd-steps Regeln:

```css
  .pd-hero-inner { grid-template-columns: 1fr; gap: 32px; }
  .pd-hero-box {
    border: 1px solid rgba(244,239,230,0.2);
    background: rgba(26,24,22,0.45);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .pd-szenario-inner { grid-template-columns: 1fr; }
  .pd-szenario-img { display: none; }
  .pd-cta-inner { grid-template-columns: 1fr; gap: 40px; }
```

- [ ] **Schritt 2.5: Build prüfen**

```bash
npm run build 2>&1 | tail -10
```

Erwartet: Build erfolgreich, keine CSS-Fehler

- [ ] **Schritt 2.6: Committen**

```bash
git add src/app/globals.css
git commit -m "feat(redesign): update pd-hero, pd-steps, pd-szenario CSS for visual upgrade"
```

---

## Task 3: PaketHero.tsx ersetzen

**Files:**
- Modify: `src/components/paket-detail/PaketHero.tsx`

- [ ] **Schritt 3.1: Komplette Datei ersetzen**

```tsx
// src/components/paket-detail/PaketHero.tsx
import type { Paket } from '@/lib/pakete-data';

type Props = { paket: Paket };

export default function PaketHero({ paket }: Props) {
  return (
    <section className="pd-hero">
      {paket.heroImage && (
        <img
          className="pd-hero-bg"
          src={paket.heroImage}
          alt=""
          aria-hidden="true"
        />
      )}
      <div className="pd-hero-overlay" aria-hidden="true" />

      <div className="container">
        <nav className="pd-breadcrumb" aria-label="Breadcrumb">
          <a href="/#pakete">← Alle Pakete</a>
        </nav>
        <div className="pd-hero-inner">
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
            <a href="#anfragen" className="btn btn-primary">
              Anfragen <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 3.2: Build prüfen**

```bash
npm run build 2>&1 | tail -10
```

Erwartet: Build erfolgreich

- [ ] **Schritt 3.3: Committen**

```bash
git add src/components/paket-detail/PaketHero.tsx
git commit -m "feat(redesign): PaketHero with full-width photo overlay"
```

---

## Task 4: PaketProcess.tsx ersetzen (verbundene Timeline)

**Files:**
- Modify: `src/components/paket-detail/PaketProcess.tsx`

- [ ] **Schritt 4.1: Komplette Datei ersetzen**

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
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pd-process">
      <div className="container-narrow">
        <p className="pd-process-label">Ablauf</p>
        <h2>So funktioniert es.</h2>
        <div className="pd-steps" ref={stepsRef}>
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div key={step.nr} className="pd-step pd-reveal">
                <div className="pd-step-left">
                  <div className={`pd-step-circle${isLast ? ' last' : ''}`}>
                    {step.nr}
                  </div>
                  {!isLast && <div className="pd-step-line" />}
                </div>
                <div className="pd-step-right">
                  <div className="pd-step-title">{step.title}</div>
                  <p className="pd-step-body">{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 4.2: Build prüfen**

```bash
npm run build 2>&1 | tail -10
```

Erwartet: Build erfolgreich

- [ ] **Schritt 4.3: Committen**

```bash
git add src/components/paket-detail/PaketProcess.tsx
git commit -m "feat(redesign): PaketProcess as connected vertical timeline"
```

---

## Task 5: PaketSzenario.tsx mit optionalem Bild

**Files:**
- Modify: `src/components/paket-detail/PaketSzenario.tsx`

- [ ] **Schritt 5.1: Komplette Datei ersetzen**

```tsx
// src/components/paket-detail/PaketSzenario.tsx
import type { Szenario } from '@/lib/pakete-data';

type Props = { szenario: Szenario };

export default function PaketSzenario({ szenario }: Props) {
  return (
    <section className="pd-szenario">
      <div className="container">
        <div className={`pd-szenario-inner${szenario.image ? '' : ' no-image'}`}>
          <div>
            <p className="pd-szenario-label">Beispiel</p>
            <h3>{szenario.title}</h3>
            <p>{szenario.story}</p>
          </div>
          {szenario.image && (
            <div className="pd-szenario-img">
              <img
                src={szenario.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Schritt 5.2: Build prüfen**

```bash
npm run build 2>&1 | tail -15
```

Erwartet: Build erfolgreich, beide Routen erscheinen:
```
/pakete/digitale-rezeption
/pakete/workflow-automation
```

- [ ] **Schritt 5.3: Committen**

```bash
git add src/components/paket-detail/PaketSzenario.tsx
git commit -m "feat(redesign): PaketSzenario with optional side image"
```

---

## Task 6: E2E-Tests aktualisieren + Sichtprüfung

**Files:**
- Modify: `tests/paket-detail.spec.ts`

- [ ] **Schritt 6.1: E2E-Test für Hero-Bild ergänzen**

Füge in `tests/paket-detail.spec.ts` am Ende des `describe`-Blocks hinzu:

```ts
test('Hero has background image', async ({ page }) => {
  await page.goto('/pakete/digitale-rezeption');
  const heroBg = page.locator('.pd-hero-bg');
  await expect(heroBg).toBeVisible();
  const src = await heroBg.getAttribute('src');
  expect(src).toContain('picsum.photos');
});

test('Process shows timeline circles', async ({ page }) => {
  await page.goto('/pakete/digitale-rezeption');
  const circles = page.locator('.pd-step-circle');
  await expect(circles).toHaveCount(4);
});

test('Szenario has side image', async ({ page }) => {
  await page.goto('/pakete/digitale-rezeption');
  const img = page.locator('.pd-szenario-img img');
  await expect(img).toBeVisible();
});
```

- [ ] **Schritt 6.2: Alle E2E-Tests ausführen**

```bash
npm run test:e2e -- paket-detail --project=chromium
```

Erwartet: 8 Tests PASS

- [ ] **Schritt 6.3: Dev-Server starten und visuell prüfen**

```bash
npm run dev
```

Prüfen:
- `http://localhost:3000/pakete/digitale-rezeption` — Hero zeigt Foto mit dunklem Overlay
- `http://localhost:3000/pakete/workflow-automation` — anderes Foto
- Prozess-Section: Kreise mit Nummern, verbunden durch Linie
- Letzter Kreis ist offen (outline)
- Szenario: Text links, Bild rechts

- [ ] **Schritt 6.4: Alle Unit-Tests ausführen**

```bash
npm test
```

Erwartet: alle Tests PASS

- [ ] **Schritt 6.5: Committen**

```bash
git add tests/paket-detail.spec.ts
git commit -m "test(redesign): add E2E tests for hero image, timeline circles, szenario image"
```

---

## Self-Review

### Spec-Abgleich

| Spec-Anforderung | Task |
|-----------------|------|
| heroImage in Paket-Typ + Daten | Task 1 |
| szenario.image in Szenario-Typ + Daten | Task 1 |
| Hero: Foto als bg, Overlay 65%, Text weiß/bone | Task 2 + Task 3 |
| Prozess: verbundene Timeline, Kreise, Linie | Task 2 + Task 4 |
| Letzter Schritt: outline-Kreis | Task 2 + Task 4 |
| Szenario: optionales Bild rechts | Task 2 + Task 5 |
| Szenario bleibt dunkel (--cesa-ink) | Task 2 (keine Änderung) |
| Mobile: Hero einspaltig, Szenario-Bild ausgeblendet | Task 2 |
| Alle Tests grün | Task 6 |

### Typ-Konsistenz

- `Szenario.image` definiert in Task 1, genutzt in Task 5 — konsistent
- `Paket.heroImage` definiert in Task 1, genutzt in Task 3 — konsistent
- `.pd-step-circle`, `.pd-step-left`, `.pd-step-right`, `.pd-step-line` definiert in Task 2, genutzt in Task 4 — konsistent
- `.pd-szenario-inner`, `.pd-szenario-img` definiert in Task 2, genutzt in Task 5 — konsistent
