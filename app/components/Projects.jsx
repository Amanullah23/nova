"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ArrowUpRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("status", "published")
        .order("year", { ascending: false });
      setProjects(data ?? []);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) {
    return (
      <p className="text-steel text-center py-16 max-w-7xl mx-auto">
        Loading projects...
      </p>
    );
  }

  if (projects.length === 0) {
    return (
      <p className="text-steel text-center py-16 max-w-7xl mx-auto">
        No projects published yet — check back soon.
      </p>
    );
  }

  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured project — large tile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setSelectedProject(featured)}
          className="lg:col-span-2 group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-steel-light shadow-sm"
        >
          <div className="overflow-hidden h-[320px] lg:h-[440px]">
            {featured.image && (
              <motion.img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <div className="absolute top-5 left-5">
            <span className="px-3 py-[5px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
              {featured.category}
            </span>
          </div>
          <div className="absolute top-5 right-5">
            <span className="px-3 py-[5px] bg-ink/60 backdrop-blur-sm text-steel-light font-mono text-[11px] tracking-widest rounded-full border border-white/10">
              {featured.year}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-white font-bold text-2xl tracking-tight leading-snug">
                {featured.title}
              </h3>
              <div className="flex items-center gap-1 text-steel-light text-[12px]">
                <MapPin className="w-3 h-3 text-brand" />
                {featured.location}
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

        {/* Remaining projects — stacked side column on lg, grid below on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {rest.slice(0, 2).map((project, index) => (
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
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-steel-light shadow-sm h-[200px] lg:h-full"
            >
              <div className="overflow-hidden h-full">
                {project.image && (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-[4px] bg-brand text-ink font-mono text-[9px] font-bold tracking-widest uppercase rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-display text-white font-bold text-[15px] tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-steel-light text-[11px]">
                    <MapPin className="w-2.5 h-2.5 text-brand" />
                    {project.location}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl border-2 border-brand/0 group-hover:border-brand/40 transition-all duration-400 motion-reduce:transition-none pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Any further projects beyond the featured + 2 side cards */}
      {rest.length > 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {rest.slice(2).map((project, index) => (
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
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-steel-light shadow-sm"
            >
              <div className="overflow-hidden h-[240px]">
                {project.image && (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-[4px] bg-brand text-ink font-mono text-[9px] font-bold tracking-widest uppercase rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-white font-bold text-[15px] tracking-tight leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-steel-light text-[11px] mt-0.5">
                  <MapPin className="w-2.5 h-2.5 text-brand" />
                  {project.location}
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl border-2 border-brand/0 group-hover:border-brand/40 transition-all duration-400 motion-reduce:transition-none pointer-events-none" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
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
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
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
