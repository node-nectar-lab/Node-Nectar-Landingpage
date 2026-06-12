'use client';

import { useState, useCallback } from 'react';

const fmt = (n: number) =>
  new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));

type Tab = 'calls' | 'backoffice';


export default function RechnerSection() {
  const [tab, setTab] = useState<Tab>('calls');

  // Tab 1: Verpasste Anrufe
  const [missed, setMissed] = useState(3);
  const [close, setClose] = useState(40);
  const [order, setOrder] = useState(450);

  // Tab 2: Backoffice
  const [boHours, setBoHours] = useState(12);
  const [boAuto, setBoAuto] = useState(40);
  const [boRate, setBoRate] = useState(60);

  // Berechnungen Tab 1
  const monthly = missed * 4.33 * (close / 100) * order;
  const yearly = monthly * 12;

  // Berechnungen Tab 2
  const hSaved = boHours * (boAuto / 100) * 4.33;
  const savings = hSaved * boRate;

  const FlashNum = useCallback(({ value }: { value: string }) => (
    <span className="num-update">{value}</span>
  ), []);

  return (
    <section id="rechner">
      <div className="container">
        <div className="section-head">
          <span className="label">Der Rechner</span>
          <h2>Was kosten Sie die Anrufe, die nie angekommen sind?</h2>
          <p className="lede">Drei Eingaben. Eine Schätzung. Keine Umsatzgarantie. Die Defaults sind bewusst konservativ – die tatsächlichen Verluste sind für viele Betriebe deutlich höher.</p>
        </div>

        <div className="roi-tabs">
          {(['calls', 'backoffice'] as Tab[]).map((t) => (
            <button
              key={t}
              className={`roi-tab${tab === t ? ' active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t === 'calls' ? 'Verpasste Anrufe' : 'Backoffice-Automation'}
            </button>
          ))}
        </div>

        {/* Tab 1: Verpasste Anrufe */}
        <div className={`roi-panel${tab === 'calls' ? ' active' : ''}`}>
          <div className="roi-form">
            <div className="roi-field">
              <label>Verpasste Anrufe pro Woche <span className="val">{missed}</span></label>
              <input type="range" min={1} max={20} value={missed} step={1} onChange={e => setMissed(+e.target.value)} />
              <div className="scale"><span>1</span><span>5</span><span>10</span><span>15</span><span>20</span></div>
            </div>
            <div className="roi-field">
              <label>Abschlussquote bei Rückruf <span className="val">{close}&thinsp;%</span></label>
              <input type="range" min={10} max={100} value={close} step={10} onChange={e => setClose(+e.target.value)} />
              <div className="scale"><span>10 %</span><span>30 %</span><span>50 %</span><span>70 %</span><span>100 %</span></div>
            </div>
            <div className="roi-field">
              <label>Durchschnittlicher Auftragswert <span className="val">{fmt(order)}&thinsp;€</span></label>
              <input type="range" min={100} max={2500} value={order} step={100} onChange={e => setOrder(+e.target.value)} />
              <div className="scale"><span>100 €</span><span>700 €</span><span>1.300 €</span><span>1.900 €</span><span>2.500 €</span></div>
            </div>
          </div>
          <div className="roi-result">
            <div className="rlabel">Geschätzter Umsatzverlust</div>
            <div className="ramount"><FlashNum value={fmt(monthly)} /><span className="curr">€</span></div>
            <div className="rper">Pro Monat · Schätzung</div>
            <div className="yearly">
              <span className="k">Hochgerechnet auf 12 Monate</span>
              <span className="v"><FlashNum value={fmt(yearly)} />&thinsp;€</span>
            </div>
          </div>
        </div>

        {/* Tab 2: Backoffice */}
        <div className={`roi-panel${tab === 'backoffice' ? ' active' : ''}`}>
          <div className="roi-form">
            <div className="roi-field">
              <label>Bürostunden pro Woche <span className="val">{boHours}&thinsp;h</span></label>
              <input type="range" min={2} max={30} value={boHours} step={1} onChange={e => setBoHours(+e.target.value)} />
              <div className="scale"><span>2 h</span><span>10 h</span><span>20 h</span><span>30 h</span></div>
            </div>
            <div className="roi-field">
              <label>Automatisierbar <span className="val">{boAuto}&thinsp;%</span></label>
              <input type="range" min={10} max={80} value={boAuto} step={10} onChange={e => setBoAuto(+e.target.value)} />
              <div className="scale"><span>10 %</span><span>40 %</span><span>80 %</span></div>
            </div>
            <div className="roi-field">
              <label>Stundensatz (intern) <span className="val">{boRate}&thinsp;€</span></label>
              <input type="range" min={20} max={120} value={boRate} step={10} onChange={e => setBoRate(+e.target.value)} />
              <div className="scale"><span>20 €</span><span>60 €</span><span>120 €</span></div>
            </div>
          </div>
          <div className="roi-result">
            <div className="rlabel">Eingesparte Stunden / Monat</div>
            <div className="ramount"><FlashNum value={fmt(hSaved)} /><span className="curr" style={{ fontSize: '0.45em', verticalAlign: 'top', lineHeight: '1.4' }}>h</span></div>
            <div className="rper">Geschätzt · 4,33 Wochen</div>
            <div className="yearly">
              <span className="k">Ersparnisse / Monat</span>
              <span className="v"><FlashNum value={fmt(savings)} />&thinsp;€</span>
            </div>
            <div className="yearly">
              <span className="k">Hochgerechnet auf 12 Monate</span>
              <span className="v"><FlashNum value={fmt(savings * 12)} />&thinsp;€</span>
            </div>
          </div>
        </div>

        <div className="roi-disclaimer">
          Schätzung auf Basis Ihrer Eingaben. Keine Umsatz- oder Einspargarantie. Die Berechnungen setzen konstante Werte voraus – tatsächliche Ergebnisse variieren je nach Betrieb, Branche und Marktlage.
        </div>
        <div className="roi-cta">
          <span style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>Zahlen passen? Dann lohnt sich ein Gespräch.</span>
          <a href="#kontakt" className="btn btn-primary">Kostenloses Erstgespräch <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}
