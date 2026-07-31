import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";

import { Link } from "@i18n/navigation";
import { routes } from "@/config/site";
import { localeAlternates, localeUrl } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import AgentDemo from "@/components/demo/AgentDemo";
import LeadResponseRace from "@/components/demo/LeadResponseRace";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.demo" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates(routes.demo, locale),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: localeUrl(routes.demo, locale),
    },
  };
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "demo" });

  return (
    <>
      <PageHero
        badge={t("badge")}
        heading={t("heading")}
        subheading={t("subheading")}
      />

      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <AgentDemo />
        </div>
      </section>

      <LeadResponseRace />

      <section className="px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-balance">
            {t("cta_heading")}
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">{t("cta_body")}</p>
          <Link
            href={routes.book}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-colors"
          >
            {t("cta_heading")}
            <ArrowRight size={17} className="rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}
