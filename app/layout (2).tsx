import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E.D.O Concepts | Premium Bespoke Menswear",
  description:
    "Modern bespoke menswear designed for gentlemen who appreciate craftsmanship, confidence, and timeless elegance. Kaftan, Native Wear, Senator Wear, Aso-Ebi, and more — Benin City.",
  metadataBase: new URL("https://edoconcepts.com"),
  openGraph: {
    title: "E.D.O Concepts | Premium Bespoke Menswear",
    description:
      "Crafted beyond fashion — precision cuts and flawless finishing for those who demand excellence.",
    images: ["/brand/hero-kaftan.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <body className="bg-void font-body text-ivory">
        <SmoothScrollProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
