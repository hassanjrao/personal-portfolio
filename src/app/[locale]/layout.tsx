import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../globals.css";
import { routing } from "@i18n/routing";
import { brand, contact, siteUrl } from "@/config/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { localeAlternates, localeUrl } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });

  return {
    title: {
      default: `${t("title")} | ${brand.name}`,
      template: `%s | ${brand.name}`,
    },
    description: t("description"),
    metadataBase: new URL(siteUrl),
    alternates: localeAlternates("/", locale),
    openGraph: {
      type: "website",
      url: localeUrl("/", locale),
      title: `${t("title")} | ${brand.name}`,
      description: t("description"),
      siteName: brand.name,
      locale: locale === "ar" ? "ar" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} | ${brand.name}`,
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: brand.name,
      url: siteUrl,
      email: contact.email,
      description:
        "A studio building production AI systems for logistics companies: shipment-tracking agents, real-time AI voice agents for dispatch and booking, document extraction for bills of lading and customs paperwork, quoting copilots and operations knowledge assistants.",
      sameAs: [contact.linkedin],
      knowsAbout: [
        "AI for logistics",
        "Freight forwarding automation",
        "Third-party logistics (3PL)",
        "Last-mile delivery operations",
        "Warehouse management systems",
        "Transport management systems",
        "RAG pipelines",
        "LLM engineering",
        "AI voice agents",
        "Document data extraction",
        "Customs documentation automation",
        "Supply chain automation",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: `${brand.name} — AI Solutions for Logistics Companies`,
      url: siteUrl,
      description:
        "AI agents and automation for freight forwarders, 3PLs, courier networks and warehousing operations. Shipment tracking agents, AI voice receptionists for dispatch, logistics document AI, quoting copilots, operations knowledge copilots and delay intelligence.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: [
        "United Arab Emirates",
        "Saudi Arabia",
        "Qatar",
        "Kuwait",
        "Bahrain",
        "Oman",
        "United Kingdom",
        "United States",
      ],
      availableLanguage: ["en", "ar"],
      serviceType: [
        "AI Track and Trace Agent",
        "AI Voice Agent for Dispatch and Booking",
        "Logistics Document AI",
        "Freight Quoting Copilot",
        "Operations Knowledge Copilot",
        "Exception and Delay Intelligence",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${brand.name} — AI for Logistics`,
      description:
        "AI solutions for logistics companies, built by engineers who work inside logistics operations.",
      inLanguage: ["en", "ar"],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className="bg-[#060a12] text-[#e8eef7] antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <NextIntlClientProvider>
          <Navbar />
          <main id="content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
