"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, PackageSearch, Database, ShieldCheck, UserRoundCheck } from "lucide-react";
import { Link } from "@i18n/navigation";
import { routes } from "@/config/site";

const flowIcons = [PackageSearch, Database, ShieldCheck, UserRoundCheck];

export default function Hero() {
  const t = useTranslations("home.hero");
  const flow = t.raw("flow") as string[];

  return (
    <section id="top" className="relative flex items-center overflow-hidden pt-28 pb-20 lg:min-h-[92vh] lg:pt-32">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_40%,rgba(13,148,136,0.10)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(245,158,11,0.09)_0%,transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
          {/* Copy */}
          <div>
            <motion.span
              className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-teal-700 border border-teal-200 rounded-full bg-teal-50"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("eyebrow")}
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.08] text-balance"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <span className="gradient-text">{t("heading")}</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              {t("subheading")}
            </motion.p>

            <motion.p
              className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xl border-s-2 border-teal-300 ps-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              {t("credibility")}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              <Link
                href={routes.book}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-colors"
              >
                {t("cta_primary")}
                <ArrowRight size={17} className="rtl:rotate-180" />
              </Link>
              <Link
                href={routes.services}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-slate-300 text-slate-900 font-medium hover:border-teal-400 hover:bg-teal-50 transition-colors"
              >
                {t("cta_secondary")}
              </Link>
            </motion.div>
          </div>

          {/* Shipment-flow diagram (replaces the old portrait) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_12px_rgba(15,36,56,0.06),0_24px_48px_rgba(15,36,56,0.08)]">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs uppercase tracking-wider text-slate-600">
                  {t("flow_title")}
                </span>
              </div>

              <ol className="relative mt-5 space-y-5">
                {/* Connecting route line */}
                <svg
                  className="absolute start-[19px] top-3 bottom-3 w-px overflow-visible"
                  aria-hidden="true"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    stroke="rgba(13,148,136,0.55)"
                    strokeWidth="2"
                    className="route-dash"
                  />
                </svg>

                {flow.map((step, i) => {
                  const Icon = flowIcons[i] ?? PackageSearch;
                  return (
                    <motion.li
                      key={step}
                      className="relative flex items-center gap-4"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.14 }}
                    >
                      <span className="relative z-10 shrink-0 w-10 h-10 rounded-xl bg-white border border-teal-200 flex items-center justify-center text-teal-700">
                        <Icon size={17} />
                      </span>
                      <span className="text-sm text-slate-600 leading-snug">{step}</span>
                    </motion.li>
                  );
                })}
              </ol>
            </div>

            <div
              className="absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.12)_0%,transparent_70%)] blur-2xl"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
