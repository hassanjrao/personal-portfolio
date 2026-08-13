export type StackGroup = {
  label: string;
  items: string[];
};

/** Mirrors the Technical Skills table on the resume. */
export const stackGroups: StackGroup[] = [
  {
    label: "AI / LLM engineering",
    items: [
      "Multi-agent orchestration (LangGraph)",
      "RAG pipelines",
      "Embeddings & vector search (pgvector)",
      "Vision & document AI",
      "Prompt engineering & grounding",
      "Constrained decoding",
      "LLM function/tool calling",
      "LLM-as-judge & offline evaluation",
      "Hallucination mitigation",
      "Voice agents (Deepgram, Twilio)",
      "Google Gemini APIs",
    ],
  },
  {
    label: "Backend",
    items: ["Python (FastAPI)", "PHP (Laravel)", "Node.js (NestJS)", "TypeScript"],
  },
  {
    label: "Frontend",
    items: ["Vue.js", "React.js / Next.js", "Inertia.js", "Tailwind CSS"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (Lambda, SQS, S3, EC2, CloudWatch)",
      "Docker",
      "GitHub Actions CI/CD",
      "nginx",
      "Redis",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL (+ pgvector)", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "Architecture",
    items: [
      "Multi-tenant SaaS",
      "Modular monolith & microservices",
      "Event-driven systems",
      "REST API design",
      "OAuth 2.0 / JWT",
    ],
  },
  {
    label: "Quality & monitoring",
    items: ["Sentry", "AWS CloudWatch", "PHPUnit", "Git", "Agile/Scrum"],
  },
];

/** A position held within a company — companies can hold several over time. */
export type Position = {
  title: string;
  period: string;
  current?: boolean;
  achievements: string[];
};

export type Role = {
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  /** Context spanning every position at the company. */
  summary?: string;
  positions: Position[];
  stack?: string[];
};

export const experience: Role[] = [
  {
    company: "Thiqa Tech",
    location: "Muscat, Oman",
    period: "Dec 2021 — Present",
    current: true,
    summary:
      "Promoted from Software Engineer to Senior Software Engineer. Five years of continuous ownership of the same multi-tenant logistics SaaS platform.",
    positions: [
      {
        title: "Senior Software Engineer",
        period: "Jan 2024 — Present",
        current: true,
        achievements: [
          "Proposed, architected and lead the platform's AI programme — taking LLM features from concept to production for one of Oman's largest logistics companies, across 15 branches",
          "Designed and shipped a five-agent document-AI pipeline (LangGraph + Gemini) that reads handwritten bilingual Arabic/English shipping labels into structured orders, cutting a 12-hour daily data-entry workload to 2–3 hours of review",
          "Diagnosed the failure that killed the naive single-prompt version — correct digits assigned to the wrong field — and re-architected it as one agent per responsibility, making cross-field contamination structurally impossible",
          "Built a shadow-mode evaluation harness: 2,700+ orders predicted alongside human operators and scored field-by-field, reaching 71.7% of orders billed identically to human entry",
          "Engineered cost and latency down to $0.008 and 23s per order through model routing; one targeted fix cut expensive verification escalations from 78% to 20% of orders",
          "Built RAG-based customer chatbots for shippers over tenant shipment data and policy documents, with grounding rules that keep answers scoped and hallucination-free",
          "Shipped \"Ask AI\" for operations — a natural-language RAG assistant replacing minutes of manual cross-system lookups with instant grounded answers",
          "Architected and led the migration from a single monolith to a modular architecture, driving incremental extraction with zero downtime",
          "Engineered a high-performance export pipeline on AWS Lambda + SQS exporting millions of records at minimal cost, and an internal real-time chat system used across branches (NestJS, MongoDB, Next.js)",
          "Mentor junior engineers through code reviews and architectural guidance; maintain 99.9% uptime with Sentry and CloudWatch observability",
        ],
      },
      {
        title: "Software Engineer",
        period: "Dec 2021 — Dec 2023",
        achievements: [
          "Core engineer on a multi-tenant logistics SaaS built from zero, scaling it to thousands of shipments per day and millions of records across Oman, the UAE and Saudi Arabia",
          "Designed the platform's role-based access control spanning tenants, branches and operational roles",
          "Built secure REST APIs with OAuth 2.0 — Password Grant for first-party mobile apps, Client Credentials for machine-to-machine integrations with DHL, AJEX and iMile",
          "Improved system performance by roughly 20% by refactoring legacy code into modern patterns, and introduced Redis-backed queues to keep the UX smooth under heavy load",
        ],
      },
    ],
    stack: ["Laravel", "Vue.js", "Node.js", "Python", "MySQL", "Redis", "AWS"],
  },
  {
    company: "Fiverr & Upwork",
    period: "2020 — 2021",
    positions: [
      {
        title: "Freelance Full-Stack Developer",
        period: "2020 — 2021",
        achievements: [
          "Top Rated on both platforms with 250+ five-star reviews",
          "Delivered web and automation solutions for 200+ clients across logistics, e-commerce and SaaS",
        ],
      },
    ],
  },
  {
    company: "Stanford Code in Place",
    period: "2025",
    positions: [
      {
        title: "Section Leader (Teaching)",
        period: "2025",
        achievements: [
          "Competitively selected to teach Python to international learners in Stanford's flagship open-access programme",
          "Led weekly sessions and gave personalised feedback",
        ],
      },
    ],
  },
];

export const education = {
  degree: "B.S. Software Engineering",
  school: "Sukkur IBA University",
  period: "2017 — 2020",
  details: [
    "Fully funded merit-cum-need scholarship (4 years)",
    "IELTS 7.0",
    "Coursework: AI, Data Structures & Algorithms, OOP, Database Systems, Operating Systems, Web Engineering",
  ],
};

export const awards = [
  "Winner — Web Design Competition, Sukkur IBA",
  "Winner — Code in the Dark, Sukkur IBA",
  "4-year fully funded merit scholarship",
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
  { value: "5+", label: "Years of professional experience" },
  { value: "71.7%", label: "Orders billed identically to human entry" },
  { value: "$0.008", label: "Cost per order after optimisation" },
  { value: "250+", label: "Five-star client reviews" },
];
