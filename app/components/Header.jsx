"use client";
import Image from "next/image";
import headerImg from "@/public/header2.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center">

      {/* Background texture grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Amber glow blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#d4a348]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#d4a348]/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-[38%] w-px h-full bg-gradient-to-b from-transparent via-[#d4a348]/15 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="flex flex-col gap-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 w-fit"
            >
              <span className="flex items-center gap-2 px-4 py-[6px] rounded-full border border-[#d4a348]/30 bg-[#d4a348]/10 text-[#d4a348] text-[11px] font-semibold tracking-[0.18em] uppercase">
                <span className="w-[6px] h-[6px] rounded-full bg-[#d4a348] animate-pulse" />
                Est. Kabul, Afghanistan
              </span>
            </motion.div>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              {["Where", "Innovation", "Meets Trust."].map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight ${
                      word === "Innovation" ? "text-[#d4a348]" : "text-white"
                    }`}
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md"
            >
              A leading construction and engineering company delivering
              innovative, sustainable, and high-quality infrastructure
              solutions that shape modern cities and resilient communities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/#contact"
                className="px-7 py-[13px] bg-[#d4a348] hover:bg-[#c49438] text-[#0a0a0a] text-[14px] font-bold tracking-wide rounded-lg transition-all duration-200 hover:shadow-[0_0_28px_rgba(212,163,72,0.35)] active:scale-95"
              >
                Start a Project
              </Link>
              <Link
                href="/#projects"
                className="px-7 py-[13px] border border-[#2a2a2a] hover:border-[#d4a348]/50 text-zinc-300 hover:text-white text-[14px] font-medium tracking-wide rounded-lg transition-all duration-200 bg-white/[0.03] hover:bg-white/[0.06] active:scale-95"
              >
                View Our Work →
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-8 pt-6 border-t border-[#1a1a1a]"
            >
              {[
                { value: "10+", label: "Years Experience" },
                { value: "80+", label: "Projects Completed" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.75 + i * 0.1 }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-2xl font-black text-white">{stat.value}</span>
                  <span className="text-[11px] text-zinc-500 tracking-wide uppercase">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Image with animations */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Rotating ring behind image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[540px] md:h-[540px] rounded-full border border-dashed border-[#d4a348]/12 pointer-events-none z-0"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-[#d4a348]/8 pointer-events-none z-0"
            />

            {/* Amber offset frame */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-4 -right-4 w-full h-full max-w-lg rounded-2xl border border-[#d4a348]/25 pointer-events-none z-0"
            />

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
            >
              <motion.div
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={headerImg}
                  alt="NOVA INC Construction"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                  priority
                />
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-[#0a0a0a]/10 to-transparent" />

              {/* Floating badge — bottom */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="flex items-center gap-3 bg-[#0a0a0a]/85 backdrop-blur-md border border-[#2a2a2a] rounded-xl px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-[#d4a348] animate-pulse shrink-0" />
                  <div>
                    <p className="text-white text-[13px] font-semibold">Currently Active</p>
                    <p className="text-zinc-400 text-[11px]">Accepting new construction projects</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating tag — top right */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute top-5 right-5"
              >
                <div className="bg-[#d4a348] text-[#0a0a0a] text-[11px] font-black tracking-widest uppercase px-3 py-[5px] rounded-lg">
                  Since 2014
                </div>
              </motion.div>
            </motion.div>

            {/* Floating stat card — left side */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute left-[-16px] top-1/3 z-20 hidden lg:block"
            >
              <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl px-4 py-3 shadow-2xl">
                <p className="text-[#d4a348] text-xl font-black">80+</p>
                <p className="text-zinc-400 text-[10px] tracking-wide uppercase mt-[2px]">Projects Done</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
};

export default Header;