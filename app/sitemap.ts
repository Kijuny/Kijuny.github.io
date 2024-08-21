import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kijuny.github.io/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}