export const siteUrl = "https://hassanrao.com";

/**
 * Personal identity. Referenced by nav, footer, metadata, schema.org and the
 * favicon — change it here only.
 */
export const brand = {
  name: "Hassan Rao",
  /** Two-letter mark rendered into the favicon. */
  mark: "HR",
  tagline: "AI Engineer",
  role: "AI Engineer · Senior Software Engineer",
  photo: "/hassan.png",
} as const;

export const contact = {
  email: "hassanjrao@gmail.com",
  resume: "/resume.pdf",
  linkedin: "https://linkedin.com/in/hassanjrao",
  fiverr: "https://www.fiverr.com/hassanjavaidrao",
  /** Deep link to the recommendations tab, for "read them on LinkedIn". */
  linkedinRecommendations:
    "https://www.linkedin.com/in/hassanjrao/details/recommendations/",
} as const;

/** Home-page section anchors, in document order. Drives the section rail. */
export const sections = [
  "top",
  "about",
  "stack",
  "projects",
  "experience",
  "reviews",
  "contact",
] as const;

export type SectionId = (typeof sections)[number];

export const routes = {
  home: "/",
  projects: "/projects",
  blog: "/blog",
} as const;
