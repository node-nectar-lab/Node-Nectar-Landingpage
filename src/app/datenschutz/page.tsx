import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – NodeNectar",
  description: "Datenschutzerklärung der Sezer & Eder GbR für die Nutzung der Website nodenectar.de und deren Dienste.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f4efe6] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#f4efe6]/50 hover:text-[#f4efe6] transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold mb-2">Datenschutzerklärung</h1>
        <p className="text-[#f4efe6]/60 mb-2">Sezer &amp; Eder GbR · NodeNectar</p>
        <p className="text-sm text-[#f4efe6]/40 mb-10">
          Datenschutzerklärung für die Nutzung der Website nodenectar.de und deren Dienste. Stand: Juni 2026
        </p>

        <hr className="border-[#f4efe6]/10 mb-10" />

        <div className="space-y-12 text-[#f4efe6]/85 leading-relaxed">

          <Section title="1. Datenschutz auf einen Blick">
            <SubSection title="Allgemeine Hinweise">
              <p>Wir, die Sezer &amp; Eder GbR (handelnd unter NodeNectar), nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns strikt an die Regeln der Datenschutzgesetze. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang erhoben. Die nachfolgende Erklärung gibt Ihnen einen Überblick darüber, wie wir diesen Schutz gewährleisten und welche Art von Daten zu welchem Zweck erhoben werden.</p>
            </SubSection>
            <SubSection title="Datenerfassung auf unserer Website">
              <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p className="mt-2">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
              <p className="mt-4"><strong>Wie erfassen wir Ihre Daten?</strong></p>
              <p className="mt-2">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
              <p className="mt-4"><strong>Wofür nutzen wir Ihre Daten?</strong></p>
              <p className="mt-2">Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
              <p className="mt-4"><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
              <p className="mt-2">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
            </SubSection>
            <SubSection title="Analyse-Tools und Tools von Drittanbietern">
              <p>Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerklärung.</p>
            </SubSection>
          </Section>

          <Section title="2. Allgemeine Hinweise und Pflichtinformationen">
            <SubSection title="Datenschutz">
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              <p className="mt-3">Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
              <p className="mt-3">Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
            </SubSection>
            <SubSection title="Hinweis zur verantwortlichen Stelle">
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="mt-3 pl-4 border-l border-[#f4efe6]/20 space-y-1">
                <p><strong>Sezer &amp; Eder GbR</strong></p>
                <p>Liebigstr. 19 · 63225 Langen</p>
                <p>Telefon: <a href="tel:+491732765015" className="underline underline-offset-2 hover:text-[#f4efe6]">+49 1732765015</a></p>
                <p>E-Mail: <a href="mailto:info@nodenectar.de" className="underline underline-offset-2 hover:text-[#f4efe6]">info@nodenectar.de</a></p>
                <p>Internet: <a href="https://nodenectar.de" className="underline underline-offset-2 hover:text-[#f4efe6]">www.nodenectar.de</a></p>
              </div>
              <p className="mt-3">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
            </SubSection>
            <SubSection title="Widerruf Ihrer Einwilligung zur Datenverarbeitung">
              <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
            </SubSection>
            <SubSection title="Beschwerderecht bei der zuständigen Aufsichtsbehörde">
              <p>Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten rechtswidrig erfolgt, können Sie sich gemäß Art. 77 DSGVO bei der für Sie zuständigen Datenschutz-Aufsichtsbehörde beschweren.</p>
              <p className="mt-3">In unserem Fall ist das:</p>
              <div className="mt-2 pl-4 border-l border-[#f4efe6]/20 space-y-1 text-sm">
                <p>Der Hessische Beauftragte für Datenschutz und Informationsfreiheit</p>
                <p>Postfach 3163 · 65021 Wiesbaden</p>
                <p>Telefon: 0611 / 1408-0</p>
                <p>E-Mail: <a href="mailto:poststelle@datenschutz.hessen.de" className="underline underline-offset-2 hover:text-[#f4efe6]">poststelle@datenschutz.hessen.de</a></p>
              </div>
            </SubSection>
            <SubSection title="Recht auf Datenübertragbarkeit">
              <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
            </SubSection>
            <SubSection title="SSL- bzw. TLS-Verschlüsselung">
              <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
            </SubSection>
            <SubSection title="Auskunft, Sperrung, Löschung">
              <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten (Art. 15–21 DSGVO). Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
            </SubSection>
            <SubSection title="Verarbeitungszwecke und Rechtsgrundlage">
              <p>Die auf dieser Website erhobenen Daten (Kontaktformular) werden zur Anbahnung von Neugeschäften und/oder zur Kunden- und Interessentenpflege bzw. zur Bearbeitung von Anfragen verwendet. Dies erfolgt auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
            </SubSection>
            <SubSection title="Übermittlung in Drittstaaten">
              <p>Eine Übermittlung personenbezogener Daten in Drittstaaten ist nicht beabsichtigt für Daten, die Sie aktiv in Eingabeformulare eingeben. Durch Plugins, Analysetools oder Cookies von Drittanbietern könnten Daten auch in Drittstaaten übermittelt werden. Weitere Informationen dazu finden Sie in den folgenden Abschnitten dieser Datenschutzerklärung.</p>
            </SubSection>
            <SubSection title="Dauer der Speicherung">
              <p>Daten von Kunden und Interessenten, die über das Kontaktformular erhoben werden, werden für die Dauer der Angebotsphase bzw. für die Dauer einer ggf. daraus resultierenden Kundenbeziehung gespeichert. In der Regel erfolgt eine Sperrung für Marketingzwecke 24 Monate nach der letzten Kontaktaufnahme durch den Interessenten.</p>
            </SubSection>
            <SubSection title="Widerspruch gegen Werbe-Mails">
              <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
            </SubSection>
          </Section>

          <Section title="3. Datenerfassung auf unserer Website">
            <SubSection title="Cookies">
              <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
              <p className="mt-3">Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>
              <p className="mt-3">Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Soweit andere Cookies (z.&nbsp;B. zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</p>
            </SubSection>
            <SubSection title="Kontaktformular">
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              <p className="mt-3">Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.</p>
            </SubSection>
          </Section>

          <Section title="4. Soziale Medien">
            <SubSection title="LinkedIn Plugin">
              <p>Unsere Website nutzt Funktionen des Netzwerks LinkedIn. Anbieter ist die LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043, USA.</p>
              <p className="mt-3">Bei jedem Abruf einer unserer Seiten, die Funktionen von LinkedIn enthält, wird eine Verbindung zu Servern von LinkedIn aufgebaut. LinkedIn wird darüber informiert, dass Sie unsere Internetseiten mit Ihrer IP-Adresse besucht haben. Wenn Sie den „Recommend-Button" von LinkedIn anklicken und in Ihrem Account bei LinkedIn eingeloggt sind, ist es LinkedIn möglich, Ihren Besuch auf unserer Internetseite Ihnen und Ihrem Benutzerkonto zuzuordnen.</p>
              <p className="mt-3">Weitere Informationen finden Sie in der Datenschutzerklärung von LinkedIn unter: <ExternalLink href="https://www.linkedin.com/legal/privacy-policy">linkedin.com/legal/privacy-policy</ExternalLink></p>
            </SubSection>
          </Section>

          <Section title="5. Analyse-Tools und Werbung">
            <SubSection title="Google Analytics">
              <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
              <p className="mt-3">Google Analytics verwendet so genannte „Cookies". Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
              <p className="mt-3"><strong>IP-Anonymisierung:</strong> Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union vor der Übermittlung in die USA gekürzt.</p>
              <p className="mt-3"><strong>Browser-Plugin:</strong> Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern oder das Browser-Plugin herunterladen: <ExternalLink href="https://tools.google.com/dlpage/gaoptout?hl=de">tools.google.com/dlpage/gaoptout</ExternalLink></p>
              <p className="mt-3">Mehr Informationen: <ExternalLink href="https://support.google.com/analytics/answer/6004245?hl=de">Google Analytics Datenschutz</ExternalLink></p>
            </SubSection>
            <SubSection title="Google AdWords und Conversion-Tracking">
              <p>Diese Website verwendet Google AdWords. Im Rahmen von Google AdWords nutzen wir das so genannte Conversion-Tracking. Wenn Sie auf eine von Google geschaltete Anzeige klicken, wird ein Cookie für das Conversion-Tracking gesetzt. Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung der Nutzer.</p>
              <p className="mt-3">Die Speicherung von „Conversion-Cookies" erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mehr Informationen: <ExternalLink href="https://www.google.de/policies/privacy/">google.de/policies/privacy</ExternalLink></p>
            </SubSection>
            <SubSection title="Google reCAPTCHA">
              <p>Wir nutzen „Google reCAPTCHA" auf unseren Websites. Anbieter ist die Google Ireland Limited. Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf unseren Websites durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
              <p className="mt-3">Weitere Informationen: <ExternalLink href="https://www.google.com/intl/de/policies/privacy/">google.com/intl/de/policies/privacy</ExternalLink></p>
            </SubSection>
            <SubSection title="Facebook Pixel">
              <p>Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.</p>
              <p className="mt-3">So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Website weitergeleitet wurden. Das Facebook Pixel wird <strong>ausschließlich nach erteilter Cookie-Einwilligung</strong> aktiviert.</p>
              <p className="mt-3">Weitere Informationen: <ExternalLink href="https://www.facebook.com/about/privacy/">facebook.com/about/privacy</ExternalLink></p>
            </SubSection>
          </Section>

          <Section title="6. Newsletter">
            <SubSection title="Newsletterdaten">
              <p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.</p>
              <p className="mt-3">Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung können Sie jederzeit widerrufen, etwa über den „Austragen"-Link im Newsletter.</p>
            </SubSection>
          </Section>

          <Section title="7. Plugins und Tools">
            <SubSection title="YouTube">
              <p>Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt.</p>
              <p className="mt-3">Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen: <ExternalLink href="https://www.google.de/intl/de/policies/privacy">google.de/intl/de/policies/privacy</ExternalLink></p>
            </SubSection>
            <SubSection title="Google Web Fonts">
              <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in Ihren Browsercache. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung (Art. 6 Abs. 1 lit. f DSGVO).</p>
              <p className="mt-3">Weitere Informationen: <ExternalLink href="https://developers.google.com/fonts/faq">developers.google.com/fonts/faq</ExternalLink></p>
            </SubSection>
            <SubSection title="Google Maps">
              <p>Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote (Art. 6 Abs. 1 lit. f DSGVO).</p>
              <p className="mt-3">Mehr Informationen: <ExternalLink href="https://www.google.de/intl/de/policies/privacy/">google.de/intl/de/policies/privacy</ExternalLink></p>
            </SubSection>
          </Section>

        </div>

        <hr className="border-[#f4efe6]/10 mt-12 mb-6" />
        <p className="text-sm text-[#f4efe6]/40">
          Sezer &amp; Eder GbR · NodeNectar · Stand: Juni 2026
        </p>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-[#f4efe6] mb-5">{title}</h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#f4efe6]/70 uppercase tracking-wide mb-2">{title}</h3>
      {children}
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 hover:text-[#f4efe6]"
    >
      {children}
    </a>
  );
}
