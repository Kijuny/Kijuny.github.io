import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const isDev = process.env.NODE_ENV === "development";
  return {
    rules: {
      userAgent: "*",
      disallow: isDev ? "/" : "",
    },
    sitemap: "https://kijuny.github.io/sitemap.xml",
    host: "https://kijuny.github.io",
  };
}