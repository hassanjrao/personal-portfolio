import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";

const baseUrl = "https://hassanrao.com";
const pageUrl = `${baseUrl}/blog/ai-phone-agent-saas-laravel-twilio-deepgram`;
const publishedDate = "2026-07-13";

export const metadata: Metadata = {
  title: "Building a Multi-Tenant AI Phone Agent SaaS with Python FastAPI, Laravel, Twilio, Deepgram & Gemini",
  description:
    "How I built an AI receptionist platform that answers real phone calls: Twilio Media Streams bridged to Deepgram's Voice Agent API, RAG over pgvector with Gemini embeddings, and a Laravel multi-tenant admin — with anti-hallucination guarantees.",
  metadataBase: new URL(baseUrl),
  alternates: { canonical: pageUrl },
  keywords: [
    "ai phone agent",
    "ai voice agent saas",
    "twilio media streams deepgram",
    "deepgram voice agent api",
    "laravel ai receptionist",
    "rag pgvector gemini",
    "ai call answering system",
    "multi-tenant saas laravel",
    "voice ai for business",
    "fastapi twilio websocket",
  ],
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Building a Multi-Tenant AI Phone Agent SaaS",
    description:
      "Twilio Media Streams + Deepgram Voice Agent + Gemini RAG over pgvector, orchestrated by Laravel. Architecture, anti-hallucination design, and lessons learned.",
    siteName: "Hassan Rao",
    publishedTime: publishedDate,
    authors: ["Hassan Rao"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building a Multi-Tenant AI Phone Agent SaaS",
    description:
      "How I built an AI receptionist that answers real phone calls — architecture, RAG grounding, and real-time audio lessons.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${pageUrl}#article`,
  headline:
    "Building a Multi-Tenant AI Phone Agent SaaS with Python FastAPI, Laravel, Twilio, Deepgram & Gemini",
  description:
    "Architecture and lessons from building an AI receptionist platform that answers real phone calls with retrieval-grounded answers.",
  url: pageUrl,
  datePublished: publishedDate,
  dateModified: publishedDate,
  author: { "@id": `${baseUrl}/#person` },
  publisher: { "@id": `${baseUrl}/#person` },
  mainEntityOfPage: pageUrl,
  keywords:
    "AI voice agent, Twilio, Deepgram, Gemini, RAG, pgvector, Laravel, FastAPI, multi-tenant SaaS",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-white pt-6">{children}</h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-white pt-2">{children}</h3>;
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded bg-white/10 text-indigo-300 text-[13px] whitespace-nowrap">
      {children}
    </code>
  );
}

