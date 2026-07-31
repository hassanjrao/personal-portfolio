"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { demoIds, type DemoId } from "@/config/site";
import { getDemoScripts, type DemoTurn } from "@/config/demoScripts";

function ToolChip({ text }: { text: string }) {
  return (
    <div className="flex justify-center my-1">
      <span className="inline-flex items-center gap-2 max-w-full px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-[11px] text-slate-600">
        <Cpu size={12} className="shrink-0 text-violet-600" />
        <span className="truncate">{text}</span>
      </span>
    </div>
  );
}

function Bubble({ turn }: { turn: DemoTurn }) {
  const isAgent = turn.from === "agent";

  return (
    <div className={`flex ${isAgent ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isAgent
            ? "bg-white border border-slate-200 text-slate-800 rounded-es-md card-soft"
            : "bg-violet-600 text-white rounded-ee-md"
        }`}
      >
        <p>{turn.text}</p>
        {turn.at && (
          <span
            className={`block mt-1 text-[10px] ${
              isAgent ? "text-slate-400" : "text-violet-100"
            }`}
          >
            {turn.at}
          </span>
        )}
      </div>
    </div>
  );
}

export default function AgentDemo() {
  const t = useTranslations("demo");
  const scripts = getDemoScripts();

  const [active, setActive] = useState<DemoId>(demoIds[0]);
  const [shown, setShown] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [typing, setTyping] = useState(false);

  const script = scripts[active];
  const done = shown >= script.length;
  const scrollRef = useRef<HTMLDivElement>(null);

  const reset = useCallback((id: DemoId) => {
    setActive(id);
    setShown(1);
    setPlaying(false);
    setTyping(false);
  }, []);

  // Drive playback: wait for the next turn, show a typing indicator, reveal it.
  useEffect(() => {
    if (!playing || done) return;

    const next = script[shown];
    const wait = next.wait ?? 1200;
    const isChat = next.from !== "system";

    const typingTimer = isChat
      ? setTimeout(() => setTyping(true), Math.max(0, wait - 700))
      : undefined;

    const revealTimer = setTimeout(() => {
      setTyping(false);
      setShown((n) => n + 1);
    }, wait);

    return () => {
      if (typingTimer) clearTimeout(typingTimer);
      clearTimeout(revealTimer);
    };
  }, [playing, shown, done, script]);

  // Keep the newest turn in view without scrolling the whole page.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [shown, typing]);

  const visible = script.slice(0, shown);
  const nextIsAgent = !done && script[shown]?.from === "agent";

  return (
    <div>
      {/* Scenario tabs */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist">
        {demoIds.map((id) => (
          <button
            key={id}
            role="tab"
            aria-selected={id === active}
            onClick={() => reset(id)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              id === active
                ? "bg-violet-600 text-white font-semibold"
                : "bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            {t(`scenarios.${id}.label`)}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-6 items-start">
        {/* Transcript */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200 bg-white card-soft">
            <span className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              {t(`scenarios.${active}.channel`)}
            </span>
            <span className="text-[11px] text-slate-500 tabular-nums">
              {Math.min(shown, script.length)} / {script.length}
            </span>
          </div>

          <div
            ref={scrollRef}
            className="h-[440px] overflow-y-auto px-4 py-4 space-y-2.5 scroll-smooth"
          >
            <AnimatePresence initial={false}>
              {visible.map((turn, i) => (
                <motion.div
                  key={`${active}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {turn.from === "system" ? (
                    <ToolChip text={turn.text} />
                  ) : (
                    <Bubble turn={turn} />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {typing && (
              <div className={`flex ${nextIsAgent ? "justify-start" : "justify-end"}`}>
                <span className="px-3.5 py-2.5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-500 text-xs">
                  {t("typing")}
                </span>
              </div>
            )}

            {done && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-violet-600/10 border border-violet-200"
              >
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-violet-700">
                  <CheckCircle2 size={13} />
                  {t("outcome_label")}
                </span>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {t(`scenarios.${active}.outcome`)}
                </p>
              </motion.div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 px-4 py-3 border-t border-slate-200 bg-white card-soft">
            <button
              onClick={() => (done ? reset(active) : setPlaying((p) => !p))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition-colors"
            >
              {done ? (
                <>
                  <RotateCcw size={14} />
                  {t("replay")}
                </>
              ) : playing ? (
                <>
                  <Pause size={14} />
                  {t("pause")}
                </>
              ) : (
                <>
                  <Play size={14} />
                  {t("play")}
                </>
              )}
            </button>

            <button
              onClick={() => {
                setPlaying(false);
                setTyping(false);
                setShown((n) => Math.min(n + 1, script.length));
              }}
              disabled={done}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 text-slate-600 text-sm hover:border-violet-400 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {t("next")}
              <ChevronRight size={14} className="rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Scenario explainer */}
        <aside className="p-6 rounded-2xl bg-white card-soft border border-slate-200 lg:sticky lg:top-24">
          <h3 className="text-lg font-semibold text-slate-900 leading-snug">
            {t(`scenarios.${active}.title`)}
          </h3>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            {t(`scenarios.${active}.blurb`)}
          </p>
          <p className="mt-5 pt-5 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
            {t("note")}
          </p>
        </aside>
      </div>
    </div>
  );
}
