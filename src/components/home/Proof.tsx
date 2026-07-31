import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@i18n/navigation";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

type CaseStudy = {
  tag: string;
  title: string;
  challenge: string;
  approach: string;
  result: string;
  stack: string[];
  link_label?: string;
};

const CASE_STUDY_LINKS: Record<number, string> = {
  1: "/blog/ai-phone-agent-saas-laravel-twilio-deepgram",
};

export default function Proof() {
  const t = useTranslations("home.proof");
  const items = t.raw("items") as CaseStudy[];

  const rows: [keyof CaseStudy, string][] = [
    ["challenge", "Challenge"],
    ["approach", "Approach"],
    ["result", "Result"],
  ];

  return (
    <section id="proof" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="h-full flex flex-col p-7 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase tracking-wider text-teal-700">
                  {item.tag}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <dl className="mt-5 space-y-4 flex-1">
                  {rows.map(([key, label]) => (
                    <div key={key} className="grid sm:grid-cols-[88px_1fr] gap-1 sm:gap-4">
                      <dt className="text-[11px] uppercase tracking-wider text-slate-500 pt-0.5">
                        {label}
                      </dt>
                      <dd className="text-sm text-slate-600 leading-relaxed">
                        {item[key] as string}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap gap-2">
                  {item.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.link_label && CASE_STUDY_LINKS[i] && (
                  <Link
                    href={CASE_STUDY_LINKS[i]}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-teal-700 hover:gap-2.5 transition-all"
                  >
                    {item.link_label}
                    <ArrowRight size={15} className="rtl:rotate-180" />
                  </Link>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
