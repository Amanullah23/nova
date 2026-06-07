"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Zap, Shield, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    icon: Zap,
    name: "Basic Plan",
    price: "$49",
    period: "/ project",
    tag: null,
    description: "For small projects and startups getting started.",
    features: [
      "10GB Storage",
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
    price: "$99",
    period: "/ project",
    tag: "Most Popular",
    description: "Best for growing companies with active projects.",
    features: [
      "50GB Storage",
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
    price: "$199",
    period: "/ project",
    tag: null,
    description: "For enterprise and large-scale construction projects.",
    features: [
      "200GB Storage",
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
    <main className="bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full pt-48 pb-32 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4a348]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="flex items-center gap-2 px-4 py-[6px] rounded-full border border-[#d4a348]/30 bg-[#d4a348]/10 text-[#d4a348] text-[11px] font-semibold tracking-[0.18em] uppercase">
              <span className="w-[6px] h-[6px] rounded-full bg-[#d4a348] animate-pulse" />
              Transparent Pricing
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight"
            >
              Simple, Honest
              <br />
              <span className="text-[#d4a348]">Pricing Plans</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            No hidden fees. No surprises. Choose the plan that fits your
            project scope and budget.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative w-full py-10 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative rounded-3xl overflow-hidden flex flex-col ${
                    plan.highlighted
                      ? "bg-[#d4a348]"
                      : "bg-[#111111] border border-[#1e1e1e]"
                  }`}
                >
                  {!plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4a348] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}

                  <div className="relative z-10 p-8 flex flex-col gap-6 flex-1">

                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        plan.highlighted
                          ? "bg-[#0a0a0a]/20 border border-[#0a0a0a]/20"
                          : "bg-[#d4a348]/10 border border-[#d4a348]/20"
                      }`}>
                        <Icon className={`w-5 h-5 ${plan.highlighted ? "text-[#0a0a0a]" : "text-[#d4a348]"}`} />
                      </div>
                      {plan.tag && (
                        <span className="px-3 py-[5px] bg-[#0a0a0a] text-[#d4a348] text-[10px] font-black tracking-widest uppercase rounded-full">
                          {plan.tag}
                        </span>
                      )}
                    </div>

                    {/* Plan name + description */}
                    <div>
                      <h3 className={`font-black text-xl tracking-tight ${
                        plan.highlighted ? "text-[#0a0a0a]" : "text-white"
                      }`}>
                        {plan.name}
                      </h3>
                      <p className={`text-[13px] mt-1 leading-relaxed ${
                        plan.highlighted ? "text-[#0a0a0a]/70" : "text-zinc-500"
                      }`}>
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className={`flex items-end gap-1 pb-6 border-b ${
                      plan.highlighted ? "border-[#0a0a0a]/20" : "border-[#1e1e1e]"
                    }`}>
                      <span className={`text-5xl font-black leading-none ${
                        plan.highlighted ? "text-[#0a0a0a]" : "text-white"
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-[13px] mb-1 ${
                        plan.highlighted ? "text-[#0a0a0a]/60" : "text-zinc-500"
                      }`}>
                        {plan.period}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-3 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            plan.highlighted ? "bg-[#0a0a0a]/20" : "bg-[#d4a348]/15"
                          }`}>
                            <Check className={`w-3 h-3 ${
                              plan.highlighted ? "text-[#0a0a0a]" : "text-[#d4a348]"
                            }`} />
                          </div>
                          <span className={`text-[13px] ${
                            plan.highlighted ? "text-[#0a0a0a]" : "text-zinc-400"
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/#contact"
                      className={`mt-4 flex items-center justify-center gap-2 w-full py-[13px] rounded-xl font-black text-[14px] tracking-wide transition-all duration-200 ${
                        plan.highlighted
                          ? "bg-[#0a0a0a] text-white hover:bg-[#1a1a1a]"
                          : "bg-[#d4a348] hover:bg-[#c49438] text-[#0a0a0a] hover:shadow-[0_0_24px_rgba(212,163,72,0.3)]"
                      }`}
                    >
                      {plan.cta}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Ghost number */}
                  <div className={`absolute -bottom-4 -right-4 text-[120px] font-black leading-none select-none pointer-events-none ${
                    plan.highlighted ? "text-[#0a0a0a]/8" : "text-white/[0.025]"
                  }`}>
                    0{index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Larger Plan CTA */}
      <section className="relative w-full py-32 px-6 md:px-12 bg-[#f5f0e8] overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-[#e8e0d0] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
          CUSTOM
        </div>

        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-[#d4a348]/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border-[50px] border-[#0a0a0a]/5 pointer-events-none" />

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
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-[#d4a348]/25 pointer-events-none z-0" />
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-[#f0ebe0]">
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
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#d4a348] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
                  </div>
                  <span className="text-[#0a0a0a] text-[12px] font-bold tracking-[0.25em] uppercase">
                    Custom Plans
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-[#0a0a0a] leading-tight tracking-tight">
                  Need a
                  <br />
                  <span className="text-[#d4a348]">Larger Plan?</span>
                </h2>
              </div>

              <p className="text-[#5a5040] text-lg leading-relaxed">
                Every major project is unique. If none of our standard plans
                fit your scope, we'll build a custom package tailored to your
                exact requirements — timeline, budget, and scale.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Fully custom project scope",
                  "Dedicated project team",
                  "Flexible payment structure",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#d4a348]/15 border border-[#d4a348]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#d4a348]" />
                    </div>
                    <span className="text-[#5a5040] text-[14px]">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className="flex items-center gap-2 w-fit px-7 py-[13px] bg-[#0a0a0a] hover:bg-[#d4a348] text-white hover:text-[#0a0a0a] font-black text-[14px] tracking-wide rounded-xl transition-all duration-300 hover:shadow-[0_0_28px_rgba(212,163,72,0.3)]"
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