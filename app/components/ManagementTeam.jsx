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
    image: "/team2.png",
    number: "03",
    bio: "Experienced financial strategist with strong expertise in budgeting, auditing, and financial planning.",
  },
  {
    name: "Sara Noori",
    role: "Project Manager",
    image: "/team4.png",
    number: "04",
    bio: "Results-driven project manager known for delivering projects on time with high quality and coordination.",
  },
];

const ManagementTeam = () => {
  return (
    <section
      id="team"
      className="relative w-full py-32 px-6 md:px-12 bg-[#f5f0e8] overflow-hidden"
    >
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-[#e8e0d0] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        TEAM
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-[#d4a348]/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border-[50px] border-[#0a0a0a]/5 pointer-events-none" />

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
              <div className="w-10 h-10 rounded-full bg-[#d4a348] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
              </div>
              <span className="text-[#0a0a0a] text-[12px] font-bold tracking-[0.25em] uppercase">
                Management Team
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl font-black text-[#0a0a0a] leading-tight tracking-tight"
              >
                The People
                <br />
                <span className="text-[#d4a348]">Behind NOVA</span>
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
            <p className="text-[#5a5040] text-lg leading-relaxed">
              Meet the experienced professionals leading our company toward
              growth and excellence in every construction project we
              deliver across Afghanistan.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0a0a0a]">4</span>
                <span className="text-[11px] text-[#8a7a60] uppercase tracking-widest">Leaders</span>
              </div>
              <div className="w-px h-12 bg-[#d4a348]/40" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0a0a0a]">10+</span>
                <span className="text-[11px] text-[#8a7a60] uppercase tracking-widest">Avg. Experience</span>
              </div>
              <div className="w-px h-12 bg-[#d4a348]/40" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0a0a0a]">80+</span>
                <span className="text-[11px] text-[#8a7a60] uppercase tracking-widest">Projects Led</span>
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
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-[#e8e0d0] rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Amber top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4a348] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

              {/* Image */}
              <div className="relative h-[260px] overflow-hidden bg-[#f0ebe0]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                {/* Number badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-[5px] bg-white/80 backdrop-blur-sm text-[#8a7a60] text-[11px] font-black tracking-widest rounded-full border border-[#e8e0d0]">
                    {member.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">

                {/* Name + Role */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#0a0a0a] font-black text-[17px] tracking-tight leading-snug group-hover:text-[#d4a348] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 w-fit text-[11px] font-bold text-[#d4a348] bg-[#d4a348]/10 border border-[#d4a348]/20 px-3 py-[4px] rounded-full">
                    <span className="w-1 h-1 rounded-full bg-[#d4a348]" />
                    {member.role}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-[#8a7a60] text-[13px] leading-relaxed border-t border-[#f0e8d8] pt-3">
                  {member.bio}
                </p>

                {/* Social */}
                <div className="mt-auto pt-3 border-t border-[#f0e8d8] flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-[#f5f0e8] border border-[#e8e0d0] flex items-center justify-center text-[#8a7a60] hover:text-[#d4a348] hover:border-[#d4a348]/40 hover:bg-[#d4a348]/10 transition-all duration-200">
                    <Linkedin className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-[#f5f0e8] border border-[#e8e0d0] flex items-center justify-center text-[#8a7a60] hover:text-[#d4a348] hover:border-[#d4a348]/40 hover:bg-[#d4a348]/10 transition-all duration-200">
                    <Twitter className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Ghost number */}
              <div className="absolute -bottom-3 -right-3 text-[90px] font-black text-[#0a0a0a]/[0.03] leading-none select-none pointer-events-none">
                {member.number}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ManagementTeam;