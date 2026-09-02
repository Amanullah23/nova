"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MapPin, X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { getYouTubeId } from "@/lib/utils/youtube";

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 24 : -24 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -24 : 24 }),
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

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

  useEffect(() => {
    setActiveImageIndex(0);
    setDirection(1);
  }, [selectedProject?.id]);

  const modalImages = selectedProject
    ? [selectedProject.image, ...(selectedProject.gallery_images || [])].filter(Boolean)
    : [];

  // Auto-advance the gallery — paused entirely if the visitor prefers reduced motion.
  useEffect(() => {
    if (!selectedProject || modalImages.length <= 1 || reduceMotion) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveImageIndex((i) => (i + 1) % modalImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [selectedProject?.id, modalImages.length, reduceMotion]);

  const goToImage = (index) => {
    setDirection(index > activeImageIndex ? 1 : -1);
    setActiveImageIndex(index);
  };

  const prevImage = () => {
    setDirection(-1);
    setActiveImageIndex((i) => (i - 1 + modalImages.length) % modalImages.length);
  };

  const nextImage = () => {
    setDirection(1);
    setActiveImageIndex((i) => (i + 1) % modalImages.length);
  };

  if (loading) {
    return <p className="text-steel text-center py-16 max-w-7xl mx-auto">Loading projects...</p>;
  }

  if (projects.length === 0) {
    return <p className="text-steel text-center py-16 max-w-7xl mx-auto">No projects published yet — check back soon.</p>;
  }

  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);

  const modalVideoId = selectedProject ? getYouTubeId(selectedProject.youtube_url) : null;

  const modal = (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-ink/60 backdrop-blur-md flex items-center justify-center z-[100] px-4 py-8"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white border border-steel-light rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="h-[3px] bg-gradient-to-r from-brand via-brand/60 to-transparent" />

            {/* Image carousel — auto-advances, plus manual arrows/dots */}
            <div className="relative h-[240px] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                {modalImages.length > 0 && (
                  <motion.img
                    key={activeImageIndex}
                    src={modalImages[activeImageIndex]}
                    alt={selectedProject.title}
                    custom={direction}
                    variants={slideVariants}
                    initial={reduceMotion ? false : "enter"}
                    animate="center"
                    exit={reduceMotion ? undefined : "exit"}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-[5px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                  {selectedProject.category}
                </span>
              </div>

              {modalImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                    {modalImages.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => goToImage(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeImageIndex ? "bg-white w-4" : "bg-white/60 w-1.5"
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-7 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-ink font-bold text-2xl tracking-tight leading-snug">{selectedProject.title}</h3>
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

            {modalVideoId && (
              <div className="px-7 pb-7">
                <p className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase mb-2">
                  Project Video
                </p>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-ink">
                  <iframe
                    src={`https://www.youtube.com/embed/${modalVideoId}`}
                    title={`${selectedProject.title} video`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

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
  );

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
              <h3 className="font-display text-white font-bold text-2xl tracking-tight leading-snug">{featured.title}</h3>
              <div className="flex items-center gap-1 text-steel-light text-[12px]">
                <MapPin className="w-3 h-3 text-brand" />
                {featured.location}
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                  <h3 className="font-display text-white font-bold text-[15px] tracking-tight leading-snug">{project.title}</h3>
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
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                <h3 className="font-display text-white font-bold text-[15px] tracking-tight leading-snug">{project.title}</h3>
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

      {typeof document !== "undefined" && createPortal(modal, document.body)}
    </div>
  );
}