export default function ModuleSection() {
  return (
    <section id="module">
      <div className="container">
        <h2 className="module-h2">Vier Bausteine. Ein System. Läuft.</h2>
        <div className="def-grid">
          <div className="def-prose">
            <p>Website, Anfrage-System, Telefon-Annahme und Automation. Nicht vier separate Tools – sondern ein zusammenhängendes System, das auf Ihren Betrieb zugeschnitten ist.</p>
            <p>Für Betriebe ohne IT-Mitarbeiter. Kein Wartungsaufwand. Kein technisches Wissen nötig.</p>
            <div className="fuer-wen">
              <div className="fuer-wen-label">Für wen wir bauen</div>
              <ul className="fuer-wen-list">
                <li>Sanitär · Heizung · Klima</li>
                <li>Elektriker</li>
                <li>Hausmeisterservice</li>
                <li>Hausverwaltung</li>
                <li>Weitere lokale Dienstleister</li>
              </ul>
              <p className="fuer-wen-note">Was sie verbindet: kein eigener IT-Mitarbeiter, kein Marketing-Team, wenig Zeit für Tool-Recherche.</p>
            </div>
          </div>

          <div className="def-cards">
            <div className="def-card featured">
              <div className="dc-header">
                <span className="dc-title">Website</span>
                <span className="dc-tag req">Fundament</span>
              </div>
              <p className="dc-body">Mobiloptimiert, mit klarem Anfrage-CTA, Leistungsseiten je Kerngebiet, Google-Business-Verlinkung und Local-SEO-Basis. Kein WordPress-Friedhof – wartungsarm, schnell ausgespielt.</p>
            </div>

            <div className="def-card">
              <div className="dc-header">
                <span className="dc-title">Strukturiertes Anfrage-System</span>
                <span className="dc-tag req">Kern</span>
              </div>
              <p className="dc-body">Mehr als ein Kontaktformular: Leistung, Standort, Dringlichkeit, Fotoupload. Automatische Lead-Zusammenfassung per E-Mail, Routing nach Gewerk, Rückruflogik mit Notfall-Priorität.</p>
            </div>

            <div className="def-card">
              <div className="dc-header">
                <span className="dc-title">Digitale Telefon-Annahme</span>
                <span className="dc-tag">Optional</span>
              </div>
              <p className="dc-body">Ein digitaler Assistent nimmt Anrufe auf, wenn niemand im Büro ist. Er erfasst Anliegen, Dringlichkeit und Rückrufnummer – und leitet alles strukturiert weiter.</p>
            </div>

            <div className="def-card">
              <div className="dc-header">
                <span className="dc-title">Workflow-Automation</span>
                <span className="dc-tag">Erweiterung</span>
              </div>
              <p className="dc-body">n8n-Workflows für wiederkehrende Büroarbeit: Anfrage, CRM, Kalender, Rückrufticket. Wir analysieren erst, dann automatisieren wir – kein Plug-and-Play-Versprechen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
