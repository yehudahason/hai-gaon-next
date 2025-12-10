import "./globals.css";
import Links from "../components/Links"; // adjust path
import type { Metadata } from "next";
import Script from "next/script";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PL9W9RRMZL"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-PL9W9RRMZL");
          `}
        </Script>

        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        {/* Navigation Component */}
        <Links />

        {/* Page Content */}
        {children}

        {/* Nagishli Scripts */}
        <Script id="nagishli-vars">
          {`
            window.nl_color = "yellow";
            window.nl_compact = "1";
            window.nl_dir = "/nl-files/";
          `}
        </Script>

        <Script src="/nagishli.js?v=2.3" defer />

        {/* Active Link Script */}
        <Script id="active-link">
          {`
            document.addEventListener("DOMContentLoaded", () => {
              const links = document.querySelectorAll("a");
              const current = window.location.pathname;

              links.forEach((link) => {
                if (link.getAttribute("href") === current) {
                  link.classList.add("active");
                }
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
