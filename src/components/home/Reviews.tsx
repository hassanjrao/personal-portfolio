import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { contact } from "@/config/site";
import SectionHeader from "../ui/SectionHeader";
import TestimonialGrid from "../reviews/TestimonialGrid";
import { FiverrIcon, LinkedInIcon } from "../ui/icons";

export default function Reviews() {
  const t = useTranslations("home.reviews");

  return (
    <section id="reviews" className="px-4 py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <TestimonialGrid />

        <p className="mt-4 text-center text-xs text-slate-400">{t("quotes_note")}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={contact.linkedinRecommendations}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            {t("linkedin_cta")}
            <ExternalLink size={13} className="opacity-60" />
          </a>
          <a
            href={contact.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
          >
            <FiverrIcon className="w-4 h-4" />
            {t("fiverr_cta")}
            <ExternalLink size={13} className="opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
