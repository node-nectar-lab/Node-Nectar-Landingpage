import type { Szenario } from '@/lib/pakete-data';

type Props = { szenario: Szenario };

export default function PaketSzenario({ szenario }: Props) {
  return (
    <section className="pd-szenario">
      <div className="container-narrow">
        <p className="pd-szenario-label">Beispiel</p>
        <h3>{szenario.title}</h3>
        <p>{szenario.story}</p>
      </div>
    </section>
  );
}
