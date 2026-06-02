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
          <a href="#pakete">Pakete</a>
          <a href="#referenzen">Referenzen</a>
          <a href="#blog">Journal</a>
          <a href="#kontakt" className="cta">Erstgespräch</a>
        </nav>
      </div>
    </header>
  );
}
