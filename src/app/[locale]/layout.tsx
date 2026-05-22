import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../../i18n/routing";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const baseUrl = "https://hassanrao.dev";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en")) notFound();

  const messages = await getMessages();

  return (
    <html lang="en" dir="ltr">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
