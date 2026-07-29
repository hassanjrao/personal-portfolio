import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ArrowRight, Check, Target, Clock, Plug } from "lucide-react";

import { Link } from "@i18n/navigation";
import { routes, serviceIds, siteUrl } from "@/config/site";
import { localeAlternates, localeUrl } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { serviceIcons } from "@/components/ui/serviceIcons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.services" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates(routes.services, locale),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: localeUrl(routes.services, locale),
    },
  };
}

function ServiceList() {
  const t = useTranslations("services");
  const ts = useTranslations("services.items");

  return (
    <div className="space-y-6">
      {serviceIds.map((id, i) => {
        const Icon = serviceIcons[id];
        const bullets = ts.raw(`${id}.bullets`) as string[];

        return (
          <Reveal key={id} delay={0.04}>
            <article
              id={id}
              className="grid lg:grid-cols-[1fr_340px] gap-8 p-7 sm:p-9 rounded-2xl bg-white/[0.03] border border-white/10"
            >
              <div>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 inline-flex w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 items-center justify-center text-cyan-300">
                    <Icon size={21} />
                  </span>
                  <div>
                    <span className="text-xs text-slate-600 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                      {ts(`${id}.title`)}
                    </h2>
                    <p className="mt-1 text-amber-300/85">{ts(`${id}.tagline`)}</p>
                  </div>
                </div>

                <p className="mt-5 text-slate-300 leading-relaxed">{ts(`${id}.body`)}</p>

                <h3 className="mt-7 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {t("what_it_does")}
                </h3>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2.5">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-slate-400">
                      <Check size={15} className="mt-0.5 shrink-0 text-cyan-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome panel */}
              <aside className="flex flex-col gap-5 p-6 rounded-xl bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-400/20">
                <div>
                  <h3 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                    <Target size={13} />
                    {t("outcome")}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {ts(`${id}.outcome`)}
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    <Clock size={13} />
                    {t("timeline")}
                  </h3>
                  <p className="mt-1.5 text-sm text-white font-medium">
                    {ts(`${id}.timeline`)}
                  </p>
                </div>
                <Link
                  href={routes.book}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:gap-2.5 transition-all"
                >
                  {t("cta")}
                  <ArrowRight size={15} className="rtl:rotate-180" />
                </Link>
              </aside>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

function Integrations() {
  const t = useTranslations("services.integrations");
  const items = t.raw("items") as string[];

  return (
    <section className="px-4 py-20 bg-white/[0.02] border-y border-white/8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-flex w-12 h-12 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-cyan-300">
          <Plug size={21} />
        </span>
        <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-white text-balance">
          {t("heading")}
        </h2>
        <p className="mt-4 text-slate-400 leading-relaxed">{t("body")}</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
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

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "services" });
  const ts = await getTranslations({ locale, namespace: "services.items" });

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("heading"),
    itemListElement: serviceIds.map((id, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: ts(`${id}.title`),
        description: ts(`${id}.body`),
        url: `${localeUrl(routes.services, locale)}#${id}`,
        provider: { "@id": `${siteUrl}/#person` },
        serviceType: ts(`${id}.title`),
        areaServed: ["Oman", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain"],
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        badge={t("badge")}
        heading={t("heading")}
        subheading={t("subheading")}
      />
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <ServiceList />
        </div>
      </section>
      <Integrations />
      <CtaBand />
    </>
  );
}
