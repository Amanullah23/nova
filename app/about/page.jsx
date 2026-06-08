"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Shield, Star, Lightbulb } from "lucide-react";
import Link from "next/link";

const values = [
  {
    number: "01",
    icon: Star,
    title: "Quality",
    description:
      "We maintain the highest standards in all our projects, using modern materials and technology to ensure lasting construction that stands the test of time.",
  },
  {
    number: "02",
    icon: Shield,
    title: "Integrity",
    description:
      "Honesty and transparency guide every decision we make, ensuring trusted relationships with clients, partners, and communities.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously adopt new technologies and methods to improve efficiency and deliver exceptional results on every project.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "80+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "20+", label: "Trusted Partners" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f5f0e8]">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center pt-48 pb-32 px-6 md:px-12">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        {/* Amber glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d4a348]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex items-center gap-2 px-4 py-[6px] rounded-full border border-[#d4a348]/30 bg-[#d4a348]/10 text-[#d4a348] text-[11px] font-semibold tracking-[0.18em] uppercase">
              <span className="w-[6px] h-[6px] rounded-full bg-[#d4a348] animate-pulse" />
              About NOVA INC.
            </span>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col gap-1">
            {["Building Strong,", "Sustainable", "Futures."].map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight ${
                    word === "Sustainable" ? "text-[#d4a348]" : "text-white"
                  }`}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl"
          >
            NOVA Inc. Construction combines technical excellence with
            client-focused solutions to create safe, durable, and cost-effective
            projects that contribute to community growth and future development.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-7 py-[13px] bg-[#d4a348] hover:bg-[#c49438] text-[#0a0a0a] font-black text-[14px] tracking-wide rounded-xl transition-all duration-200 hover:shadow-[0_0_28px_rgba(212,163,72,0.3)]"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#projects"
              className="flex items-center gap-2 px-7 py-[13px] border border-[#2a2a2a] hover:border-[#d4a348]/40 text-zinc-300 hover:text-white font-medium text-[14px] rounded-xl transition-all duration-200 bg-white/[0.03] hover:bg-white/[0.06]"
            >
              View Our Work →
            </Link>
          </motion.div>
        </div>

        {/* Bottom fade into cream */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f5f0e8] to-transparent pointer-events-none" />
      </section>

      {/* STATS BAR */}
      <section className="relative bg-[#f5f0e8] py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e0d8c8] rounded-3xl overflow-hidden shadow-sm -mt-6 relative z-10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white px-8 py-8 flex flex-col gap-1">
                <span className="text-4xl font-black text-[#0a0a0a]">
                  {stat.value}
                </span>
                <span className="text-[11px] text-[#8a7a60] uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative w-full py-32 px-6 md:px-12 bg-[#f5f0e8] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-[#e8e0d0] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
          NOVA
        </div>
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-[#d4a348]/10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-[#d4a348]/25 pointer-events-none z-0" />
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/b.png"
                  alt="Who We Are"
                  width={600}
                  height={500}
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#1e1e1e] rounded-xl px-4 py-3">
                    <div className="w-2 h-2 rounded-full bg-[#d4a348] animate-pulse shrink-0" />
                    <p className="text-white text-[13px] font-semibold">
                      Trusted since 2014 — Kabul, Afghanistan
                    </p>
                  </div>
                </div>
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
              className="flex flex-col gap-8 order-1 lg:order-2"
            >
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#d4a348] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
                  </div>
                  <span className="text-[#0a0a0a] text-[12px] font-bold tracking-[0.25em] uppercase">
                    Who We Are
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-tight tracking-tight">
                  A Trusted Name in
                  <br />
                  <span className="text-[#d4a348]">Construction</span>
                </h2>
              </div>

              <p className="text-[#5a5040] text-base leading-relaxed">
                NOVA INC Construction Company is a trusted name in the
                construction sector, delivering high-quality residential,
                commercial, and infrastructure projects across Afghanistan. With
                years of experience and a team of skilled engineers, we focus on
                innovation, durability, and excellence.
              </p>

              <p className="text-[#5a5040] text-base leading-relaxed">
                Our mission is to build long-lasting structures that support
                development, create value for clients, and contribute to a
                better future for local communities.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Skilled team of engineers and specialists",
                  "Modern materials and construction methods",
                  "Commitment to safety and sustainability",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#d4a348]/15 border border-[#d4a348]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#d4a348]" />
                    </div>
                    <span className="text-[#5a5040] text-[14px]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative w-full py-32 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4a348]/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-px bg-[#d4a348]" />
              <span className="text-[#d4a348] text-[11px] font-bold tracking-[0.25em] uppercase">
                Our Direction
              </span>
              <span className="w-8 h-px bg-[#d4a348]" />
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight"
              >
                Mission & <span className="text-[#d4a348]">Vision</span>
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              id="mission"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-[#111111] border border-[#1e1e1e] rounded-3xl p-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4a348] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-[5px] bg-[#d4a348] text-[#0a0a0a] text-[10px] font-black tracking-widest uppercase rounded-full">
                    Mission
                  </span>
                  <span className="text-[#1e1e1e] text-6xl font-black">01</span>
                </div>
                <h3 className="text-white font-black text-2xl tracking-tight group-hover:text-[#d4a348] transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed">
                  To deliver innovative, sustainable, and high-quality
                  construction solutions that shape modern cities and resilient
                  communities — built with integrity and engineered for the
                  future.
                </p>
                <div className="flex flex-col gap-3 pt-4 border-t border-[#1e1e1e]">
                  {[
                    "Client-centered approach",
                    "Safety first on every site",
                    "On-time delivery guaranteed",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#d4a348]/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#d4a348]" />
                      </div>
                      <span className="text-zinc-500 text-[13px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 text-[100px] font-black text-white/[0.025] leading-none select-none pointer-events-none">
                01
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              id="vision"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-[#d4a348] rounded-3xl p-10 overflow-hidden"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-[5px] bg-[#0a0a0a] text-[#d4a348] text-[10px] font-black tracking-widest uppercase rounded-full">
                    Vision
                  </span>
                  <span className="text-[#c49438] text-6xl font-black">02</span>
                </div>
                <h3 className="text-[#0a0a0a] font-black text-2xl tracking-tight">
                  Our Vision
                </h3>
                <p className="text-[#0a0a0a]/75 text-[15px] leading-relaxed">
                  To be a leading construction and engineering company
                  recognized for transforming communities through innovation,
                  sustainability, and world-class project execution across
                  Afghanistan and beyond.
                </p>
                <div className="flex flex-col gap-3 pt-4 border-t border-[#0a0a0a]/15">
                  {[
                    "Regional leader in construction",
                    "Sustainable building practices",
                    "Empowering local communities",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#0a0a0a]/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#0a0a0a]" />
                      </div>
                      <span className="text-[#0a0a0a]/70 text-[13px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 text-[100px] font-black text-[#0a0a0a]/8 leading-none select-none pointer-events-none">
                02
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative w-full py-32 px-6 md:px-12 bg-[#f5f0e8] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-[#e8e0d0] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
          VALUES
        </div>
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full border-[50px] border-[#0a0a0a]/5 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 rounded-full bg-[#d4a348] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
                </div>
                <span className="text-[#0a0a0a] text-[12px] font-bold tracking-[0.25em] uppercase">
                  Core Values
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-6xl font-black text-[#0a0a0a] leading-tight tracking-tight"
                >
                  What We
                  <br />
                  <span className="text-[#d4a348]">Stand For</span>
                </motion.h2>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#5a5040] text-lg leading-relaxed"
            >
              Every project we take on is guided by a set of principles that
              have defined NOVA INC since day one — values that our team lives
              by on and off the construction site.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative bg-white border border-[#e8e0d0] rounded-3xl p-7 flex flex-col gap-5 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4a348] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#f5f0e8] border border-[#e8e0d0] flex items-center justify-center group-hover:bg-[#d4a348]/10 group-hover:border-[#d4a348]/30 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#d4a348]" />
                    </div>
                    <span className="text-[#e0d8c8] text-4xl font-black group-hover:text-[#d4a348]/20 transition-colors duration-300">
                      {value.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#0a0a0a] font-black text-xl tracking-tight group-hover:text-[#d4a348] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-[#8a7a60] text-[13px] leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  <div className="absolute -bottom-3 -right-3 text-[90px] font-black text-[#0a0a0a]/[0.03] leading-none select-none pointer-events-none">
                    {value.number}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#d4a348]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-black text-white leading-tight"
            >
              Ready to build with{" "}
              <span className="text-[#d4a348]">NOVA INC?</span>
            </motion.h2>
            <p className="text-zinc-500 text-[14px] mt-2">
              Let's discuss your next project — we respond within 24 hours.
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
              className="flex items-center gap-2 px-8 py-[14px] bg-[#d4a348] hover:bg-[#c49438] text-[#0a0a0a] font-black text-[14px] tracking-wide rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_rgba(212,163,72,0.35)]"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
