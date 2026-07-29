import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@i18n/navigation";
import { primaryWhatsApp, routes } from "@/config/site";
import { WhatsAppIcon } from "./icons";

export default function CtaBand() {
  const t = useTranslations("home.cta");

  return (
    <section className="relative px-4 py-24 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(34,211,238,0.16)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
          {t("heading")}
        </h2>
        <p className="mt-5 text-slate-400 leading-relaxed">{t("body")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={routes.book}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors"
          >
            {t("primary")}
            <ArrowRight size={17} className="rtl:rotate-180" />
          </Link>
          <a
            href={primaryWhatsApp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-white font-medium hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors"
          >
            <WhatsAppIcon className="w-[18px] h-[18px]" />
            {t("secondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
