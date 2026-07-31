import { useTranslations } from "next-intl";
import { ArrowRight, CalendarClock } from "lucide-react";
import { Link } from "@i18n/navigation";
import { contact, routes } from "@/config/site";

export default function CtaBand() {
  const t = useTranslations("home.cta");

  return (
    <section id="book" className="relative px-4 py-24 overflow-hidden border-y border-slate-200 bg-slate-50">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(124,58,237,0.11)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
          {t("heading")}
        </h2>
        <p className="mt-5 text-slate-600 leading-relaxed">{t("body")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={routes.book}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors"
          >
            {t("primary")}
            <ArrowRight size={17} className="rtl:rotate-180" />
          </Link>
          <a
            href={contact.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-900 font-medium hover:border-violet-400 hover:bg-violet-50 transition-colors"
          >
            <CalendarClock size={17} />
            {t("secondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
