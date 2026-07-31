import { useTranslations } from "next-intl";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

type Step = { step: string; title: string; duration: string; body: string };

export default function Process() {
  const t = useTranslations("home.process");
  const steps = t.raw("steps") as Step[];

  return (
    <section id="process" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <li className="relative h-full p-6 rounded-2xl bg-white card-soft border border-slate-200 card-hover">
                <span className="text-3xl font-bold text-slate-200 tabular-nums">
                  {step.step}
                </span>
                <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
                <span className="mt-1.5 inline-block px-2.5 py-0.5 text-[11px] rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                  {step.duration}
                </span>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
