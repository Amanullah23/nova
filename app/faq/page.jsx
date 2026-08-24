"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

const faqGroups = [
  {
    category: "Projects & Timelines",
    items: [
      {
        q: "How long does a typical construction project take?",
        a: "It depends on scope — a residential build usually runs 4–8 months, while larger commercial or infrastructure projects can take 12 months or more. We give every client a detailed project timeline during the initial consultation, before any contract is signed.",
      },
      {
        q: "Can I make changes once construction has started?",
        a: "Yes, though changes after groundbreaking can affect both timeline and budget. We document every change request formally and give you updated cost and schedule estimates before proceeding, so there are no surprises.",
      },
      {
        q: "Do you handle projects outside of Kabul?",
        a: "Yes. We've delivered projects in Herat, Mazar-i-Sharif, and Kandahar in addition to Kabul, and we're open to discussing projects in other regions of Afghanistan depending on scope.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "How is pricing determined for a project?",
        a: "Our published plans on the Pricing page cover standard project scopes. For anything larger or more specific, we scope the project first — materials, labor, timeline — and provide a custom quote tailored to your requirements.",
      },
      {
        q: "What payment structure do you use?",
        a: "Most projects are billed in milestone-based installments tied to construction phases, rather than a single upfront payment. Exact terms are agreed in the contract before work begins.",
      },
      {
        q: "Do you offer a warranty on completed work?",
        a: "Yes — all our plans include a 2-year warranty covering structural workmanship. Specific material warranties vary by supplier and are detailed in your project contract.",
      },
    ],
  },
  {
    category: "Process & Compliance",
    items: [
      {
        q: "Are you a licensed construction company?",
        a: "Yes, NOVA INC. operates as a licensed construction and engineering firm in Afghanistan, with a team of qualified engineers overseeing structural, civil, and project management work.",
      },
      {
        q: "Who manages my project day-to-day?",
        a: "Each project is assigned a dedicated project manager who serves as your main point of contact, coordinating between our engineering, operations, and finance departments so you're not chasing different people for updates.",
      },
      {
        q: "What safety standards do you follow on-site?",
        a: "Safety is a core value across every site we operate — from structural steel fabrication to residential builds. Our teams follow standard site safety protocols, and safety performance is part of how we evaluate every project's success.",
      },
    ],
  },
];

const FaqAccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-steel-light last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-ink font-bold text-[16px] md:text-[17px] leading-snug group-hover:text-brand-dark transition-colors duration-200">
          {item.q}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 motion-reduce:transition-none ${
            isOpen
              ? "bg-brand border-brand rotate-45"
              : "bg-paper border-steel-light group-hover:border-brand/40"
          }`}
        >
          <Plus className={`w-4 h-4 ${isOpen ? "text-ink" : "text-steel"}`} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-steel text-[14px] leading-relaxed pb-6 pr-12">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FaqPage() {
  const [openKey, setOpenKey] = useState("Projects & Timelines-0");

  return (
    <main className="bg-paper">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full bg-surface overflow-hidden flex items-center justify-center pt-48 pb-28 px-6 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex items-center gap-2 px-4 py-[6px] rounded-full border border-brand/30 bg-brand/10 text-brand-dark font-mono text-[11px] font-medium tracking-[0.18em] uppercase">
              <span className="w-[6px] h-[6px] rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
              Frequently Asked Questions
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight"
            >
              Questions, <span className="text-brand-dark">Answered</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-steel text-base md:text-lg leading-relaxed max-w-xl"
          >
            Everything clients most often ask us about timelines, pricing, and
            how we run a project — from first consultation to final handover.
          </motion.p>
        </div>
      </section>

      {/* FAQ GROUPS */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-paper overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.03] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
          FAQ
        </div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-16">
          {faqGroups.map((group, gi) => (
            <div key={group.category}>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-6 h-px bg-brand" />
                <span className="font-mono text-brand-dark text-[11px] font-bold tracking-[0.25em] uppercase">
                  {group.category}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border border-steel-light rounded-3xl px-6 md:px-8"
              >
                {group.items.map((item, ii) => {
                  const key = `${group.category}-${ii}`;
                  return (
                    <FaqAccordionItem
                      key={key}
                      item={item}
                      isOpen={openKey === key}
                      onClick={() => setOpenKey(openKey === key ? null : key)}
                    />
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Still have a <span className="text-brand">question?</span>
            </motion.h2>
            <p className="text-steel-light text-[14px] mt-2">
              Reach out directly — we typically respond within 24 hours.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-8 py-[14px] bg-brand hover:bg-brand-dark text-ink font-bold text-[14px] tracking-wide rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_rgba(126,199,66,0.35)]"
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
