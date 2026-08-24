"use client";
import {
  Factory,
  TrafficCone,
  BrickWall,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Factory,
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
    icon: ClipboardList,
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
      className="relative w-full py-32 px-6 md:px-12 bg-paper overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[200px] font-bold text-ink/[0.04] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        NOVA
      </div>
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border-[40px] border-dashed border-brand/10 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border-[60px] border-dashed border-ink/[0.04] pointer-events-none" />

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
                What We Do
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl md:text-6xl font-bold text-ink leading-[1.0] tracking-tight"
              >
                Building
                <br />
                <span className="text-brand-dark">Excellence</span>
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
            <p className="text-steel text-lg leading-relaxed">
              At NOVA Inc., every project is approached with precision,
              commitment, and a drive to exceed expectations — from the first
              blueprint to the final handover.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  4
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Core Services
                </span>
              </div>
              <div className="w-px h-12 bg-brand/40" />
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  10+
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Years Active
                </span>
              </div>
              <div className="w-px h-12 bg-brand/40" />
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  80+
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Projects Done
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isDeep = index === 0;
            const isBrand = index === 1;
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
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative rounded-3xl overflow-hidden cursor-default border ${
                  isDeep
                    ? "bg-brand-deep border-white/10 md:col-span-2 lg:col-span-1"
                    : isBrand
                      ? "bg-brand border-brand-dark/20"
                      : "bg-white border-steel-light"
                }`}
              >
                <div
                  className={`absolute top-6 right-6 flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase ${
                    isDeep
                      ? "text-white/25"
                      : isBrand
                        ? "text-ink/35"
                        : "text-steel/40"
                  }`}
                >
                  <span className="w-2 h-px bg-current" />
                  SERV·{service.number}
                </div>

                <div className="relative z-10 p-10 flex flex-col gap-8 h-full min-h-[280px]">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        isDeep
                          ? "bg-white/10 border border-white/20"
                          : isBrand
                            ? "bg-ink/10 border border-ink/20"
                            : "bg-paper border border-steel-light"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${isDeep ? "text-white/90" : isBrand ? "text-ink" : "text-brand-dark"}`}
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                          isDeep
                            ? "bg-white/10 text-steel-light"
                            : isBrand
                              ? "bg-ink/10 text-ink"
                              : "bg-paper text-steel"
                        }`}
                      >
                        {service.tag}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 motion-reduce:transition-none ${
                          isDeep ? "bg-white" : "bg-ink"
                        }`}
                      >
                        <ArrowUpRight
                          className={`w-4 h-4 ${isDeep ? "text-brand-deep" : "text-white"}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <h3
                      className={`font-display text-xl font-bold leading-snug tracking-tight ${isDeep ? "text-white" : "text-ink"}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-[14px] leading-relaxed ${isDeep ? "text-steel-light/80" : isBrand ? "text-ink/70" : "text-steel"}`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-brand-deep rounded-3xl px-10 py-8"
        >
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-white font-display font-bold text-lg">
              Ready to build something great?
            </p>
            <p className="text-steel-light text-[13px]">
              Tell us about your project and we'll get back to you within 24
              hours.
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 flex items-center gap-2 px-7 py-[13px] bg-brand hover:bg-brand-dark text-ink text-[14px] font-bold tracking-wide rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_rgba(126,199,66,0.35)] whitespace-nowrap"
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
