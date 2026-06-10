import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grants",
  description:
    "Research funding and grant activity of Xiting Zhuang at North Dakota State University.",
  alternates: { canonical: "/grants" },
};

export default function GrantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
