export type ReviewShot = {
  /** File inside /public/reviews — e.g. "/reviews/review-01.png" */
  src: string;
  /** Rendered as the image alt text and read by screen readers. */
  alt: string;
  /** Shown under the screenshot. Use a first name + initial, or a company type. */
  client: string;
  /** Flag emoji + location, e.g. "🇺🇸 Texas". Optional. */
  country?: string;
  /** Short label, e.g. "AI Voice Agent" or "Document Automation". Optional. */
  service?: string;
};

/**
 * Client review screenshots.
 *
 * To add reviews:
 *   1. Drop the image files into `public/reviews/`
 *   2. Add an entry below
 *
 * Example:
 *   {
 *     src: "/reviews/review-01.png",
 *     alt: "Five-star client review about an AI voice agent build",
 *     client: "Operations Manager, 3PL",
 *     country: "🇺🇸 Texas",
 *     service: "AI Voice Agent",
 *   },
 */
export const reviewShots: ReviewShot[] = [];
