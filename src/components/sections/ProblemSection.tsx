export default function ProblemSection() {
  return (
    <section id="problem">
      <div className="container">
        <div className="section-head">
          <span className="label">Das Problem</span>
          <h2>Sie verlieren Aufträge, die Sie nie zu Gesicht bekommen.</h2>
          <p className="lede">Der Schmerz ist real – aber unsichtbar. Inhaber unterschätzen, wie viel sie verlieren, weil sie die verpassten Anrufe nie sehen, zu spät zurückrufen oder nicht wissen, welche Anfragen im Chaos untergegangen sind.</p>
        </div>
        <div className="problem-list">
          <article className="problem-card">
            <div className="pnum">01 · Erreichbarkeit</div>
            <p className="pquote">„Ich bin auf dem Dach und habe vier verpasste Anrufe."</p>
            <p className="pbody">Rund 25–30 % aller Kundenanrufe werden nicht angenommen. Notfälle warten nicht – der nächste Betrieb auf der Liste schon.</p>
          </article>
          <article className="problem-card">
            <div className="pnum">02 · Auftritt</div>
            <p className="pquote">„Meine Website sieht aus wie 2009 – auf dem Handy kann man sie kaum nutzen, alles ist verschoben."</p>
            <p className="pbody">Neue Kunden googeln. Eine nicht mobiloptimierte Seite bedeutet hohe Absprungrate – verlorene Anfragen, bevor der erste Kontakt entsteht.</p>
          </article>
          <article className="problem-card">
            <div className="pnum">03 · Struktur</div>
            <p className="pquote">„Ich weiß nicht, wie viele Kunden ich verliere."</p>
            <p className="pbody">Anfragen kommen über Telefon, WhatsApp, Mail – unstrukturiert. Standort, Dringlichkeit, Foto fehlen. Der Rückruf wird zur Detektivarbeit.</p>
          </article>
          <article className="problem-card">
            <div className="pnum">04 · Zeit</div>
            <p className="pquote">„Die Büroarbeit frisst mir 10 bis 15 Stunden pro Woche."</p>
            <p className="pbody">Stunden, die auf der Baustelle fehlen. Eine Agentur, die drei Monate Workshops verkauft, löst das nicht. Sie macht es schlimmer.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
