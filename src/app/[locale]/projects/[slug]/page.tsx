import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, ExternalLink, FileText, Lightbulb } from "lucide-react";

import { Link } from "@i18n/navigation";
import { routing } from "@i18n/routing";
import { getProject, projects } from "@/config/projects";
import { routes, siteUrl } from "@/config/site";
import { localeAlternates, localeUrl } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const path = `${routes.projects}/${slug}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: localeAlternates(path, locale),
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      url: localeUrl(path, locale),
    },
  };
}

function Prose({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-700">
        {heading}
      </h2>
      <div className="mt-3 space-y-4 text-slate-600 leading-relaxed text-[17px]">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "project" });

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: localeUrl(`${routes.projects}/${slug}`, locale),
    author: { "@id": `${siteUrl}/#person` },
    keywords: project.stack.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero badge={project.tagline} heading={project.title} subheading={project.summary}>
        <div className="flex flex-wrap justify-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition-colors"
            >
              <ExternalLink size={15} />
              {t("live")}
            </a>
          )}
          {project.articleSlug && (
            <Link
              href={`${routes.blog}/${project.articleSlug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm font-medium hover:border-violet-400 hover:bg-violet-50 transition-colors"
            >
              <FileText size={15} />
              {t("article")}
            </Link>
          )}
        </div>
      </PageHero>

      <article className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href={routes.home + "#projects"}
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-violet-700 transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            {t("back")}
          </Link>

          {/* Fact strip */}
          <dl className="grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 mb-12">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-white px-5 py-5 text-center">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block text-xl font-bold text-violet-700">{m.value}</span>
                  <span className="mt-1 block text-xs text-slate-500">{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="grid sm:grid-cols-2 gap-6 mb-12 text-sm">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t("role_label")}
              </span>
              <span className="mt-1 block text-slate-700">{project.role}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t("period_label")}
              </span>
              <span className="mt-1 block text-slate-700">{project.period}</span>
            </div>
          </div>

          <div className="space-y-12">
            <Reveal>
              <Prose heading={t("challenge")} paragraphs={project.challenge} />
            </Reveal>
            <Reveal>
              <Prose heading={t("approach")} paragraphs={project.approach} />
            </Reveal>
            <Reveal>
              <Prose heading={t("result")} paragraphs={project.result} />
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                  {t("highlights")}
                </h2>
                <div className="mt-4 space-y-4">
                  {project.highlights.map((h) => (
                    <div
                      key={h.title}
                      className="p-5 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <h3 className="flex items-start gap-2.5 font-semibold text-slate-900">
                        <Lightbulb size={17} className="mt-0.5 shrink-0 text-amber-500" />
                        {h.title}
                      </h3>
                      <p className="mt-2 ps-7 text-sm text-slate-600 leading-relaxed">
                        {h.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                {t("stack_label")}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="px-3 py-1.5 text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-lg"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Next project */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t("next")}
            </span>
            <Link
              href={`${routes.projects}/${next.slug}`}
              className="group mt-3 flex items-center justify-between gap-4 p-5 rounded-xl bg-white border border-slate-200 card-hover"
            >
              <span>
                <span className="block font-semibold text-slate-900">{next.title}</span>
                <span className="mt-0.5 block text-sm text-violet-700">{next.tagline}</span>
              </span>
              <ArrowRight
                size={18}
                className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </article>

      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-balance">
            {t("cta_heading")}
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">{t("cta_body")}</p>
          <Link
            href={routes.home + "#contact"}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors"
          >
            {t("cta")}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
