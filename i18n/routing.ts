import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  // English keeps the bare URLs it already ranks for; Arabic lives under /ar.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
