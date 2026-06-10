import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed publications, working papers, and policy briefs by Xiting Zhuang on agricultural trade, supply chain disruptions, and applied economics.",
  alternates: { canonical: "/publications" },
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
