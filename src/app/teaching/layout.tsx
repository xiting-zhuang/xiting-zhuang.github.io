import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching experience and guest lectures in agricultural economics and applied data analysis.",
  alternates: { canonical: "/teaching" },
};

export default function TeachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
