import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – NodeNectar",
  description: "Impressum gemäß § 5 DDG",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f4efe6] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#f4efe6]/50 hover:text-[#f4efe6] transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold mb-2">Impressum</h1>
        <p className="text-sm text-[#f4efe6]/40 mb-10">Anbieterkennzeichnung gemäß § 5 DDG</p>

        <hr className="border-[#f4efe6]/10 mb-10" />

        <div className="space-y-10 text-[#f4efe6]/85 leading-relaxed">

          <Section title="Angaben zum Unternehmen">
            <div className="pl-4 border-l border-[#f4efe6]/20 space-y-1">
              <p><strong>Sezer &amp; Eder GbR</strong></p>
              <p className="text-[#f4efe6]/60 text-sm">Handelnd unter: NodeNectar</p>
              <p className="mt-2">Liebigstr. 19</p>
              <p>63225 Langen</p>
              <p>Deutschland</p>
            </div>
            <div className="mt-4 space-y-1">
              <p><strong>Vertreten durch die Gesellschafter:</strong></p>
              <p>Ismail Sezer</p>
              <p>Sergen Eder</p>
            </div>
          </Section>

          <Section title="Kontakt">
            <div className="space-y-1">
              <p>Telefon: <a href="tel:+491732765015" className="underline underline-offset-2 hover:text-[#f4efe6]">+49 1732765015</a></p>
              <p>E-Mail: <a href="mailto:info@nodenectar.de" className="underline underline-offset-2 hover:text-[#f4efe6]">info@nodenectar.de</a></p>
            </div>
          </Section>

          <Section title="Umsatzsteuer-Hinweis">
            <p>Aufgrund der Kleinunternehmerregelung gemäß § 19 UStG wird keine Umsatzsteuer erhoben und auf Rechnungen nicht ausgewiesen.</p>
          </Section>

          <Section title="EU-Streitschlichtung">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#f4efe6]"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </Section>

          <Section title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </Section>

          <Section title="Haftung für Inhalte">
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p className="mt-3">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </Section>

          <Section title="Haftung für Links">
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
          </Section>

          <Section title="Urheberrecht">
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </Section>

        </div>

        <hr className="border-[#f4efe6]/10 mt-12 mb-6" />
        <p className="text-sm text-[#f4efe6]/40">Stand: Juni 2026</p>
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
