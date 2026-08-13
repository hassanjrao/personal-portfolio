export type Testimonial = {
  /** Quoted verbatim from the client. */
  quote: string[];
  author: string;
  /** Role or company, as the client described themselves. */
  role?: string;
  /** Flag emoji + country, where the client's location is known. */
  location?: string;
  /** ISO date, or a relative label where only that is known. */
  date: string;
  /** `linkedin` renders the recommendation badge; `client` renders stars. */
  source: "linkedin" | "client";
  rating?: 5;
  /** Marks a client who came back for more work. */
  repeat?: boolean;
  /** Where the review can be read in full, on the original platform. */
  sourceUrl: string;
};

const LINKEDIN_RECOMMENDATIONS =
  "https://www.linkedin.com/in/hassanjrao/details/recommendations/";
const FIVERR_PROFILE = "https://www.fiverr.com/hassanjavaidrao";

/**
 * Real client feedback, transcribed verbatim from LinkedIn recommendations and
 * marketplace reviews. Do not edit the wording — these are quotations.
 */
export const testimonials: Testimonial[] = [
  {
    quote: [
      "We had the pleasure of working with Hassan Javaid Rao on a complex website migration and setup project, and we can't recommend him highly enough. We needed a full transfer of an existing website to a new account with a new domain, including installation of all identified plugins and applications.",
      "Hassan handled every aspect of the project with exceptional skill and attention to detail. He meticulously transferred the entire site, ensured that all necessary plugins and applications were properly installed, and made the process seamless. His technical expertise was evident in every step, and his communication was outstanding. He kept me updated throughout and was always available to answer any questions.",
      "If you're looking for a professional who is reliable, knowledgeable, and dedicated to delivering high-quality results, Hassan is the perfect choice. His work was flawless, and we couldn't be happier with the outcome. Five stars all the way!",
    ],
    author: "Anton Skileski",
    role: "Architect, Retired",
    date: "2024-11-07",
    source: "linkedin",
    sourceUrl: LINKEDIN_RECOMMENDATIONS,
  },
  {
    quote: [
      "I highly recommend Hassan Javaid Rao for any web development project. He created an exceptional website for me using PHP, HTML, and CSS that not only looks fantastic but also performs seamlessly across phones, tablets, and desktops. The site runs fast, and his attention to detail in both functionality and design is top-notch.",
      "What truly impressed me was his dedication to making sure I was fully satisfied with the final product. He made several revisions until the website was exactly what I envisioned. Even after completing the project and receiving payment, Hassan went above and beyond by making additional tweaks to ensure everything was perfect. His professionalism, technical expertise, and commitment to client satisfaction make him an outstanding developer, and I would work with him again in a heartbeat.",
    ],
    author: "Alex Lluch",
    role: "Manager, Villa Fabulosa & Villa Magnifica, Temecula Wine Country",
    location: "🇺🇸 United States",
    date: "2024-09-28",
    source: "linkedin",
    sourceUrl: LINKEDIN_RECOMMENDATIONS,
  },
  {
    quote: [
      "Hassan is very thorough and honorable. I would recommend him to complete any technology related task with efficiency!",
    ],
    author: "Ryan Henderson",
    role: "Founder, Kream & Sugar",
    date: "2024-08-23",
    source: "linkedin",
    sourceUrl: LINKEDIN_RECOMMENDATIONS,
  },
  {
    quote: [
      "Hassan J. truly knocked it out of the park with his exceptional website development skills! He delivered a bug-free and professional project that EXCEEDED expectations in no time. With his quick responsiveness and politeness, working with him was a breeze. I genuinely hope this is the start of a great partnership! Highly recommend his services.",
    ],
    author: "samblack366",
    location: "🇺🇸 United States",
    date: "1 year ago",
    source: "client",
    rating: 5,
    sourceUrl: FIVERR_PROFILE,
  },
  {
    quote: [
      "this was mybsecond time working with hassa. it was amazing working with him. He was extremely patient and committed to the project. He offered great advise and made the whole experience comfortable. I will be working with him again",
    ],
    author: "acrossmedia",
    location: "🇨🇦 Canada",
    date: "5 months ago",
    source: "client",
    rating: 5,
    repeat: true,
    sourceUrl: FIVERR_PROFILE,
  },
  {
    quote: [
      "I had a great experience working with Hassan. He was patient, responsive, and open to feedback throughout the project. Although my requests were required some adjustments along the way, he handled everything with a positive attitude and professionalism. The result was what I needed. Highly recommend.",
    ],
    author: "yukipin00",
    location: "🇻🇳 Vietnam",
    date: "1 year ago",
    source: "client",
    rating: 5,
    sourceUrl: FIVERR_PROFILE,
  },
];
