"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "john_smith92",
    country: "🇺🇸 United States",
    rating: 5,
    date: "March 2025",
    text: "Hassan delivered an outstanding Next.js website. Fast, clean code and great communication throughout the project. Highly recommended!",
    service: "Web Development",
  },
  {
    name: "uk_startup_hub",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    date: "February 2025",
    text: "Excellent SEO work. Our website jumped to page 1 in Google UK within 2 months. Hassan really knows his stuff.",
    service: "SEO & Marketing",
  },
  {
    name: "dubai_ventures",
    country: "🇦🇪 UAE",
    rating: 5,
    date: "January 2025",
    text: "Amazing mobile app! Hassan built a React Native app for our business with a clean UI. Very professional and delivered on time.",
    service: "Mobile Development",
  },
  {
    name: "sarah_designs",
    country: "🇨🇦 Canada",
    rating: 5,
    date: "December 2024",
    text: "The Figma design system Hassan created is incredible. 200+ components, fully organized. Will definitely hire again.",
    service: "UI/UX Design",
  },
  {
    name: "riyadh_tech",
    country: "🇸🇦 Saudi Arabia",
    rating: 5,
    date: "November 2024",
    text: "Hassan ranked our e-commerce site in 3 countries within 4 months. Traffic increased by 300%. Excellent work!",
    service: "SEO & Marketing",
  },
  {
    name: "lahore_startup",
    country: "🇵🇰 Pakistan",
    rating: 5,
    date: "October 2024",
    text: "Built a full Laravel + React platform for us. Code quality is top-notch and he explained everything clearly. 5 stars!",
    service: "Web Development",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-600"}
        />
      ))}
    </div>
  );
}

export default function FiverrReviews() {
  const t = useTranslations("fiverr");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm text-green-400 border border-green-500/30 rounded-full bg-green-500/10 mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t("subheading")}</p>
        </div>

        {/* Profile card */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
              H
            </div>
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a0a]" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
              <span className="text-white font-bold text-lg">Hassan J.</span>
              <span className="text-gray-500 text-sm">@hassanjavaidrao</span>
              <span className="px-2 py-0.5 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full">
                ◆◆ Level 2 Seller
              </span>
            </div>
            <div className="text-gray-500 text-sm mt-1">📍 Pakistan &nbsp;·&nbsp; 🗣 English, Urdu</div>
            <div className="flex items-center gap-1 mt-2 justify-center sm:justify-start">
              <StarRating rating={5} />
              <span className="text-amber-400 font-bold text-sm ml-1">4.9</span>
              <span className="text-gray-500 text-xs">· 308 reviews</span>
            </div>
          </div>
          <a
            href="https://www.fiverr.com/hassanjavaidrao"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-medium transition-all"
          >
            <ExternalLink size={14} />
            {t("view_profile")}
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">4.9</div>
            <StarRating rating={5} />
            <div className="text-xs text-gray-500 mt-1">{t("avg_rating")}</div>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">308</div>
            <div className="text-xs text-gray-500 mt-1">{t("total_reviews")}</div>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">439</div>
            <div className="text-xs text-gray-500 mt-1">{t("total_orders")}</div>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">6</div>
            <div className="text-xs text-gray-500 mt-1">{t("years_on_fiverr")}</div>
          </div>
        </div>

        {/* Review cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/20 hover:bg-white/[0.07] transition-all duration-200 flex flex-col gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-white font-medium text-sm">{review.name}</div>
                  <div className="text-gray-500 text-xs">{review.country}</div>
                </div>
                <span className="px-2 py-0.5 text-xs text-green-400 bg-green-500/10 rounded-full whitespace-nowrap">
                  {review.service}
                </span>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="text-xs text-gray-600">{review.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
