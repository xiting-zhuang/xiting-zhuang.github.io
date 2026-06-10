import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://xiting-zhuang.github.io";
const siteDescription =
  "Research Assistant Professor at North Dakota State University. Research on global supply chain disruptions, agri-food trade, and sustainability.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xiting Zhuang",
    template: "%s | Xiting Zhuang",
  },
  description: siteDescription,
  authors: [{ name: "Xiting Zhuang", url: siteUrl }],
  keywords: [
    "Xiting Zhuang",
    "agricultural economics",
    "international trade",
    "supply chain disruptions",
    "trade policy",
    "causal inference",
    "North Dakota State University",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Xiting Zhuang",
    title: "Xiting Zhuang — Research Assistant Professor, NDSU",
    description: siteDescription,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 630,
        height: 630,
        alt: "Xiting Zhuang",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Xiting Zhuang — Research Assistant Professor, NDSU",
    description: siteDescription,
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Xiting Zhuang",
  jobTitle: "Research Assistant Professor",
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "North Dakota State University",
  },
  url: siteUrl,
  image: `${siteUrl}/images/og-image.jpg`,
  email: "mailto:xiting.zhuang@ndsu.edu",
  sameAs: [
    "https://scholar.google.com/citations?user=7DWbsPUAAAAJ",
    "https://orcid.org/0009-0005-4852-6903",
    "https://www.linkedin.com/in/xiting-zhuang",
    "https://github.com/xiting-zhuang",
  ],
  knowsAbout: [
    "Agricultural Economics",
    "International Trade",
    "Supply Chain Disruptions",
    "Trade Policy",
    "Causal Inference",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg-primary text-text-primary antialiased noise`}
      >
        {/* Runs before first paint: saved choice wins, otherwise follow the OS. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.className=t}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="pt-14 min-h-screen">{children}</main>
        <Footer />
        {/* Privacy-friendly analytics (no cookies). Requires the
            "xitingzhuang" site code to be registered at goatcounter.com. */}
        <script
          data-goatcounter="https://xitingzhuang.goatcounter.com/count"
          async
          src="https://gc.zgo.at/count.js"
        />
      </body>
    </html>
  );
}
