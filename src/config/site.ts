export const siteUrl = "https://hassanrao.com";

/**
 * Studio name used everywhere the site refers to itself. Change it here only —
 * nav, footer, metadata, schema.org and the favicon all read from this.
 */
export const brand = {
  name: "FleetMind AI",
  /** Two-letter mark rendered into the favicon. */
  mark: "FM",
  tagline: "AI for Logistics",
} as const;

export const contact = {
  email: "hassanjrao@gmail.com",
  linkedin: "https://linkedin.com/in/hassanjrao",
  /**
   * Set NEXT_PUBLIC_CALENDLY_URL in .env.local to your real scheduling link.
   * The fallback is a best guess and should be replaced.
   */
  calendly:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/hassanjrao/30min",
  whatsapp: [
    { label: "+968 9976 3464", href: "https://wa.me/96899763464", region: "Oman" },
    { label: "+92 303 5209409", href: "https://wa.me/923035209409", region: "Pakistan" },
  ],
} as const;

/** Primary WhatsApp number used by the floating button and inline CTAs. */
export const primaryWhatsApp = contact.whatsapp[0];

export const routes = {
  home: "/",
  services: "/services",
  reviews: "/reviews",
  blog: "/blog",
  book: "/book-a-call",
} as const;

/**
 * Service ids double as anchor targets on /services and as translation keys
 * under the `services.items.*` namespace.
 */
export const serviceIds = [
  "track-trace",
  "voice-agent",
  "document-ai",
  "quoting",
  "ops-copilot",
  "exceptions",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export const segmentIds = ["forwarding", "lastmile", "warehousing"] as const;

export type SegmentId = (typeof segmentIds)[number];
