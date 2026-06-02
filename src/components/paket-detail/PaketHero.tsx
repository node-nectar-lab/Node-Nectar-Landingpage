import type { Paket } from '@/lib/pakete-data';

type Props = { paket: Paket };

export default function PaketHero({ paket }: Props) {
  return (
    <section className="pd-hero">
      {paket.heroImage && (
        <img
          className="pd-hero-bg"
          src={paket.heroImage}
          alt=""
          aria-hidden="true"
        />
      )}
      <div className="pd-hero-overlay" aria-hidden="true" />

      <div className="container">
        <nav className="pd-breadcrumb" aria-label="Breadcrumb">
          <a href="/#pakete">← Alle Pakete</a>
        </nav>
        <div className="pd-hero-inner">
          <div>
            <p className="pd-hero-spur">{paket.spur}</p>
            <h1 className="pd-hero-name">{paket.name}</h1>
            <p className="pd-hero-desc">{paket.desc}</p>
          </div>
          <div className="pd-hero-box">
            {paket.price ? (
              <>
                <div>
                  <div className="pd-hero-price">{paket.price}</div>
                  <div className="pd-hero-each">{paket.each}</div>
                </div>
                <ul className="pd-hero-features">
                  {paket.features.slice(0, 4).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="pd-hero-price">Auf Anfrage</div>
            )}
            <a href="#anfragen" className="btn btn-primary">
              Anfragen <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
