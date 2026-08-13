import { useTranslations } from "next-intl";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "@i18n/navigation";
import { projects } from "@/config/projects";
import { routes } from "@/config/site";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

export default function Projects() {
  const t = useTranslations("home.projects");

  return (
    <section id="projects" className="px-4 py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i, 3) * 0.07}>
              <article className="h-full flex flex-col p-7 rounded-2xl bg-white border border-slate-200 card-hover">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-violet-700">{project.tagline}</p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-400 tabular-nums">
                    {project.period}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {project.summary}
                </p>

                {/* Outcome tiles */}
                <dl className="mt-5 grid grid-cols-3 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center"
                    >
                      <dt className="sr-only">{m.label}</dt>
                      <dd>
                        <span className="block text-base font-bold text-slate-900">
                          {m.value}
                        </span>
                        <span className="mt-0.5 block text-[10px] text-slate-500 leading-tight">
                          {m.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] text-slate-500 bg-slate-50 border border-slate-200 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span className="px-2 py-0.5 text-[11px] text-slate-400">
                      +{project.stack.length - 6}
                    </span>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-5">
                  <Link
                    href={`${routes.projects}/${project.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700"
                  >
                    {t("cta")}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      <ExternalLink size={14} />
                      {t("live")}
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
