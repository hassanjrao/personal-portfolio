import type { MetadataRoute } from "next";
import { posts } from "@/config/posts";
import { projects } from "@/config/projects";
import { routes } from "@/config/site";
import { localeUrl } from "@/lib/seo";

const LOCALE = "en";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: localeUrl(routes.home, LOCALE),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...projects.map((project) => ({
      url: localeUrl(`${routes.projects}/${project.slug}`, LOCALE),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: localeUrl(routes.blog, LOCALE),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: localeUrl(`${routes.blog}/${post.slug}`, LOCALE),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
