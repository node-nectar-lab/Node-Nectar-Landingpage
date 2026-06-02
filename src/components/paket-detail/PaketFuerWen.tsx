type Props = { forWhom: string[] };

export default function PaketFuerWen({ forWhom }: Props) {
  return (
    <section className="pd-fuerwen">
      <div className="container">
        <h2>Wer profitiert davon?</h2>
        <div className="pd-fuerwen-pills">
          {forWhom.map((item) => (
            <span key={item} className="pd-pill">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
