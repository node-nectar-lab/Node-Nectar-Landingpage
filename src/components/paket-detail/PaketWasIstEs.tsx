type Props = { longDesc: string };

export default function PaketWasIstEs({ longDesc }: Props) {
  const paragraphs = longDesc.split('\n\n').filter(Boolean);
  return (
    <section className="pd-was">
      <div className="container-narrow">
        <h2>Was steckt dahinter?</h2>
        <div className="pd-was-body">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
