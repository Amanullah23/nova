"use client";
import { useState } from "react";
import { Search, X, Trash2, Mail, Phone, Calendar, Reply } from "lucide-react";
import { mockMessages } from "./_data/mock-messages";

const STATUSES = ["unread", "read", "replied"];

const statusStyle = {
  unread: "bg-brand/15 text-brand-dark",
  read: "bg-steel-light text-steel",
  replied: "bg-brand text-ink",
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function AdminMessagesPage() {
  // TEMPORARY: local state seeded from mock data — resets on reload.
  // Replace with Supabase queries (fetch, status update, delete) in the next phase.
  const [messages, setMessages] = useState(mockMessages);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  const filtered = messages.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.message.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || m.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const openMessage = (m) => {
    setSelected(m);
    // Opening a message marks it read, same as any inbox — mirrors expected admin behavior.
    if (m.status === "unread") {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === m.id ? { ...msg, status: "read" } : msg)),
      );
      setSelected({ ...m, status: "read" });
    }
  };

  const updateStatus = (id, status) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status } : m)),
    );
    setSelected((prev) =>
      prev && prev.id === id ? { ...prev, status } : prev,
    );
  };

  const confirmDelete = () => {
    setMessages((prev) => prev.filter((m) => m.id !== pendingDelete.id));
    if (selected?.id === pendingDelete.id) setSelected(null);
    setPendingDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div>
        <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
          Messages
        </h1>
        <p className="text-steel text-[13px] mt-1">
          {messages.length} total ·{" "}
          {messages.filter((m) => m.status === "unread").length} unread
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
            placeholder="Search by name or message content..."
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

      {/* List — inbox-style rows rather than a dense table, since the message preview matters here */}
      <div className="bg-white border border-steel-light rounded-2xl overflow-hidden">
        {filtered.length === 0 ? (
          <p className="px-5 py-10 text-center text-steel text-[13px]">
            No messages match your filters.
          </p>
        ) : (
          filtered.map((m) => (
            <button
              key={m.id}
              onClick={() => openMessage(m)}
              className="w-full text-left flex items-start gap-4 px-5 py-4 border-b border-steel-light last:border-b-0 hover:bg-paper/60 transition-colors"
            >
              <div
                className={`w-2 h-2 rounded-full mt-2 shrink-0 ${m.status === "unread" ? "bg-brand" : "bg-transparent"}`}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`text-[13px] ${m.status === "unread" ? "font-bold text-ink" : "font-medium text-ink"}`}
                  >
                    {m.name}
                  </span>
                  <span className="font-mono text-steel/60 text-[11px] shrink-0">
                    {formatDate(m.submittedDate)}
                  </span>
                </div>
                <p className="text-steel text-[12px] line-clamp-1 mt-0.5">
                  {m.message}
                </p>
              </div>
              <span
                className={`shrink-0 font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-[3px] rounded-full ${statusStyle[m.status]}`}
              >
                {m.status}
              </span>
            </button>
          ))
        )}
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
                Message
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
              </div>

              <div className="border-t border-steel-light pt-5">
                <p className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase mb-2">
                  Message
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

            <div className="px-6 py-5 border-t border-steel-light flex gap-3">
              <a
                href={`mailto:${selected.email}?subject=Re: Your inquiry to NOVA INC.`}
                className="flex-1 flex items-center justify-center gap-2 py-[10px] bg-brand-deep hover:bg-brand text-white hover:text-ink font-bold text-[13px] rounded-xl transition-colors"
              >
                <Reply className="w-4 h-4" />
                Reply by Email
              </a>
              <button
                onClick={() => setPendingDelete(selected)}
                className="p-[10px] border border-red-200 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                aria-label="Delete message"
              >
                <Trash2 className="w-4 h-4" />
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
              Delete message?
            </h3>
            <p className="text-steel text-[13px] leading-relaxed mb-6">
              The message from "{pendingDelete.name}" will be permanently
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
