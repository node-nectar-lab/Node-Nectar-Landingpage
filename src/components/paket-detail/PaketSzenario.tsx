import type { Szenario } from '@/lib/pakete-data';

type Props = { szenario: Szenario };

export default function PaketSzenario({ szenario }: Props) {
  return (
    <section className="pd-szenario">
      <div className="container">
        <div className={`pd-szenario-inner${szenario.image ? '' : ' no-image'}`}>
          <div>
            <p className="pd-szenario-label">Beispiel</p>
            <h3>{szenario.title}</h3>
            <p>{szenario.story}</p>
          </div>
          {szenario.image && (
            <div className="pd-szenario-img">
              <img
                src={szenario.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
