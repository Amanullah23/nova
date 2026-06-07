"use client";
import { motion } from "framer-motion";
import { Crown, Settings, DollarSign, HardHat, ArrowDown } from "lucide-react";

const departments = [
  {
    number: "01",
    icon: Settings,
    name: "Operations Department",
    role: "Officer / Executive",
    description: "Oversees day-to-day construction activities and site management.",
  },
  {
    number: "02",
    icon: DollarSign,
    name: "Finance Department",
    role: "Officer / Accountant",
    description: "Manages budgets, payroll, auditing, and financial reporting.",
  },
  {
    number: "03",
    icon: HardHat,
    name: "Engineering Department",
    role: "Officer / Executive",
    description: "Leads structural design, planning, and technical execution.",
  },
];

const OrgChart = () => {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#f5f0e8] overflow-hidden">

      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-[#e8e0d0] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        TEAM
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-[#d4a348]/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border-[50px] border-[#0a0a0a]/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-full bg-[#d4a348] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
            </div>
            <span className="text-[#0a0a0a] text-[12px] font-bold tracking-[0.25em] uppercase">
              Company Structure
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl font-black text-[#0a0a0a] leading-tight tracking-tight"
            >
              Company <span className="text-[#d4a348]">Chart</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#5a5040] text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Our organizational structure ensures efficiency, accountability,
            and high-quality project delivery — with clear communication
            across every level from leadership to site execution.
          </motion.p>
        </div>

        {/* CEO Card */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-[#0a0a0a] rounded-3xl px-12 py-8 text-center shadow-2xl overflow-hidden min-w-[280px]"
          >
            {/* Amber top line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a348] to-transparent" />

            {/* Glow */}
            <div className="absolute inset-0 bg-[#d4a348]/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-[#d4a348] flex items-center justify-center shadow-[0_0_24px_rgba(212,163,72,0.4)]">
                <Crown className="w-7 h-7 text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-[#d4a348] text-[11px] font-bold tracking-[0.2em] uppercase mb-1">
                  Executive Leadership
                </p>
                <h3 className="text-white font-black text-xl tracking-tight">
                  CEO / Managing Director
                </h3>
                <p className="text-zinc-500 text-[13px] mt-1">
                  Strategic leadership & company vision
                </p>
              </div>
            </div>

            {/* Ghost number */}
            <div className="absolute -bottom-2 -right-2 text-[80px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
              01
            </div>
          </motion.div>
        </div>

        {/* Connector arrow */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col items-center gap-0 mb-6"
        >
          <div className="w-px h-8 bg-gradient-to-b from-[#d4a348] to-[#d4a348]/40" />
          <ArrowDown className="w-4 h-4 text-[#d4a348]" />
        </motion.div>

        {/* Horizontal connector line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:block h-px bg-[#d4a348]/30 max-w-2xl mx-auto mb-0 origin-center"
        />

        {/* Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-0">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border border-[#e8e0d0] rounded-3xl p-7 flex flex-col gap-5 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Top amber line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4a348] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                {/* Connector line from top — desktop */}
                <div className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-[#d4a348]/30" />

                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f0e8] border border-[#e8e0d0] flex items-center justify-center group-hover:bg-[#d4a348]/10 group-hover:border-[#d4a348]/30 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#d4a348]" />
                  </div>
                  <span className="text-[#e0d8c8] text-4xl font-black leading-none group-hover:text-[#d4a348]/20 transition-colors duration-300">
                    {dept.number}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[#0a0a0a] font-black text-[16px] leading-snug tracking-tight group-hover:text-[#d4a348] transition-colors duration-300">
                    {dept.name}
                  </h3>
                  <p className="text-[#8a7a60] text-[13px] leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-[#f0e8d8]">
                  <span className="inline-flex items-center gap-2 text-[12px] font-bold text-[#0a0a0a] bg-[#f5f0e8] px-3 py-[5px] rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a348]" />
                    {dept.role}
                  </span>
                </div>

                {/* Ghost number */}
                <div className="absolute -bottom-3 -right-3 text-[90px] font-black text-[#0a0a0a]/[0.03] leading-none select-none pointer-events-none">
                  {dept.number}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OrgChart;