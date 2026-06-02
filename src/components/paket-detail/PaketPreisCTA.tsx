import type { Paket } from '@/lib/pakete-data';

type Props = { paket: Paket };

export default function PaketPreisCTA({ paket }: Props) {
  return (
    <section className="pd-cta" id="anfragen">
      <div className="container">

        {(paket.ctaHeadline || paket.ctaNote) && (
          <div className="pd-cta-top">
            {paket.ctaHeadline && <h2 className="pd-cta-headline">{paket.ctaHeadline}</h2>}
            {paket.ctaNote && <p className="pd-cta-note">{paket.ctaNote}</p>}
          </div>
        )}

        {paket.ctaStats && (
          <ul className="pd-cta-stats" aria-label="Kennzahlen">
            {paket.ctaStats.map((s) => (
              <li key={s.label} className="pd-cta-stat">
                <span className="pd-cta-stat-value">{s.value}</span>
                <span className="pd-cta-stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="pd-cta-divider" />

        <div className="pd-cta-inner">
          <div>
            <p className="pd-cta-price-label">Investition</p>
            <div className="pd-cta-price-big">{paket.price ?? 'Auf Anfrage'}</div>
            {paket.each && <p className="pd-cta-price-each">{paket.each}</p>}
            <ul className="pd-cta-features">
              {paket.features.slice(0, 3).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="pd-cta-actions">
            <a href="/#kontakt" className="btn btn-primary">
              Anfragen <span className="arr">→</span>
            </a>
            <a href="/#pakete" className="btn btn-ghost">
              ← Alle Pakete
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
