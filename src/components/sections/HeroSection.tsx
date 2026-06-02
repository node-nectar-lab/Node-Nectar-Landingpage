'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number, raf: number;
    const COUNT = 65, MAX_DIST = 200, SPEED = 0.22, DOT_R = 1.5;
    const RGB = '99,132,255';

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];

    function resize() {
      W = canvas!.offsetWidth; H = canvas!.offsetHeight;
      canvas!.width = W * devicePixelRatio; canvas!.height = H * devicePixelRatio;
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }
    function spawn() {
      nodes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * SPEED, vy: (Math.random() - 0.5) * SPEED
      }));
    }
    function draw() {
      ctx!.clearRect(0, 0, W, H);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.35;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(${RGB},${alpha})`;
            ctx!.lineWidth = 0.8;
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.stroke();
          }
        }
      }
      nodes.forEach(n => {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, DOT_R, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${RGB},0.7)`;
        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, DOT_R + 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${RGB},0.08)`;
        ctx!.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    function init() { resize(); spawn(); if (raf) cancelAnimationFrame(raf); draw(); }

    const onResize = () => { resize(); spawn(); };
    const onVisibility = () => { document.hidden ? cancelAnimationFrame(raf) : draw(); };

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    init();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <section className="hero no-rule">
      <div className="hero-bg-layer" />
      <div className="hero-overlay" />
      <div className="hero-canvas-wrap">
        <canvas ref={canvasRef} id="hero-canvas" />
      </div>

      <div className="hero-content container">
        <div className="grid">
          <div className="eyebrow">Digitales Studio für Handwerk &amp; lokales Gewerbe</div>
          <h1>
            Mehr Anfragen.<br />
            <em className="accent" style={{ fontStyle: 'normal' }}>Weniger Büroarbeit.</em><br />
            In 5 Werktagen aufgebaut.
          </h1>
          <p className="sub">
            Veraltete Website, unstrukturierte Anfragen, Anrufe ohne Reaktion – so verlieren Handwerker und Gewerbetreibende täglich Aufträge. Wir bauen das System dagegen: Website mit Conversion-Fokus, digitales Anfrage-Management und optionale Telefon-Automation. Modular. Done-for-you. Dauerhaft betreut.
          </p>
          <div className="ctas">
            <a href="#kontakt" className="btn btn-primary">Kostenloses Erstgespräch <span className="arr">→</span></a>
            <a href="#module" className="btn btn-ghost">Was wir bauen <span className="arr">→</span></a>
          </div>
        </div>
      </div>

      <div className="hero-strip">
        <div className="container">
          <div className="row">
            <div className="cell">
              <div className="k">Tempo</div>
              <div className="v">In wenigen Werktagen geliefert</div>
            </div>
            <div className="cell">
              <div className="k">Modell</div>
              <div className="v">Einmalig aufgebaut. Ab 49 €/Monat betrieben.</div>
            </div>
            <div className="cell">
              <div className="k">Leistung</div>
              <div className="v">Von der Website bis zur vollständigen Betriebsautomation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
