export type Project = {
  slug: string;
  title: string;
  tagline: string;
  /** One-paragraph summary used on the home page card. */
  summary: string;
  role: string;
  period: string;
  stack: string[];
  /** Headline outcomes rendered as stat tiles. */
  metrics: { value: string; label: string }[];
  challenge: string[];
  approach: string[];
  result: string[];
  /** Engineering decisions worth defending in an interview. */
  highlights: { title: string; body: string }[];
  liveUrl?: string;
  articleSlug?: string;
};

export const projects: Project[] = [
  {
    slug: "waybill-data-entry-agents",
    title: "Waybill Data-Entry Agents — Multi-Agent Document AI",
    tagline: "Five agents reading handwritten waybills into structured orders",
    summary:
      "A production multi-agent pipeline that reads handwritten bilingual Arabic/English shipping labels into structured orders, cutting a 12-hour daily data-entry workload to 2–3 hours of review. Built on a fixed LangGraph state graph with one agent per responsibility.",
    role: "Designed and shipped end to end",
    period: "2024 — Present",
    stack: [
      "Python (FastAPI)",
      "LangGraph",
      "Google Gemini (Flash + Pro)",
      "Pillow",
      "PostgreSQL + pgvector",
      "Laravel",
      "Docker",
    ],
    metrics: [
      { value: "12h → 2–3h", label: "Daily data entry, now review only" },
      { value: "71.7%", label: "Orders billed identically to humans" },
      { value: "$0.008 · 23s", label: "Cost and latency per order" },
    ],
    challenge: [
      "Operators spent twelve hours a day reading handwritten waybills — bilingual Arabic and English, photographed on phones, in inconsistent layouts — and typing them into the platform field by field.",
      "The obvious approach failed. A single prompt handling the whole label produced a subtle, dangerous error: correct digits assigned to the wrong field. The values looked plausible, so nothing downstream flagged them, and the field that drives delivery pricing was among the ones that drifted.",
    ],
    approach: [
      "I re-architected it as five single-responsibility agents on a fixed LangGraph state graph — region localization, OCR, location resolution, amounts and verification — with parallel fan-out and a bounded verification/escalation loop.",
      "The graph is deliberately fixed rather than a dynamic supervisor, so repeat runs of the same order stay comparable across versions. That comparability is what makes the evaluation harness meaningful.",
      "Visual grounding happens before OCR: a localizer agent returns box coordinates only, then Python handles rotation, cropping and upscaling deterministically.",
      "Location resolution uses constrained selection over free-text generation — the agent picks an ID from a retrieved candidate list rather than writing a destination name.",
    ],
    result: [
      "A twelve-hour daily workload reduced to two or three hours of review, with operators checking rather than typing.",
      "71.7% of orders billed identically to human entry, measured in shadow mode across 2,700+ orders scored field by field, with per-agent traces isolating whether an error came from reading or from resolution.",
      "Cost and latency engineered down to $0.008 and 23 seconds per order through model routing — a fast model reads, a stronger model verifies. One targeted fix cut expensive verification escalations from 78% to 20% of orders.",
    ],
    highlights: [
      {
        title: "One agent per responsibility makes a class of bug impossible",
        body: "Cross-field contamination wasn't fixed by better prompting — it was designed out. When no single agent can see two fields at once, it cannot swap them. Structural fixes beat probabilistic ones.",
      },
      {
        title: "Constrained selection beats free-text generation",
        body: "For location resolution the agent picks an ID from a retrieved candidate list. A hallucinated destination becomes impossible on the exact field that determines delivery pricing.",
      },
      {
        title: "Visual grounding before OCR fixed an invisible failure",
        body: "Downsampling made handwriting unreadable before the model ever saw it. Localizing first, then cropping and upscaling in Python, addressed a resolution problem no amount of prompt tuning would have touched.",
      },
      {
        title: "A failure taxonomy is what makes automation trustworthy",
        body: "Separating provider errors from bad model output means an outage marks entries retryable rather than storing empty predictions as successes — the difference between a bad hour and corrupted data.",
      },
      {
        title: "Shadow mode is the only honest benchmark",
        body: "Running predictions alongside human operators and scoring field-by-field gives a real number rather than a demo. LLM-as-judge verification, where a stronger model challenges each field and disagreements escalate to a wider crop, does the rest.",
      },
    ],
  },
  {
    slug: "ai-caller",
    title: "AI Caller — Multi-Tenant AI Voice-Agent SaaS",
    tagline: "An AI receptionist that answers real inbound calls, 24/7",
    summary:
      "A SaaS where any business self-serves an AI phone receptionist that answers real inbound calls in a natural voice — live in production on AWS. Founder and solo build, from the telephony bridge through to billing and onboarding.",
    role: "Founder — solo build, live in production",
    period: "2025 — Present",
    stack: [
      "Python (FastAPI)",
      "Laravel",
      "Vue.js",
      "PostgreSQL + pgvector",
      "Deepgram Voice Agent",
      "Twilio",
      "Google Gemini",
      "AWS",
    ],
    metrics: [
      { value: "24/7", label: "Live inbound calls answered" },
      { value: "Multi-tenant", label: "Self-serve signup and plans" },
      { value: "Solo build", label: "Telephony through to billing" },
    ],
    challenge: [
      "Businesses lose customers on the phone — calls go unanswered after hours, front desks get swamped, and callers who reach voicemail rarely call back.",
      "A generic voice bot makes it worse. Confidently invented answers about pricing, coverage or policy cost more trust than a missed call ever would, and real-time voice leaves no room for a slow retrieval step.",
    ],
    approach: [
      "I engineered the real-time voice pipeline as a bridge from Twilio Media Streams to Deepgram's agent API (STT → LLM → TTS) over WebSockets, with barge-in interruption handling and LLM function calling for shipment tracking, quote capture and human transfer.",
      "The grounding layer chunks and embeds PDF knowledge bases with Gemini into pgvector using HNSW cosine indexes. Retrieval is tenant-scoped with relevance thresholds, so the agent gives an honest \"I don't know\" instead of a fluent guess, with prompt-injection defenses around retrieved content.",
      "Onboarding is itself LLM-automated: when a company signs up in a new industry, Gemini researches the domain and writes that industry's agent rulebook — scope fences and compliance rules — automatically.",
      "Around all of that sits a full SaaS product: self-serve signup with plans, per-tenant agent configuration, bring-your-own-Twilio with API-verified credentials and automatic webhook setup, and complete call transcripts with captured leads.",
    ],
    result: [
      "A live product on AWS EC2 behind nginx and systemd, deployed through GitHub Actions CI/CD.",
      "Real inbound calls answered around the clock in a natural voice, with every answer traceable to a document the business uploaded.",
      "Businesses onboard themselves — including their own Twilio credentials — without me touching a configuration file.",
    ],
    highlights: [
      {
        title: "Relevance thresholds are a product feature",
        body: "Forcing an honest \"I don't know\" when retrieval comes back weak is what makes the agent safe to put in front of paying customers. Grounding is a product decision before it is a technical one.",
      },
      {
        title: "Barge-in is what makes it feel human",
        body: "Callers interrupt. Handling interruption in the audio pipeline, rather than waiting for a turn to finish, is the difference between a demo and something people will actually talk to.",
      },
      {
        title: "Retrieved content is untrusted input",
        body: "Anything pulled from a tenant's uploaded PDFs can carry instructions. Prompt-injection defenses around retrieval are not optional once the corpus is user-supplied.",
      },
    ],
    liveUrl: "https://ai-caller.hassanrao.com",
    articleSlug: "ai-phone-agent-saas-laravel-twilio-deepgram",
  },
  {
    slug: "translation-api",
    title: "Translation Management API",
    tagline: "Millions of records, streamed at low memory cost",
    summary:
      "A production-grade REST API for locale-based translations: Controller → Service → Repository architecture, Redis tag-based cache invalidation, and cursor-based export streaming millions of records at low memory cost.",
    role: "Backend engineer — architecture and implementation",
    period: "2023",
    stack: ["PHP 8.2", "Laravel", "MySQL", "Redis", "Docker", "PHPUnit"],
    metrics: [
      { value: "Millions", label: "Records streamed per export" },
      { value: "Tag-based", label: "Cache invalidation strategy" },
      { value: "Dockerized", label: "With a full PHPUnit suite" },
    ],
    challenge: [
      "Translation lookups are read-heavy and latency-sensitive, while exports need to stream an entire dataset without exhausting memory or locking tables.",
      "Naive caching made invalidation impossible to reason about — changing one string in one locale should not flush everything.",
    ],
    approach: [
      "Separated concerns into a Controller → Service → Repository architecture so caching and persistence could evolve independently of the HTTP layer.",
      "Used Redis tag-based cache invalidation so a write can target a locale or namespace precisely rather than clearing the whole cache.",
      "Implemented cursor-based export instead of offset pagination, keeping memory flat regardless of dataset size and avoiding the row drift offsets cause on a live table.",
      "Dockerized the service and covered API contracts, caching behaviour and exports with a PHPUnit suite.",
    ],
    result: [
      "Exports across millions of records running at low, constant memory cost.",
      "Cache invalidation narrow enough that writes don't degrade read performance for unrelated locales.",
      "A tested, containerised API other teams could integrate against without support.",
    ],
    highlights: [
      {
        title: "Offset pagination is a bug at scale",
        body: "On a table receiving writes, offsets silently skip and repeat rows. Cursors are barely more work and are simply correct.",
      },
      {
        title: "Test the caching, not just the endpoints",
        body: "Cache invalidation is where this kind of API rots. Covering it explicitly is what let the caching strategy survive later change.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
