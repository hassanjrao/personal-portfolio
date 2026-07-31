import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";

import { Link } from "@i18n/navigation";
import { brand, routes } from "@/config/site";
import { localeAlternates, localeUrl } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.about" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates(routes.about, locale),
    openGraph: {
      type: "profile",
      title: t("title"),
      description: t("description"),
      url: localeUrl(routes.about, locale),
      images: [brand.photo],
    },
  };
}

function Intro() {
  const t = useTranslations("about");
  const facts = t.raw("facts") as string[];

  return (
    <section className="px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[360px_minmax(0,1fr)] gap-12 items-start">
        <Reveal className="mx-auto lg:mx-0 lg:sticky lg:top-24">
          <div className="relative w-64 sm:w-80">
            <div
              className="absolute -inset-4 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2)_0%,transparent_70%)] blur-2xl"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={brand.photo}
                alt={brand.name}
                fill
                sizes="(max-width: 640px) 16rem, 20rem"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -end-4 px-4 py-2.5 rounded-xl bg-[#0b1220] border border-white/10 shadow-xl">
              <div className="text-sm font-semibold text-white">{brand.name}</div>
              <div className="text-[11px] text-cyan-300">{brand.tagline}</div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              {t("facts_heading")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {facts.map((fact) => (
                <li key={fact} className="flex gap-2.5 text-sm text-slate-400">
                  <Check size={15} className="mt-0.5 shrink-0 text-cyan-400" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-slate-300 leading-relaxed text-[17px]">
            <p>{t("body_1")}</p>
            <p>{t("body_2")}</p>
            <p>{t("body_3")}</p>
            <p>{t("body_4")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Principles() {
  const t = useTranslations("about");
  const items = t.raw("principles") as { title: string; body: string }[];

  return (
    <section className="px-4 py-24 bg-white/[0.02] border-y border-white/8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader heading={t("principles_heading")} />
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <article className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 card-hover">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const t = useTranslations("about");
  const items = t.raw("stack") as string[];

  return (
    <section className="px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-white">{t("stack_heading")}</h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
          {items.map((item) => (
            <li
              key={item}
              className="px-4 py-2 text-sm text-slate-300 bg-white/5 border border-white/10 rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <>
      <PageHero
        badge={t("badge")}
        heading={t("heading")}
        subheading={t("subheading")}
      />

      <Intro />
      <Principles />
      <Stack />

      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-balance">
            {t("cta_heading")}
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">{t("cta_body")}</p>
          <Link
            href={routes.book}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors"
          >
            {t("cta")}
            <ArrowRight size={17} className="rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}
