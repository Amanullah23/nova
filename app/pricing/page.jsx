"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Zap, Shield, Crown } from "lucide-react";
import Link from "next/link";

// Reference rate only — not a live quote. Update periodically; 1 USD ≈ 65.5 AFN (Aug 2026).
const USD_TO_AFN = 65.5;
const formatAfn = (usd) =>
  `؋${Math.round((usd * USD_TO_AFN) / 100) * 100}`.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ",",
  );

const plans = [
  {
    icon: Zap,
    name: "Basic Plan",
    priceUsd: 49,
    period: "/ project",
    tag: null,
    description: "For small projects and startups getting started.",
    features: [
      "2 Years Warranty",
      "Standard Support",
      "5 Projects",
      "Basic Reporting",
      "Email Assistance",
    ],
    cta: "Choose Plan",
    highlighted: false,
  },
  {
    icon: Shield,
    name: "Standard Plan",
    priceUsd: 99,
    period: "/ project",
    tag: "Most Popular",
    description: "Best for growing companies with active projects.",
    features: [
      "2 Years Warranty",
      "Priority Support",
      "20 Projects",
      "Advanced Reporting",
      "Phone & Email Support",
    ],
    cta: "Choose Plan",
    highlighted: true,
  },
  {
    icon: Crown,
    name: "Premium Plan",
    priceUsd: 199,
    period: "/ project",
    tag: null,
    description: "For enterprise and large-scale construction projects.",
    features: [
      "2 Years Warranty",
      "24/7 Dedicated Support",
      "Unlimited Projects",
      "Full Analytics Suite",
      "On-Site Consultation",
    ],
    cta: "Choose Plan",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main className="bg-paper">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full pt-48 pb-32 px-6 md:px-12 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="flex items-center gap-2 px-4 py-[6px] rounded-full border border-brand/30 bg-brand/10 text-brand-dark font-mono text-[11px] font-medium tracking-[0.18em] uppercase">
              <span className="w-[6px] h-[6px] rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
              Transparent Pricing
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight"
            >
              Simple, Honest
              <br />
              <span className="text-brand-dark">Pricing Plans</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-steel text-lg leading-relaxed"
          >
            No hidden fees. No surprises. Choose the plan that fits your project
            scope and budget.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative w-full py-10 px-6 md:px-12 bg-paper">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative rounded-3xl overflow-hidden flex flex-col ${
                    plan.highlighted
                      ? "bg-brand md:-translate-y-4 shadow-[0_20px_60px_rgba(126,199,66,0.25)]"
                      : "bg-white border border-steel-light shadow-sm"
                  }`}
                >
                  {!plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}

                  <div className="relative z-10 p-8 flex flex-col gap-6 flex-1">
                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          plan.highlighted
                            ? "bg-ink/15 border border-ink/20"
                            : "bg-brand/10 border border-brand/20"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${plan.highlighted ? "text-ink" : "text-brand-dark"}`}
                        />
                      </div>
                      {plan.tag ? (
                        <span className="px-3 py-[5px] bg-ink text-brand font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                          {plan.tag}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-steel/40">
                          <span className="w-2 h-px bg-current" />
                          PLAN·0{index + 1}
                        </span>
                      )}
                    </div>

                    {/* Plan name + description */}
                    <div>
                      <h3
                        className={`font-display font-bold text-xl tracking-tight ${
                          plan.highlighted ? "text-ink" : "text-ink"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`text-[13px] mt-1 leading-relaxed ${
                          plan.highlighted ? "text-ink/70" : "text-steel"
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div
                      className={`flex flex-col gap-1 pb-6 border-b ${
                        plan.highlighted
                          ? "border-ink/20"
                          : "border-steel-light"
                      }`}
                    >
                      <div className="flex items-end gap-1">
                        <span
                          className={`font-display text-5xl font-bold leading-none ${
                            plan.highlighted ? "text-ink" : "text-ink"
                          }`}
                        >
                          ${plan.priceUsd}
                        </span>
                        <span
                          className={`text-[13px] mb-1 ${
                            plan.highlighted ? "text-ink/60" : "text-steel"
                          }`}
                        >
                          {plan.period}
                        </span>
                      </div>
                      <span
                        className={`font-mono text-[11px] ${
                          plan.highlighted ? "text-ink/50" : "text-steel/70"
                        }`}
                      >
                        ≈ {formatAfn(plan.priceUsd)} AFN
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-3 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                              plan.highlighted ? "bg-ink/20" : "bg-brand/15"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${
                                plan.highlighted
                                  ? "text-ink"
                                  : "text-brand-dark"
                              }`}
                            />
                          </div>
                          <span
                            className={`text-[13px] ${
                              plan.highlighted ? "text-ink" : "text-steel"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/#contact"
                      className={`mt-4 flex items-center justify-center gap-2 w-full py-[13px] rounded-xl font-bold text-[14px] tracking-wide transition-all duration-200 ${
                        plan.highlighted
                          ? "bg-brand-deep text-white hover:bg-ink"
                          : "bg-brand hover:bg-brand-dark text-ink hover:shadow-[0_0_24px_rgba(126,199,66,0.3)]"
                      }`}
                    >
                      {plan.cta}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-steel/60 font-mono text-[11px] mt-8"
          >
            AFN prices are an approximate reference at ~65.5 AFN/USD and may
            vary at time of invoicing.
          </motion.p>
        </div>
      </section>

      {/* Larger Plan CTA */}
      <section className="relative w-full py-32 px-6 md:px-12 bg-surface overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.04] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
          CUSTOM
        </div>

        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-dashed border-brand/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border-[50px] border-dashed border-ink/[0.04] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-brand/25 pointer-events-none z-0" />
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/b.png"
                  alt="Custom Pricing"
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-8"
            >
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-ink" />
                  </div>
                  <span className="font-mono text-ink text-[12px] font-bold tracking-[0.25em] uppercase">
                    Custom Plans
                  </span>
                </div>

                <h2 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight">
                  Need a
                  <br />
                  <span className="text-brand-dark">Larger Plan?</span>
                </h2>
              </div>

              <p className="text-steel text-lg leading-relaxed">
                Every major project is unique. If none of our standard plans fit
                your scope, we'll build a custom package tailored to your exact
                requirements — timeline, budget, and scale.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Fully custom project scope",
                  "Dedicated project team",
                  "Flexible payment structure",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-dark" />
                    </div>
                    <span className="text-steel text-[14px]">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className="flex items-center gap-2 w-fit px-7 py-[13px] bg-brand-deep hover:bg-brand text-white hover:text-ink font-bold text-[14px] tracking-wide rounded-xl transition-all duration-300 hover:shadow-[0_0_28px_rgba(126,199,66,0.3)]"
              >
                Contact Us
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
