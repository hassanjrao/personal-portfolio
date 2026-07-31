export const siteUrl = "https://hassanrao.com";

/**
 * Personal brand identity. Referenced by nav, footer, metadata, schema.org
 * and the favicon — change it here only.
 */
export const brand = {
  name: "Hassan Rao",
  /** Two-letter mark rendered into the favicon. */
  mark: "HR",
  tagline: "AI for Moving & Logistics",
  role: "AI Engineer — Moving & Logistics Automation",
  photo: "/hassan.png",
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
    { label: "+968 9976 3464", href: "https://wa.me/96899763464", region: "WhatsApp" },
    { label: "+92 303 5209409", href: "https://wa.me/923035209409", region: "WhatsApp" },
  ],
} as const;

/** Primary WhatsApp number used by the floating button and inline CTAs. */
export const primaryWhatsApp = contact.whatsapp[0];

export const routes = {
  home: "/",
  services: "/services",
  demo: "/demo",
  reviews: "/reviews",
  about: "/about",
  blog: "/blog",
  book: "/book-a-call",
} as const;

/**
 * Service ids double as anchor targets on /services and as translation keys
 * under the `services.items.*` namespace.
 */
export const serviceIds = [
  "lead-response",
  "track-trace",
  "voice-agent",
  "quoting",
  "document-ai",
  "ops-copilot",
  "exceptions",
] as const;

export type ServiceId = (typeof serviceIds)[number];

/** Ordered by prominence on the site. */
export const segmentIds = [
  "moving",
  "lastmile",
  "forwarding",
  "warehousing",
] as const;

export type SegmentId = (typeof segmentIds)[number];

/**
 * Scripted demo scenarios shown on /demo. Ids map to translation keys under
 * `demo.scenarios.*`; the scripts themselves live in `src/config/demoScripts.ts`.
 */
export const demoIds = ["moving-quote", "tracking", "after-hours"] as const;

export type DemoId = (typeof demoIds)[number];
