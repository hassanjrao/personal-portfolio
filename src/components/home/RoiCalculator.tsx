"use client";

import { useMemo, useState, useId } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "@i18n/navigation";
import { routes } from "@/config/site";
import SectionHeader from "../ui/SectionHeader";

const WORKING_DAYS_PER_MONTH = 26;

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm text-slate-400">
          {label}
        </label>
        <span className="text-sm font-semibold text-cyan-300 tabular-nums" dir="ltr">
          {value}
          {suffix}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2.5 w-full accent-cyan-400 cursor-pointer"
      />
    </div>
  );
}

export default function RoiCalculator() {
  const t = useTranslations("home.roi");

  const [callsPerDay, setCallsPerDay] = useState(150);
  const [minutesPerCall, setMinutesPerCall] = useState(4);
  const [hourlyCost, setHourlyCost] = useState(12);
  const [deflection, setDeflection] = useState(60);

  const { hoursPerMonth, annualSaving } = useMemo(() => {
    const deflectedCallsPerDay = callsPerDay * (deflection / 100);
    const hoursPerDay = (deflectedCallsPerDay * minutesPerCall) / 60;
    const hoursPerMonth = hoursPerDay * WORKING_DAYS_PER_MONTH;
    return {
      hoursPerMonth: Math.round(hoursPerMonth),
      annualSaving: Math.round(hoursPerMonth * hourlyCost * 12),
    };
  }, [callsPerDay, minutesPerCall, hourlyCost, deflection]);

  const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  const number = new Intl.NumberFormat("en-US");

  return (
    <section className="px-4 py-24 bg-white/[0.02] border-y border-white/8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge={t("badge")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 space-y-7">
            <Slider
              label={t("calls_label")}
              value={callsPerDay}
              min={10}
              max={1000}
              step={10}
              suffix=""
              onChange={setCallsPerDay}
            />
            <Slider
              label={t("minutes_label")}
              value={minutesPerCall}
              min={1}
              max={15}
              step={1}
              suffix=" min"
              onChange={setMinutesPerCall}
            />
            <Slider
              label={t("cost_label")}
              value={hourlyCost}
              min={3}
              max={60}
              step={1}
              suffix=" $"
              onChange={setHourlyCost}
            />
            <Slider
              label={t("deflection_label")}
              value={deflection}
              min={20}
              max={90}
              step={5}
              suffix="%"
              onChange={setDeflection}
            />
            <p className="text-xs text-slate-600">{t("currency_note")}</p>
          </div>

          {/* Output */}
          <div className="p-7 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-400/25 flex flex-col">
            <span className="inline-flex w-11 h-11 rounded-xl bg-cyan-400/15 items-center justify-center text-cyan-300">
              <TrendingUp size={20} />
            </span>

            <div className="mt-6">
              <div className="text-sm text-slate-400">{t("result_hours")}</div>
              <div
                className="mt-1 text-3xl font-bold text-white tabular-nums"
                dir="ltr"
              >
                {number.format(hoursPerMonth)}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-sm text-slate-400">{t("result_savings")}</div>
              <div
                className="mt-1 text-4xl sm:text-5xl font-bold gradient-text tabular-nums"
                dir="ltr"
              >
                {money.format(annualSaving)}
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-500 leading-relaxed">
              {t("result_note")}
            </p>

            <Link
              href={routes.book}
              className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:gap-3 transition-all"
            >
              {t("cta")}
              <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
