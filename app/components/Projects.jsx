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
    image: "/p5.jpeg",
    category: "Education",
    year: "2023",
    description:
      "A fully equipped educational campus including classrooms, laboratories, and sports facilities serving thousands of students.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 lg:auto-rows-[260px] gap-6">
        {projectsData.map((project, index) => {
          const isFeature = index === 0;
          const isWide = index === 3;

          if (isWide) {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setSelectedProject(project)}
                className="lg:col-span-3 group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-steel-light shadow-sm flex flex-col sm:flex-row"
              >
                <div className="relative w-full sm:w-[38%] h-[220px] sm:h-full overflow-hidden shrink-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-[5px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-7 flex flex-col justify-center gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-ink font-bold text-xl md:text-2xl tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <span className="shrink-0 font-mono text-steel text-[11px] px-3 py-1 rounded-full border border-steel-light">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-steel text-[12px]">
                    <MapPin className="w-3 h-3 text-brand-dark" />
                    {project.location}
                  </div>
                  <p className="text-steel text-[13px] leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 hidden sm:flex">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-ink" />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-3xl border-2 border-brand/0 group-hover:border-brand/40 transition-all duration-400 motion-reduce:transition-none pointer-events-none" />
              </motion.div>
            );
          }

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-steel-light shadow-sm ${isFeature ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <div className="overflow-hidden h-[280px] lg:h-full">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

              <div className="absolute top-5 left-5">
                <span className="px-3 py-[5px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="absolute top-5 right-5">
                <span className="px-3 py-[5px] bg-ink/60 backdrop-blur-sm text-steel-light font-mono text-[11px] tracking-widest rounded-full border border-white/10">
                  {project.year}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div className="flex flex-col gap-1">
                  <h3
                    className={`font-display text-white font-bold tracking-tight leading-snug ${isFeature ? "text-2xl" : "text-xl"}`}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-steel-light text-[12px]">
                    <MapPin className="w-3 h-3 text-brand" />
                    {project.location}
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ArrowUpRight className="w-4 h-4 text-ink" />
                </motion.div>
              </div>

              <div className="absolute inset-0 rounded-3xl border-2 border-brand/0 group-hover:border-brand/40 transition-all duration-400 motion-reduce:transition-none pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-ink/60 backdrop-blur-md flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white border border-steel-light rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
            >
              <div className="h-[3px] bg-gradient-to-r from-brand via-brand/60 to-transparent" />

              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-[5px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-ink font-bold text-2xl tracking-tight leading-snug">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-steel text-[13px]">
                      <MapPin className="w-3 h-3 text-brand-dark" />
                      {selectedProject.location}
                    </div>
                  </div>
                  <span className="shrink-0 text-brand-dark font-mono text-[13px] font-bold border border-brand/30 bg-brand/10 px-3 py-1 rounded-full">
                    {selectedProject.year}
                  </span>
                </div>

                <p className="text-steel text-[14px] leading-relaxed border-t border-steel-light pt-4">
                  {selectedProject.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/[0.03] border border-steel-light flex items-center justify-center text-steel hover:text-ink hover:bg-black/[0.06] transition-all"
                aria-label="Close"
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
