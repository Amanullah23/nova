"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Projects from "./Projects";
import Link from "next/link";

const Project = () => {
  return (
    <section
      id="projects"
      className="relative w-full py-32 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Amber glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#d4a348]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-4">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-px bg-[#d4a348]" />
              <span className="text-[#d4a348] text-[11px] font-bold tracking-[0.25em] uppercase">
                Our Work
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight"
              >
                Landmark
                <br />
                <span className="text-[#d4a348]">Projects</span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 max-w-md"
          >
            <p className="text-zinc-400 text-base leading-relaxed">
              From residential complexes to industrial facilities — NOVA INC
              has delivered landmark projects across Afghanistan with
              exceptional quality and engineering excellence.
            </p>
            <Link
              href="/#contact"
              className="flex items-center gap-2 w-fit px-5 py-[10px] border border-[#2a2a2a] hover:border-[#d4a348]/50 text-zinc-300 hover:text-white text-[13px] font-medium rounded-xl transition-all duration-200 bg-white/[0.03] hover:bg-white/[0.06]"
            >
              Discuss Your Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <Projects />
      </div>
    </section>
  );
};

export default Project;