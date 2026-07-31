import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Check, Mail, Calendar, ExternalLink } from "lucide-react";

import { contact, routes } from "@/config/site";
import { localeAlternates, localeUrl } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import BookingForm from "@/components/book/BookingForm";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.book" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates(routes.book, locale),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: localeUrl(routes.book, locale),
    },
  };
}

function ExpectPanel() {
  const t = useTranslations("book");
  const items = t.raw("expect_items") as string[];

  return (
    <div className="p-7 rounded-2xl bg-gradient-to-b from-violet-50 to-white border border-violet-200">
      <h2 className="font-semibold text-slate-900">{t("expect_heading")}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
            <Check size={16} className="mt-0.5 shrink-0 text-violet-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 pt-5 border-t border-slate-200 text-xs text-slate-500">
        {t("expect_note")}
      </p>
    </div>
  );
}

function Channels() {
  const t = useTranslations("book");
  const tc = useTranslations("common");

  const channels = [
    {
      label: tc("cta_email"),
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail size={18} />,
      hover: "hover:border-violet-400 hover:bg-violet-50",
    },
    ...contact.whatsapp.map((w) => ({
      label: `WhatsApp · ${w.region}`,
      value: w.label,
      href: w.href,
      icon: <WhatsAppIcon className="w-[18px] h-[18px]" />,
      hover: "hover:border-green-400 hover:bg-green-50",
    })),
    {
      label: tc("cta_linkedin"),
      value: "LinkedIn",
      href: contact.linkedin,
      icon: <LinkedInIcon className="w-[18px] h-[18px]" />,
      hover: "hover:border-blue-400 hover:bg-blue-50",
    },
    {
      label: tc("cta_calendly"),
      value: "Calendly",
      href: contact.calendly,
      icon: <Calendar size={18} />,
      hover: "hover:border-violet-400 hover:bg-violet-50",
    },
  ];

  return (
    <div className="p-7 rounded-2xl bg-white card-soft border border-slate-200">
      <h2 className="font-semibold text-slate-900">{t("channels_heading")}</h2>
      <p className="mt-1.5 text-sm text-slate-500">{t("channels_body")}</p>
      <div className="mt-5 grid sm:grid-cols-2 gap-3">
        {channels.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target={c.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 transition-colors ${c.hover}`}
          >
            <span className="text-slate-600">{c.icon}</span>
            <span className="min-w-0">
              <span className="block text-xs text-slate-500">{c.label}</span>
              <span className="block text-sm text-slate-900 truncate" dir="ltr">
                {c.value}
              </span>
            </span>
          </a>
        ))}
      </div>
      <p className="mt-5 text-xs text-slate-500">{t("response_note")}</p>
    </div>
  );
}

function CalendlyEmbed() {
  const t = useTranslations("book");

  // Rendered as a plain iframe so no third-party script runs on the page.
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    background_color: "0b1220",
    text_color: "e8eef7",
    primary_color: "22d3ee",
  });
  const src = `${contact.calendly}?${params.toString()}`;

  return (
    <div className="p-7 rounded-2xl bg-white card-soft border border-slate-200">
      <h2 className="font-semibold text-slate-900">{t("calendly_heading")}</h2>
      <p className="mt-1.5 text-sm text-slate-500">{t("calendly_body")}</p>
      <div className="mt-5 rounded-xl overflow-hidden border border-slate-200 bg-white">
        <iframe
          src={src}
          title={t("calendly_heading")}
          className="w-full h-[680px] border-0"
          loading="lazy"
        />
      </div>
      <a
        href={contact.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm text-violet-700 hover:gap-2.5 transition-all"
      >
        <ExternalLink size={14} />
        {t("calendly_fallback")}
      </a>
    </div>
  );
}

export default async function BookACallPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "book" });

  return (
    <>
      <PageHero
        badge={t("badge")}
        heading={t("heading")}
        subheading={t("subheading")}
      />

      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 items-start">
          <div className="space-y-8">
            <CalendlyEmbed />

            <div className="p-7 rounded-2xl bg-white card-soft border border-slate-200">
              <h2 className="font-semibold text-slate-900">{t("form_heading")}</h2>
              <p className="mt-1.5 mb-6 text-sm text-slate-500">{t("form_body")}</p>
              <BookingForm />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <ExpectPanel />
            <Channels />
          </aside>
        </div>
      </section>
    </>
  );
}