export default function AiPhoneAgentPost() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-indigo-400 transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>

          <header className="mb-12">
            <span className="inline-block px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-5">
              Case Study
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="gradient-text">
                Building a Multi-Tenant AI Phone Agent SaaS
              </span>{" "}
              <span className="text-white">
                with Python FastAPI, Laravel, Twilio, Deepgram &amp; Gemini
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} /> July 13, 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} /> 12 min read
              </span>
              <span>By Hassan Rao</span>
              <a
                href="https://ai-caller.hassanrao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <ExternalLink size={14} /> View it live
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Laravel", "FastAPI", "Twilio", "Deepgram", "Gemini", "pgvector", "Inertia + Vue"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs text-gray-400 bg-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </header>

          <div className="space-y-6 text-gray-400 leading-relaxed text-[15px]">
            <p>
              Most businesses lose customers on the phone. Calls go unanswered after hours,
              front desks get swamped, and callers who reach voicemail rarely call back. I
              built <strong className="text-white">AI Caller</strong> to fix that: a
              multi-tenant SaaS where any company can point a phone number at the platform,
              upload their knowledge base as PDFs, and get an AI receptionist that answers
              calls in a natural voice — and only says things it can back up with the
              company&apos;s own documents. It&apos;s live in production at{" "}
              <a
                href="https://ai-caller.hassanrao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                ai-caller.hassanrao.com
              </a>
              .
            </p>
            <p>
              This post walks through the architecture, the real-time audio pipeline, the
              retrieval-augmented generation (RAG) layer, and the anti-hallucination design
              that makes the whole thing safe to put in front of real customers.
            </p>

            <H2>What the platform does</H2>
            <p>
              A caller dials a business&apos;s number. Within a couple of seconds an AI agent
              greets them by the company&apos;s name, answers questions about services,
              prices, coverage and policies, tracks requests, captures leads, and hands off
              to a human when it should. Every word of the conversation is transcribed and
              stored, so the business can review calls in an admin dashboard.
            </p>
            <p>
              Crucially, it&apos;s <strong className="text-white">multi-tenant</strong>: one
              deployment serves many companies, each with its own phone numbers, documents,
              agent personality, voice, and even its own API keys if they want billing on
              their own accounts.
            </p>

            <H2>The architecture: two services, clear responsibilities</H2>
            <p>The system is split into two services that talk over an internal token-authenticated API:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-indigo-400">
              <li>
                <strong className="text-white">Laravel (PHP) — the brain of record.</strong>{" "}
                Multi-tenant admin built with Inertia and Vue: companies, plans, industries,
                phone numbers, agent configuration, document management, call logs and
                transcripts. It also owns the Twilio webhook: when a call comes in, Laravel
                resolves the tenant, validates the request signature, creates the call
                record, and returns TwiML.
              </li>
              <li>
                <strong className="text-white">Python (FastAPI) — the real-time voice service.</strong>{" "}
                A WebSocket bridge between Twilio Media Streams and Deepgram&apos;s Voice
                Agent API, plus the RAG pipeline: PDF ingestion, chunking, Gemini embeddings,
                and pgvector similarity search.
              </li>
            </ul>
            <p>
              PHP is excellent for the CRUD-and-billing side but not for holding thousands of
              long-lived WebSocket connections pumping binary audio frames. Python&apos;s{" "}
              <Code>asyncio</Code> handles that naturally. Splitting along that line means
              each service does what its runtime is best at.
            </p>

            <H2>The life of a phone call</H2>
            <ol className="list-decimal pl-6 space-y-2 marker:text-indigo-400">
              <li>
                Twilio receives the call and hits Laravel&apos;s voice webhook. Laravel looks
                up the called number, verifies the <Code>X-Twilio-Signature</Code>, checks
                that the company is active and its agent is enabled, and creates a call
                record.
              </li>
              <li>
                Laravel responds with TwiML: <Code>&lt;Connect&gt;&lt;Stream&gt;</Code>{" "}
                pointing at the Python service&apos;s WebSocket endpoint. From this moment,
                raw call audio (mulaw, 8kHz) flows to Python as base64 frames.
              </li>
              <li>
                On the stream&apos;s <Code>start</Code> message, Python takes the{" "}
                <Code>callSid</Code> and asks Laravel&apos;s internal API for the full call
                context: the tenant&apos;s system prompt, LLM model, voice, temperature,
                greeting, and the functions the agent may call. Tenant resolution is
                server-to-server — the caller can&apos;t influence it.
              </li>
              <li>
                Python opens a second WebSocket to Deepgram&apos;s Voice Agent API and sends
                a settings message assembled from that context. Deepgram handles the whole
                speech loop in one connection: Nova-3 speech-to-text, a &quot;think&quot;
                LLM (Gemini 2.5 Flash by default), and Aura-2 text-to-speech.
              </li>
              <li>
                The bridge then pumps audio both ways and reacts to events: transcripts are
                posted back to Laravel as they happen, and when the caller starts speaking
                over the agent, the bridge sends Twilio a <Code>clear</Code> message to drop
                queued agent audio — that&apos;s what makes interruptions (&quot;barge-in&quot;)
                feel natural instead of the agent talking over you.
              </li>
              <li>
                When the agent needs facts, Deepgram emits a function call request. Python
                executes it — usually a knowledge base search — and returns the result for
                the LLM to speak from.
              </li>
            </ol>

            <H2>RAG: grounding every answer in the tenant&apos;s documents</H2>
            <p>
              Each company uploads PDFs — price lists, service descriptions, policies. The
              ingestion pipeline extracts the text, chunks it with a paragraph-aware sliding
              window (~1,500 characters with 200 overlap), embeds each chunk with
              Gemini&apos;s embedding model, and stores the vectors in PostgreSQL with the{" "}
              <strong className="text-white">pgvector</strong> extension. No separate vector
              database to run — cosine similarity search lives right next to the relational
              data, with every query scoped by <Code>company_id</Code> so tenants can never
              see each other&apos;s content.
            </p>
            <p>
              One detail that measurably improves retrieval: Gemini lets you embed documents
              and queries with different task types (<Code>RETRIEVAL_DOCUMENT</Code> vs{" "}
              <Code>RETRIEVAL_QUERY</Code>), optimizing the two sides of the search
              separately. Results below a minimum similarity score are discarded rather than
              passed to the model — a weak match is worse than no match.
            </p>

            <H2>The anti-hallucination design</H2>
            <p>
              An AI that invents prices over the phone is a liability, not a product. The
              platform defends against that in three layers:
            </p>
            <H3>1. A mandatory search function</H3>
            <p>
              The agent is given a <Code>search_knowledge_base</Code> function and the system
              prompt requires calling it before answering <em>anything</em> factual —
              services, prices, delivery times, policies. The function&apos;s results are the
              only permitted source for factual claims. If retrieval returns nothing, the
              function replies <Code>NO_RELEVANT_INFORMATION_FOUND</Code> and the agent must
              say &quot;I don&apos;t have that information on hand&quot; and offer a human —
              never guess.
            </p>
            <H3>2. Prompt-injection defense</H3>
            <p>
              Retrieved chunks are wrapped in tags and explicitly labelled as reference data,
              never instructions. If someone uploads a PDF containing &quot;ignore your
              previous instructions&quot;, the agent has been told — at the system prompt
              level, which wins — to treat it as content, not commands.
            </p>
            <H3>3. Conservative generation</H3>
            <p>
              Low temperature, short spoken answers (one to three sentences — it&apos;s a
              phone call, not an essay), and industry-specific guardrails: healthcare agents
              never give diagnoses, service companies never quote binding prices that need an
              estimate.
            </p>
            <p>
              The admin panel includes a <strong className="text-white">test console</strong>{" "}
              — a text chat that runs the exact same system prompt, retrieval, and grounding
              rules as the phone agent. Businesses can interrogate their agent before a
              single customer calls it.
            </p>

            <H2>Multi-tenancy: industries as AI-generated templates</H2>
            <p>
              Every company belongs to an industry, and each industry has a base prompt
              template with rules tuned to what its callers actually ask. The interesting
              part: when a company signs up in an industry that doesn&apos;t exist yet, the
              platform <strong className="text-white">generates the industry template with
              an LLM</strong> — instructed to keep every safety rule from a reference
              template, adapt the scope rules, and add two or three industry-specific
              guardrails. The output is validated programmatically (the grounding function
              and required placeholders must survive) before it&apos;s accepted.
            </p>
            <p>
              Tenants can also bring their own keys: a company&apos;s own Gemini key runs
              embeddings and generation on their quota, and BYO Twilio numbers are validated
              against the company&apos;s own auth token instead of the platform&apos;s.
            </p>

            <H2>Lessons from real-time voice</H2>
            <ul className="list-disc pl-6 space-y-2 marker:text-indigo-400">
              <li>
                <strong className="text-white">Silence kills connections.</strong> When a
                caller goes on hold or mute, no audio flows and Deepgram times out the
                session. An 8-second keepalive ping keeps the agent alive through the gaps.
              </li>
              <li>
                <strong className="text-white">Barge-in is a product feature, not a nicety.</strong>{" "}
                Without clearing Twilio&apos;s audio buffer the moment the caller speaks, the
                agent finishes its sentence over them and the conversation immediately feels
                robotic.
              </li>
              <li>
                <strong className="text-white">Fail loud, and specifically.</strong>{" "}
                Free-tier LLM quota exhaustion surfacing as a generic 500 gets misdiagnosed
                as &quot;the service is down.&quot; Mapping a 429 to an actionable message
                (&quot;enable billing on the key or wait for reset&quot;) saved real
                debugging time.
              </li>
              <li>
                <strong className="text-white">Every call must end in a known state.</strong>{" "}
                Whatever happens — Deepgram drops, Twilio disconnects, an exception mid-call
                — a <Code>finally</Code> block reports the call as completed, transferred, or
                failed, so no call is ever stuck &quot;in progress&quot; in the dashboard.
              </li>
            </ul>

            <H2>Deployment</H2>
            <p>
              The whole platform — nginx, Laravel, the Python voice service, and PostgreSQL
              with pgvector — runs on a single AWS EC2 instance behind Let&apos;s Encrypt
              TLS, provisioned by shell scripts. A <Code>t3.small</Code> comfortably handles
              launch traffic; the heavy lifting (speech models, LLM inference) is on
              Deepgram&apos;s and Google&apos;s side, so the server mostly shuffles WebSocket
              frames. Scaling later means resizing the instance or splitting the voice
              service out — the internal API boundary already makes that a config change,
              not a rewrite.
            </p>

            <H2>The stack, summarized</H2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-left text-gray-300">
                    <th className="py-2 pr-4 font-semibold">Layer</th>
                    <th className="py-2 font-semibold">Technology</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-2 pr-4 text-white">Telephony</td><td className="py-2">Twilio Voice + Media Streams</td></tr>
                  <tr><td className="py-2 pr-4 text-white">Speech &amp; agent loop</td><td className="py-2">Deepgram Voice Agent API (Nova-3 STT, Aura-2 TTS)</td></tr>
                  <tr><td className="py-2 pr-4 text-white">Reasoning</td><td className="py-2">Gemini 2.5 Flash (per-tenant configurable)</td></tr>
                  <tr><td className="py-2 pr-4 text-white">Embeddings &amp; search</td><td className="py-2">Gemini embeddings + PostgreSQL pgvector</td></tr>
                  <tr><td className="py-2 pr-4 text-white">Voice bridge</td><td className="py-2">Python, FastAPI, asyncio WebSockets</td></tr>
                  <tr><td className="py-2 pr-4 text-white">Platform &amp; admin</td><td className="py-2">Laravel, Inertia, Vue, Tailwind</td></tr>
                  <tr><td className="py-2 pr-4 text-white">Infrastructure</td><td className="py-2">AWS EC2, nginx, Let&apos;s Encrypt</td></tr>
                </tbody>
              </table>
            </div>

            <p className="pt-4">
              Building AI Caller reinforced something I keep seeing in production AI work:
              the model is the easy part.{" "}
              <strong className="text-white">
                The product is the plumbing around it
              </strong>{" "}
              — tenant isolation, grounding guarantees, graceful failure, and an admin
              experience that lets a non-technical business trust what their agent will say.
            </p>

            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/10">
              <p className="text-white font-semibold mb-2">
                Need a voice agent, RAG pipeline, or AI automation for your business?
              </p>
              <p className="text-sm mb-4">
                I design and build production AI systems end to end — from telephony to
                deployment. Let&apos;s talk about yours.
              </p>
              <a
                href="/#contact"
                className="inline-block px-5 py-2 text-sm rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </article>

      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
