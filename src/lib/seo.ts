import type { Metadata } from "next";
import { routing } from "@i18n/routing";
import { siteUrl } from "@/config/site";

/** Absolute URL for a path in a given locale, honouring the `as-needed` prefix. */
export function localeUrl(path: string, locale: string) {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteUrl}${prefix}${clean}` || siteUrl;
}

/** Canonical + hreflang alternates for a page. */
export function localeAlternates(path: string, locale: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = localeUrl(path, l);
  }
  languages["x-default"] = localeUrl(path, routing.defaultLocale);

  return {
    canonical: localeUrl(path, locale),
    languages,
  };
}
