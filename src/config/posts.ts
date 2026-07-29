export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date — formatted per locale at render time. */
  date: string;
  readTime: number;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "ai-phone-agent-saas-laravel-twilio-deepgram",
    title:
      "Building an AI Phone Agent That Answers Real Calls — Twilio, Deepgram, FastAPI and RAG",
    excerpt:
      "The architecture behind an AI receptionist that takes live phone calls and answers from a company's own documents: a real-time audio bridge between Twilio and Deepgram's Voice Agent API, retrieval over pgvector, and a three-layer anti-hallucination design. The same stack behind dispatch and booking agents for logistics operations.",
    date: "2026-07-13",
    readTime: 12,
    tags: ["AI Voice Agents", "Twilio", "Deepgram", "FastAPI", "RAG", "pgvector"],
  },
];
