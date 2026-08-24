"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";

const categories = [
  "All",
  "Company Updates",
  "Projects",
  "Engineering Insights",
];

const articles = [
  {
    id: 1,
    title: "NOVA INC. Breaks Ground on New Educational Campus in Kandahar",
    excerpt:
      "Our latest project brings a fully-equipped campus with modern classrooms, laboratories, and sports facilities to serve thousands of students in the region.",
    category: "Projects",
    date: "Aug 12, 2026",
    image: "/p5.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "How We Approach Structural Steel Fabrication in Seismic Zones",
    excerpt:
      "A look at the engineering principles our team applies when designing steel structures for regions with elevated seismic activity.",
    category: "Engineering Insights",
    date: "Jul 28, 2026",
    image: "/p1.jpg",
  },
  {
    id: 3,
    title:
      "NOVA INC. Named a Trusted Partner for Regional Infrastructure Projects",
    excerpt:
      "Reflecting on a decade of civil and infrastructure work across Afghanistan, and what it means for the projects ahead.",
    category: "Company Updates",
    date: "Jul 15, 2026",
    image: "/1.jpeg",
  },
  {
    id: 4,
    title: "Behind the Build: Our Industrial Factory Project in Mazar-i-Sharif",
    excerpt:
      "From site survey to final handover — a walkthrough of how our team delivered a state-of-the-art industrial facility on schedule.",
    category: "Projects",
    date: "Jun 30, 2026",
    image: "/p3.jpg",
  },
  {
    id: 5,
    title: "Sustainable Materials: What We're Changing About How We Build",
    excerpt:
      "Our engineering department on the shift toward more sustainable material sourcing and what it means for long-term durability.",
    category: "Engineering Insights",
    date: "Jun 9, 2026",
    image: "/2.png",
  },
  {
    id: 6,
    title: "Meet the Team Leading NOVA's Next Decade of Growth",
    excerpt:
      "An introduction to the leadership team steering our engineering, operations, and finance departments forward.",
    category: "Company Updates",
    date: "May 22, 2026",
    image: "/b.png",
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  return (
    <main className="bg-paper">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full bg-surface overflow-hidden flex items-center justify-center pt-48 pb-24 px-6 md:px-12">
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
              News & Insights
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight"
            >
              From the <span className="text-brand-dark">Job Site</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-steel text-base md:text-lg leading-relaxed max-w-xl"
          >
            Project updates, engineering perspectives, and news from the team
            building across Afghanistan.
          </motion.p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="relative w-full py-20 px-6 md:px-12 bg-paper overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-[8px] rounded-full font-mono text-[11px] font-bold tracking-widest uppercase border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-brand border-brand text-ink"
                    : "bg-white border-steel-light text-steel hover:border-brand/40 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {filtered.length === 0 ? (
            <p className="text-steel text-center py-20">
              No articles in this category yet.
            </p>
          ) : (
            <div className="flex flex-col gap-12">
              {/* Featured article */}
              {featured && (
                <motion.div
                  key={featured.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-steel-light shadow-sm flex flex-col lg:flex-row"
                >
                  <div className="relative w-full lg:w-[52%] h-[260px] lg:h-[440px] overflow-hidden shrink-0">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-[5px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                        {featured.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center gap-4">
                    <div className="flex items-center gap-2 text-steel font-mono text-[11px] tracking-widest uppercase">
                      <Calendar className="w-3.5 h-3.5" />
                      {featured.date}
                    </div>
                    <h2 className="font-display text-ink font-bold text-2xl md:text-3xl leading-snug tracking-tight">
                      {featured.title}
                    </h2>
                    <p className="text-steel text-[14px] leading-relaxed max-w-xl">
                      {featured.excerpt}
                    </p>
                    <span className="flex items-center gap-2 w-fit mt-2 text-brand-dark font-bold text-[13px] group-hover:gap-3 transition-all duration-200">
                      Read Article
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Rest of the grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative rounded-3xl overflow-hidden bg-white border border-steel-light shadow-sm flex flex-col"
                    >
                      <div className="relative w-full h-[190px] overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-[4px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col gap-3 flex-1">
                        <div className="flex items-center gap-2 text-steel/70 font-mono text-[10px] tracking-widest uppercase">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                        <h3 className="font-display text-ink font-bold text-[16px] leading-snug tracking-tight group-hover:text-brand-dark transition-colors duration-200">
                          {article.title}
                        </h3>
                        <p className="text-steel text-[13px] leading-relaxed">
                          {article.excerpt}
                        </p>
                        <span className="flex items-center gap-1.5 w-fit mt-auto pt-2 text-brand-dark font-bold text-[12px] group-hover:gap-2.5 transition-all duration-200">
                          Read Article
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
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
              Have a project in <span className="text-brand">mind?</span>
            </motion.h2>
            <p className="text-steel-light text-[14px] mt-2">
              Let's talk about what NOVA INC. can build for you.
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
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
