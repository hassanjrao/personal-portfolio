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

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/hassanjrao",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hassanjrao",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/hassanjavaidrao",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.09c-.258 0-.5.07-.707.194V9.389c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v6.199h2v-3.398c0-.33.27-.6.6-.6s.6.27.6.6v3.398h2v-3.504zM14.3 9.388c-.55 0-1 .45-1 1v6.2h2v-6.2c0-.55-.45-1-1-1zm0-2.7c-.66 0-1.2.54-1.2 1.2s.54 1.2 1.2 1.2 1.2-.54 1.2-1.2-.54-1.2-1.2-1.2zm-3.996 2.7H9.21c-.55 0-1 .45-1 1v6.2h2v-2.4h1.093v2.4h2v-6.2c0-.55-.45-1-1-1zm-.902 2.9v1.5H9.21v-1.5h1.192zm-6.4 3.3c-.33 0-.6-.27-.6-.6v-3.4h1.198v-1.9H3.504V8.19h-2v7.398c0 1.104.9 2 2 2H5.7v-1.9h-.697zm-2-8.9C.45 6.688 0 7.138 0 7.688v1.2h2v-1.2c0-.55-.45-1-1-1z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923035209409",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
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
          className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
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

        {/* WhatsApp numbers */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {["+923035209409", "+96899763464"].map((number) => (
            <a
              key={number}
              href={`https://wa.me/${number.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-sm hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {number}
            </a>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {socials.map(({ label, href, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
            >
              {svg}
            </a>
          ))}
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
