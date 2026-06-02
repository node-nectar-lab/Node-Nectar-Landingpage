# Paket-Detailseiten Design Spec

**Datum:** 2026-06-02
**Feature:** Individuelle Detailseiten für Pakete (Digitale Rezeption + Workflow-Automation)
**Status:** Approved

---

## 1. Ziel

Zwei eigenständige Unterseiten, die je ein Paket vollständig erklären: Was ist es, wie funktioniert es, für wen, ein konkretes Szenario, FAQ und Preis. Ziel ist Konversion UND Aufklärung kombiniert.

---

## 2. Scope

Detailseiten werden **nur** für diese zwei Pakete erstellt:
- `/pakete/digitale-rezeption`
- `/pakete/workflow-automation`

Pakete ohne Detailseite (`website-launch`, `individualentwicklung`) geben 404 zurück.

---

## 3. Design Read

*"B2B service detail pages for SME-owners, following the established NodeNectar aesthetic: Outfit + Helvetica + JetBrains Mono, warm-ink neutrals (--cesa-ink #1A1816), sharp corners (radius 0), blue accent (#6384ff) als Hero-Akzent. Dials: DESIGN_VARIANCE 7 / MOTION_INTENSITY 5 / VISUAL_DENSITY 4."*

---

## 4. Architektur

### Dateien

```
src/
  lib/
    pakete-data.ts                   NEU - zentrale Datenquelle
  app/
    pakete/
      [slug]/
        page.tsx                     NEU - dynamische Route
  components/
    paket-detail/
      PaketHero.tsx                  NEU
      PaketWasIstEs.tsx              NEU
      PaketProcess.tsx               NEU
      PaketFuerWen.tsx               NEU
      PaketSzenario.tsx              NEU
      PaketFAQ.tsx                   NEU
      PaketPreisCTA.tsx              NEU
    sections/
      PaketeSection.tsx              ANGEPASST - "Anfragen"-Button wird "Mehr erfahren"
```

### Routing

- Next.js App Router, `generateStaticParams` für `['digitale-rezeption', 'workflow-automation']`
- Pakete ohne Detailseite: `notFound()` aus `next/navigation`
- Kein separater API-Layer nötig

---

## 5. Datenstruktur (`pakete-data.ts`)

```ts
type PaketDetail = {
  slug: string | null;  // null = keine Detailseite
  spur: string;
  name: string;
  desc: string;
  price: string | null;
  each: string | null;
  features: string[];
  muted: string[];
  featured: boolean;
  tag: string | null;
  // Detail-Felder (nur wenn slug !== null):
  longDesc?: string;
  processSteps?: { nr: string; title: string; body: string }[];
  forWhom?: string[];
  szenario?: { title: string; story: string };
  faq?: { q: string; a: string }[];
};
```

Die bestehende `pakete`-Konstante in `PaketeSection.tsx` wird durch `import { pakete } from '@/lib/pakete-data'` ersetzt.

---

## 6. Seitenaufbau (je Detailseite)

### 6.1 HERO — Asymmetric Split
- Links: Spur-Label (JetBrains Mono, klein), Paketname (Outfit, 4xl–6xl, tracking-tighter), Kurzbeschreibung (max 20 Wörter)
- Rechts: Preis-Box (Preis groß, `each` klein), Button "Anfragen" (--cesa-ink BG)
- Hintergrund: --cesa-paper (light), grenze unten: 1px --cesa-fog
- Breadcrumb-Zeile oben: `← Alle Pakete` (zurück zu /#pakete)

### 6.2 WAS IST ES
- Kein Eyebrow (Eyebrow-Budget gespart)
- H2 + max 2 Absätze, max-w-[65ch], linksbündig
- Container-narrow (980px)

### 6.3 WIE FUNKTIONIERT ES
- Eyebrow: "Ablauf" (JetBrains Mono, klein) — 1. Eyebrow auf der Seite
- H2 + 4-5 Schritte
- Layout: 2x2 Bento-Grid auf Desktop, 1-col auf Mobile
- Jeder Schritt: große Schrittnummer (JetBrains Mono, 64px, --cesa-fog), Titel, Body
- Keine Karten mit Schatten — nur border-top 1px --cesa-fog trennt
- Hintergrund: --cesa-bone (leichter Kontrast zur weißen Seite)

### 6.4 FÜR WEN
- H2 direkt (kein Eyebrow)
- Liste von Zielgruppen als Pills: `border 1px --cesa-fog`, padding 8px 16px, sharp corners
- Maximal 8 Pills

### 6.5 SZENARIO
- Visueller Break: Vollbreiter Block mit --cesa-ink Hintergrund, --cesa-bone Text
- Eyebrow: "Beispiel" (2. und letzter Eyebrow auf der Seite, --cesa-stone Farbe)
- H3 + fließende Geschichte in Prosa, max 100 Wörter
- Kein Feature-Liste — nur erzählendes Schreiben

### 6.6 FAQ
- shadcn `Accordion` (bereits installiert: `src/components/ui/accordion.tsx`)
- 5-7 Fragen
- Container-narrow

### 6.7 PREIS + CTA
- Preis nochmals klar: Preis + each + Features-Kurzliste (3 Punkte)
- Zwei Buttons: "Anfragen" (primary, --cesa-ink) + "← Zurück zu Paketen" (ghost)
- Hintergrund: --cesa-paper

---

## 7. PaketeSection Anpassung

Der "Anfragen →"-Button auf Paketen MIT Detailseite wird ersetzt durch:
- Text: "Mehr erfahren →"
- Ziel: `/pakete/[slug]`
- Pakete ohne slug behalten den "Anfragen →"-Button mit `href="#kontakt"`

---

## 8. Motion (MOTION_INTENSITY 5)

- Scroll-Reveal mit Motion `whileInView` auf Prozess-Schritte (stagger 60ms)
- `useReducedMotion()` Guard — bei reduced-motion keine Animation
- Kein GSAP, kein ScrollTrigger — Motion `whileInView` reicht für diesen Scope
- Hero: keine Entrance-Animation (above-the-fold, sofort sichtbar)

---

## 9. SEO

- `generateMetadata` pro Slug: title = `{Paketname} | NodeNectar`, description = longDesc-Anfang (max 160 Zeichen)
- Keine URL-Änderungen an bestehenden Seiten

---

## 10. Accessibility

- Breadcrumb mit `aria-label="Breadcrumb"`
- Accordion: shadcn liefert korrekte `aria-expanded` / `aria-controls`
- Contrast: alle Texte auf --cesa-ink-Block werden --cesa-bone (passt bestehende Pattern)
- Focus-States: bestehende globale Styles greifen

---

## 11. Was NICHT gebaut wird

- Keine Bilder/Illustrationen (Platzhalter-Slots werden markiert)
- Keine Übersichtsseite `/pakete` (nur direkte Slugs)
- Keine dritte oder vierte Detailseite (scope = 2)
- Kein CMS / Supabase-Backend

---

## 12. Spec Self-Review

- [x] Keine TBDs oder offene Anforderungen
- [x] Architektur konsistent (data layer -> dynamic route -> components)
- [x] Kein Widerspruch zwischen Abschnitten
- [x] Eyebrow-Budget eingehalten: max. 2 Eyebrows pro Seite (ceil(7 sections / 3) = 3, actual = 2 - OK)
- [x] Kein em-dash
- [x] Eine Akzentfarbe (#6384ff Hero, --cesa-ink als Primary)
- [x] Sharp corners konsistent (radius 0, wie bestehend)
- [x] Kein beige+brass+cream Palette-Default
- [x] PaketeSection-Anpassung klar spezifiziert
