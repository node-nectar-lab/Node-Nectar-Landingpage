"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { Shield } from "lucide-react";

const COOKIE_NAME = "nodenectar_cookie_consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setShow(true);
      // kleine Verzögerung damit der Slide-In sichtbar ist
      const t = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss(value: "true" | "false") {
    setVisible(false);
    setTimeout(() => {
      Cookies.set(COOKIE_NAME, value, { expires: 365 });
      setShow(false);
    }, 320);
  }

  if (!show) return null;

  return (
    <>
      <style>{`
        .nn-cookie-root {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 9999;
          transform: translateY(100%);
          transition: transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .nn-cookie-root.visible {
          transform: translateY(0);
        }
        .nn-cookie-inner {
          display: flex;
          align-items: center;
          gap: 0;
          background: #FFFFFF;
          border-top: 2px solid #1A4F8A;
          box-shadow: 0 -4px 32px rgba(26, 24, 22, 0.10), 0 -1px 0 rgba(26,24,22,0.04);
          font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
        }
        .nn-cookie-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          align-self: stretch;
          background: #1A4F8A;
          flex-shrink: 0;
        }
        .nn-cookie-body {
          flex: 1;
          padding: 18px 24px;
        }
        .nn-cookie-title {
          margin: 0 0 4px 0;
          font-size: 13px;
          font-weight: 700;
          color: #1A1816;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .nn-cookie-text {
          margin: 0;
          font-size: 13px;
          color: #6B6862;
          line-height: 1.55;
        }
        .nn-cookie-link {
          color: #1A4F8A;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .nn-cookie-link:hover { color: #153e6e; }
        .nn-cookie-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 18px 24px;
          flex-shrink: 0;
        }
        .nn-btn-accept {
          background: #1A4F8A;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 10px 22px;
          border: 2px solid #1A4F8A;
          cursor: pointer;
          font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
          white-space: nowrap;
          transition: background 180ms, border-color 180ms;
        }
        .nn-btn-accept:hover { background: #153e6e; border-color: #153e6e; }
        .nn-btn-decline {
          background: transparent;
          color: #6B6862;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 10px 22px;
          border: 2px solid #DDD7CC;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          white-space: nowrap;
          transition: border-color 180ms, color 180ms;
        }
        .nn-btn-decline:hover { border-color: #B8B2A7; color: #3D3934; }

        @media (max-width: 640px) {
          .nn-cookie-icon { display: none; }
          .nn-cookie-inner { flex-direction: column; align-items: stretch; }
          .nn-cookie-body { padding: 16px 20px 12px; }
          .nn-cookie-actions { padding: 0 20px 16px; flex-direction: column; gap: 8px; }
          .nn-btn-accept, .nn-btn-decline { width: 100%; text-align: center; }
        }
      `}</style>

      <div className={`nn-cookie-root${visible ? " visible" : ""}`}>
        <div className="nn-cookie-inner">

          {/* Blauer Icon-Streifen */}
          <div className="nn-cookie-icon">
            <Shield size={22} color="#ffffff" strokeWidth={1.75} />
          </div>

          {/* Text */}
          <div className="nn-cookie-body">
            <p className="nn-cookie-title">Datenschutz & Cookies</p>
            <p className="nn-cookie-text">
              Wir verwenden Cookies, um diese Website zu betreiben und zu verbessern.
              Mit „Akzeptieren" stimmst du dem Einsatz aller Cookies zu.{" "}
              <Link href="/datenschutz" className="nn-cookie-link">
                Datenschutzerklärung
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="nn-cookie-actions">
            <button className="nn-btn-accept" onClick={() => dismiss("true")}>
              Akzeptieren
            </button>
            <button className="nn-btn-decline" onClick={() => dismiss("false")}>
              Nur notwendige
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
