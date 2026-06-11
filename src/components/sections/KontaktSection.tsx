'use client';

import { useState } from 'react';

export default function KontaktSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <section id="kontakt" className="form-section">
      <div className="container">
        <div className="section-head">
          <span className="label">Erstgespräch</span>
          <h2>Kostenlose Ersteinschätzung. Eine Antwort innerhalb eines Werktags.</h2>
          <p className="lede">Wir prüfen Ihre Angaben und melden uns mit einer konkreten Einschätzung – wo aktuell Anfragen verloren gehen könnten und welches Paket dazu passt.</p>
        </div>
        <div className="form-grid">
          <div className="form-aside">
            <div className="form-aside-item">
              <div className="k">Telefonisch</div>
              <div className="v big">+49 1732765015</div>
            </div>
            <div className="form-aside-item">
              <div className="k">Erreichbarkeit</div>
              <div className="v">Mo–Fr · 09:00 – 17:00</div>
            </div>
            <div className="form-aside-item">
              <div className="k">E-Mail</div>
              <div className="v">info@nodenectar.de</div>
            </div>
            <div className="form-aside-item">
              <div className="k">Bearbeitungszeit</div>
              <div className="v">Antwort innerhalb eines Werktags.</div>
            </div>
          </div>

          {submitted ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.72)', marginBottom: 'var(--sp-4)' }}>Nachricht eingegangen</div>
                <p style={{ fontSize: 'var(--fs-xl)', fontWeight: 500, letterSpacing: '-0.015em', color: 'var(--cesa-bone)' }}>Wir melden uns innerhalb eines Werktags.</p>
              </div>
            </div>
          ) : (
            <form
              className="form-fields"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                setError('');
                const fd = new FormData(e.currentTarget);
                const payload = {
                  name: fd.get('name'),
                  firma: fd.get('firma'),
                  branche: fd.get('branche'),
                  telefon: fd.get('telefon'),
                  email: fd.get('email'),
                  website: fd.get('website'),
                  probleme: fd.getAll('problem'),
                  missedCalls: fd.get('missed-calls'),
                  paket: fd.get('paket'),
                  anmerkung: fd.get('anmerkung'),
                };
                try {
                  const res = await fetch('/api/kontakt', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                  });
                  if (res.ok) {
                    setSubmitted(true);
                  } else {
                    setError('Fehler beim Senden. Bitte versuche es erneut oder schreib uns direkt.');
                  }
                } catch {
                  setError('Netzwerkfehler. Bitte versuche es erneut.');
                } finally {
                  setLoading(false);
                }
              }}
              noValidate
            >
              <div className="field">
                <label>Name <span className="req">*</span></label>
                <input type="text" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label>Firma <span className="req">*</span></label>
                <input type="text" name="firma" required />
              </div>
              <div className="field">
                <label>Branche</label>
                <select name="branche">
                  <option value="">Bitte wählen</option>
                  <option>SHK – Sanitär, Heizung, Klima</option>
                  <option>Elektriker</option>
                  <option>Hausmeisterservice</option>
                  <option>Hausverwaltung</option>
                  <option>Sonstiges Handwerk</option>
                </select>
              </div>
              <div className="field">
                <label>Telefon <span className="req">*</span></label>
                <input type="tel" name="telefon" required autoComplete="tel" />
              </div>
              <div className="field">
                <label>E-Mail <span className="req">*</span></label>
                <input type="email" name="email" required autoComplete="email" />
              </div>
              <div className="field">
                <label>Aktuelle Website (falls vorhanden)</label>
                <input type="url" name="website" placeholder="https://..." />
              </div>
              <div className="field full">
                <label>Hauptproblem (Mehrfachauswahl)</label>
                <div className="checks">
                  {[
                    ['website-veraltet', 'Website veraltet'],
                    ['verpasste-anrufe', 'Verpasste Anrufe'],
                    ['anfragen-unstrukturiert', 'Anfragen unstrukturiert'],
                    ['buero-ueberlastet', 'Büro überlastet'],
                    ['zu-wenig-anfragen', 'Zu wenig Anfragen insgesamt'],
                    ['notfall-routing', 'Notfall-Routing fehlt'],
                  ].map(([value, label]) => (
                    <label key={value} className="check">
                      <input type="checkbox" name="problem" value={value} />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>Geschätzt verpasste Anrufe / Woche</label>
                <input type="number" name="missed-calls" placeholder="z. B. 3" min={0} />
              </div>
              <div className="field">
                <label>Gewünschtes Paket</label>
                <select name="paket">
                  <option value="">Weiß ich noch nicht – bitte beraten</option>
                  <option>Website Launch</option>
                  <option>Digitale Rezeption</option>
                  <option>Digitale Rezeption Plus</option>
                  <option>Betriebs-Automation</option>
                </select>
              </div>
              <div className="field full">
                <label>Anmerkung (optional)</label>
                <textarea name="anmerkung" rows={3} placeholder="Was sollen wir vorab wissen?" />
              </div>
              <div className="full">
                <label className="check consent" style={{ alignItems: 'flex-start' }}>
                  <input type="checkbox" required style={{ marginTop: '3px' }} />
                  <span>Ich habe die <a href="datenschutz.html">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu. <span className="req">*</span></span>
                </label>
              </div>
              {error && (
                <div className="full" style={{ color: '#e55', fontSize: 'var(--fs-sm)', marginBottom: 'var(--sp-2)' }}>{error}</div>
              )}
              <div className="form-submit full">
                <span className="consent">Keine automatische Antwort – ein Mensch liest mit.</span>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Wird gesendet…' : <>Kostenlose Ersteinschätzung anfragen <span className="arr">→</span></>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
