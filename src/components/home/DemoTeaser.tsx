import { useTranslations } from "next-intl";
import { ArrowRight, MessagesSquare, PhoneCall, PackageSearch } from "lucide-react";
import { Link } from "@i18n/navigation";
import { demoIds, routes } from "@/config/site";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const icons = [MessagesSquare, PackageSearch, PhoneCall];

export default function DemoTeaser() {
  const t = useTranslations("home.demo");
  const td = useTranslations("demo.scenarios");

  return (
    <section className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="grid md:grid-cols-3 gap-5">
          {demoIds.map((id, i) => {
            const Icon = icons[i] ?? MessagesSquare;
            return (
              <Reveal key={id} delay={i * 0.08}>
                <Link
                  href={routes.demo}
                  className="group h-full flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/10 card-hover"
                >
                  <span className="inline-flex w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 items-center justify-center text-cyan-300">
                    <Icon size={19} />
                  </span>
                  <span className="mt-4 text-[11px] uppercase tracking-wider text-slate-500">
                    {td(`${id}.channel`)}
                  </span>
                  <h3 className="mt-1 font-semibold text-white leading-snug">
                    {td(`${id}.title`)}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed flex-1">
                    {td(`${id}.blurb`)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-cyan-300 group-hover:gap-2.5 transition-all">
                    {t("cta")}
                    <ArrowRight size={15} className="rtl:rotate-180" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
