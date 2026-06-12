import { pakete } from '@/lib/pakete-data';

export default function PaketeSection() {
  return (
    <section id="pakete">
      <div className="container">
        <div className="section-head">
          <h2>Vier Pakete. Einzeln oder kombiniert.</h2>
          <p className="lede">Monatlich kündbar nach dem ersten Monat. Die Pauschale deckt Betrieb, Monitoring und ein Inhaltsupdate pro Monat.</p>
        </div>

        <div className="pkgs">
          {pakete.map((p) => (
            <div
              key={p.spur + p.name}
              className={[
                'pkg',
                p.featured ? 'featured' : '',
                p.price === null ? 'pkg-inquiry' : '',
              ].filter(Boolean).join(' ')}
            >
              {p.tag && <div className="pkg-tag">{p.tag}</div>}

              <div className="pkg-head">
                <div className="pkg-spur">{p.spur}</div>
                <div className="pkg-name">{p.name}</div>
              </div>
              <p className="pkg-for">{p.desc}</p>
              <ul className="pkg-features">
                {p.features.map((f) => (
                  <li key={f} className="pkg-feature">{f}</li>
                ))}
                {p.muted.map((f) => (
                  <li key={f} className="pkg-feature mute">{f}</li>
                ))}
              </ul>
              {p.slug ? (
                <a href={`/pakete/${p.slug}`} className="btn btn-ghost">
                  Mehr erfahren <span className="arr">→</span>
                </a>
              ) : (
                <a href="#kontakt" className="btn btn-ghost">
                  Anfragen <span className="arr">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
