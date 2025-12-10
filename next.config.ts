import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      { source: "/book.html", destination: "/book", permanent: true },
      { source: "/book-2.html", destination: "/book-2", permanent: true },
      { source: "/book-3.html", destination: "/book-3", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/roe1.html", destination: "/roe1", permanent: true },
      { source: "/roe2.html", destination: "/roe2", permanent: true },
      { source: "/roe3.html", destination: "/roe3", permanent: true },
      { source: "/roe4.html", destination: "/roe4", permanent: true },
      { source: "/roe5.html", destination: "/roe5", permanent: true },
      { source: "/roe6.html", destination: "/roe6", permanent: true },
      { source: "/roe7.html", destination: "/roe7", permanent: true },
      { source: "/roe8.html", destination: "/roe8", permanent: true },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/forum",
        destination: "http://localhost:3333/forum/",
      },
      {
        source: "/forum/:path*",
        destination: "http://localhost:3333/forum/:path*",
      },
    ];
  },
};

export default nextConfig;
