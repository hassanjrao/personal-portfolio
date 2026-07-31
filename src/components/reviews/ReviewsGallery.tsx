"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { X, Maximize2, MessageSquareQuote } from "lucide-react";
import { reviewShots } from "@/config/reviews";

export default function ReviewsGallery() {
  const t = useTranslations("reviews");
  const [active, setActive] = useState<number | null>(null);

  // Close the lightbox on Escape and lock background scroll while it's open.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  if (reviewShots.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-10 rounded-2xl bg-white card-soft border border-dashed border-slate-300 text-center">
        <span className="inline-flex w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 items-center justify-center text-slate-600">
          <MessageSquareQuote size={21} />
        </span>
        <h2 className="mt-4 text-lg font-semibold text-slate-900">{t("empty_title")}</h2>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t("empty_body")}</p>
      </div>
    );
  }

  const current = active !== null ? reviewShots[active] : null;

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviewShots.map((shot, i) => (
          <figure
            key={shot.src}
            className="group rounded-2xl bg-white card-soft border border-slate-200 overflow-hidden card-hover"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="relative block w-full aspect-[4/3] bg-white"
              aria-label={t("open_image")}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={22} className="text-violet-700" />
              </span>
            </button>
            <figcaption className="flex items-center justify-between gap-3 px-4 py-3 border-t border-slate-200">
              <div className="min-w-0">
                <div className="text-sm text-slate-900 truncate">{shot.client}</div>
                {shot.country && (
                  <div className="text-xs text-slate-500">{shot.country}</div>
                )}
              </div>
              {shot.service && (
                <span className="shrink-0 px-2.5 py-0.5 text-[11px] text-violet-700 bg-violet-50 border border-violet-200 rounded-full">
                  {shot.service}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">{t("gallery_note")}</p>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label={t("close_image")}
            className="absolute top-5 end-5 p-2 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X size={20} />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={1400}
              height={1000}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
