import type { ForWhomItem } from '@/lib/pakete-data';

type Props = {
  forWhom: ForWhomItem[];
  forWhomIntro?: string;
};

export default function PaketFuerWen({ forWhom, forWhomIntro }: Props) {
  return (
    <section className="pd-fuerwen" aria-labelledby="pd-fuerwen-heading">
      <div className="container">
        <div className="pd-fuerwen-head">
          <h2 id="pd-fuerwen-heading">Wer profitiert davon?</h2>
          {forWhomIntro && <p className="pd-fuerwen-intro">{forWhomIntro}</p>}
        </div>
        <ul className="pd-fuerwen-grid" role="list">
          {forWhom.map((item) => (
            <li key={item.label} className="pd-fuerwen-card">
              <span className="pd-fuerwen-card-label">{item.label}</span>
              <p className="pd-fuerwen-card-desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
