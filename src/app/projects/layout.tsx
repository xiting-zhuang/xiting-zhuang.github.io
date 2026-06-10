import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research highlights and ongoing projects on supply chain disruptions, trade policy, and the social consequences of economic shocks.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
