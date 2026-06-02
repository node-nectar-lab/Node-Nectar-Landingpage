import type { Paket } from '@/lib/pakete-data';

type Props = { paket: Paket };

export default function PaketPreisCTA({ paket }: Props) {
  return (
    <section className="pd-cta" id="anfragen">
      <div className="container">
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
