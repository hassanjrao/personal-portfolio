import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { experience } from "@/config/profile";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

export default function Experience() {
  const t = useTranslations("home.experience");

  return (
    <section id="experience" className="px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <ol className="relative">
          {/* timeline spine */}
          <span
            aria-hidden="true"
            className="absolute start-[7px] top-2 bottom-2 w-px bg-slate-200"
          />

          {experience.map((role, i) => (
            <li key={`${role.company}-${role.title}`} className="relative ps-8 pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute start-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                  role.current
                    ? "border-violet-600 bg-violet-600"
                    : "border-slate-300 bg-white"
                }`}
              />

              <Reveal delay={Math.min(i, 3) * 0.06}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-slate-900">{role.title}</h3>
                  {role.current && (
                    <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {t("current")}
                    </span>
                  )}
                </div>
                <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm">
                  <span className="font-medium text-violet-700">{role.company}</span>
                  <span className="text-slate-300" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-slate-500 tabular-nums">{role.period}</span>
                </div>

                <p className="mt-3 text-slate-600 leading-relaxed">{role.summary}</p>

                <ul className="mt-4 space-y-2">
                  {role.achievements.map((a) => (
                    <li key={a} className="flex gap-2.5 text-sm text-slate-600">
                      <Check size={15} className="mt-0.5 shrink-0 text-violet-600" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {role.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] text-slate-500 bg-slate-50 border border-slate-200 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
