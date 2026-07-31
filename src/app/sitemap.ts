import type { MetadataRoute } from "next";
import { routing } from "@i18n/routing";
import { posts } from "@/config/posts";
import { routes } from "@/config/site";
import { localeUrl } from "@/lib/seo";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: Date;
};

const pages: Entry[] = [
  { path: routes.home, changeFrequency: "monthly", priority: 1 },
  { path: routes.services, changeFrequency: "monthly", priority: 0.9 },
  { path: routes.demo, changeFrequency: "monthly", priority: 0.9 },
  { path: routes.book, changeFrequency: "monthly", priority: 0.9 },
  { path: routes.about, changeFrequency: "monthly", priority: 0.8 },
  { path: routes.reviews, changeFrequency: "monthly", priority: 0.7 },
  { path: routes.blog, changeFrequency: "weekly", priority: 0.7 },
  ...posts.map(
    (post): Entry => ({
      path: `${routes.blog}/${post.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: new Date(post.date),
    })
  ),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: localeUrl(page.path, locale),
      lastModified: page.lastModified ?? now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, localeUrl(page.path, l)])
        ),
      },
    }))
  );
}
