export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <span className="wordmark">NodeNectar</span>
              <span className="brand-divider" aria-hidden="true">|</span>
              <span className="strap">Digital Studio</span>
            </div>
            <p className="tag">Digitale Werkzeuge für Handwerk und lokales Gewerbe: Website, strukturiertes Anfrage-System, digitale Telefon-Annahme und Workflow-Automation. In Werktagen statt Monaten geliefert.</p>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li>+49 1732765015</li>
              <li>info@nodenectar.de</li>
              <li>Mo–Fr · 09–17 Uhr</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
            <div>© 2026 NodeNectar · Alle Rechte vorbehalten</div>
            <div className="links">
              <a href="https://nodenectar.de/impressum">Impressum</a>
              <a href="https://nodenectar.de/datenschutz">Datenschutz</a>
              <a href="https://nodenectar.de/agb">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
