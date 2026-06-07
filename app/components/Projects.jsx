"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ArrowUpRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Residential Complex",
    location: "Kabul, Afghanistan",
    image: "/p4.jpeg",
    category: "Residential",
    year: "2022",
    description:
      "A modern residential complex with 200+ apartments, featuring sustainable design and smart infrastructure built for lasting community living.",
  },
  {
    id: 2,
    title: "Commercial Office Tower",
    location: "Herat, Afghanistan",
    image: "/p1.jpg",
    category: "Commercial",
    year: "2021",
    description:
      "High-rise office building with advanced facilities, designed for corporate and tech companies seeking a premium workspace.",
  },
  {
    id: 3,
    title: "Industrial Factory",
    location: "Mazar-i-Sharif, Afghanistan",
    image: "/p3.jpg",
    category: "Industrial",
    year: "2020",
    description:
      "State-of-the-art industrial factory with modern machinery and eco-friendly systems engineered for maximum output.",
  },
  {
    id: 4,
    title: "Educational Campus",
    location: "Kandahar, Afghanistan",
    image: "/p5.jpg",
    category: "Education",
    year: "2023",
    description:
      "A fully equipped educational campus including classrooms, laboratories, and sports facilities serving thousands of students.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-7xl mx-auto mt-16 px-0">

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setSelectedProject(project)}
            className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#0a0a0a]"
          >
            {/* Image */}
            <div className="overflow-hidden h-[280px] md:h-[320px]">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

            {/* Category pill — top left */}
            <div className="absolute top-5 left-5">
              <span className="px-3 py-[5px] bg-[#d4a348] text-[#0a0a0a] text-[10px] font-black tracking-widest uppercase rounded-full">
                {project.category}
              </span>
            </div>

            {/* Year — top right */}
            <div className="absolute top-5 right-5">
              <span className="px-3 py-[5px] bg-[#0a0a0a]/60 backdrop-blur-sm text-zinc-300 text-[11px] font-semibold tracking-widest rounded-full border border-white/10">
                {project.year}
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-black text-xl tracking-tight leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-zinc-400 text-[12px]">
                  <MapPin className="w-3 h-3 text-[#d4a348]" />
                  {project.location}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-[#d4a348] flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ArrowUpRight className="w-4 h-4 text-[#0a0a0a]" />
              </motion.div>
            </div>

            {/* Hover border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-[#d4a348]/0 group-hover:border-[#d4a348]/40 transition-all duration-400 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#0a0a0a]/85 backdrop-blur-md flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#111111] border border-[#1e1e1e] rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
            >
              {/* Amber top line */}
              <div className="h-[3px] bg-gradient-to-r from-[#d4a348] via-[#d4a348]/60 to-transparent" />

              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

                {/* Category on image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-[5px] bg-[#d4a348] text-[#0a0a0a] text-[10px] font-black tracking-widest uppercase rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white font-black text-2xl tracking-tight leading-snug">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-zinc-400 text-[13px]">
                      <MapPin className="w-3 h-3 text-[#d4a348]" />
                      {selectedProject.location}
                    </div>
                  </div>
                  <span className="shrink-0 text-[#d4a348] text-[13px] font-bold border border-[#d4a348]/30 bg-[#d4a348]/10 px-3 py-1 rounded-full">
                    {selectedProject.year}
                  </span>
                </div>

                <p className="text-zinc-400 text-[14px] leading-relaxed border-t border-[#1e1e1e] pt-4">
                  {selectedProject.description}
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#222] transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}