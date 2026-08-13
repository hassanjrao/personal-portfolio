import { useTranslations } from "next-intl";
import { Check, GraduationCap, Trophy } from "lucide-react";
import { awards, education, experience } from "@/config/profile";
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
            <li key={role.company} className="relative ps-8 pb-12 last:pb-0">
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
                  <h3 className="text-lg font-semibold text-slate-900">{role.company}</h3>
                  {role.location && (
                    <span className="text-sm text-slate-500">{role.location}</span>
                  )}
                  {role.current && (
                    <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {t("current")}
                    </span>
                  )}
                  <span className="ms-auto text-sm text-slate-500 tabular-nums">
                    {role.period}
                  </span>
                </div>

                {role.summary && (
                  <p className="mt-2 text-sm text-slate-500 italic leading-relaxed">
                    {role.summary}
                  </p>
                )}

                {/* Positions held at this company */}
                <div className="mt-5 space-y-6">
                  {role.positions.map((position) => (
                    <div key={position.title}>
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <h4 className="font-semibold text-violet-700">{position.title}</h4>
                        <span className="text-xs text-slate-500 tabular-nums">
                          {position.period}
                        </span>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {position.achievements.map((a) => (
                          <li key={a} className="flex gap-2.5 text-sm text-slate-600">
                            <Check size={15} className="mt-0.5 shrink-0 text-violet-600" />
                            <span className="leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {role.stack && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {role.stack.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] text-slate-500 bg-slate-50 border border-slate-200 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Education & awards */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 card-soft">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <GraduationCap size={15} className="text-violet-600" />
                {t("education_heading")}
              </h3>
              <p className="mt-4 font-semibold text-slate-900">{education.degree}</p>
              <p className="mt-0.5 text-sm text-violet-700">{education.school}</p>
              <p className="mt-0.5 text-xs text-slate-500 tabular-nums">
                {education.period}
              </p>
              <ul className="mt-4 space-y-2">
                {education.details.map((d) => (
                  <li key={d} className="text-sm text-slate-600 leading-relaxed">
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 card-soft">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <Trophy size={15} className="text-amber-500" />
                {t("awards_heading")}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {awards.map((a) => (
                  <li key={a} className="flex gap-2.5 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 shrink-0 text-violet-600" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
