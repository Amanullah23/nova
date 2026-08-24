"use client";
import { ShieldCheck, Users2, Truck, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    number: "01",
    title: "Core Values",
    icon: ShieldCheck,
    tag: "Foundation",
    description:
      "At Nova Inc. Construction, we value integrity, quality, and innovation, building trust through every project we deliver. We prioritize safety, teamwork, and sustainability, ensuring strong results today and a better future tomorrow.",
    image: "/2.png",
  },
  {
    id: 2,
    number: "02",
    title: "Partners",
    icon: Users2,
    tag: "Network",
    description:
      "We collaborate with trusted partners, suppliers, subcontractors, and industry experts who share our values of quality, safety, and innovation, ensuring excellence and long-term value.",
    image: "/2.png", // TODO: replace — currently duplicates the Core Values image
  },
  {
    id: 3,
    number: "03",
    title: "Distribution Channel",
    icon: Truck,
    tag: "Logistics",
    description:
      "Projects are delivered through direct supplier partnerships and efficient supply chain management, ensuring timely material flow and consistent quality for our clients.",
    image: "/1.jpeg",
  },
];

const BusinessOverview = () => {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-paper overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.04] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        NOVA
      </div>

      {/* Decorative rings */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full border-[40px] border-dashed border-brand/10 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full border-[50px] border-dashed border-ink/[0.04] pointer-events-none" />

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
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-ink" />
              </div>
              <span className="font-mono text-ink text-[12px] font-bold tracking-[0.25em] uppercase">
                Business Overview
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
                How We
                <br />
                <span className="text-brand-dark">Operate</span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-steel text-lg leading-relaxed">
              A brief overview of our plan — highlighting key objectives,
              strategies, and the values that drive every decision we make as a
              company.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  3
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Pillars
                </span>
              </div>
              <div className="w-px h-12 bg-brand/40" />
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  20+
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Partners
                </span>
              </div>
              <div className="w-px h-12 bg-brand/40" />
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  100%
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  On-Time
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
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
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon + spec-code annotation, replaces giant ghost number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-paper border border-steel-light flex items-center justify-center group-hover:bg-brand/10 group-hover:border-brand/30 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-brand-dark" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-steel/50 group-hover:text-brand transition-colors duration-300">
                    <span className="w-2 h-px bg-current" />
                    PILLAR·{item.number}
                  </div>
                </div>

                {/* Image */}
                <div className="relative w-full h-[140px] rounded-2xl overflow-hidden bg-paper">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-[4px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-ink font-bold text-[17px] leading-snug tracking-tight group-hover:text-brand-dark transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-steel text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow link */}
                <div className="mt-auto pt-4 border-t border-steel-light flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-ink bg-paper px-3 py-[5px] rounded-full flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-paper border border-steel-light flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-brand-dark" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;
