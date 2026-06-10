import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience, education, invited talks, honors, and academic service of Xiting Zhuang.",
  alternates: { canonical: "/experiences" },
};

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
