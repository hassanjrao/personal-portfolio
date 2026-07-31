import { getTranslations, setRequestLocale } from "next-intl/server";

import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import Problems from "@/components/home/Problems";
import Solutions from "@/components/home/Solutions";
import DemoTeaser from "@/components/home/DemoTeaser";
import Segments from "@/components/home/Segments";
import Proof from "@/components/home/Proof";
import RoiCalculator from "@/components/home/RoiCalculator";
import Process from "@/components/home/Process";
import Security from "@/components/home/Security";
import Faq from "@/components/home/Faq";
import CtaBand from "@/components/ui/CtaBand";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home.faq" });
  const faqItems = t.raw("items") as { q: string; a: string }[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <StatsBar />
      <Problems />
      <Solutions />
      <DemoTeaser />
      <Segments />
      <Proof />
      <RoiCalculator />
      <Process />
      <Security />
      <Faq />
      <CtaBand />
    </>
  );
}
