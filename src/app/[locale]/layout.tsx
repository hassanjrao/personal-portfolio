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
      email: contact.email,
      image: `${siteUrl}${brand.photo}`,
      jobTitle: brand.role,
      description:
        "AI-focused Senior Software Engineer with 5+ years of professional experience, including 4+ years building GCC enterprise logistics systems. Specialises in applied LLM engineering: multi-agent pipelines, RAG systems, grounded AI assistants and real-time AI voice agents, on top of multi-tenant SaaS and scalable AWS architecture.",
      sameAs: [contact.linkedin, contact.fiverr],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Sukkur IBA University",
      },
      knowsAbout: [
        "Applied LLM engineering",
        "Multi-agent orchestration",
        "LangGraph",
        "RAG pipelines",
        "Vector search (pgvector)",
        "Document AI",
        "AI voice agents",
        "Prompt engineering and grounding",
        "Hallucination mitigation",
        "LLM evaluation",
        "Software engineering",
        "Laravel",
        "PHP",
        "Next.js",
        "React",
        "Vue.js",
        "Node.js",
        "NestJS",
        "Python",
        "FastAPI",
        "AWS",
        "Microservices",
        "Multi-tenant SaaS",
        "REST API design",
        "OAuth 2.0",
        "PostgreSQL",
        "MySQL",
        "Redis",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${brand.name} — ${brand.role}`,
      description:
        "Portfolio of Hassan Rao, Senior Software Engineer and AI Engineer — selected work, case studies, tech stack and client reviews.",
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
