const steps = [
  { n: 'Vorab', day: 'Tag 0', title: 'Onboarding-Kit', body: 'Sie erhalten ein einfaches Formular: Betriebsname, Leistungen, 3–5 Fotos, bestehende Website-URL.', tag0: true },
  { n: 'Start', day: 'Tag 1', title: 'Analyse & Struktur', body: 'Leistungen, Standort und Kundenprobleme erfassen. Bestehende Website prüfen. Seitenstruktur und CTA-Logik definieren.' },
  { n: 'Inhalt', day: 'Tag 2', title: 'Texte & Anfragelogik', body: 'Texte schreiben (Done-for-you). Formularfelder und Routing definieren. Bei Plus: Skript für die Telefonannahme.' },
  { n: 'Build', day: 'Tag 3', title: 'Design & Website', body: 'Website bauen. Mobile-Optimierung. Anfrageformular integrieren. Erste Vorschau-Version intern verfügbar.' },
  { n: 'Test', day: 'Tag 4', title: 'Tests & Setup', body: 'Formulare testen. E-Mail-Weiterleitung prüfen. Bei Plus: 10 Testanrufe mit realistischen Szenarien. 30-Minuten-Feedback-Call.' },
  { n: 'Live', day: 'Tag 5', title: 'Go-live & Übergabe', body: 'Finale Korrekturen. DNS-Weiterleitung. Go-live. Übergabe per fünfminütigem Screencast – kein langer Workshop nötig.' },
];

export default function ProzessSection() {
  return (
    <section id="prozess">
      <div className="container">
        <div className="section-head">
          <span className="label">Die Herangehensweise</span>
          <h2>Fünf Werktage. Wenn Sie liefern, liefern wir.</h2>
          <p className="lede">Dieser Ablauf gilt für den Website-Aufbau. Die fünf Werktage starten, sobald das Onboarding-Kit vollständig ist. Ohne Kit – kein Projektstart. Das schützt das Versprechen.</p>
        </div>
        <div className="process">
          {steps.map((s) => (
            <div key={s.day} className={`step${s.tag0 ? ' tag0' : ''}`}>
              <div className="stepn">{s.n}</div>
              <div className="stepday">{s.day}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <p className="process-scope-note">Gilt ausschließlich für den Website-Aufbau. Für die KI-Rezeption gilt ein separater Einrichtungsablauf.</p>
      </div>
    </section>
  );
}
