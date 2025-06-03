// /src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configuration des polices
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées de l'application
export const metadata = {
  title: "TrendScope - Analyse des Tendances Sociales en Temps Réel",
  description: "Découvrez les tendances virales sur tous les réseaux sociaux grâce à notre IA de pointe. Analyse en temps réel de TikTok, Instagram, Twitter et plus.",
  keywords: "tendances sociales, analyse IA, réseaux sociaux, viral, TikTok, Instagram, Twitter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}