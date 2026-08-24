"use client";
import { motion } from "framer-motion";
import { Crown, Settings, DollarSign, HardHat, ArrowDown } from "lucide-react";

const departments = [
  {
    number: "01",
    icon: Settings,
    name: "Operations Department",
    role: "Officer / Executive",
    description:
      "Oversees day-to-day construction activities and site management.",
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
    <section className="relative w-full py-32 px-6 md:px-12 bg-paper overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.04] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        TEAM
      </div>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-dashed border-brand/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border-[50px] border-dashed border-ink/[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-ink" />
            </div>
            <span className="font-mono text-ink text-[12px] font-bold tracking-[0.25em] uppercase">
              Company Structure
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight"
            >
              Company <span className="text-brand-dark">Chart</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-steel text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Our organizational structure ensures efficiency, accountability, and
            high-quality project delivery — with clear communication across
            every level from leadership to site execution.
          </motion.p>
        </div>

        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-brand-deep rounded-3xl px-12 py-8 text-center shadow-xl overflow-hidden min-w-[280px]"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand to-transparent" />
            <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center shadow-[0_0_24px_rgba(126,199,66,0.35)]">
                <Crown className="w-7 h-7 text-ink" />
              </div>
              <div>
                <p className="font-mono text-white/70 text-[11px] font-bold tracking-[0.2em] uppercase mb-1">
                  Executive Leadership
                </p>
                <h3 className="font-display text-white font-bold text-xl tracking-tight">
                  CEO / Managing Director
                </h3>
                <p className="text-steel-light text-[13px] mt-1">
                  Strategic leadership & company vision
                </p>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 font-display text-[80px] font-bold text-white/[0.06] leading-none select-none pointer-events-none">
              01
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col items-center gap-0 mb-6"
        >
          <div className="w-px h-8 bg-gradient-to-b from-brand to-brand/40" />
          <ArrowDown className="w-4 h-4 text-brand-dark" />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:block h-px bg-brand/30 max-w-2xl mx-auto mb-0 origin-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-0">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white border border-steel-light rounded-3xl p-7 flex flex-col gap-5 overflow-hidden hover:-translate-y-2 transition-transform duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-brand/30" />

                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-paper border border-steel-light flex items-center justify-center group-hover:bg-brand/10 group-hover:border-brand/30 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-brand-dark" />
                  </div>
                  <span className="font-display text-steel-light text-4xl font-bold leading-none group-hover:text-brand/30 transition-colors duration-300">
                    {dept.number}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-ink font-bold text-[16px] leading-snug tracking-tight group-hover:text-brand-dark transition-colors duration-300">
                    {dept.name}
                  </h3>
                  <p className="text-steel text-[13px] leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-steel-light">
                  <span className="inline-flex items-center gap-2 font-mono text-[12px] font-bold text-ink bg-paper px-3 py-[5px] rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {dept.role}
                  </span>
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
