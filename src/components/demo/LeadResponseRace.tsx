"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Play, RotateCcw, Trophy, XCircle, Zap, Clock } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

/** Simulated minutes of wall-clock elapsed per real second of animation. */
const MINUTES_PER_TICK = 8;
const TICK_MS = 90;
/** Simulated minutes after which the customer has booked with someone else. */
const AI_REPLY_AT = 1;
const HUMAN_REPLY_AT = 560;
const CUSTOMER_GONE_AT = 190;
const END_AT = 600;

function formatElapsed(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = Math.floor(minutes % 60);
  return h > 0 ? `${h}h ${String(m).padStart(2, "0")}m` : `${m}m`;
}

function Lane({
  label,
  note,
  icon,
  accent,
  replied,
  won,
  lost,
  replyLabel,
  waitingLabel,
  wonLabel,
  lostLabel,
  progress,
  elapsedAtReply,
}: {
  label: string;
  note: string;
  icon: React.ReactNode;
  accent: "cyan" | "slate";
  replied: boolean;
  won: boolean;
  lost: boolean;
  replyLabel: string;
  waitingLabel: string;
  wonLabel: string;
  lostLabel: string;
  progress: number;
  elapsedAtReply: number;
}) {
  const isCyan = accent === "cyan";

  return (
    <div
      className={`p-5 rounded-2xl border ${
        isCyan
          ? "bg-gradient-to-b from-cyan-500/10 to-transparent border-cyan-400/25"
          : "bg-white/[0.03] border-white/10"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`inline-flex w-10 h-10 shrink-0 rounded-xl items-center justify-center ${
            isCyan
              ? "bg-cyan-400/15 text-cyan-300"
              : "bg-white/5 text-slate-400 border border-white/10"
          }`}
        >
          {icon}
        </span>
        <div className="min-w-0">
          <h3 className="font-semibold text-white">{label}</h3>
          <p className="text-xs text-slate-500">{note}</p>
        </div>
      </div>

      {/* Progress track */}
      <div className="mt-5 h-2 rounded-full bg-white/8 overflow-hidden">
        <div
          className={`h-full rounded-full transition-[width] duration-100 ease-linear ${
            isCyan ? "bg-cyan-400" : "bg-slate-500"
          }`}
          style={{ width: `${Math.min(100, progress)}%` }}
        />
      </div>

      <div className="mt-4 min-h-[52px]">
        {replied ? (
          <p className="text-sm text-slate-300">
            <span className="text-white font-medium">{replyLabel}</span>
            <span className="text-slate-500"> · {formatElapsed(elapsedAtReply)}</span>
          </p>
        ) : (
          <p className="text-sm text-slate-500">{waitingLabel}</p>
        )}

        {won && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
            <Trophy size={15} />
            {wonLabel}
          </p>
        )}
        {lost && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-red-400">
            <XCircle size={15} />
            {lostLabel}
          </p>
        )}
      </div>
    </div>
  );
}

export default function LeadResponseRace() {
  const t = useTranslations("demo.race");
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    timer.current = setInterval(() => {
      setElapsed((e) => {
        const next = e + MINUTES_PER_TICK;
        if (next >= END_AT) {
          setRunning(false);
          return END_AT;
        }
        return next;
      });
    }, TICK_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [running]);

  const aiReplied = elapsed >= AI_REPLY_AT;
  const humanReplied = elapsed >= HUMAN_REPLY_AT;
  const customerGone = elapsed >= CUSTOMER_GONE_AT;
  const finished = elapsed >= END_AT;

  const reset = () => {
    setRunning(false);
    setElapsed(0);
  };

  return (
    <section className="px-4 py-24 bg-white/[0.02] border-y border-white/8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => (finished ? reset() : setRunning((r) => !r))}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold transition-colors"
          >
            {finished ? <RotateCcw size={15} /> : <Play size={15} />}
            {finished ? t("reset") : t("start")}
          </button>
          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-400">
            <Clock size={14} />
            <span className="tabular-nums text-white" dir="ltr">
              {formatElapsed(elapsed)}
            </span>
          </span>
          <span className="text-xs text-slate-600">{t("lead_received")}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Lane
            label={t("ai_label")}
            note={t("ai_note")}
            icon={<Zap size={18} />}
            accent="cyan"
            replied={aiReplied}
            won={aiReplied}
            lost={false}
            replyLabel={t("replied")}
            waitingLabel={t("still_waiting")}
            wonLabel={t("won")}
            lostLabel={t("lost")}
            progress={aiReplied ? 100 : (elapsed / AI_REPLY_AT) * 100}
            elapsedAtReply={AI_REPLY_AT}
          />
          <Lane
            label={t("human_label")}
            note={t("human_note")}
            icon={<Clock size={18} />}
            accent="slate"
            replied={humanReplied}
            won={false}
            lost={customerGone}
            replyLabel={t("replied")}
            waitingLabel={t("still_waiting")}
            wonLabel={t("won")}
            lostLabel={t("lost")}
            progress={(elapsed / HUMAN_REPLY_AT) * 100}
            elapsedAtReply={HUMAN_REPLY_AT}
          />
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">{t("footnote")}</p>
      </div>
    </section>
  );
}
