'use client';

import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) setHidden(false);
      else setHidden(currentY > lastY.current);
      lastY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${hidden ? ' header-hidden' : ''}`}>
        <div className="container inner">
          <a href="/" className="brand" aria-label="NodeNectar">
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
            <a href="#kontakt" className="cta">Erstgespräch</a>
          </nav>
          <button
            className="nav-burger"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={`burger-bar${menuOpen ? ' open' : ''}`} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Navigation"
      >
        <nav className="mobile-nav-links">
          <a href="/#module" onClick={close}>Module</a>
          <a href="/#rechner" onClick={close}>Rechner</a>
          <a href="/#pakete" onClick={close}>Pakete</a>
          <a href="/pakete/digitale-rezeption" onClick={close} className="mobile-nav-sub">↳ Digitale Rezeption</a>
          <a href="/pakete/workflow-automation" onClick={close} className="mobile-nav-sub">↳ Workflow-Automation</a>
          <a href="/#kontakt" onClick={close} className="mobile-nav-cta">Erstgespräch anfragen</a>
        </nav>
      </div>
    </>
  );
}
