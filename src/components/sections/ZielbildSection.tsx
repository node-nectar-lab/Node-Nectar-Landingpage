export default function ZielbildSection() {
  return (
    <section id="zielbild">
      <div className="container">
        <div className="section-head">
          <span className="label">Das Zielbild</span>
          <h2>So sieht Ihr Betrieb aus, wenn das System läuft.</h2>
          <p className="lede">Nicht als Versprechen — als konkretes Bild. Was landet in Ihrem Postfach, wenn ein Kunde über das System anfragt.</p>
        </div>
        <div className="zielbild-grid">
          {/* Heute — ohne System */}
          <div style={{ background: 'var(--surface-sunken)', border: '1px solid var(--border-strong)', padding: 'var(--sp-8)' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: 'var(--sp-7)' }}>Heute — ohne System</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { label: 'Anruf', text: 'Verpasster Anruf · keine Nummer hinterlassen · Auftrag weg.' },
                { label: 'E-Mail', text: '„Hallo, ich brauche einen Elektriker." — kein Ort, keine Dringlichkeit, kein Foto.' },
                { label: 'Website', text: 'Nicht mobiloptimiert. Besucher springt ab. Kein CTA. Formular mit 3 Feldern.' },
                { label: 'Büro', text: '10–15 Stunden pro Woche: Rückrufe, Rückfragen, Angebote tippen, Kalender koordinieren.' },
              ].map(({ label, text }) => (
                <div key={label} style={{ borderTop: '1px solid var(--border)', padding: 'var(--sp-5) 0' }}>
                  <div style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: '6px' }}>{label}</div>
                  <p style={{ fontSize: 'var(--fs-base)', color: 'var(--fg-muted)' }}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mit NodeNectar */}
          <div style={{ border: '1px solid var(--cesa-ink)', padding: 'var(--sp-8)' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: 'var(--sp-7)' }}>Mit NodeNectar — nach 5 Tagen</div>
            <div style={{ background: 'var(--surface-sunken)', border: '1px solid var(--border)', padding: 'var(--sp-6)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--sp-5)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '-0.005em' }}>Neue Anfrage</div>
                <span style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', background: 'var(--cesa-oxblood)', color: '#fff', padding: '5px 9px' }}>Dringend</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4) var(--sp-6)', marginBottom: 'var(--sp-5)' }}>
                {[
                  { label: 'Leistung', value: 'Heizung ausgefallen' },
                  { label: 'Standort', value: 'Berlin-Mitte, 10117' },
                  { label: 'Rückruf', value: '+49 171 234 5678' },
                  { label: 'Eingang', value: 'heute, 07:42' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: '4px' }}>{label}</div>
                    <div style={{ fontSize: '13px', fontWeight: 500 }}>{value}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--sp-4)', marginBottom: 'var(--sp-4)' }}>
                <div style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: '6px' }}>Beschreibung</div>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--fg)' }}>Heizungsanlage zeigt Fehlercode E04. Warmwasser funktioniert noch. Kinder im Haus. Bitte so früh wie möglich.</p>
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--sp-4)' }}>
                <div style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: '4px' }}>Foto beigefügt</div>
                <div style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>heizung_fehler.jpg · 1 Datei</div>
              </div>
            </div>
            <p style={{ marginTop: 'var(--sp-6)', fontSize: 'var(--fs-sm)', color: 'var(--fg-muted)', lineHeight: 1.55 }}>Das landet in Ihrem Postfach. Sie rufen zurück und wissen bereits alles, was Sie brauchen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
