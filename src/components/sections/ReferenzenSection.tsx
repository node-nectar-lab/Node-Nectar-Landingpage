const cases = [
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    ix: '01',
    meta: 'SHK · Berlin',
    title: 'Mustermann Sanitär & Heizung',
    line: 'Altes Wix-Setup, drei Notfall-Anrufe pro Woche unbeantwortet. Komplett-Paket inkl. Telefon-Annahme in fünf Werktagen ausgerollt.',
    stats: [
      { v: '+11', k: 'Anfragen / Woche' },
      { v: '5 d', k: 'Lieferzeit' },
      { v: 'P03', k: 'Rezeption Plus' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    ix: '02',
    meta: 'Elektrik · München',
    title: 'Elektro Konrad GmbH',
    line: 'Keine Mobiloptimierung, Anfragen unstrukturiert. Neue Seite mit Leistungs-Routing nach Wallbox, E-Check, Smart Home.',
    stats: [
      { v: '3,1×', k: 'Qualifizierte Leads' },
      { v: '5 d', k: 'Lieferzeit' },
      { v: 'P02', k: 'Rezeption' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    ix: '03',
    meta: 'Verwaltung · Köln',
    title: 'Hausverwaltung Hoffmann',
    line: 'Schadenmeldungen kamen über Telefon, WhatsApp, Mail – unstrukturiert. Workflow-Automation routet Tickets jetzt nach Objekt und Gewerk an die jeweilige Handwerker-Liste.',
    stats: [
      { v: '–9 h', k: 'Büro / Woche' },
      { v: '3 Wo', k: 'Lieferzeit' },
      { v: 'P04', k: 'Workflow-Auto.' },
    ],
  },
];

export default function ReferenzenSection() {
  return (
    <section id="referenzen">
      <div className="container">
        <div className="section-head">
          <span className="label">Referenzen</span>
          <h2>Drei Betriebe. Drei verschiedene Ausgangslagen. Ein Ergebnis-Muster.</h2>
          <p className="lede">Ausgewählte Projekte aus den letzten Monaten. Zahlen sind betriebliche Selbstauskunft nach 30 Tagen – keine Hochrechnung, keine Garantie.</p>
        </div>
        <div className="cases">
          {cases.map((c) => (
            <div key={c.ix} className="case">
              <div className="case-img" style={{ backgroundImage: `url('${c.img}')` }}>
                <div className="ix">{c.ix}</div>
              </div>
              <div>
                <div className="case-head">
                  <div>
                    <div className="case-meta">{c.meta}</div>
                    <div className="case-title">{c.title}</div>
                  </div>
                </div>
                <p className="case-line">{c.line}</p>
                <div className="case-stats">
                  {c.stats.map((s) => (
                    <div key={s.k} className="s">
                      <div className="sv">{s.v}</div>
                      <div className="sk">{s.k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
