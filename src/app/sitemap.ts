import { MetadataRoute } from "next";
import { sitemapUrls } from "seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapUrls.map(({ url, alternates }) => ({
    url,
    alternates: {
      languages: alternates,
    },
  }));
}
