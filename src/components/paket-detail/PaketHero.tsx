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
        <div className="pd-hero-content">
          <p className="pd-hero-spur">{paket.spur}</p>
          <h1 className="pd-hero-name">{paket.name}</h1>
          <p className="pd-hero-desc">{paket.desc}</p>
          <a href="#anfragen" className="btn btn-bone">
            Mehr erfahren <span className="arr">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
