import { useTranslations } from "next-intl";
import {
  ShieldCheck,
  Quote,
  EyeOff,
  ScrollText,
  Server,
  KeyRound,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const icons = [ShieldCheck, Quote, EyeOff, ScrollText, Server, KeyRound];

type Item = { title: string; body: string };

export default function Security() {
  const t = useTranslations("home.security");
  const items = t.raw("items") as Item[];

  return (
    <section id="trust" className="px-4 py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="h-full p-6 rounded-2xl bg-white card-soft border border-slate-200 card-hover">
                  <span className="inline-flex w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 items-center justify-center text-emerald-700">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
