import { useTranslations } from "next-intl";
import Reveal from "../ui/Reveal";

type Stat = { value: string; label: string };

export default function StatsBar() {
  const t = useTranslations("home.stats");
  const items = t.raw("items") as Stat[];

  return (
    <section aria-label={t("heading")} className="px-4 border-y border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200 rtl:divide-x-reverse">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.07} className="px-5 py-8 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-teal-700">{item.value}</div>
            <div className="mt-1.5 text-xs text-slate-500 leading-snug">{item.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
