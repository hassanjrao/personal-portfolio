"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Globe, Smartphone, TrendingUp } from "lucide-react";

const floatingIcons = [
  { Icon: Code2, top: "20%", left: "8%", delay: 0 },
  { Icon: Globe, top: "15%", right: "10%", delay: 0.5 },
  { Icon: Smartphone, bottom: "30%", left: "6%", delay: 1 },
  { Icon: TrendingUp, bottom: "25%", right: "8%", delay: 1.5 },
];

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-indigo-400"
          style={pos as React.CSSProperties}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={20} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10">
            {t("greeting")} 👋
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="gradient-text">{t("name")}</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-gray-400 mb-4 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("title")}
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#portfolio"
            className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            {t("cta_work")}
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/15 hover:border-indigo-500/50 text-white rounded-lg font-medium transition-all duration-200 hover:bg-indigo-500/10"
          >
            {t("cta_contact")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-indigo-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
