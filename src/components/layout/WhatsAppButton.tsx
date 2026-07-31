"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { contact } from "@/config/site";
import { WhatsAppIcon } from "../ui/icons";

export default function WhatsAppButton() {
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="flex flex-col gap-2 mb-1">
          {contact.whatsapp.map(({ label, href, region }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm hover:border-green-400 hover:bg-green-50 transition-colors shadow-xl whitespace-nowrap"
            >
              <span className="text-xs text-slate-600">{region}</span>
              <span className="text-green-600 font-medium" dir="ltr">
                {label}
              </span>
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-slate-900 flex items-center justify-center shadow-lg shadow-green-500/25 transition-transform hover:scale-105"
        aria-label={t("cta_whatsapp")}
        aria-expanded={open}
      >
        <WhatsAppIcon className="w-7 h-7" />
      </button>
    </div>
  );
}
