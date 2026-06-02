const rows = [
  {
    label: 'Wer baut',
    them: 'Sie. Abends. Nach der Baustelle.',
    us: 'Wir. Ein Ansprechpartner. Done-for-you.',
  },
  {
    label: 'Lieferzeit',
    them: 'So lange, wie Sie selbst Zeit haben.',
    us: '5 Werktage für einfache Module.',
  },
  {
    label: 'Aufnahme von Anfragen',
    them: 'Allgemeines Kontaktformular: Name, Mail, Nachricht.',
    us: 'Strukturiert: Leistung, Standort, Dringlichkeit, Foto.',
  },
  {
    label: 'Telefon & Automation',
    them: 'Nicht enthalten.',
    us: 'Modular integriert. Optional ab Tag 1.',
  },
  {
    label: 'Wartung & Betrieb',
    them: 'Sie. Bis es einrostet.',
    us: 'Monatspauschale. Wir betreiben, Sie arbeiten.',
  },
  {
    label: 'Ergebnis­verantwortung',
    them: 'Bei Ihnen.',
    us: 'Bei uns. Eine Person, die dafür geradesteht.',
  },
];

export default function VergleichSection() {
  return (
    <section className="vergleich">
      <div className="container">
        <div className="section-head">
          <div className="label">Der Unterschied</div>
          <h2>Was Baukästen nicht können – wir liefern es.</h2>
        </div>
        <div className="cmp">
          {/* Desktop-only column headers */}
          <div className="cmp-header" aria-hidden="true">
            <div className="cmp-header-criterion" />
            <div className="cmp-header-col">Baukasten</div>
            <div className="cmp-header-col cmp-header-nn">NodeNectar</div>
          </div>

          {rows.map(({ label, them, us }) => (
            <div key={label} className="cmp-row">
              <div className="cmp-criterion">{label}</div>

              <div className="cmp-them">
                {/* Mobile-only source label */}
                <span className="cmp-src">Baukasten</span>
                <span className="cmp-vs-text">{them}</span>
              </div>

              <div className="cmp-answer">
                {/* Mobile-only source label */}
                <span className="cmp-answer-label">NodeNectar</span>
                <p className="cmp-answer-text">{us}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
