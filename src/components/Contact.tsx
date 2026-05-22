"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail } from "lucide-react";
import { SiFiverr, SiGithub } from "react-icons/si";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socials = [
  { Icon: SiGithub, href: "https://github.com/hassanjrao", label: "GitHub", color: "" },
  { Icon: LinkedInIcon, href: "https://linkedin.com/in/hassanjrao", label: "LinkedIn", color: "group-hover:text-blue-400" },
  { Icon: SiFiverr, href: "https://www.fiverr.com/hassanjavaidrao", label: "Fiverr", color: "group-hover:text-green-400" },
  { Icon: Mail, href: "mailto:hassanjrao@gmail.com", label: "Email", color: "" },
];

export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t("subheading")}</p>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">
                {t("name_label")}
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                placeholder="Hassan Rao"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">
                {t("email_label")}
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                placeholder="hello@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">
                {t("message_label")}
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white rounded-lg font-medium transition-all duration-200"
            >
              <Send size={16} />
              {status === "sending" ? t("sending") : t("send")}
            </button>
            {status === "success" && (
              <p className="text-emerald-400 text-sm text-center">{t("success")}</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">{t("error")}</p>
            )}
          </form>

          {/* Social links */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              Prefer direct contact? Reach me through any of these channels.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {socials.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all group"
                >
                  <Icon
                    size={18}
                    className={`text-gray-400 transition-colors ${color ?? "group-hover:text-indigo-400"}`}
                  />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
