"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { key: "years_exp", value: "5+" },
  { key: "projects", value: "50+" },
  { key: "clients", value: "30+" },
  { key: "countries", value: "10+" },
];

export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-4">
              {t("badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              {t("heading")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 blur-xl scale-105" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/hassan.png"
                    alt="Hassan Rao"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-[#111] border border-white/10 rounded-xl shadow-xl text-center">
                  <span className="text-xl font-bold text-indigo-400">6+</span>
                  <div className="text-xs text-gray-500">Years Exp.</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {t("body")}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ key, value }) => (
                  <div
                    key={key}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                  >
                    <div className="text-2xl font-bold text-indigo-400 mb-1">
                      {value}
                    </div>
                    <div className="text-xs text-gray-500">{t(key as "years_exp" | "projects" | "clients" | "countries")}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
