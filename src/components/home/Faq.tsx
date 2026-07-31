"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

type QA = { q: string; a: string };

export default function Faq() {
  const t = useTranslations("home.faq");
  const items = t.raw("items") as QA[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <SectionHeader badge={t("badge")} heading={t("heading")} />

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 text-start"
                  >
                    <span className="font-medium text-slate-900">{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-teal-700 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <p className="pb-6 -mt-1 text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
