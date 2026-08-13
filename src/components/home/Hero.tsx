"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Download } from "lucide-react";
import { brand } from "@/config/site";
import { stats } from "@/config/profile";
import SocialLinks from "../ui/SocialLinks";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 lg:pt-32">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(124,58,237,0.12)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <motion.span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-medium text-violet-700 border border-violet-200 rounded-full bg-violet-50"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {t("eyebrow")}
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05] text-slate-900"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              {t("name")}
            </motion.h1>

            <motion.p
              className="mt-3 text-lg sm:text-xl font-semibold"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <span className="gradient-text">{t("title")}</span>
            </motion.p>

            <motion.p
              className="mt-1.5 text-sm text-slate-500"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {t("specialism")}
            </motion.p>

            <motion.p
              className="mt-5 text-slate-600 leading-relaxed max-w-xl text-[17px]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors"
              >
                {t("cta_work")}
                <ArrowDown size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-slate-300 text-slate-900 font-medium hover:border-violet-400 hover:bg-violet-50 transition-colors"
              >
                {t("cta_contact")}
                <ArrowRight size={17} />
              </a>
              <a
                href="/resume.pdf"
                download="Hassan-Javaid-Rao-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-slate-600 font-medium hover:text-violet-700 hover:bg-violet-50 transition-colors"
              >
                <Download size={17} />
                {t("cta_resume")}
              </a>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="block mb-2.5 text-xs uppercase tracking-wider text-slate-400">
                {t("socials_label")}
              </span>
              <SocialLinks />
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            className="order-first lg:order-last mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative w-48 sm:w-64 lg:w-full">
              <div
                className="absolute -inset-5 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18)_0%,transparent_70%)] blur-2xl"
                aria-hidden="true"
              />
              <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-[0_4px_12px_rgba(15,36,56,0.06),0_24px_48px_rgba(15,36,56,0.10)]">
                <Image
                  src={brand.photo}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 1024px) 16rem, 20rem"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Headline figures */}
        <motion.dl
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-slate-200 border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-5 py-6 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl sm:text-3xl font-bold text-violet-700">
                  {s.value}
                </span>
                <span className="mt-1 block text-xs text-slate-500 leading-snug">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
