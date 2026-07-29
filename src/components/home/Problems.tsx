import { useTranslations } from "next-intl";
import {
  PhoneIncoming,
  FileStack,
  Timer,
  BrainCog,
  TriangleAlert,
  MoonStar,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const icons = [PhoneIncoming, FileStack, Timer, BrainCog, TriangleAlert, MoonStar];

type Problem = { title: string; body: string };

export default function Problems() {
  const t = useTranslations("home.problems");
  const items = t.raw("items") as Problem[];

  return (
    <section className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i] ?? PhoneIncoming;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 card-hover">
                  <span className="inline-flex w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 items-center justify-center text-amber-300">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
