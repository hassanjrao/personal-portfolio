import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "hero" });
  const baseUrl = "https://hassanrao.com";

  return {
    title: {
      default: `${t("name")} — ${t("title")}`,
      template: `%s | ${t("name")}`,
    },
    description: t("subtitle"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      type: "website",
      url: baseUrl,
      title: `${t("name")} — ${t("title")}`,
      description: t("subtitle"),
      siteName: t("name"),
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("name")} — ${t("title")}`,
      description: t("subtitle"),
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
      "@id": "https://hassanrao.com/#person",
      name: "Hassan Rao",
      alternateName: "Hassan Javaid Rao",
      url: "https://hassanrao.com",
      email: "hassanjrao@gmail.com",
      jobTitle: "Senior Software Engineer",
      description:
        "Senior Full Stack Software Engineer based in Muscat, Oman with 4+ years of GCC enterprise experience. Specialises in Laravel, Next.js, React, Node.js, NestJS, AWS, and multi-tenant SaaS platforms.",
      image: "https://hassanrao.com/hassan.png",
      sameAs: [
        "https://github.com/hassanjrao",
        "https://linkedin.com/in/hassanjrao",
        "https://www.fiverr.com/hassanjavaidrao",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Muscat",
        addressCountry: "OM",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Sukkur IBA University",
      },
      knowsAbout: [
        "Laravel",
        "Next.js",
        "React.js",
        "Node.js",
        "NestJS",
        "Vue.js",
        "Livewire",
        "AWS",
        "MySQL",
        "PHP",
        "Microservices",
        "SaaS Development",
        "REST API Design",
        "OAuth 2.0",
        "Google Gemini AI",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://hassanrao.com/#service",
      name: "Hassan Rao — Software Development Services",
      url: "https://hassanrao.com",
      description:
        "Full stack software development services in Oman. Laravel, React, Next.js, Node.js, NestJS, AWS. Available for freelance projects in Muscat and remotely across the GCC.",
      provider: { "@id": "https://hassanrao.com/#person" },
      areaServed: ["Oman", "UAE", "Saudi Arabia", "United Kingdom", "United States"],
      serviceType: [
        "Web Application Development",
        "REST API Development",
        "SaaS Platform Development",
        "Cloud Architecture",
        "AI Workflow Automation",
        "Mobile App Backend Development",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "308",
        bestRating: "5",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://hassanrao.com/#website",
      url: "https://hassanrao.com",
      name: "Hassan Rao",
      description: "Portfolio of Hassan Rao — Senior Software Engineer based in Muscat, Oman.",
      author: { "@id": "https://hassanrao.com/#person" },
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html lang="en" dir="ltr">
      <body className="bg-[#0a0a0a] text-white antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
