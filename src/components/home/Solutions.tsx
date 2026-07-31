import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@i18n/navigation";
import { routes, serviceIds } from "@/config/site";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { serviceIcons } from "../ui/serviceIcons";

export default function Solutions() {
  const t = useTranslations("home.solutions");
  const ts = useTranslations("services.items");

  return (
    <section id="services" className="px-4 py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceIds.map((id, i) => {
            const Icon = serviceIcons[id];
            return (
              <Reveal key={id} delay={i * 0.06}>
                <Link
                  href={`${routes.services}#${id}`}
                  className="group h-full flex flex-col p-6 rounded-2xl bg-white card-soft border border-slate-200 card-hover"
                >
                  <span className="inline-flex w-11 h-11 rounded-xl bg-violet-50 border border-violet-200 items-center justify-center text-violet-700">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{ts(`${id}.title`)}</h3>
                  <p className="mt-1 text-sm text-amber-700">{ts(`${id}.tagline`)}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                    {ts(`${id}.body`)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-violet-700 group-hover:gap-2.5 transition-all">
                    {ts(`${id}.timeline`)}
                    <ArrowRight size={15} className="rtl:rotate-180" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={routes.services}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-900 font-medium hover:border-violet-400 hover:bg-violet-50 transition-colors"
          >
            {t("cta")}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
