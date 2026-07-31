import { useTranslations } from "next-intl";
import { Mail, Calendar } from "lucide-react";
import { Link } from "@i18n/navigation";
import { brand, contact, routes, serviceIds } from "@/config/site";
import { LinkedInIcon, WhatsAppIcon } from "../ui/icons";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tServices = useTranslations("services.items");
  const year = new Date().getFullYear();

  const pages = [
    { label: tNav("home"), href: routes.home },
    { label: tNav("services"), href: routes.services },
    { label: tNav("demo"), href: routes.demo },
    { label: tNav("reviews"), href: routes.reviews },
    { label: tNav("about"), href: routes.about },
    { label: tNav("blog"), href: routes.blog },
    { label: tNav("book"), href: routes.book },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-lg font-bold text-slate-900">
              {brand.name}
              <span className="text-violet-600">.</span>
            </div>
            <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-500">
              {brand.tagline}
            </div>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">{t("tagline")}</p>
          </div>

          {/* Pages */}
          <nav aria-label={t("nav_heading")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              {t("nav_heading")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-slate-500 hover:text-violet-700 transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label={t("services_heading")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              {t("services_heading")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceIds.map((id) => (
                <li key={id}>
                  <Link
                    href={`${routes.services}#${id}`}
                    className="text-sm text-slate-500 hover:text-violet-700 transition-colors"
                  >
                    {tServices(`${id}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              {t("contact_heading")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-violet-700 transition-colors"
                >
                  <Mail size={15} />
                  {contact.email}
                </a>
              </li>
              {contact.whatsapp.map((w) => (
                <li key={w.href}>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-green-600 transition-colors"
                  >
                    <WhatsAppIcon className="w-[15px] h-[15px]" />
                    <span dir="ltr">{w.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <LinkedInIcon className="w-[15px] h-[15px]" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contact.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-violet-700 transition-colors"
                >
                  <Calendar size={15} />
                  Calendly
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {year} {brand.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
