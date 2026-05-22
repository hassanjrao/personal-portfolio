"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Code2, Briefcase, ShoppingBag, type LucideIcon } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const socials: { Icon: LucideIcon; href: string; label: string }[] = [
    { Icon: Code2, href: "https://github.com/hassanjrao", label: "GitHub" },
    { Icon: Briefcase, href: "https://linkedin.com/in/hassanjrao", label: "LinkedIn" },
    { Icon: ShoppingBag, href: "https://www.fiverr.com/hassanjavaidrao", label: "Fiverr" },
    { Icon: Mail, href: "mailto:hassanjrao@gmail.com", label: "Email" },
  ];

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
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
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
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all group"
                >
                  <Icon
                    size={18}
                    className="text-gray-400 group-hover:text-indigo-400 transition-colors"
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
