import { useTranslations } from "next-intl";
import { Boxes, Ship, Truck, Warehouse, Check, type LucideIcon } from "lucide-react";
import { segmentIds, type SegmentId } from "@/config/site";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const icons: Record<SegmentId, LucideIcon> = {
  moving: Boxes,
  forwarding: Ship,
  lastmile: Truck,
  warehousing: Warehouse,
};

export default function Segments() {
  const t = useTranslations("home.segments");
  const ti = useTranslations("home.segments.items");

  return (
    <section id="segments" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segmentIds.map((id, i) => {
            const Icon = icons[id];
            const wins = ti.raw(`${id}.wins`) as string[];
            return (
              <Reveal key={id} delay={i * 0.08}>
                <article className="h-full flex flex-col p-7 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 card-hover">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-violet-50 border border-violet-200 items-center justify-center text-violet-700">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {ti(`${id}.title`)}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {ti(`${id}.body`)}
                  </p>
                  <ul className="mt-5 pt-5 border-t border-slate-200 space-y-2.5">
                    {wins.map((win) => (
                      <li key={win} className="flex gap-2.5 text-sm text-slate-600">
                        <Check size={15} className="mt-0.5 shrink-0 text-violet-600" />
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
