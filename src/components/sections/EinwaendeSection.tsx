'use client';

import { useState } from 'react';

const items = [
  {
    n: '01',
    q: '„Wir haben schon eine Website."',
    a: 'Gut. Die Frage ist nicht, ob Sie eine Website haben – sondern ob sie Anfragen strukturiert aufnimmt. Eine bestehende Seite mit Kontaktformular ist etwas anderes als eine Rezeption mit Routing, Dringlichkeitslogik und Foto-Upload. Lassen Sie uns das in zehn Minuten gemeinsam prüfen.',
  },
  {
    n: '02',
    q: '„Wir brauchen keine KI."',
    a: 'Müssen Sie nicht. Die digitale Anrufannahme ist optional und nur in Paket 03 enthalten. Website, strukturiertes Anfrageformular und Workflow-Automation funktionieren vollständig ohne KI-Komponenten. Wir setzen nur ein, was Sie wirklich brauchen.',
  },
  {
    n: '03',
    q: '„Das klingt kompliziert."',
    a: 'Das ist der Punkt: Sie berühren nach dem Launch nichts davon. Kein CMS, kein Dashboard, kein Update-Stress. Sie füllen das Onboarding-Kit aus – wir bauen den Rest. Die Übergabe dauert fünf Minuten per Screencast.',
  },
  {
    n: '04',
    q: '„Was kostet das pro Monat?"',
    a: 'Die Monatspauschale liegt je nach Paket zwischen 49 € und 99 €. Darin enthalten: technischer Betrieb, Hosting, Domain, Monitoring und ein Inhaltsupdate pro Monat. Kein Jahresvertrag, monatlich kündbar nach dem ersten Monat.',
  },
  {
    n: '05',
    q: '„Günstiger gibt\'s das auch."',
    a: 'Ja. Für 20 € im Monat bekommen Sie Jimdo oder Wix – Sie richten ein, pflegen und bauen selbst. Wir liefern das fertige System. Betrieben. Gewartet. Mit einem Ansprechpartner. Das Werkzeug ist günstig. Ihre Zeit ist es nicht.',
  },
  {
    n: '06',
    q: '„Was, wenn ich nach dem Launch nichts mehr von euch höre?"',
    a: 'Das regelt die Monatspauschale. Sie zahlen für Betrieb, Monitoring und Erreichbarkeit – nicht nur für das Launch-Projekt. Wir kommunizieren offen, wenn wir ausgelastet sind, und führen aktiv eine Warteliste statt Versprechen zu brechen.',
  },
];

export default function EinwaendeSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="einwaende">
      <div className="container-narrow">
        <div className="section-head">
          <span className="label">Einwände</span>
          <h2>Sechs Sätze, die wir oft hören. Sechs ehrliche Antworten.</h2>
        </div>
        <div className="acc">
          {items.map((item) => (
            <div key={item.n} className={`acc-item${open === item.n ? ' open' : ''}`}>
              <button
                className="acc-q"
                onClick={() => setOpen(open === item.n ? null : item.n)}
              >
                <span className="qn">{item.n}</span>
                <span className="qt">{item.q}</span>
                <span className="icon" />
              </button>
              <div className="acc-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
