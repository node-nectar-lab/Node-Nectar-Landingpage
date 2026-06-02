import type { Metadata } from "next";
import "./globals.css";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

export const metadata: Metadata = {
  title: "NodeNectar — Digitale Werkzeuge für Handwerk und lokales Gewerbe",
  description: "Wir bauen Websites, strukturierte Anfrage-Systeme, Workflow-Automation und digitale Telefon-Annahme – modular zusammengestellt für Betriebe, die keinen IT-Mitarbeiter haben. In Werktagen statt Monaten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {children}
        <MobileFloatingCTA />
      </body>
    </html>
  );
}
