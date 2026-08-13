export type Project = {
  slug: string;
  title: string;
  tagline: string;
  /** One-paragraph summary used on the home page card. */
  summary: string;
  role: string;
  period: string;
  stack: string[];
  /** Headline outcomes rendered as stat tiles on the case study. */
  metrics: { value: string; label: string }[];
  /** Case-study body. */
  challenge: string[];
  approach: string[];
  result: string[];
  /** Notable engineering decisions worth calling out. */
  highlights: { title: string; body: string }[];
  liveUrl?: string;
  articleSlug?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-caller",
    title: "AI Caller — AI Phone Agent SaaS",
    tagline: "An AI receptionist that answers real phone calls",
    summary:
      "A multi-tenant platform where any business can point a phone number at the service, upload their documents, and get an AI agent that answers calls in a natural voice — and only says things it can back up with those documents.",
    role: "Founder & Engineer — designed, built and operate",
    period: "2025 — Present",
    stack: [
      "Python",
      "FastAPI",
      "Twilio Media Streams",
      "Deepgram Voice Agent",
      "Laravel",
      "Inertia + Vue",
      "PostgreSQL + pgvector",
      "AWS",
    ],
    metrics: [
      { value: "< 1s", label: "Response latency on live calls" },
      { value: "24/7", label: "Coverage, including after hours" },
      { value: "Multi-tenant", label: "One deployment, many businesses" },
    ],
    challenge: [
      "Businesses lose customers on the phone. Calls go unanswered after hours, front desks get swamped, and callers who reach voicemail rarely call back.",
      "The obvious fix — a voice bot — usually makes things worse. Generic bots confidently invent answers about pricing, coverage and policy, which costs more trust than a missed call ever would.",
    ],
    approach: [
      "I split the system into two services talking over a token-authenticated internal API. Laravel owns the tenant model, admin, phone-number routing, documents, call logs and the Twilio webhook. A Python FastAPI service owns the real-time path.",
      "The voice service is a WebSocket bridge between Twilio Media Streams and Deepgram's Voice Agent API, running on asyncio so audio flows both directions without blocking.",
      "Answers are retrieved from the tenant's own documents, embedded and searched with pgvector, then passed to the model as grounded context rather than trusted to its own memory.",
    ],
    result: [
      "Live calls answered around the clock in a natural voice, with every response traceable to a document the business uploaded.",
      "A three-layer anti-hallucination design means the agent says it doesn't know and hands off to a human rather than guessing — the behaviour that makes it safe to put in front of real customers.",
      "One deployment serves many companies, each with its own numbers, documents, agent personality, voice and optionally their own API keys.",
    ],
    highlights: [
      {
        title: "Real-time audio is a latency budget, not a feature",
        body: "Every hop — telephony, transcription, retrieval, generation, speech — spends milliseconds the caller can hear. The architecture is shaped around protecting that budget rather than around clean abstractions.",
      },
      {
        title: "Grounding is a product decision",
        body: "Retrieval isn't there to make answers better; it's there to make them defensible. If nothing relevant is retrieved, the correct output is an escalation, not a fluent guess.",
      },
      {
        title: "The model is the easy part",
        body: "Tenant isolation, graceful failure, call logging and an admin a non-technical business can trust took far more work than the AI layer did.",
      },
    ],
    liveUrl: "https://ai-caller.hassanrao.com/",
    articleSlug: "ai-phone-agent-saas-laravel-twilio-deepgram",
    featured: true,
  },
  {
    slug: "logistics-platform",
    title: "Multi-Tenant Logistics SaaS Platform",
    tagline: "Shipment operations for 15 branches across three countries",
    summary:
      "An end-to-end logistics platform handling thousands of shipments a day — real-time tracking, carrier integrations, branch operations and billing — built as microservices and deployed across Oman, the UAE and Saudi Arabia.",
    role: "Senior Software Engineer — core platform and integrations",
    period: "2021 — Present",
    stack: [
      "Laravel",
      "Vue.js",
      "Microservices",
      "AWS Lambda",
      "AWS SQS",
      "Redis",
      "MySQL",
      "OAuth 2.0",
    ],
    metrics: [
      { value: "15", label: "Branches operating on it" },
      { value: "3", label: "Countries deployed across" },
      { value: "99.9%", label: "Uptime maintained" },
    ],
    challenge: [
      "A logistics operator running across multiple countries needed one platform for shipments, branches, carriers and billing — replacing a patchwork where every branch worked slightly differently.",
      "Shipment volume meant the write path could not be a single monolithic database transaction, and carrier partners each exposed a different integration surface.",
    ],
    approach: [
      "Split the platform into services around clear operational boundaries, communicating over an internal API and queues rather than shared tables.",
      "Built carrier integrations for DHL, AJEX and iMile behind a common interface, authenticating over OAuth 2.0 machine-to-machine flows so credentials never live in application code.",
      "Moved heavy work — exports, label generation, notifications — onto AWS Lambda and SQS so a slow carrier or a large export can't degrade the operational UI.",
    ],
    result: [
      "Thousands of shipments a day flowing through one system, with real-time tracking visible to branches and customers.",
      "New carrier partners onboarded against an existing interface rather than as bespoke one-off code.",
      "99.9% uptime maintained with Sentry and CloudWatch, with alerting tied to the operational metrics that actually matter.",
    ],
    highlights: [
      {
        title: "Event-driven where it earns its keep",
        body: "Not everything needs a queue. The split was drawn where latency tolerance genuinely differed — a customer waiting on a tracking page has different needs to a nightly reconciliation export.",
      },
      {
        title: "Integrations age badly unless you plan for it",
        body: "Carrier APIs change without notice. Putting every one behind a shared interface with contract tests turned partner changes into a contained fix rather than an outage.",
      },
    ],
    featured: true,
  },
  {
    slug: "ai-data-entry-automation",
    title: "AI Shipment Data Entry Automation",
    tagline: "Six hours of daily manual keying, removed",
    summary:
      "Generative-AI automation that reads inbound shipment paperwork and writes structured records straight into the logistics platform, replacing a data-entry process that consumed most of a working day.",
    role: "Senior Software Engineer — design and delivery",
    period: "2024",
    stack: [
      "Generative AI",
      "AWS Lambda",
      "AWS SQS",
      "Node.js",
      "Laravel",
      "MySQL",
    ],
    metrics: [
      { value: "~6 hrs", label: "Manual effort removed per day" },
      { value: "Event-driven", label: "Runs off the existing queue" },
      { value: "0", label: "New systems for staff to learn" },
    ],
    challenge: [
      "Shipment details arrived as documents and messages in inconsistent formats, and were re-typed into the platform field by field. It was slow, and every typo became a downstream exception.",
      "Rule-based parsing had already been tried. It broke on the first unusual layout and needed maintenance every time a customer changed their template.",
    ],
    approach: [
      "Put extraction behind the existing event-driven pipeline: documents land, a queue message fires, a Lambda extracts structured fields, and the platform writes the record.",
      "Validated every extraction against master data before it was accepted, with anything uncertain routed to a human review queue rather than written blind.",
      "Kept the operator workflow unchanged — staff review exceptions in the tool they already use instead of learning a new interface.",
    ],
    result: [
      "Roughly six hours of manual data entry removed from every working day.",
      "Keying errors caught at validation rather than surfacing later as delivery exceptions.",
      "Format changes absorbed by the model rather than requiring a parser rewrite.",
    ],
    highlights: [
      {
        title: "Confidence scores make automation adoptable",
        body: "Teams accept automation far faster when it is explicit about what it is unsure of. The review queue was the feature that got it trusted, not the extraction accuracy.",
      },
    ],
    featured: true,
  },
  {
    slug: "translation-api",
    title: "High-Throughput Translation Management API",
    tagline: "Millions of records, exported without falling over",
    summary:
      "A production REST API for locale-based translation management, built for read-heavy traffic with Redis tag-based caching and cursor-based export across millions of records.",
    role: "Backend Engineer — architecture and implementation",
    period: "2023",
    stack: [
      "PHP 8.2",
      "Laravel",
      "Redis",
      "Docker",
      "MySQL",
      "OAuth 2.0",
      "PHPUnit",
    ],
    metrics: [
      { value: "Millions", label: "Records exported per run" },
      { value: "Tag-based", label: "Cache invalidation strategy" },
      { value: "Full", label: "Automated test coverage" },
    ],
    challenge: [
      "Translation lookups are read-heavy and latency-sensitive, while exports need to stream the entire dataset without exhausting memory or locking tables.",
      "Naive caching made invalidation impossible to reason about: changing one string in one locale shouldn't flush everything.",
    ],
    approach: [
      "Used Redis tag-based caching so invalidation could target a locale or a namespace precisely, rather than clearing the whole cache on every write.",
      "Implemented cursor-based export instead of offset pagination, keeping memory flat regardless of dataset size and avoiding the drift offsets cause on a live table.",
      "Secured the API with OAuth 2.0 and covered the behaviour with PHPUnit so the caching logic stayed honest under change.",
    ],
    result: [
      "Exports across millions of records running in constant memory.",
      "Cache invalidation narrow enough that writes don't degrade read performance for unrelated locales.",
      "A documented, tested API that other teams could integrate against without support.",
    ],
    highlights: [
      {
        title: "Offset pagination is a bug at scale",
        body: "On a table receiving writes, offsets silently skip and repeat rows. Cursors are barely more work and are correct.",
      },
    ],
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
