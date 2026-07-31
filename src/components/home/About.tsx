import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@i18n/navigation";
import { brand, routes } from "@/config/site";
import Reveal from "../ui/Reveal";

export default function About() {
  const t = useTranslations("home.about");
  const credentials = t.raw("credentials") as string[];

  return (
    <section id="about" className="px-4 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[380px_minmax(0,1fr)] gap-12 items-start">
        {/* Portrait */}
        <Reveal className="mx-auto lg:mx-0">
          <div className="relative w-64 sm:w-80">
            <div
              className="absolute -inset-4 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2)_0%,transparent_70%)] blur-2xl"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={brand.photo}
                alt={brand.name}
                fill
                sizes="(max-width: 640px) 16rem, 20rem"
                className="object-cover object-top"
                priority={false}
              />
            </div>
            <div className="absolute -bottom-4 -end-4 px-4 py-2.5 rounded-xl bg-[#0b1220] border border-white/10 shadow-xl">
              <div className="text-sm font-semibold text-white">{brand.name}</div>
              <div className="text-[11px] text-cyan-300">{brand.tagline}</div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={0.1}>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-cyan-300 border border-cyan-400/25 rounded-full bg-cyan-400/10">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            {t("heading")}
          </h2>

          <div className="mt-6 space-y-4 text-slate-400 leading-relaxed">
            <p>{t("body_1")}</p>
            <p>{t("body_2")}</p>
            <p>{t("body_3")}</p>
          </div>

          <ul className="mt-7 grid sm:grid-cols-2 gap-2.5">
            {credentials.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-slate-300">
                <Check size={15} className="mt-0.5 shrink-0 text-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href={routes.book}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors"
          >
            {t("cta")}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
