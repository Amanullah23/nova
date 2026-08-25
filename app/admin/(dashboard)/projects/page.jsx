"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Search, Pencil, Trash2, Star, MapPin } from "lucide-react";
import { mockProjects, CATEGORIES } from "./_data/mock-projects";

export default function AdminProjectsPage() {
  // TEMPORARY: local state seeded from mock data — resets on reload.
  // Replace with a Supabase fetch (and delete mutation) in the next phase.
  const [projects, setProjects] = useState(mockProjects);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [pendingDelete, setPendingDelete] = useState(null);

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || p.category === categoryFilter;
    const matchesStatus = statusFilter === "All" || p.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const confirmDelete = () => {
    setProjects((prev) => prev.filter((p) => p.id !== pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
            Projects
          </h1>
          <p className="text-steel text-[13px] mt-1">
            {projects.length} total ·{" "}
            {projects.filter((p) => p.status === "published").length} published
          </p>
        </div>
        <Link
          href="/admin/projects/new"
          className="flex items-center justify-center gap-2 px-5 py-[10px] bg-brand hover:bg-brand-dark text-ink font-bold text-[13px] tracking-wide rounded-xl transition-all duration-200 w-fit"
        >
          <Plus className="w-4 h-4" />
          New Project
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or location..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] placeholder-steel/60 focus:outline-none focus:border-brand transition-all duration-200"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] focus:outline-none focus:border-brand transition-all duration-200"
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] focus:outline-none focus:border-brand transition-all duration-200"
        >
          <option value="All">All Statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {/* Grid of project cards — thumbnails matter more here than a plain table */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-steel-light rounded-2xl px-5 py-16 text-center text-steel text-[13px]">
          No projects match your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group relative bg-white border border-steel-light rounded-2xl overflow-hidden hover:border-brand/40 transition-colors duration-200"
            >
              <div className="relative h-[150px] overflow-hidden bg-paper">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                {p.featured && (
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-brand-dark fill-brand-dark" />
                  </div>
                )}
                <span
                  className={`absolute top-3 right-3 font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-[3px] rounded-full ${
                    p.status === "published"
                      ? "bg-brand text-ink"
                      : "bg-white/90 text-steel backdrop-blur-sm"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-[2px] rounded-full bg-brand/10 text-brand-dark">
                    {p.category}
                  </span>
                  <span className="font-mono text-[11px] text-steel/60">
                    {p.year}
                  </span>
                </div>
                <h3 className="font-display text-ink font-bold text-[15px] leading-snug tracking-tight line-clamp-1">
                  {p.title}
                </h3>
                <div className="flex items-center gap-1 text-steel text-[12px]">
                  <MapPin className="w-3 h-3" />
                  <span className="line-clamp-1">{p.location}</span>
                </div>

                <div className="flex items-center gap-2 mt-2 pt-3 border-t border-steel-light">
                  <Link
                    href={`/admin/projects/${p.id}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-[7px] rounded-lg text-steel hover:text-brand-dark hover:bg-brand/10 text-[12px] font-semibold transition-colors"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    Edit
                  </Link>
                  <button
                    onClick={() => setPendingDelete(p)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-[7px] rounded-lg text-steel hover:text-red-600 hover:bg-red-50 text-[12px] font-semibold transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete confirmation modal */}
      {pendingDelete && (
        <div
          className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setPendingDelete(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl"
          >
            <h3 className="font-display text-ink font-bold text-lg tracking-tight mb-2">
              Delete project?
            </h3>
            <p className="text-steel text-[13px] leading-relaxed mb-6">
              "{pendingDelete.title}" will be permanently removed. This can't be
              undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-[10px] bg-red-600 hover:bg-red-700 text-white font-bold text-[13px] rounded-xl transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => setPendingDelete(null)}
                className="flex-1 px-4 py-[10px] border border-steel-light text-steel hover:text-ink font-medium text-[13px] rounded-xl transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
