import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB – Sezer & Eder GbR",
  description: "Allgemeine Geschäftsbedingungen der Sezer & Eder GbR",
};

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f4efe6] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#f4efe6]/50 hover:text-[#f4efe6] transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold mb-2">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p className="text-[#f4efe6]/60 mb-2">Sezer &amp; Eder GbR</p>
        <p className="text-sm text-[#f4efe6]/40 mb-10">Stand: Juni 2026</p>

        <hr className="border-[#f4efe6]/10 mb-10" />

        <div className="space-y-10 text-[#f4efe6]/85 leading-relaxed">

          <Section title="§ 1 Geltungsbereich">
            <Ol>
              <li>Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge zwischen der <strong>Sezer &amp; Eder GbR</strong>, vertreten durch Sergen Eder und Ismail Sezer, Liebigstr. 19, 63225 Langen, E-Mail: info@nodenectar.de (nachfolgend „NodeNectar" oder „Auftragnehmer"), und ihren Auftraggebern (nachfolgend „Auftraggeber" oder „Kunde").</li>
              <li>Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne von § 14 BGB, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen. Vertragsschlüsse mit Verbrauchern im Sinne von § 13 BGB sind ausgeschlossen, sofern nicht gesondert vereinbart.</li>
              <li>Entgegenstehende oder abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, NodeNectar hat deren Geltung ausdrücklich schriftlich zugestimmt.</li>
              <li>Diese AGB gelten auch für alle künftigen Geschäftsbeziehungen, selbst wenn sie nicht erneut ausdrücklich vereinbart werden.</li>
            </Ol>
          </Section>

          <Section title="§ 2 Leistungsangebot">
            <p>NodeNectar erbringt insbesondere folgende Leistungen:</p>
            <Ul>
              <li>Entwicklung und Implementierung von KI-Voice-Agenten (automatisierte Anrufbearbeitung)</li>
              <li>Entwicklung und Implementierung von KI-Chat-Agenten (Website- und Messaging-Integration)</li>
              <li>Prozessautomatisierung (Angebotserstellung, Terminmanagement, Rechnungsstellung)</li>
              <li>Entwicklung von Cold-Outreach-Systemen und Demo-Websites</li>
              <li>Beratung zur digitalen Transformation für KMU</li>
            </Ul>
            <p className="mt-3">Der konkrete Leistungsumfang ergibt sich aus der jeweiligen individuellen Vereinbarung (Angebot, Projektbeschreibung oder Dienstleistungsvertrag).</p>
          </Section>

          <Section title="§ 3 Vertragsschluss">
            <Ol>
              <li>Angebote von NodeNectar sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.</li>
              <li>
                Ein Vertrag kommt zustande durch:
                <Ul className="mt-2">
                  <li>schriftliche Auftragsbestätigung durch NodeNectar, oder</li>
                  <li>Beginn der Leistungserbringung durch NodeNectar nach Auftragserteilung, oder</li>
                  <li>schriftliche Einigung über ein Angebot (inkl. E-Mail).</li>
                </Ul>
              </li>
              <li>Mündliche Nebenabreden bedürfen der Schriftform (E-Mail genügt), um wirksam zu sein.</li>
            </Ol>
          </Section>

          <Section title="§ 4 Vergütung und Zahlungsbedingungen">
            <Ol>
              <li>Die Vergütung richtet sich nach dem individuell vereinbarten Angebot. Sofern keine Preisvereinbarung getroffen wurde, gilt der zum Zeitpunkt der Leistungserbringung gültige Stundensatz von NodeNectar.</li>
              <li>Alle genannten Preise verstehen sich als <strong>Nettopreise zzgl. der gesetzlichen Umsatzsteuer</strong> in der jeweils gültigen Höhe. Bei umsatzsteuerbefreiten Leistungsempfängern (z.&nbsp;B. Arztpraxen gem. § 4 Nr. 14 UStG) oder grenzüberschreitenden B2B-Leistungen (Reverse Charge, § 13b UStG) wird die Umsatzsteuer nicht gesondert ausgewiesen; der Leistungsempfänger ist in diesem Fall selbst Steuerschuldner.</li>
              <li>Rechnungen sind innerhalb von <strong>14 Tagen</strong> ab Rechnungsdatum ohne Abzug zahlbar, sofern nicht schriftlich anders vereinbart.</li>
              <li>Bei Zahlungsverzug ist NodeNectar berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem jeweiligen Basiszinssatz (§ 288 Abs. 2 BGB) zu berechnen.</li>
              <li>Bei Projekten ab einem Auftragsvolumen von 500 EUR ist NodeNectar berechtigt, eine Anzahlung von bis zu 50 % des Gesamtauftragswertes vor Leistungsbeginn zu verlangen.</li>
              <li>Aufrechnung oder Zurückbehaltungsrechte stehen dem Auftraggeber nur zu, wenn seine Gegenforderungen rechtskräftig festgestellt, unbestritten oder von NodeNectar anerkannt sind.</li>
            </Ol>
          </Section>

          <Section title="§ 5 Mitwirkungspflichten des Auftraggebers">
            <Ol>
              <li>Der Auftraggeber stellt NodeNectar alle zur Auftragserfüllung notwendigen Informationen, Zugänge, Materialien und Inhalte rechtzeitig und vollständig zur Verfügung.</li>
              <li>Der Auftraggeber benennt einen fachkundigen Ansprechpartner für die Projektdauer.</li>
              <li>Verzögerungen, die durch mangelnde Mitwirkung des Auftraggebers entstehen, gehen nicht zu Lasten von NodeNectar. Vereinbarte Fristen verschieben sich entsprechend. NodeNectar ist in diesem Fall berechtigt, entstandenen Mehraufwand gesondert in Rechnung zu stellen.</li>
              <li>Der Auftraggeber ist verantwortlich dafür, dass die von ihm bereitgestellten Inhalte (Texte, Bilder, Daten, Zugangsdaten) frei von Rechten Dritter sind und keine gesetzlichen Vorschriften verletzen.</li>
            </Ol>
          </Section>

          <Section title="§ 6 Geistiges Eigentum und Nutzungsrechte">
            <Ol>
              <li>Alle im Rahmen der Leistungserbringung von NodeNectar erstellten Werke (Software, Konzepte, Skripte, Automatisierungen, KI-Konfigurationen, Designs) unterliegen dem Urheberrecht.</li>
              <li>Mit vollständiger Zahlung der vereinbarten Vergütung räumt NodeNectar dem Auftraggeber ein <strong>einfaches, nicht übertragbares Nutzungsrecht</strong> für den vertraglich vereinbarten Zweck ein, sofern nicht schriftlich ein ausschließliches Nutzungsrecht vereinbart wurde.</li>
              <li>NodeNectar behält das Recht, das Projekt zu Referenzzwecken (Portfolio, Marketing) zu nennen, es sei denn, der Auftraggeber widerspricht schriftlich.</li>
              <li>Vom Auftraggeber bereitgestellte Materialien bleiben dessen geistiges Eigentum.</li>
              <li>Die Nutzung von Drittanbieter-Bibliotheken, Open-Source-Komponenten oder KI-APIs (z.&nbsp;B. OpenAI, Anthropic, ElevenLabs) im Rahmen der Leistungserbringung ist zulässig. NodeNectar informiert den Auftraggeber über wesentliche Drittanbieter-Abhängigkeiten.</li>
            </Ol>
          </Section>

          <Section title="§ 7 Abnahme">
            <Ol>
              <li>Bei Werkleistungen (individuelle Software, Automatisierungen, Websites) ist eine förmliche Abnahme durchzuführen.</li>
              <li>Nach Fertigstellung wird NodeNectar den Auftraggeber zur Abnahme auffordern. Der Auftraggeber hat <strong>10 Werktage</strong> Zeit, wesentliche Mängel schriftlich zu rügen.</li>
              <li>Als abgenommen gilt das Werk auch, wenn der Auftraggeber die Leistung produktiv einsetzt, ohne innerhalb der Abnahmefrist Mängel zu rügen.</li>
            </Ol>
          </Section>

          <Section title="§ 8 Gewährleistung und Mängelhaftung">
            <Ol>
              <li>NodeNectar erbringt Leistungen nach dem Stand der Technik und mit der Sorgfalt eines ordentlichen Kaufmanns.</li>
              <li>Bei Mängeln ist NodeNectar zunächst zur Nacherfüllung (Nachbesserung oder Neulieferung) berechtigt. Schlägt die Nacherfüllung zweimal fehl, kann der Auftraggeber Minderung oder Rücktritt verlangen.</li>
              <li>Die Gewährleistungsfrist beträgt <strong>12 Monate</strong> ab Abnahme, sofern nicht gesetzlich eine längere Frist zwingend vorgeschrieben ist.</li>
              <li>
                Keine Gewährleistung besteht für Mängel, die durch:
                <Ul className="mt-2">
                  <li>Änderungen des Auftraggebers oder Dritter an den erstellten Leistungen entstanden sind,</li>
                  <li>Änderungen von Drittanbieter-APIs oder -Diensten (z.&nbsp;B. OpenAI API-Änderungen, WhatsApp Business API) verursacht wurden,</li>
                  <li>unsachgemäße Nutzung oder Bedienung entstanden sind.</li>
                </Ul>
              </li>
            </Ol>
          </Section>

          <Section title="§ 9 Haftungsbeschränkung">
            <Ol>
              <li>NodeNectar haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.</li>
              <li>Bei leichter Fahrlässigkeit haftet NodeNectar nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), und auch dann nur auf den vorhersehbaren, vertragstypischen Schaden. Die Haftung ist in diesem Fall begrenzt auf die Höhe der für den jeweiligen Auftrag vereinbarten Vergütung, maximal jedoch <strong>10.000 EUR</strong> pro Schadensfall.</li>
              <li>Eine Haftung für mittelbare Schäden, entgangenen Gewinn oder Datenverlust ist bei leichter Fahrlässigkeit ausgeschlossen.</li>
              <li>NodeNectar haftet nicht für die Verfügbarkeit, Leistung oder Änderungen von Drittanbieter-Diensten (KI-APIs, Hosting-Dienste, CRM-Systeme etc.), die in die erbrachten Leistungen integriert sind.</li>
              <li>Die Haftungsbeschränkungen gelten auch zugunsten der Gesellschafter von NodeNectar.</li>
            </Ol>
          </Section>

          <Section title="§ 10 Vertragslaufzeit und Kündigung">
            <Ol>
              <li>Die Vertragsdauer richtet sich nach der individuellen Vereinbarung.</li>
              <li>Laufende Beratungs- oder Support-Verträge können von beiden Parteien mit einer Frist von <strong>4 Wochen</strong> zum Monatsende ordentlich gekündigt werden, sofern nicht anders vereinbart.</li>
              <li>
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn:
                <Ul className="mt-2">
                  <li>der Auftraggeber mit einer fälligen Zahlung mehr als 30 Tage im Verzug ist,</li>
                  <li>der Auftraggeber gegen wesentliche Vertragspflichten verstößt und nach Abmahnung nicht abhilft.</li>
                </Ul>
              </li>
              <li>Bei Kündigung sind bereits erbrachte Teilleistungen vom Auftraggeber zu vergüten.</li>
            </Ol>
          </Section>

          <Section title="§ 11 Geheimhaltung">
            <Ol>
              <li>Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen der jeweils anderen Partei vertraulich zu behandeln und nicht an Dritte weiterzugeben.</li>
              <li>Als vertraulich gelten insbesondere: Geschäftsdaten, Kundenlisten, technische Konzepte, Zugangsdaten und nicht veröffentlichte Informationen.</li>
              <li>Diese Verpflichtung gilt auch nach Beendigung des Vertragsverhältnisses für einen Zeitraum von <strong>3 Jahren</strong>.</li>
            </Ol>
          </Section>

          <Section title="§ 12 Datenschutz">
            <p>Die Verarbeitung personenbezogener Daten im Rahmen der Vertragsabwicklung erfolgt gemäß der Datenschutzerklärung von NodeNectar und den Bestimmungen der DSGVO. Soweit NodeNectar im Auftrag des Auftraggebers personenbezogene Daten verarbeitet, wird ein gesonderter Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO abgeschlossen.</p>
            <p className="mt-3">Bei Auftraggebern aus dem Gesundheitswesen (Arztpraxen, Tierarztpraxen, Physiotherapie, Heilpraktiker u.&nbsp;ä.), deren KI-Lösungen Zugang zu Patientendaten oder anderen besonderen Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO erhalten, ist vor Leistungsbeginn zwingend ein erweiterter AVV mit Technisch-Organisatorischen Maßnahmen (TOM) nach Art. 32 DSGVO sowie — soweit erforderlich — eine Datenschutz-Folgenabschätzung (DSFA, Art. 35 DSGVO) zu vereinbaren. NodeNectar behält sich vor, die Leistungserbringung bis zum Abschluss dieser Vereinbarungen zurückzustellen.</p>
          </Section>

          <Section title="§ 13 Besondere Bedingungen für KI-Systeme">
            <Ol>
              <li>NodeNectar entwickelt und implementiert Systeme auf Basis generativer KI (u.&nbsp;a. Sprachmodelle, Voice-Agenten, Chat-Agenten). Der Auftraggeber nimmt zur Kenntnis, dass diese Systeme technologiebedingt <strong>plausibel klingende, aber inhaltlich unrichtige Antworten</strong> erzeugen können (sog. Halluzinationen). NodeNectar übernimmt keine Haftung für inhaltliche Fehler, die aus dem Verhalten des KI-Systems resultieren, sofern diese nicht auf einer fehlerhaften Konfiguration durch NodeNectar beruhen.</li>
              <li>
                <strong>Voice-Agenten / Telefonaufzeichnung:</strong> Setzt der Auftraggeber einen von NodeNectar entwickelten KI-Voice-Agenten ein, der Telefongespräche entgegennimmt oder aufzeichnet, ist der Auftraggeber allein verantwortlich dafür, dass:
                <Ul className="mt-2">
                  <li>alle Anrufenden zu Beginn des Gesprächs darüber informiert werden, dass sie mit einer KI sprechen und das Gespräch aufgezeichnet werden kann (§ 201 StGB, Art. 13 DSGVO),</li>
                  <li>die erforderlichen Einwilligungen der betroffenen Personen eingeholt werden,</li>
                  <li>die gesetzlichen Anforderungen zur Speicherung und Löschung von Gesprächsaufzeichnungen eingehalten werden.</li>
                </Ul>
              </li>
              <li><strong>EU AI Act:</strong> Soweit die entwickelten Systeme unter die Anforderungen der EU-Verordnung über künstliche Intelligenz (EU AI Act, VO 2024/1689) fallen, ist der Auftraggeber als Betreiber („Deployer") für die Einhaltung der betreiberseitigen Pflichten verantwortlich. NodeNectar unterstützt auf Anfrage bei der Dokumentation, kann die Betreiberpflichten jedoch nicht übernehmen.</li>
              <li>NodeNectar haftet nicht für Schäden, die dadurch entstehen, dass der Auftraggeber die Pflichten aus Abs. 2 und 3 nicht erfüllt.</li>
            </Ol>
          </Section>

          <Section title="§ 14 Schlussbestimmungen">
            <Ol>
              <li>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).</li>
              <li>Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, sofern gesetzlich zulässig, der Sitz von NodeNectar.</li>
              <li>Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, berührt dies die Gültigkeit der übrigen Bestimmungen nicht. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck am nächsten kommt.</li>
              <li>Änderungen und Ergänzungen dieser AGB bedürfen der Textform (E-Mail genügt).</li>
            </Ol>
          </Section>

        </div>

        <hr className="border-[#f4efe6]/10 mt-12 mb-6" />
        <p className="text-sm text-[#f4efe6]/40">
          Sezer &amp; Eder GbR — Sergen Eder &amp; Ismail Sezer · Stand: Juni 2026
        </p>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-[#f4efe6] mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Ol({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-decimal list-outside ml-5 space-y-2">
      {children}
    </ol>
  );
}

function Ul({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <ul className={`list-disc list-outside ml-5 space-y-1 ${className ?? ""}`}>
      {children}
    </ul>
  );
}
