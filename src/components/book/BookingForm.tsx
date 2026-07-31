"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-colors";

export default function BookingForm() {
  const t = useTranslations("book");
  const segments = t.raw("form_segment_options") as string[];

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    segment: segments[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        role: "",
        segment: segments[0],
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="bf-name" className="block text-sm text-slate-600 mb-1.5">
            {t("form_name")}
          </label>
          <input
            id="bf-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="bf-email" className="block text-sm text-slate-600 mb-1.5">
            {t("form_email")}
          </label>
          <input
            id="bf-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            className={inputClass}
            dir="ltr"
          />
        </div>
        <div>
          <label htmlFor="bf-company" className="block text-sm text-slate-600 mb-1.5">
            {t("form_company")}
          </label>
          <input
            id="bf-company"
            type="text"
            value={form.company}
            onChange={(e) => set("company")(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="bf-role" className="block text-sm text-slate-600 mb-1.5">
            {t("form_role")}
          </label>
          <input
            id="bf-role"
            type="text"
            value={form.role}
            onChange={(e) => set("role")(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bf-segment" className="block text-sm text-slate-600 mb-1.5">
          {t("form_segment")}
        </label>
        <select
          id="bf-segment"
          value={form.segment}
          onChange={(e) => set("segment")(e.target.value)}
          className={`${inputClass} cursor-pointer`}
        >
          {segments.map((option) => (
            <option key={option} value={option} className="bg-white">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="bf-message" className="block text-sm text-slate-600 mb-1.5">
          {t("form_message")}
        </label>
        <textarea
          id="bf-message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          placeholder={t("form_message_placeholder")}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-violet-600 hover:bg-violet-700 disabled:bg-violet-600/40 disabled:cursor-not-allowed text-white font-semibold transition-colors"
      >
        <Send size={16} />
        {status === "sending" ? t("form_sending") : t("form_send")}
      </button>

      <p aria-live="polite" className="min-h-5 text-sm text-center">
        {status === "success" && (
          <span className="text-emerald-600">{t("form_success")}</span>
        )}
        {status === "error" && <span className="text-red-600">{t("form_error")}</span>}
      </p>
    </form>
  );
}
