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
      locale: "en_US",
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
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: brand.name,
      alternateName: "Hassan Javaid Rao",
      url: siteUrl,
      image: `${siteUrl}${brand.photo}`,
      jobTitle: brand.role,
      description:
        "AI engineer building production AI systems for moving companies, courier networks and freight forwarders: instant lead-response agents, shipment-tracking agents, real-time AI voice agents for bookings and dispatch, estimate and quoting copilots, document extraction and operations knowledge assistants.",
      sameAs: [contact.linkedin],
      knowsAbout: [
        "AI for moving companies",
        "AI for logistics",
        "Moving company lead response",
        "Removals and relocation operations",
        "Lead response automation",
        "Last-mile delivery operations",
        "Freight forwarding automation",
        "Third-party logistics (3PL)",
        "Warehouse management systems",
        "Transport management systems",
        "RAG pipelines",
        "LLM engineering",
        "AI voice agents",
        "Document data extraction",
        "Supply chain automation",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: `${brand.name} — AI Solutions for Moving & Logistics Companies`,
      url: siteUrl,
      description:
        "AI agents and automation for moving companies, courier networks, freight forwarders and warehousing operations. Instant lead-response agents, shipment tracking agents, AI voice receptionists for bookings and dispatch, estimate copilots, document AI, operations knowledge copilots and delay intelligence.",
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: { "@type": "Country", name: "United States" },
      availableLanguage: ["en"],
      serviceType: [
        "Instant Lead Response Agent",
        "AI Track and Trace Agent",
        "AI Voice Agent for Dispatch and Booking",
        "Logistics Document AI",
        "Estimate and Quote Copilot",
        "Operations Knowledge Copilot",
        "Exception and Delay Intelligence",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${brand.name} — ${brand.tagline}`,
      description:
        "AI solutions for moving and logistics companies, built by an engineer who works inside logistics operations.",
      inLanguage: "en",
      author: { "@id": `${siteUrl}/#person` },
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

  return (
    <html lang={locale} dir="ltr">
      <body className="bg-white text-slate-800 antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <NextIntlClientProvider>
          <Navbar />
          <main id="content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
