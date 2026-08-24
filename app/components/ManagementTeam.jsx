"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Eng. Ahmad Rahimi",
    role: "Chief Executive Officer",
    image: "/team2.png",
    number: "01",
    bio: "Innovative leader with over a decade of experience in driving organizational growth and strategic development.",
  },
  {
    name: "Fatima Sultani",
    role: "Operations Manager",
    image: "/team4.png",
    number: "02",
    bio: "Skilled operations specialist focused on improving efficiency, workflow, and customer satisfaction.",
  },
  {
    name: "Mohammad Jawad",
    role: "Finance Director",
    image: "/team2.png", // TODO: duplicate of Ahmad Rahimi's photo — needs a distinct image
    number: "03",
    bio: "Experienced financial strategist with strong expertise in budgeting, auditing, and financial planning.",
  },
  {
    name: "Sara Noori",
    role: "Project Manager",
    image: "/team4.png", // TODO: duplicate of Fatima Sultani's photo — needs a distinct image
    number: "04",
    bio: "Results-driven project manager known for delivering projects on time with high quality and coordination.",
  },
];

const ManagementTeam = () => {
  return (
    <section
      id="team"
      className="relative w-full py-32 px-6 md:px-12 bg-paper overflow-hidden"
    >
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.04] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        TEAM
      </div>

      {/* Decorative rings */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-dashed border-brand/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border-[50px] border-dashed border-ink/[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
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
                Management Team
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
                The People
                <br />
                <span className="text-brand-dark">Behind NOVA</span>
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
              Meet the experienced professionals leading our company toward
              growth and excellence in every construction project we deliver
              across Afghanistan.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  4
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Leaders
                </span>
              </div>
              <div className="w-px h-12 bg-brand/40" />
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  10+
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Avg. Experience
                </span>
              </div>
              <div className="w-px h-12 bg-brand/40" />
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  80+
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Projects Led
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
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
              className="group relative bg-white border border-steel-light rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

              {/* Image */}
              <div className="relative h-[260px] overflow-hidden bg-paper">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-[5px] bg-white/80 backdrop-blur-sm text-steel font-mono text-[11px] font-bold tracking-widest rounded-full border border-steel-light">
                    {member.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-ink font-bold text-[17px] tracking-tight leading-snug group-hover:text-brand-dark transition-colors duration-300">
                    {member.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 w-fit font-mono text-[11px] font-bold text-brand-dark bg-brand/10 border border-brand/20 px-3 py-[4px] rounded-full">
                    <span className="w-1 h-1 rounded-full bg-brand-dark" />
                    {member.role}
                  </span>
                </div>

                <p className="text-steel text-[13px] leading-relaxed border-t border-steel-light pt-3">
                  {member.bio}
                </p>

                <div className="mt-auto pt-3 border-t border-steel-light flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-paper border border-steel-light flex items-center justify-center text-steel hover:text-brand-dark hover:border-brand/40 hover:bg-brand/10 transition-all duration-200">
                    <Linkedin className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-paper border border-steel-light flex items-center justify-center text-steel hover:text-brand-dark hover:border-brand/40 hover:bg-brand/10 transition-all duration-200">
                    <Twitter className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
