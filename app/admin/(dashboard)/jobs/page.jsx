"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import { mockJobs, DEPARTMENTS } from "./_data/mock-jobs";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function AdminJobsPage() {
  // TEMPORARY: local state seeded from mock data — resets on reload.
  // Replace with a Supabase fetch (and delete mutation) in the next phase.
  const [jobs, setJobs] = useState(mockJobs);
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [pendingDelete, setPendingDelete] = useState(null);

  const filtered = jobs.filter((j) => {
    const matchesSearch = j.title.toLowerCase().includes(search.toLowerCase());
    const matchesDepartment =
      departmentFilter === "All" || j.department === departmentFilter;
    const matchesStatus = statusFilter === "All" || j.status === statusFilter;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const confirmDelete = () => {
    setJobs((prev) => prev.filter((j) => j.id !== pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
            Job Postings
          </h1>
          <p className="text-steel text-[13px] mt-1">
            {jobs.length} total ·{" "}
            {jobs.filter((j) => j.status === "open").length} open
          </p>
        </div>
        <Link
          href="/admin/jobs/new"
          className="flex items-center justify-center gap-2 px-5 py-[10px] bg-brand hover:bg-brand-dark text-ink font-bold text-[13px] tracking-wide rounded-xl transition-all duration-200 w-fit"
        >
          <Plus className="w-4 h-4" />
          New Posting
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
            placeholder="Search job titles..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] placeholder-steel/60 focus:outline-none focus:border-brand transition-all duration-200"
          />
        </div>
        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] focus:outline-none focus:border-brand transition-all duration-200"
        >
          <option value="All">All Departments</option>
          {DEPARTMENTS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] focus:outline-none focus:border-brand transition-all duration-200"
        >
          <option value="All">All Statuses</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-steel-light rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-steel-light bg-paper">
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase">
                  Position
                </th>
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase">
                  Department
                </th>
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase">
                  Location
                </th>
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase">
                  Posted
                </th>
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase">
                  Status
                </th>
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-10 text-center text-steel text-[13px]"
                  >
                    No job postings match your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((j) => (
                  <tr
                    key={j.id}
                    className="border-b border-steel-light last:border-b-0 hover:bg-paper/60 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="flex flex-col">
                        <span className="text-ink text-[13px] font-semibold leading-snug">
                          {j.title}
                        </span>
                        <span className="font-mono text-steel/60 text-[11px]">
                          {j.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="font-mono text-[11px] font-bold tracking-widest uppercase px-2.5 py-[3px] rounded-full bg-brand/10 text-brand-dark whitespace-nowrap">
                        {j.department}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-steel text-[13px] whitespace-nowrap">
                      {j.location}
                    </td>
                    <td className="px-5 py-4 font-mono text-steel text-[12px] whitespace-nowrap">
                      {formatDate(j.postedDate)}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`font-mono text-[11px] font-bold tracking-widest uppercase px-2.5 py-[3px] rounded-full whitespace-nowrap ${
                          j.status === "open"
                            ? "bg-brand/15 text-brand-dark"
                            : "bg-steel-light text-steel"
                        }`}
                      >
                        {j.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <Link
                          href={`/admin/jobs/${j.id}`}
                          className="p-2 rounded-lg text-steel hover:text-brand-dark hover:bg-brand/10 transition-colors"
                          aria-label={`Edit ${j.title}`}
                        >
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => setPendingDelete(j)}
                          className="p-2 rounded-lg text-steel hover:text-red-600 hover:bg-red-50 transition-colors"
                          aria-label={`Delete ${j.title}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

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
              Delete job posting?
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
