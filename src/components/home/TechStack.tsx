import { useTranslations } from "next-intl";
import { stackGroups } from "@/config/profile";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

export default function TechStack() {
  const t = useTranslations("home.stack");

  return (
    <section id="stack" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackGroups.map((group, i) => (
            <Reveal key={group.label} delay={Math.min(i, 5) * 0.05}>
              <article className="h-full p-6 rounded-2xl bg-white border border-slate-200 card-hover">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="px-2.5 py-1 text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-lg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
