import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

export default function About() {
  const t = useTranslations("home.about");
  const facts = t.raw("facts") as string[];

  return (
    <section id="about" className="px-4 py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader badge={t("badge")} heading={t("heading")} />

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <Reveal>
            <div className="space-y-4 text-slate-600 leading-relaxed text-[17px]">
              <p>{t("body_1")}</p>
              <p>{t("body_2")}</p>
              <p>{t("body_3")}</p>
              <p>{t("body_4")}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 card-soft">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t("facts_heading")}
              </h3>
              <ul className="mt-4 space-y-3">
                {facts.map((fact) => (
                  <li key={fact} className="flex gap-2.5 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 shrink-0 text-violet-600" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
