"use client";
import { useState } from "react";
import {
  Search,
  X,
  Trash2,
  Mail,
  Phone,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { mockApplications } from "./_data/mock-applications";

const STATUSES = ["new", "reviewed", "shortlisted", "rejected"];

const statusStyle = {
  new: "bg-brand/15 text-brand-dark",
  reviewed: "bg-steel-light text-steel",
  shortlisted: "bg-brand text-ink",
  rejected: "bg-red-50 text-red-700",
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function AdminApplicationsPage() {
  // TEMPORARY: local state seeded from mock data — resets on reload.
  // Replace with Supabase queries (fetch, status update, delete) in the next phase.
  const [applications, setApplications] = useState(mockApplications);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  const filtered = applications.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.position.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id, status) => {
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a)),
    );
    setSelected((prev) =>
      prev && prev.id === id ? { ...prev, status } : prev,
    );
  };

  const confirmDelete = () => {
    setApplications((prev) => prev.filter((a) => a.id !== pendingDelete.id));
    if (selected?.id === pendingDelete.id) setSelected(null);
    setPendingDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div>
        <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
          Applications
        </h1>
        <p className="text-steel text-[13px] mt-1">
          {applications.length} total ·{" "}
          {applications.filter((a) => a.status === "new").length} new
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or position..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] placeholder-steel/60 focus:outline-none focus:border-brand transition-all duration-200"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] focus:outline-none focus:border-brand transition-all duration-200"
        >
          <option value="All">All Statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-steel-light rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-steel-light bg-paper">
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase">
                  Applicant
                </th>
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase">
                  Position
                </th>
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase">
                  Date
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
                    colSpan={5}
                    className="px-5 py-10 text-center text-steel text-[13px]"
                  >
                    No applications match your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((a) => (
                  <tr
                    key={a.id}
                    onClick={() => setSelected(a)}
                    className="border-b border-steel-light last:border-b-0 hover:bg-paper/60 transition-colors cursor-pointer"
                  >
                    <td className="px-5 py-4">
                      <div className="flex flex-col">
                        <span className="text-ink text-[13px] font-semibold">
                          {a.name}
                        </span>
                        <span className="text-steel text-[12px]">
                          {a.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-steel text-[13px] whitespace-nowrap">
                      {a.position}
                    </td>
                    <td className="px-5 py-4 font-mono text-steel text-[12px] whitespace-nowrap">
                      {formatDate(a.submittedDate)}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`font-mono text-[11px] font-bold tracking-widest uppercase px-2.5 py-[3px] rounded-full whitespace-nowrap ${statusStyle[a.status]}`}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div
                        className="flex items-center justify-end gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => setPendingDelete(a)}
                          className="p-2 rounded-lg text-steel hover:text-red-600 hover:bg-red-50 transition-colors"
                          aria-label={`Delete application from ${a.name}`}
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

      {/* Detail drawer */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-steel-light sticky top-0 bg-white z-10">
              <h2 className="font-display text-ink font-bold text-lg tracking-tight">
                Application Details
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="p-2 rounded-lg text-steel hover:text-ink hover:bg-black/[0.04] transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 px-6 py-6 flex flex-col gap-6">
              <div>
                <h3 className="font-display text-ink font-bold text-xl tracking-tight">
                  {selected.name}
                </h3>
                <p className="text-brand-dark text-[13px] font-semibold mt-1">
                  {selected.position}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${selected.email}`}
                  className="flex items-center gap-3 text-steel hover:text-ink transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-dark shrink-0" />
                  <span className="text-[13px]">{selected.email}</span>
                </a>
                <a
                  href={`tel:${selected.phone}`}
                  className="flex items-center gap-3 text-steel hover:text-ink transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-dark shrink-0" />
                  <span className="text-[13px]">{selected.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-steel">
                  <Calendar className="w-4 h-4 text-brand-dark shrink-0" />
                  <span className="text-[13px]">
                    Submitted {formatDate(selected.submittedDate)}
                  </span>
                </div>
                {selected.resumeLink ? (
                  <a
                    href={selected.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-brand-dark hover:underline"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    <span className="text-[13px] font-semibold">
                      View Resume / Portfolio
                    </span>
                  </a>
                ) : (
                  <p className="text-steel/60 text-[12px] italic">
                    No resume link provided
                  </p>
                )}
              </div>

              <div className="border-t border-steel-light pt-5">
                <p className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase mb-2">
                  Cover Message
                </p>
                <p className="text-ink text-[14px] leading-relaxed">
                  {selected.message}
                </p>
              </div>

              <div className="border-t border-steel-light pt-5">
                <p className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase mb-2">
                  Status
                </p>
                <div className="flex flex-wrap gap-2">
                  {STATUSES.map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected.id, s)}
                      className={`px-3.5 py-[7px] rounded-full font-mono text-[11px] font-bold tracking-widest uppercase transition-all duration-150 ${
                        selected.status === s
                          ? statusStyle[s]
                          : "bg-paper text-steel border border-steel-light hover:border-brand/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-5 border-t border-steel-light">
              <button
                onClick={() => setPendingDelete(selected)}
                className="flex items-center justify-center gap-2 w-full py-[10px] border border-red-200 text-red-600 hover:bg-red-50 font-semibold text-[13px] rounded-xl transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Delete Application
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation modal */}
      {pendingDelete && (
        <div
          className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setPendingDelete(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl"
          >
            <h3 className="font-display text-ink font-bold text-lg tracking-tight mb-2">
              Delete application?
            </h3>
            <p className="text-steel text-[13px] leading-relaxed mb-6">
              The application from "{pendingDelete.name}" will be permanently
              removed. This can't be undone.
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
