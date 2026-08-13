import { setRequestLocale } from "next-intl/server";

import SectionRail from "@/components/home/SectionRail";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import TechStack from "@/components/home/TechStack";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Reviews from "@/components/home/Reviews";
import Contact from "@/components/home/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SectionRail />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Reviews />
      <Contact />
    </>
  );
}
