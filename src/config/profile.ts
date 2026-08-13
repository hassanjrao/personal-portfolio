export type StackGroup = {
  label: string;
  items: string[];
};

/** Grouped so the stack reads as capability areas, not a keyword dump. */
export const stackGroups: StackGroup[] = [
  {
    label: "Languages",
    items: ["PHP", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "Backend",
    items: ["Laravel", "Node.js", "NestJS", "FastAPI", "Livewire"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Inertia", "Tailwind CSS"],
  },
  {
    label: "AI engineering",
    items: [
      "RAG pipelines",
      "Vector search (pgvector)",
      "LLM function calling",
      "Real-time voice agents",
      "Evaluation sets",
    ],
  },
  {
    label: "Cloud & infrastructure",
    items: ["AWS Lambda", "AWS SQS", "AWS S3", "Docker", "nginx", "Redis"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "Practices",
    items: [
      "REST API design",
      "OAuth 2.0",
      "Microservices",
      "Multi-tenant SaaS",
      "Automated testing",
    ],
  },
];

export type Role = {
  title: string;
  company: string;
  period: string;
  /** Set on the role currently held. */
  current?: boolean;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Software Engineer",
    company: "Thiqa Tech",
    period: "Dec 2021 — Present",
    current: true,
    summary:
      "Building and running a multi-tenant logistics platform deployed across three countries, and leading the AI work layered on top of it.",
    achievements: [
      "Built a multi-tenant logistics SaaS deployed across Oman, the UAE and Saudi Arabia, supporting 15 branches nationwide",
      "Automated shipment data entry with generative AI, removing roughly six hours of manual effort every day",
      "Integrated carrier partners including DHL, AJEX and iMile over OAuth 2.0 machine-to-machine flows",
      "Architected event-driven services on AWS Lambda, SQS and S3, exporting millions of records at minimal cost",
      "Maintained 99.9% uptime with Sentry and CloudWatch monitoring",
    ],
    stack: ["Laravel", "Vue.js", "AWS", "Redis", "MySQL", "Microservices"],
  },
  {
    title: "Founder & Engineer",
    company: "AI Caller",
    period: "2025 — Present",
    current: true,
    summary:
      "An AI phone receptionist SaaS I designed, built and operate — from the telephony bridge through to the tenant admin.",
    achievements: [
      "Bridged Twilio Media Streams to a real-time voice agent over asyncio WebSockets",
      "Grounded every answer in the tenant's own documents with retrieval over pgvector",
      "Shipped a three-layer anti-hallucination design so the agent hands off rather than guessing",
      "Built multi-tenant billing, phone-number routing, call logs and transcripts",
    ],
    stack: ["FastAPI", "Twilio", "Deepgram", "Laravel", "pgvector", "AWS"],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Fiverr & Upwork",
    period: "2020 — 2021",
    summary:
      "Delivered web applications, APIs and integrations for international clients across logistics, e-commerce and SaaS.",
    achievements: [
      "Achieved Top Rated seller status with 250+ five-star reviews",
      "Served 200+ clients across the United States, Canada, Europe and Asia",
      "Repeat-client work spanning migrations, custom builds and performance fixes",
    ],
    stack: ["Laravel", "PHP", "JavaScript", "MySQL", "WordPress"],
  },
];

export type Social = {
  label: string;
  href: string;
  handle: string;
  /** Icon key resolved in the component. */
  icon: "linkedin" | "fiverr" | "mail";
};

export const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hassanjrao",
    handle: "in/hassanjrao",
    icon: "linkedin",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/hassanjavaidrao",
    handle: "hassanjavaidrao",
    icon: "fiverr",
  },
  {
    label: "Email",
    href: "mailto:hassanjrao@gmail.com",
    handle: "hassanjrao@gmail.com",
    icon: "mail",
  },
];

/** Headline figures shown under the hero. */
export const stats = [
  { value: "5+", label: "Years shipping production software" },
  { value: "200+", label: "Clients served worldwide" },
  { value: "15", label: "Branches on the platform I build" },
  { value: "3", label: "Countries running my systems" },
];
