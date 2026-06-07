"use client";
import { HatGlasses, BrickWall, TrafficCone, FolderOpenDot, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: HatGlasses,
    number: "01",
    title: "Structural Steel Fabrication & Erection",
    description:
      "Delivering durable and high-quality steel structures built to last decades, engineered with precision and modern fabrication techniques.",
    tag: "Engineering",
  },
  {
    icon: TrafficCone,
    number: "02",
    title: "Civil & Infrastructure Projects",
    description:
      "Roads, bridges, and essential community infrastructure designed for resilience, safety, and long-term performance.",
    tag: "Infrastructure",
  },
  {
    icon: BrickWall,
    number: "03",
    title: "Residential & Commercial Construction",
    description:
      "Modern, functional, and sustainable spaces — from family homes to large-scale commercial developments.",
    tag: "Construction",
  },
  {
    icon: FolderOpenDot,
    number: "04",
    title: "Project Management & Consultancy",
    description:
      "Ensuring projects are completed on time, safely, and within budget through expert oversight and strategic planning.",
    tag: "Consultancy",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full py-32 px-6 md:px-12 bg-[#f5f0e8] overflow-hidden"
    >
      {/* Decorative large text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-black text-[#e8e0d0] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        NOVA
      </div>

      {/* Top left decorative circle */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border-[40px] border-[#d4a348]/10 pointer-events-none" />
      {/* Bottom right decorative circle */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border-[60px] border-[#0a0a0a]/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
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
                What We Do
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl font-black text-[#0a0a0a] leading-[1.0] tracking-tight"
              >
                Building
                <br />
                <span className="text-[#d4a348]">Excellence</span>
                <br />
                Into Every
                <br />
                Project.
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-[#5a5040] text-lg leading-relaxed">
              At NOVA Inc., every project is approached with precision,
              commitment, and a drive to exceed expectations — from the
              first blueprint to the final handover.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0a0a0a]">4</span>
                <span className="text-[11px] text-[#8a7a60] uppercase tracking-widest">Core Services</span>
              </div>
              <div className="w-px h-12 bg-[#d4a348]/40" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0a0a0a]">10+</span>
                <span className="text-[11px] text-[#8a7a60] uppercase tracking-widest">Years Active</span>
              </div>
              <div className="w-px h-12 bg-[#d4a348]/40" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0a0a0a]">80+</span>
                <span className="text-[11px] text-[#8a7a60] uppercase tracking-widest">Projects Done</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative rounded-3xl overflow-hidden cursor-default ${
                  isLarge
                    ? "bg-[#0a0a0a] md:col-span-2 lg:col-span-1"
                    : index === 1
                    ? "bg-[#d4a348]"
                    : "bg-white border border-[#e8e0d0]"
                }`}
              >
                <div className="relative z-10 p-10 flex flex-col gap-8 h-full min-h-[280px]">

                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      isLarge
                        ? "bg-[#d4a348]/15 border border-[#d4a348]/30"
                        : index === 1
                        ? "bg-[#0a0a0a]/15 border border-[#0a0a0a]/20"
                        : "bg-[#f5f0e8] border border-[#e8e0d0]"
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        isLarge ? "text-[#d4a348]" : index === 1 ? "text-[#0a0a0a]" : "text-[#d4a348]"
                      }`} />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                        isLarge
                          ? "bg-white/10 text-zinc-400"
                          : index === 1
                          ? "bg-[#0a0a0a]/15 text-[#0a0a0a]"
                          : "bg-[#f5f0e8] text-[#8a7a60]"
                      }`}>
                        {service.tag}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        isLarge ? "bg-[#d4a348]" : index === 1 ? "bg-[#0a0a0a]" : "bg-[#0a0a0a]"
                      }`}>
                        <ArrowUpRight className={`w-4 h-4 ${
                          isLarge ? "text-[#0a0a0a]" : "text-white"
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* Number + Title + Desc */}
                  <div className="flex flex-col gap-3 mt-auto">
                    <span className={`text-[12px] font-black tracking-[0.2em] ${
                      isLarge ? "text-zinc-600" : index === 1 ? "text-[#0a0a0a]/50" : "text-[#c0b090]"
                    }`}>
                      {service.number}
                    </span>
                    <h3 className={`text-xl font-black leading-snug tracking-tight ${
                      isLarge ? "text-white" : index === 1 ? "text-[#0a0a0a]" : "text-[#0a0a0a]"
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-[14px] leading-relaxed ${
                      isLarge ? "text-zinc-400" : index === 1 ? "text-[#0a0a0a]/70" : "text-[#5a5040]"
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner number */}
                <div className={`absolute -bottom-4 -right-4 text-[120px] font-black leading-none select-none pointer-events-none ${
                  isLarge ? "text-white/[0.03]" : index === 1 ? "text-[#0a0a0a]/8" : "text-[#0a0a0a]/[0.04]"
                }`}>
                  {service.number}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0a0a0a] rounded-3xl px-10 py-8"
        >
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-white font-bold text-lg">Ready to build something great?</p>
            <p className="text-zinc-500 text-[13px]">Tell us about your project and we'll get back to you within 24 hours.</p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 flex items-center gap-2 px-7 py-[13px] bg-[#d4a348] hover:bg-[#c49438] text-[#0a0a0a] text-[14px] font-black tracking-wide rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_rgba(212,163,72,0.35)] whitespace-nowrap"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;