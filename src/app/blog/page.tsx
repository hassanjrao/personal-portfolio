import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const baseUrl = "https://hassanrao.com";

export const metadata: Metadata = {
  title: "Blog — Engineering Notes & Case Studies",
  description:
    "Case studies and engineering notes by Hassan Rao — building production AI systems, SaaS platforms, and web applications with Laravel, Next.js, and Python.",
  metadataBase: new URL(baseUrl),
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    type: "website",
    url: `${baseUrl}/blog`,
    title: "Blog — Hassan Rao",
    description:
      "Case studies and engineering notes on production AI systems, SaaS platforms, and web development.",
    siteName: "Hassan Rao",
  },
};

const posts = [
  {
    slug: "ai-phone-agent-saas-laravel-twilio-deepgram",
    title:
      "Building a Multi-Tenant AI Phone Agent SaaS with Laravel, Twilio, Deepgram & Gemini",
    excerpt:
      "How I built an AI receptionist platform that answers real phone calls: a real-time audio bridge between Twilio and Deepgram's Voice Agent API, RAG over pgvector, and a three-layer anti-hallucination design.",
    date: "July 13, 2026",
    readTime: "12 min read",
    tags: ["Laravel", "FastAPI", "Twilio", "Deepgram", "Gemini", "pgvector"],
  },
];

export default function BlogIndex() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-24 px-4 min-h-[70vh]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-4">
              Blog
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Engineering Notes &amp; Case Studies
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Deep dives into systems I&apos;ve built — AI, SaaS, and everything in
              between.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-white/10 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
                <h2 className="text-white font-semibold text-xl mb-3 group-hover:text-indigo-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-gray-400 bg-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm text-indigo-400 group-hover:gap-2.5 transition-all">
                  Read the case study <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
