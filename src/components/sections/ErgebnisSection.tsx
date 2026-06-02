const veraendert = [
  'Anrufe, die vorher auf der Mailbox endeten, kommen als strukturierte Rückruf-Anfrage per E-Mail.',
  'Das Anfrageformular liefert Standort, Problem, Dringlichkeit und Foto – bevor Sie zurückrufen.',
  'Die Website ist mobiloptimiert und hat einen klaren Anfrage-CTA.',
  'Neue Kunden, die Sie googeln, sehen einen professionellen Auftritt – nicht eine Seite von 2009.',
];

const nichtSofort = [
  'Google-Rankings brauchen Zeit. Wir optimieren Conversion – nicht Traffic.',
  'Mehr Anfragen entstehen nur, wenn der Betrieb gefunden wird – das System verbessert die Aufnahme.',
  'Die Telefon-Annahme braucht zwei bis vier Wochen Feinjustierung.',
];

export default function ErgebnisSection() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="label">Nach dreißig Tagen</span>
          <h2>Was sich konkret geändert hat. Und was nicht.</h2>
          <p className="lede">Transparenz schützt vor Beschwerden. Wir verkaufen kein Marketing-Versprechen – wir beschreiben, was sich ab dem Go-live im Alltag ändert.</p>
        </div>
        <div className="ergebnis-grid">
          <div>
            <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-muted)', paddingBottom: 'var(--sp-4)', borderBottom: '1px solid var(--cesa-ink)', marginBottom: 0 }}>Was sich verändert</div>
            <div>
              {veraendert.map((text, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 'var(--sp-4)', padding: 'var(--sp-6) 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-subtle)', fontVariantNumeric: 'tabular-nums', paddingTop: '2px' }}>0{i + 1}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-muted)', paddingBottom: 'var(--sp-4)', borderBottom: '1px solid var(--border-strong)', marginBottom: 'var(--sp-6)' }}>Was sich nicht sofort ändert</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)', padding: 'var(--sp-6)', background: 'var(--surface-sunken)', borderLeft: '2px solid var(--border-strong)' }}>
              {nichtSofort.map((text, i) => (
                <p key={i} style={{ color: 'var(--fg-muted)', lineHeight: 1.6 }}>{text}</p>
              ))}
              <p style={{ fontWeight: 500, lineHeight: 1.6, paddingTop: 'var(--sp-4)', borderTop: '1px solid var(--border)' }}>Wir versprechen kein „100 % mehr Kunden". Wer das tut, kennt Ihren Betrieb nicht.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
