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
            <h4>Leistungen</h4>
            <ul>
              <li><a href="#pakete">Website Launch</a></li>
              <li><a href="#pakete">Digitale Rezeption</a></li>
              <li><a href="#pakete">Digitale Rezeption Plus</a></li>
              <li><a href="#pakete">Betriebs-Automation</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Unternehmen</h4>
            <ul>
              <li><a href="#problem">Problem</a></li>
              <li><a href="#prozess">5-Tage-Prozess</a></li>
              <li><a href="#einwaende">Einwände</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li>+49&nbsp;(0)&thinsp;30&nbsp;120&nbsp;480&nbsp;90</li>
              <li>hallo@nodenectar.de</li>
              <li>Mo–Fr · 09–17 Uhr</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom" style={{ flexDirection: 'column', gap: 'var(--sp-4)', alignItems: 'flex-start' }}>
          <span style={{ fontSize: 'var(--fs-xs)', color: 'rgba(244,239,230,0.5)', lineHeight: 1.55, maxWidth: '680px' }}>* Lieferzeit abhängig von Projektumfang und vollständigem Onboarding-Kit. Einfache Module in 5 Werktagen. Komplexere Automation individuell abgestimmt.</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
            <div>© 2026 NodeNectar GmbH · Alle Rechte vorbehalten</div>
            <div className="links">
              <a href="impressum.html">Impressum</a>
              <a href="datenschutz.html">Datenschutz</a>
              <a href="agb.html">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
