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

export const metadata: Metadata = {
  title: {
    default: "Xiting Zhuang",
    template: "%s | Xiting Zhuang",
  },
  description:
    "Research Assistant Professor at North Dakota State University. Research on global supply chain disruptions, agri-food trade, and sustainability.",
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
        <Header />
        <main className="pt-14 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
