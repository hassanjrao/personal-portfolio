import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // US-targeted, English-only. `messages/ar.json` is kept in the repo but the
  // Arabic locale is parked — add "ar" back here to re-enable /ar.
  locales: ["en"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
