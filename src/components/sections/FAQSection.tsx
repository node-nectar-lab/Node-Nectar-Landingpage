const faqs = [
  {
    n: '01',
    q: 'Ist das nur eine neue Website?',
    a: 'Nein. Die Website ist einer von vier Bausteinen. Genauso wichtig sind das strukturierte Anfrage-System, die optionale digitale Telefon-Annahme und – auf Wunsch – Workflow-Automation für wiederkehrende Büroarbeit.',
  },
  {
    n: '02',
    q: 'Gilt die 5-Tage-Lieferung immer?',
    a: 'Die fünf Werktage starten, sobald Ihr Onboarding-Kit vollständig ist. Wenn Inhalte fehlen, verzögert sich der Start entsprechend.',
  },
  {
    n: '03',
    q: 'Muss ich KI nutzen?',
    a: 'Nein. Die digitale Anrufannahme ist optional und nur in Paket 03 enthalten.',
  },
  {
    n: '04',
    q: 'Was passiert nach dem Launch?',
    a: 'Die Monatspauschale umfasst technischen Betrieb, ein Inhaltsupdate pro Monat und Monitoring des Anfrage-Systems.',
  },
  {
    n: '05',
    q: 'Kann ich kündigen?',
    a: 'Die Monatspauschale ist monatlich kündbar nach dem ersten Monat. Kein Jahresvertrag, keine versteckten Klauseln.',
  },
  {
    n: '06',
    q: 'Ist der Rechner verbindlich?',
    a: 'Nein. Er ist eine Schätzung auf Basis Ihrer Eingaben – keine Umsatzgarantie.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq">
      <div className="container">
        <div className="section-head">
          <span className="label">FAQ</span>
          <h2>Sechs Fragen, die häufig kommen.</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((f) => (
            <div key={f.n} className="faq-item">
              <div className="fn">{f.n}</div>
              <div>
                <div className="fq">{f.q}</div>
                <p className="fa">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
