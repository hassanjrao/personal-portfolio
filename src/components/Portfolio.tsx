"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack Next.js e-commerce with Stripe payments, admin dashboard, and multi-language support.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    color: "from-indigo-600/20 to-purple-600/20",
    emoji: "🛒",
  },
  {
    title: "Real Estate Mobile App",
    description: "Cross-platform React Native app for property listings with map integration and virtual tours.",
    tags: ["React Native", "Maps API", "Node.js"],
    color: "from-cyan-600/20 to-blue-600/20",
    emoji: "🏠",
  },
  {
    title: "SEO Dashboard",
    description: "Multi-country SEO analytics tool that tracks rankings, backlinks, and competitor analysis.",
    tags: ["Laravel", "Vue.js", "Google API"],
    color: "from-emerald-600/20 to-teal-600/20",
    emoji: "📊",
  },
  {
    title: "SaaS UI Kit",
    description: "Comprehensive Figma design system with 200+ components and dark/light themes.",
    tags: ["Figma", "Design System", "Tailwind"],
    color: "from-pink-600/20 to-rose-600/20",
    emoji: "🎨",
  },
  {
    title: "Booking System",
    description: "Restaurant booking platform with real-time availability, SMS reminders, and analytics.",
    tags: ["Next.js", "Prisma", "Twilio"],
    color: "from-amber-600/20 to-orange-600/20",
    emoji: "📅",
  },
  {
    title: "Blog Platform",
    description: "Headless CMS-powered blog ranked on Google in 3 countries within 6 months.",
    tags: ["Next.js", "Sanity CMS", "SEO"],
    color: "from-violet-600/20 to-indigo-600/20",
    emoji: "✍️",
  },
];

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 px-4">
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

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${project.color} border border-white/10 card-hover flex flex-col`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="text-4xl mb-4">{project.emoji}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs text-gray-400 bg-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300">
                  <ExternalLink size={14} />
                  {t("view_project")}
                </button>
                <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300">
                  GitHub
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
