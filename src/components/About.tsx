"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
            {/* Avatar placeholder */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600/20 rounded-xl border border-indigo-500/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-400">5+</span>
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
