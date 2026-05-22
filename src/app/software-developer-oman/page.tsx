import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TechStack from "@/components/TechStack";
import FiverrReviews from "@/components/FiverrReviews";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQAccordion from "./FAQAccordion";
import ContentSection from "./ContentSection";
import { SiFiverr } from "react-icons/si";

const baseUrl = "https://hassanrao.com";
const pageUrl = `${baseUrl}/software-developer-oman`;

export const metadata: Metadata = {
  title: "Software Developer in Oman | Hassan Rao — Laravel, React, Node.js",
  description:
    "Hassan Rao is a Senior Software Developer based in Muscat, Oman with 4+ years of GCC enterprise experience. Specialising in Laravel, React, Next.js, Node.js, NestJS, and AWS. Available for freelance projects across Oman.",
  metadataBase: new URL(baseUrl),
  alternates: { canonical: pageUrl },
  keywords: [
    "software developer oman",
    "software developer in oman",
    "web developer oman",
    "freelance software developer oman",
    "laravel developer oman",
    "react developer oman",
    "nodejs developer oman",
    "full stack developer oman",
    "app developer oman",
    "software engineer muscat",
    "web developer muscat",
    "hire software developer oman",
    "software development services oman",
    "php developer oman",
  ],
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Software Developer in Oman | Hassan Rao",
    description:
      "Senior Software Developer based in Muscat, Oman. Laravel, React, Next.js, Node.js, AWS. 4+ years GCC enterprise experience. Available for freelance.",
    siteName: "Hassan Rao",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Developer in Oman | Hassan Rao",
    description:
      "Senior Software Developer in Muscat, Oman. Laravel, React, Next.js, Node.js, AWS. Available for freelance projects.",
  },
};

// FAQ structured data for Google rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are you a software developer based in Oman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I'm Hassan Rao, a Senior Software Engineer currently based in Muscat, Oman with 4+ years of GCC enterprise experience.",
      },
    },
    {
      "@type": "Question",
      name: "What software development services do you offer in Oman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full-stack web development, REST API design, mobile app development, cloud architecture on AWS, Laravel/PHP, React, Next.js, Node.js, and NestJS.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available as a freelance software developer in Oman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I take on select freelance projects alongside my full-time role. Reach me via the contact form, WhatsApp, or Fiverr.",
      },
    },
    {
      "@type": "Question",
      name: "How do I hire a software developer in Oman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out the contact form or reach me via WhatsApp. I'll respond within a few hours with a clear proposal.",
      },
    },
  ],
};

const projects = [
  {
    title: "Multi-Tenant Logistics SaaS Platform",
    description:
      "End-to-end logistics platform deployed across Oman, UAE, and Saudi Arabia — supporting 15 branches nationwide. Microservices architecture with real-time shipment tracking, third-party integrations (DHL, AJEX, iMile), and AI-driven data entry automation.",
    tags: ["Laravel", "Microservices", "AWS", "Redis", "MySQL"],
    badge: "🇴🇲 Oman Enterprise",
  },
  {
    title: "Translation Management API",
    description:
      "Production-grade REST API for locale-based translation management with Redis tag-based caching, cursor-based export for millions of records, OAuth 2.0 authentication, and full PHPUnit test coverage.",
    tags: ["PHP 8.2", "Laravel", "Redis", "Docker", "MySQL"],
    badge: "⚡ High Performance",
  },
  {
    title: "E-Commerce Platform with Payment Integration",
    description:
      "Custom e-commerce solution with product catalogue management, cart system, order tracking, and payment gateway integration. Built for a GCC-based retail client with Arabic/English support.",
    tags: ["Laravel", "Vue.js", "MySQL", "REST API"],
    badge: "🛒 GCC Retail",
  },
  {
    title: "AI-Powered Workflow Automation",
    description:
      "Automated shipment data entry workflows using Google Gemini AI — eliminating 6 hours of daily manual effort. Integrated with existing logistics infrastructure via event-driven architecture on AWS SQS and Lambda.",
    tags: ["Google Gemini", "AWS Lambda", "SQS", "Node.js"],
    badge: "🤖 AI Automation",
  },
];

