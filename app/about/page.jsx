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
    <main className="bg-paper">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full bg-ink overflow-hidden flex items-center justify-center pt-48 pb-32 px-6 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/[0.08] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex items-center gap-2 px-4 py-[6px] rounded-full border border-brand/30 bg-brand/10 text-brand font-mono text-[11px] font-medium tracking-[0.18em] uppercase">
              <span className="w-[6px] h-[6px] rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
              About NOVA INC.
            </span>
          </motion.div>

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
                  className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight ${
                    word === "Sustainable" ? "text-brand" : "text-white"
                  }`}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-steel-light text-base md:text-lg leading-relaxed max-w-xl"
          >
            NOVA Inc. Construction combines technical excellence with
            client-focused solutions to create safe, durable, and cost-effective
            projects that contribute to community growth and future development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-7 py-[13px] bg-brand hover:bg-brand-dark text-ink font-bold text-[14px] tracking-wide rounded-xl transition-all duration-200 hover:shadow-[0_0_28px_rgba(126,199,66,0.3)]"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#projects"
              className="flex items-center gap-2 px-7 py-[13px] border border-white/10 hover:border-brand/40 text-steel-light hover:text-white font-medium text-[14px] rounded-xl transition-all duration-200 bg-white/[0.03] hover:bg-white/[0.06]"
            >
              View Our Work →
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-paper to-transparent pointer-events-none" />
      </section>

      {/* STATS BAR */}
      <section className="relative bg-paper py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-steel-light rounded-3xl overflow-hidden shadow-sm -mt-6 relative z-10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white px-8 py-8 flex flex-col gap-1">
                <span className="font-display text-4xl font-bold text-ink">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative w-full py-32 px-6 md:px-12 bg-paper overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.04] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
          NOVA
        </div>
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-dashed border-brand/10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-brand/25 pointer-events-none z-0" />
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/b.png"
                  alt="Who We Are"
                  width={600}
                  height={500}
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 bg-ink/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
                    <div className="w-2 h-2 rounded-full bg-brand animate-pulse motion-reduce:animate-none shrink-0" />
                    <p className="text-white text-[13px] font-semibold">
                      Trusted since 2014 — Kabul, Afghanistan
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

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
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-ink" />
                  </div>
                  <span className="font-mono text-ink text-[12px] font-bold tracking-[0.25em] uppercase">
                    Who We Are
                  </span>
                </div>

                <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight tracking-tight">
                  A Trusted Name in
                  <br />
                  <span className="text-brand-dark">Construction</span>
                </h2>
              </div>

              <p className="text-steel text-base leading-relaxed">
                NOVA INC Construction Company is a trusted name in the
                construction sector, delivering high-quality residential,
                commercial, and infrastructure projects across Afghanistan. With
                years of experience and a team of skilled engineers, we focus on
                innovation, durability, and excellence.
              </p>

              <p className="text-steel text-base leading-relaxed">
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
                    <div className="w-5 h-5 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-dark" />
                    </div>
                    <span className="text-steel text-[14px]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative w-full py-32 px-6 md:px-12 bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-px bg-brand" />
              <span className="font-mono text-brand text-[11px] font-bold tracking-[0.25em] uppercase">
                Our Direction
              </span>
              <span className="w-8 h-px bg-brand" />
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
              >
                Mission & <span className="text-brand">Vision</span>
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
              className="group relative bg-ink-soft border border-white/10 rounded-3xl p-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-[5px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                    Mission
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-white/20">
                    <span className="w-2 h-px bg-current" />
                    DIR·01
                  </div>
                </div>
                <h3 className="font-display text-white font-bold text-2xl tracking-tight group-hover:text-brand transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="text-steel-light text-[15px] leading-relaxed">
                  To deliver innovative, sustainable, and high-quality
                  construction solutions that shape modern cities and resilient
                  communities — built with integrity and engineered for the
                  future.
                </p>
                <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                  {[
                    "Client-centered approach",
                    "Safety first on every site",
                    "On-time delivery guaranteed",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-brand/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-brand" />
                      </div>
                      <span className="text-steel-light text-[13px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              id="vision"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-brand rounded-3xl p-10 overflow-hidden"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-[5px] bg-ink text-brand font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                    Vision
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-ink/30">
                    <span className="w-2 h-px bg-current" />
                    DIR·02
                  </div>
                </div>
                <h3 className="font-display text-ink font-bold text-2xl tracking-tight">
                  Our Vision
                </h3>
                <p className="text-ink/75 text-[15px] leading-relaxed">
                  To be a leading construction and engineering company
                  recognized for transforming communities through innovation,
                  sustainability, and world-class project execution across
                  Afghanistan and beyond.
                </p>
                <div className="flex flex-col gap-3 pt-4 border-t border-ink/15">
                  {[
                    "Regional leader in construction",
                    "Sustainable building practices",
                    "Empowering local communities",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-ink/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-ink" />
                      </div>
                      <span className="text-ink/70 text-[13px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative w-full py-32 px-6 md:px-12 bg-paper overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.04] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
          VALUES
        </div>
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full border-[50px] border-dashed border-ink/[0.04] pointer-events-none" />

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
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-ink" />
                </div>
                <span className="font-mono text-ink text-[12px] font-bold tracking-[0.25em] uppercase">
                  Core Values
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight"
                >
                  What We
                  <br />
                  <span className="text-brand-dark">Stand For</span>
                </motion.h2>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-steel text-lg leading-relaxed"
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
                  className="group relative bg-white border border-steel-light rounded-3xl p-7 flex flex-col gap-5 overflow-hidden hover:-translate-y-2 transition-transform duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-paper border border-steel-light flex items-center justify-center group-hover:bg-brand/10 group-hover:border-brand/30 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-steel/40 group-hover:text-brand transition-colors duration-300">
                      <span className="w-2 h-px bg-current" />
                      VALUE·{value.number}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-ink font-bold text-xl tracking-tight group-hover:text-brand-dark transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-steel text-[13px] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand/[0.06] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Ready to build with <span className="text-brand">NOVA INC?</span>
            </motion.h2>
            <p className="text-steel-light text-[14px] mt-2">
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
              className="flex items-center gap-2 px-8 py-[14px] bg-brand hover:bg-brand-dark text-ink font-bold text-[14px] tracking-wide rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_rgba(126,199,66,0.35)]"
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
