import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

import { routes } from "@/config/site";
import { localeAlternates, localeUrl } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import CtaBand from "@/components/ui/CtaBand";
import ReviewsGallery from "@/components/reviews/ReviewsGallery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.reviews" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates(routes.reviews, locale),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: localeUrl(routes.reviews, locale),
    },
  };
}

function WhyPanel() {
  const t = useTranslations("reviews");
  const items = t.raw("why_items") as { title: string; body: string }[];

  return (
    <section className="px-4 py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeader heading={t("why_heading")} />
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <article className="h-full p-6 rounded-2xl bg-white card-soft border border-slate-200 card-hover">
                <h3 className="flex items-start gap-2.5 font-semibold text-slate-900">
                  <Check size={17} className="mt-1 shrink-0 text-teal-600" />
                  {item.title}
                </h3>
                <p className="mt-2.5 ps-7 text-sm text-slate-600 leading-relaxed">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "reviews" });

  return (
    <>
      <PageHero
        badge={t("badge")}
        heading={t("heading")}
        subheading={t("subheading")}
      />
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <ReviewsGallery />
        </div>
      </section>
      <WhyPanel />
      <CtaBand />
    </>
  );
}