export default function OmanLandingPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold" style={{ fontFamily: "monospace" }}>
            hassanrao<span className="text-indigo-400">.</span>com
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm px-4 py-1.5 rounded-full border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-200"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-6">
              📍 Based in Muscat, Oman
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Senior{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1, #a855f7, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Software Developer
              </span>{" "}
              in Oman
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm Hassan Rao — a Full Stack Software Engineer with{" "}
              <strong className="text-white">4+ years of GCC enterprise experience</strong> building
              scalable web applications, APIs, and cloud systems for businesses across{" "}
              <strong className="text-white">Oman, UAE, and Saudi Arabia</strong>. Available for
              freelance projects in Muscat and remotely.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-all duration-200"
              >
                Hire Me in Oman
              </a>
              <a
                href="https://wa.me/96899763464"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp (Oman)
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "4+", label: "Years in GCC" },
              { value: "300+", label: "Projects Delivered" },
              { value: "4.9★", label: "Fiverr Rating" },
              { value: "15", label: "Branches Supported in Oman" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center"
              >
                <div className="text-3xl font-extrabold text-indigo-400 mb-1">{value}</div>
                <div className="text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <TechStack />

      {/* ── Services ── */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-4">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Software Development Services in Oman
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From custom web applications to cloud infrastructure — I deliver production-ready
              solutions for businesses in Muscat and across the GCC.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🌐",
                title: "Web Application Development",
                desc: "Custom Laravel, Next.js, and Vue.js web applications tailored for Omani businesses. Fast, secure, and scalable.",
              },
              {
                icon: "⚙️",
                title: "REST API Development",
                desc: "Well-documented RESTful APIs with OAuth 2.0 security. Third-party integrations with logistics partners, payment gateways, and ERP systems.",
              },
              {
                icon: "☁️",
                title: "Cloud Architecture (AWS)",
                desc: "Serverless systems with AWS Lambda, SQS, and S3. Event-driven architecture that scales with your business.",
              },
              {
                icon: "🏗️",
                title: "SaaS Platform Development",
                desc: "Multi-tenant SaaS platforms with subscription management, role-based access, and white-labelling for GCC markets.",
              },
              {
                icon: "🤖",
                title: "AI & Workflow Automation",
                desc: "AI-driven automation using Google Gemini to eliminate repetitive manual work. Proven to save 6+ hours daily for clients.",
              },
              {
                icon: "📱",
                title: "Mobile App Backend",
                desc: "Robust Node.js / NestJS backends powering iOS and Android apps with real-time updates, push notifications, and secure auth.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Projects Built for Oman & the GCC
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Real enterprise software deployed and running in production across the Gulf region.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map(({ title, description, tags, badge }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-white font-semibold text-lg leading-snug">{title}</h3>
                  <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 whitespace-nowrap">
                    {badge}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Content ── */}
      <ContentSection />

      {/* ── Fiverr Profile ── */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 text-sm text-green-400 border border-green-500/30 rounded-full bg-green-500/10 mb-6">
            Fiverr Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Top-Rated Freelance Developer on Fiverr
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Beyond my enterprise role in Oman, I've delivered{" "}
            <strong className="text-white">300+ projects</strong> to international clients as a
            top-rated freelancer — maintaining a{" "}
            <strong className="text-white">4.9★ rating</strong> with{" "}
            <strong className="text-white">308 five-star reviews</strong>. Whether you're a startup
            or an established Omani business, you get the same quality I deliver to global clients.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: "4.9★", label: "Average Rating" },
              { value: "308", label: "Five-Star Reviews" },
              { value: "439", label: "Orders Completed" },
              { value: "6 yrs", label: "On Fiverr" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-center"
              >
                <div className="text-2xl font-bold text-green-400 mb-1">{value}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>

          <a
            href="https://www.fiverr.com/hassanjavaidrao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-all duration-200"
          >
            <SiFiverr className="w-5 h-5" />
            View My Fiverr Profile
          </a>
        </div>
      </section>

      {/* ── Reviews ── */}
      <FiverrReviews />

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Common questions from clients looking to hire a software developer in Oman.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── Contact ── */}
      <Contact />

      {/* ── Footer ── */}
      <Footer />

      {/* ── WhatsApp ── */}
      <WhatsAppButton />
    </div>
  );
}
