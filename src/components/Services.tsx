"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Palette, TrendingUp } from "lucide-react";

const icons = [Code2, Smartphone, Palette, TrendingUp];
const gradients = [
  "from-indigo-600/20 to-blue-600/20",
  "from-purple-600/20 to-pink-600/20",
  "from-cyan-600/20 to-teal-600/20",
  "from-orange-600/20 to-amber-600/20",
];
const iconColors = [
  "text-indigo-400",
  "text-purple-400",
  "text-cyan-400",
  "text-orange-400",
];

export default function Services() {
  const t = useTranslations("services");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [0, 1, 2, 3].map((i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section id="services" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t("subheading")}</p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className={`p-6 rounded-2xl bg-gradient-to-br ${gradients[i]} border border-white/10 card-hover group cursor-default`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 ${iconColors[i]} group-hover:scale-110 transition-transform`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
