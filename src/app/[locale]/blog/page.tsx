import type { Metadata } from "next";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { Link } from "@i18n/navigation";
import { posts } from "@/config/posts";
import { routes } from "@/config/site";
import { localeAlternates, localeUrl } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.blog" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates(routes.blog, locale),
    openGraph: {
      type: "website",
      title: t("title"),
      description: t("description"),
      url: localeUrl(routes.blog, locale),
    },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });
  const format = await getFormatter({ locale });

  return (
    <>
      <PageHero
        badge={t("badge")}
        heading={t("heading")}
        subheading={t("subheading")}
      />

      <section className="px-4 py-20 min-h-[40vh]">
        <div className="max-w-3xl mx-auto space-y-6">
          {posts.length === 0 && (
            <p className="text-center text-slate-500">{t("empty")}</p>
          )}

          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`${routes.blog}/${post.slug}`}
              className="group block p-7 sm:p-8 rounded-2xl bg-white card-soft border border-slate-200 card-hover"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} />
                  {format.dateTime(new Date(post.date), {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} />
                  {post.readTime} {t("read_time")}
                </span>
              </div>

              <h2 className="mt-3 text-xl font-semibold text-slate-900 leading-snug group-hover:text-violet-700 transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-violet-700 group-hover:gap-2.5 transition-all">
                {t("read_more")}
                <ArrowRight size={15} className="rtl:rotate-180" />
              </span>
            </Link>
          ))}
        </div>
      </section>

    </>
  );
}
