import { Star, Quote, Repeat2 } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { testimonials, type Testimonial } from "@/config/testimonials";
import { LinkedInIcon } from "../ui/icons";
import Reveal from "../ui/Reveal";

function Stars() {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className="text-amber-500 fill-amber-500" />
      ))}
    </span>
  );
}

function Card({ item }: { item: Testimonial }) {
  const t = useTranslations("reviews");
  const format = useFormatter();
  const isLinkedIn = item.source === "linkedin";

  // Some marketplace reviews only carry a relative age, not a real date.
  const isIsoDate = /^\d{4}-\d{2}-\d{2}$/.test(item.date);
  const shownDate = isIsoDate
    ? format.dateTime(new Date(item.date), {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : item.date;

  return (
    <figure className="break-inside-avoid mb-5 p-6 rounded-2xl bg-white border border-slate-200 card-hover">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${
            isLinkedIn
              ? "bg-blue-50 text-blue-700 border border-blue-200"
              : "bg-violet-50 text-violet-700 border border-violet-200"
          }`}
        >
          {isLinkedIn ? (
            <>
              <LinkedInIcon className="w-3 h-3" />
              {t("source_linkedin")}
            </>
          ) : (
            <>
              <Quote size={11} />
              {t("source_client")}
            </>
          )}
        </span>

        {item.rating ? <Stars /> : null}
      </div>

      <blockquote className="mt-4 space-y-3 text-sm text-slate-600 leading-relaxed">
        {item.quote.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </blockquote>

      <figcaption className="mt-5 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-slate-900">{item.author}</span>
          {item.repeat && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-700">
              <Repeat2 size={10} />
              {t("repeat_client")}
            </span>
          )}
        </div>
        {item.role && <div className="mt-0.5 text-xs text-slate-500">{item.role}</div>}
        <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
          {item.location && <span>{item.location}</span>}
          {item.location && <span aria-hidden="true">·</span>}
          <span>{shownDate}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default function TestimonialGrid() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
      {testimonials.map((item, i) => (
        <Reveal key={item.author} delay={Math.min(i, 4) * 0.05}>
          <Card item={item} />
        </Reveal>
      ))}
    </div>
  );
}
