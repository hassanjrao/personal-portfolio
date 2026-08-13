import { useTranslations } from "next-intl";
import { Link } from "@i18n/navigation";
import { brand, routes, sections } from "@/config/site";
import { projects } from "@/config/projects";
import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tRail = useTranslations("home.rail.stops");
  const year = new Date().getFullYear();

  // Skip the hero anchor; it isn't a destination anyone navigates to.
  const anchors = sections.filter((id) => id !== "top");

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold text-slate-900">
              {brand.name}
              <span className="text-violet-600">.</span>
            </div>
            <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-500">
              {brand.tagline}
            </div>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">{t("tagline")}</p>
          </div>

          {/* Sections */}
          <nav aria-label={t("nav_heading")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              {t("nav_heading")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {anchors.map((id) => (
                <li key={id}>
                  <a
                    href={`${routes.home}#${id}`}
                    className="text-sm text-slate-500 hover:text-violet-700 transition-colors"
                  >
                    {tRail(id)}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href={routes.blog}
                  className="text-sm text-slate-500 hover:text-violet-700 transition-colors"
                >
                  {tNav("blog")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Work */}
          <nav aria-label={t("work_heading")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              {t("work_heading")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`${routes.projects}/${project.slug}`}
                    className="text-sm text-slate-500 hover:text-violet-700 transition-colors"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              {t("contact_heading")}
            </h2>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500">
          <p>
            © {year} {brand.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
