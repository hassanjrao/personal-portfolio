import type { MetadataRoute } from "next";

const baseUrl = "https://hassanrao.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/software-developer-oman`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ai-phone-agent-saas-laravel-twilio-deepgram`,
      lastModified: new Date("2026-07-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
