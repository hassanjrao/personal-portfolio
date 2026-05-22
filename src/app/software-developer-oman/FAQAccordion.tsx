"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Are you a software developer based in Oman?",
    a: "Yes. I'm Hassan Rao, a Senior Software Engineer currently based in Muscat, Oman. I've been working in the GCC region for 4+ years, building enterprise-grade software for leading logistics companies across Oman, UAE, and Saudi Arabia.",
  },
  {
    q: "What software development services do you offer in Oman?",
    a: "I offer full-stack web development, REST API design, mobile app development, cloud architecture on AWS, database design, Laravel/PHP development, React and Next.js front-ends, and Node.js/NestJS back-ends. I also provide AI-driven automation using Google Gemini.",
  },
  {
    q: "Can you build a Laravel application for my business in Oman?",
    a: "Absolutely. Laravel is one of my primary frameworks. I've built production multi-tenant SaaS platforms in Laravel processing thousands of shipments daily. Whether it's a business portal, booking system, or custom ERP — I can deliver it.",
  },
  {
    q: "Do you develop web applications for companies in Muscat?",
    a: "Yes. I've worked directly with companies in Muscat and have deep familiarity with the local business landscape. I understand the requirements of Omani enterprises and can build web applications that meet both technical and regulatory expectations.",
  },
  {
    q: "Are you available as a freelance software developer in Oman?",
    a: "Yes. Alongside my full-time engineering role, I take on select freelance projects. You can reach me via the contact form, WhatsApp, or my Fiverr profile. I'm responsive and transparent about timelines and deliverables.",
  },
  {
    q: "What industries have you worked with in Oman?",
    a: "Primarily logistics, supply chain, and SaaS. My flagship project is a multi-tenant logistics platform deployed for one of Oman's largest logistics companies, operating across 15 branches nationwide — integrating with partners like DHL, AJEX, and iMile.",
  },
  {
    q: "Can you build and integrate REST APIs for Omani businesses?",
    a: "Yes. API design is core to my work. I've built secure OAuth 2.0-protected APIs, machine-to-machine integrations, and third-party logistics partner integrations. I follow RESTful standards and document everything clearly.",
  },
  {
    q: "Do you work with AWS cloud services for projects in Oman?",
    a: "Yes. I use AWS Lambda, S3, SQS, and CloudWatch regularly. I've architected event-driven, serverless systems that export millions of records at minimal cost. I can help Omani businesses migrate to or build on AWS.",
  },
  {
    q: "How do I hire a software developer in Oman?",
    a: "Simply fill out the contact form on this page or reach me via WhatsApp. I'll respond within a few hours. We'll discuss your project scope, timeline, and budget — and I'll provide a clear proposal.",
  },
  {
    q: "What is your typical project delivery timeline?",
    a: "It depends on scope. A landing page or simple web app typically takes 1–2 weeks. A full SaaS platform or complex API integration can take 4–12 weeks. I provide a detailed timeline before starting any project.",
  },
  {
    q: "Do you offer ongoing maintenance and support after project delivery?",
    a: "Yes. I provide post-launch support and can be retained for ongoing maintenance, feature additions, and performance monitoring. Many clients choose a monthly retainer for continuous development.",
  },
  {
    q: "Can you work with React and Vue.js for front-end development in Oman?",
    a: "Yes. I have strong expertise in both React.js and Vue.js. I build responsive, fast, and SEO-optimised front-ends using Next.js and Nuxt.js. I also work with Livewire for Laravel full-stack applications.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03]"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-white/[0.04] transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-sm sm:text-base font-medium text-white">{faq.q}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-indigo-400 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
