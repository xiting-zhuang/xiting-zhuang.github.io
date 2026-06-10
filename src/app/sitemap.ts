import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://xiting-zhuang.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/publications",
    "/projects",
    "/grants",
    "/teaching",
    "/experiences",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
