import { useTranslations } from "next-intl";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

type Step = { step: string; title: string; duration: string; body: string };

export default function Process() {
  const t = useTranslations("home.process");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <li className="relative h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 card-hover">
                <span className="text-3xl font-bold text-white/10 tabular-nums">
                  {step.step}
                </span>
                <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
                <span className="mt-1.5 inline-block px-2.5 py-0.5 text-[11px] rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  {step.duration}
                </span>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
