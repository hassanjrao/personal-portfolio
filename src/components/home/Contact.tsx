import { useTranslations } from "next-intl";
import SectionHeader from "../ui/SectionHeader";
import SocialLinks from "../ui/SocialLinks";
import ContactForm from "./ContactForm";

export default function Contact() {
  const t = useTranslations("home.contact");

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_110%,rgba(124,58,237,0.10)_0%,transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="p-7 sm:p-9 rounded-2xl bg-white border border-slate-200 card-soft">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {t("channels_heading")}
          </h3>
          <div className="mt-4">
            <SocialLinks variant="cards" />
          </div>

          <div className="mt-9 pt-8 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900">{t("form_heading")}</h3>
            <p className="mt-1.5 mb-6 text-sm text-slate-500">{t("response_note")}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
