"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const COOKIE_NAME = "nodenectar_cookie_consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setShow(true);
    }
  }, []);

  function accept() {
    Cookies.set(COOKIE_NAME, "true", { expires: 365 });
    setShow(false);
  }

  function decline() {
    Cookies.set(COOKIE_NAME, "false", { expires: 365 });
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "stretch",
        background: "#1A1816",
        borderTop: "1px solid #3D3934",
        fontFamily: "'Helvetica', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Text */}
      <div style={{ flex: 1, padding: "20px 24px", maxWidth: "700px" }}>
        <p style={{ margin: "0 0 6px 0", fontSize: "14px", color: "#FAF7F2", fontWeight: 700 }}>
          Cookies &amp; Datenschutz
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#B8B2A7", lineHeight: 1.55 }}>
          Wir verwenden Cookies, um diese Website zu betreiben und zu verbessern.
          Mit „Alle akzeptieren" stimmst du dem Einsatz aller Cookies zu.{" "}
          <Link
            href="/datenschutz"
            style={{ color: "#6B9FD4", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Datenschutzerklärung
          </Link>
        </p>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "20px 24px",
          justifyContent: "center",
          borderLeft: "1px solid #3D3934",
        }}
      >
        <button
          onClick={accept}
          style={{
            background: "#1A4F8A",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          Alle akzeptieren
        </button>
        <button
          onClick={decline}
          style={{
            background: "transparent",
            color: "#B8B2A7",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            padding: "10px 20px",
            border: "1px solid #3D3934",
            cursor: "pointer",
            fontFamily: "'JetBrains Mono', monospace",
            whiteSpace: "nowrap",
          }}
        >
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
