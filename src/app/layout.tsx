import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yellow — Studio de contenu & stratégie digitale à Paris",
  description:
    "Yellow est un studio parisien spécialisé en production de contenu, direction artistique et stratégie digitale (SEO, Google Ads) pour les marques mode, beauté et lifestyle.",
  openGraph: {
    title: "Yellow — Studio de contenu & stratégie digitale",
    description:
      "Production de contenu, direction artistique et stratégie d'acquisition (SEO, Google Ads) pour les marques qui veulent capter l'attention et convertir.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
