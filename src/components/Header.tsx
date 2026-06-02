export default function Header() {
  return (
    <header className="site-header">
      <div className="container inner">
        <a href="#top" className="brand" aria-label="NodeNectar">
          <span className="wordmark">NodeNectar</span>
          <span className="brand-divider" aria-hidden="true">|</span>
          <span className="strap">Digital Studio</span>
        </a>
        <nav className="nav">
          <a href="#module">Module</a>
          <a href="#rechner">Rechner</a>
          <div className="nav-dropdown">
            <a href="/#pakete">Pakete</a>
            <ul className="nav-dropdown-menu">
              <li><a href="/pakete/digitale-rezeption">Digitale Rezeption</a></li>
              <li><a href="/pakete/workflow-automation">Workflow-Automation</a></li>
            </ul>
          </div>
          <a href="#referenzen">Referenzen</a>
          <a href="#blog">Journal</a>
          <a href="#kontakt" className="cta">Erstgespräch</a>
        </nav>
      </div>
    </header>
  );
}
