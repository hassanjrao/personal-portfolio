import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html lang="en" dir="ltr">
      <body className="bg-[#0a0a0a] text-white antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
