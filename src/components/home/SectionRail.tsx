"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

/**
 * Section navigation styled as a shipment tracking route: each section is a
 * "scan point", passed sections read as completed, and the connecting line
 * fills as the reader moves down the page.
 */
const STOPS = [
  "top",
  "problem",
  "services",
  "demo",
  "segments",
  "proof",
  "roi",
  "process",
  "trust",
  "faq",
  "book",
] as const;

export default function SectionRail() {
  const t = useTranslations("home.rail");
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(0);
  const observed = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const sections = STOPS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    observed.current = sections;

    // A section counts as current once it crosses the upper third of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = sections.indexOf(entry.target as HTMLElement);
          if (i !== -1) setActiveIndex(i);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScrolled(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeId = STOPS[activeIndex];
  const fill = STOPS.length > 1 ? (activeIndex / (STOPS.length - 1)) * 100 : 0;

  return (
    <>
      {/* Desktop: vertical route rail */}
      <nav
        aria-label={t("aria")}
        className="hidden xl:flex fixed top-1/2 -translate-y-1/2 end-6 z-40 flex-col"
      >
        <div className="relative ps-1">
          {/* route line */}
          <span
            aria-hidden="true"
            className="absolute start-[9px] top-1.5 bottom-1.5 w-px bg-slate-200"
          />
          <span
            aria-hidden="true"
            className="absolute start-[9px] top-1.5 w-px bg-teal-500 transition-[height] duration-300 ease-out"
            style={{ height: `calc(${fill}% - 6px)` }}
          />

          <ul className="relative flex flex-col gap-4">
            {STOPS.map((id, i) => {
              const isActive = i === activeIndex;
              const isPassed = i < activeIndex;

              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => jumpTo(id)}
                    aria-current={isActive ? "true" : undefined}
                    className="group flex items-center gap-3 outline-none"
                  >
                    <span
                      className={`relative grid place-items-center w-[18px] h-[18px] rounded-full border transition-all duration-200 ${
                        isActive
                          ? "border-teal-600 bg-white scale-110"
                          : isPassed
                            ? "border-teal-500 bg-teal-500"
                            : "border-slate-300 bg-white group-hover:border-teal-400"
                      }`}
                    >
                      <span
                        className={`rounded-full transition-all duration-200 ${
                          isActive
                            ? "w-2 h-2 bg-teal-600"
                            : isPassed
                              ? "w-1.5 h-1.5 bg-white"
                              : "w-1.5 h-1.5 bg-slate-300 group-hover:bg-teal-400"
                        }`}
                      />
                    </span>

                    <span
                      className={`whitespace-nowrap rounded-md px-2 py-1 text-xs transition-all duration-200 ${
                        isActive
                          ? "bg-teal-600 text-white opacity-100 translate-x-0"
                          : "bg-white text-slate-600 border border-slate-200 card-soft opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100"
                      }`}
                    >
                      {t(`stops.${id}`)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile / tablet: thin progress bar + current-stop pill */}
      <div
        aria-hidden="true"
        className="xl:hidden fixed top-16 inset-x-0 z-40 h-0.5 bg-slate-100"
      >
        <div
          className="h-full bg-teal-500 transition-[width] duration-150 ease-out"
          style={{ width: `${scrolled * 100}%` }}
        />
      </div>

      <div
        className={`xl:hidden fixed bottom-6 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-40 transition-all duration-300 ${
          activeIndex > 0
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <span className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-200 card-soft text-xs">
          <MapPin size={13} className="text-teal-600" />
          <span className="text-slate-500">{t("label")}</span>
          <span className="font-medium text-slate-900">{t(`stops.${activeId}`)}</span>
          <span className="text-slate-400 tabular-nums" dir="ltr">
            {activeIndex + 1}/{STOPS.length}
          </span>
        </span>
      </div>
    </>
  );
}
