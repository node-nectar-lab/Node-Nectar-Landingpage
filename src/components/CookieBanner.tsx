"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";

export default function CookieBanner() {
  return (
    <CookieConsent
      cookieName="nodenectar_cookie_consent"
      location="bottom"
      buttonText="Alle akzeptieren"
      declineButtonText="Nur notwendige"
      enableDeclineButton
      expires={365}
      style={{
        background: "#1A1816",
        borderTop: "1px solid #3D3934",
        padding: "0",
        alignItems: "stretch",
        fontFamily: "'Helvetica', 'Helvetica Neue', Arial, sans-serif",
      }}
      contentStyle={{
        margin: "0",
        padding: "20px 24px",
        flex: "1",
        maxWidth: "680px",
      }}
      buttonWrapperClasses="nn-cookie-btns"
      buttonStyle={{
        background: "#1A4F8A",
        color: "#ffffff",
        fontSize: "13px",
        fontWeight: "600",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        padding: "10px 20px",
        margin: "0",
        border: "none",
        cursor: "pointer",
        fontFamily: "'Helvetica', 'Helvetica Neue', Arial, sans-serif",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#B8B2A7",
        fontSize: "13px",
        fontWeight: "400",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        padding: "10px 20px",
        margin: "0",
        border: "1px solid #3D3934",
        cursor: "pointer",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <p style={{ margin: "0 0 6px 0", fontSize: "14px", color: "#FAF7F2", fontWeight: "600" }}>
        Cookies & Datenschutz
      </p>
      <p style={{ margin: "0", fontSize: "13px", color: "#B8B2A7", lineHeight: "1.55" }}>
        Wir verwenden Cookies, um diese Website zu betreiben und zu verbessern. Mit „Alle akzeptieren" stimmst du dem Einsatz aller Cookies zu.{" "}
        <Link
          href="/datenschutz"
          style={{ color: "#6B9FD4", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          Datenschutzerklärung
        </Link>
      </p>
    </CookieConsent>
  );
}
