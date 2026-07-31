"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@i18n/navigation";
import { routing, type Locale } from "@i18n/routing";

/** Display labels for every locale we might enable. */
const labels: Record<string, string> = {
  en: "EN",
  ar: "العربية",
  es: "ES",
};

export default function LocaleSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [pending, startTransition] = useTransition();

  // Nothing to switch between while the site is single-locale.
  if (routing.locales.length < 2) return null;

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => {
      // `params` carries dynamic segments (e.g. blog slugs) so the equivalent
      // page is resolved in the target locale rather than falling back home.
      router.replace(
        // @ts-expect-error -- pathname + params are a valid pair at runtime
        { pathname, params },
        { locale: next }
      );
    });
  };

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-lg border border-slate-200 p-0.5 ${
        pending ? "opacity-60" : ""
      }`}
      role="group"
      aria-label={t("language")}
    >
      <Globe size={13} className="ms-2 me-0.5 text-slate-500" aria-hidden="true" />
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-current={l === locale ? "true" : undefined}
          className={`px-2 py-1 text-xs rounded-md transition-colors ${
            l === locale
              ? "bg-violet-50 text-violet-700"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
