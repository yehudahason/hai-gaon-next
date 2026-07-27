import "./globals.css";
import Links from "../components/Links";
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import SunMoon from "@/components/SunMoon";
import { Noto_Sans_Hebrew } from "next/font/google";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  weight: ["400", "500", "700"],
  variable: "--font-hebrew",
  display: "swap",
});

export const metadata: Metadata = {
  title: "סדר פתרון חלומות",
  description: "ספר פתרון חלומות לרב האי גאון",
  keywords: [
    "dreams",
    "hai gaon",
    "פתרון חלומות",
    "pitron-halomoṭ",
    "רב האי גאון",
  ],
  authors: [{ name: "Yehuda Hason" }],
  icons: {
    icon: "/favicon2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={notoSansHebrew.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/img/Milky_wayc.jpg"
          type="image/jpeg"
          fetchPriority="high"
        />
      </head>

      <body>
        <main>
          <Links />
          {children}

          <SunMoon />
          <Footer />
          {/* Nagishli Accessibility Scripts */}
        </main>
        <GoogleAnalytics gaId="G-PL9W9RRMZL" />
        <Script id="nagishli-config" strategy="lazyOnload">
          {`
    window.nl_color = "yellow"; 
    window.nl_compact = "1"; 
    window.nl_dir = "/nl-files/";
  `}
        </Script>
        <Script
          src="/nagishli.js?v=2.3"
          strategy="lazyOnload"
          id="nagishli-script"
        />
      </body>
    </html>
  );
}
