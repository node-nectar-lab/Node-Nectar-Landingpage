# Detailseiten Redesign — Design Spec

**Datum:** 2026-06-02
**Feature:** Visuelles Upgrade der /pakete/[slug] Detailseiten
**Status:** Approved

---

## 1. Ziel

Die bestehenden Detailseiten bekommen ein visuelles Upgrade: besserer Hero mit Foto-Overlay, verbesserte Prozessdarstellung als verbundene Timeline, und ein klarer Hell/Dunkel-Rhythmus über die gesamte Seite.

---

## 2. Entscheidungen (aus Brainstorming)

| Bereich | Entscheidung |
|---------|-------------|
| Prozessdarstellung | C — Verbundene Timeline (Kreise + Linie) |
| Hero-Bild | A — Foto mit dunklem Overlay, Text davor |
| Seitenrhythmus | A — Szenario bleibt dunkel, Seite endet hell |

---

## 3. Seitenrhythmus

```
Hero          → --cesa-ink BG + Foto-Overlay
Was steckt    → --cesa-paper (hell)
Prozess       → --cesa-bone (knochenfarben)
Für wen       → --cesa-paper (hell)
Szenario      → --cesa-ink (dunkel, bleibt)
FAQ           → --cesa-paper (hell)
Preis + CTA   → --cesa-bone (knochenfarben)
```

---

## 4. Detailbeschreibung je Section

### 4.1 PaketHero (komplett neu)

**Layout:** Vollbreite Section, min-height 480px, `--cesa-ink` Hintergrund.

**Hintergrund:**
- `<img>` als absolut positioniertes BG-Bild, `object-fit: cover`, `object-position: center`
- Overlay: `rgba(26, 24, 22, 0.65)` Pseudo-Element über dem Bild
- Bild je Paket:
  - `digitale-rezeption`: `https://picsum.photos/seed/phone-reception-office/1400/520`
  - `workflow-automation`: `https://picsum.photos/seed/workflow-laptop-desk/1400/520`

**Inhalt (2-spaltig, responsive):**
- Links: Breadcrumb (`← Alle Pakete`, bone-Farbe) + Spur-Label (JetBrains Mono, bone/50%) + H1 (Outfit, weiß, 4xl-6xl) + Kurzbeschreibung (bone/78%)
- Rechts: Preis-Box — Rahmen `rgba(244,239,230,0.25)`, Hintergrund `rgba(26,24,22,0.4)`, Preis weiß, `each` bone/60%, Feature-Liste bone/70%, CTA-Button bone BG + ink Text

**Bild-Prop:** `PaketHero` bekommt ein optionales `heroImage?: string` Feld in `pakete-data.ts`.

### 4.2 PaketWasIstEs (unverändert strukturell)

Kein visuelles Upgrade nötig — Typografie ist bereits sauber. Hintergrund: `--cesa-paper`.

### 4.3 PaketProcess (komplett neu)

**Layout:** Vertical connected timeline, Container-narrow (980px), `--cesa-bone` Hintergrund.

**Aufbau je Schritt:**
```
[Kreis mit Nummer] — [Verbindungslinie] — [Titel + Body]
```

- Kreis: 40px, `--cesa-ink` gefüllt, weiße Nummer (JetBrains Mono, 12px) — außer letzter Schritt: outline-Kreis (border ink, transparent fill)
- Verbindungslinie: 1px `--cesa-fog`, vertikal, verbindet Kreismitte mit nächstem Kreis
- Letzter Schritt: kein Linien-Fortsatz nach unten
- Schritt-Titel: Outfit, 17px, 700, `--cesa-ink`
- Body: 14px, 1.65 Zeilenhöhe, `--fg-muted`

**Scroll-Reveal:** Schritte erscheinen mit IntersectionObserver (bereits vorhanden), staggered delay.

### 4.4 PaketFuerWen (unverändert)

Pills-Design bleibt. Hintergrund: `--cesa-paper`.

### 4.5 PaketSzenario (kleines Upgrade)

Bleibt `--cesa-ink` Hintergrund. Upgrade: optionales Bild rechts daneben (wenn vorhanden), 2-spaltig — Text links, Bild rechts. Auf Mobile: nur Text. Kein Pflichtfeld.

Bild-Seed je Paket:
- `digitale-rezeption`: `https://picsum.photos/seed/night-phone-call/480/320`
- `workflow-automation`: `https://picsum.photos/seed/automation-office/480/320`

`szenario`-Typ in `pakete-data.ts` bekommt optionales `image?: string` Feld.

### 4.6 PaketFAQ (unverändert)

Accordion bleibt. Hintergrund: `--cesa-paper`.

### 4.7 PaketPreisCTA (unverändert strukturell)

Hintergrund: `--cesa-bone` (statt `--cesa-paper`, war bereits bone).

---

## 5. Datenstruktur-Erweiterung

```ts
// Neue optionale Felder in pakete-data.ts:
export type Paket = {
  // ... bestehende Felder
  heroImage?: string;      // URL für Hero-Hintergrundbild
};

export type Szenario = {
  title: string;
  story: string;
  image?: string;          // URL für Szenario-Bild (optional)
};
```

---

## 6. CSS-Änderungen

Alle Änderungen in `globals.css` unter dem bestehenden `/* PAKET-DETAIL SEITEN */` Block:

- `.pd-hero` — neu: `position: relative`, `min-height: 480px`, `overflow: hidden`
- `.pd-hero-bg` — absolut positioniertes BG-Bild
- `.pd-hero-overlay` — `rgba(26,24,22,0.65)` Overlay
- `.pd-hero-*` — Farben auf bone/weiß angepasst (waren ink auf hellem Hintergrund)
- `.pd-steps` — neu: vertikale Timeline statt 2x2 Grid
- `.pd-step` — neu: `display: grid; grid-template-columns: 48px 1fr`
- `.pd-step-circle` — Kreis 40px
- `.pd-step-line` — vertikale Verbindungslinie
- `.pd-szenario-inner` — optional 2-spaltig wenn Bild vorhanden

---

## 7. Komponenten-Dateien

| Datei | Aktion |
|-------|--------|
| `src/lib/pakete-data.ts` | `heroImage?` zu `Paket`, `image?` zu `Szenario` |
| `src/components/paket-detail/PaketHero.tsx` | Komplett neu — dunkler Hero mit Foto |
| `src/components/paket-detail/PaketProcess.tsx` | Komplett neu — verbundene Timeline |
| `src/components/paket-detail/PaketSzenario.tsx` | Upgrade — optionales Bild rechts |
| `src/app/globals.css` | CSS-Klassen aktualisieren |

---

## 8. Spec Self-Review

- [x] Keine TBDs oder offenen Anforderungen
- [x] Bild-Seeds konkret benannt (keine Platzhalter)
- [x] Datenstruktur-Änderungen vollständig spezifiziert
- [x] Kein em-dash
- [x] Seitenrhythmus konsistent (hell/dunkel klar definiert)
- [x] Alle 3 Brainstorming-Entscheidungen abgedeckt
- [x] Bestehende Komponenten die nicht geändert werden, klar markiert
