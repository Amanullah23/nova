"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Search, Pencil, Trash2, User } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AdminTeamPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [pendingDelete, setPendingDelete] = useState(null);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data, error: dbError } = await supabase
        .from("team_members")
        .select("*")
        .order("sort_order", { ascending: true });

      if (dbError) setError(dbError.message);
      else setMembers(data);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = members.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || m.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const confirmDelete = async () => {
    const supabase = createClient();
    const { error: dbError } = await supabase
      .from("team_members")
      .delete()
      .eq("id", pendingDelete.id);

    if (dbError) setError(dbError.message);
    else setMembers((prev) => prev.filter((m) => m.id !== pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
            Team
          </h1>
          <p className="text-steel text-[13px] mt-1">
            {members.length} total ·{" "}
            {members.filter((m) => m.status === "published").length} published
          </p>
        </div>
        <Link
          href="/admin/team/new"
          className="flex items-center justify-center gap-2 px-5 py-[10px] bg-brand hover:bg-brand-dark text-ink font-bold text-[13px] tracking-wide rounded-xl transition-all duration-200 w-fit"
        >
          <Plus className="w-4 h-4" />
          New Team Member
        </Link>
      </div>

      {error && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
          <p className="text-red-700 text-[13px] font-medium">{error}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or role..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] placeholder-steel/60 focus:outline-none focus:border-brand transition-all duration-200"
          />
        </div>
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

      {loading ? (
        <div className="bg-white border border-steel-light rounded-2xl px-5 py-16 text-center text-steel text-[13px]">
          Loading team members...
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white border border-steel-light rounded-2xl px-5 py-16 text-center text-steel text-[13px]">
          {members.length === 0
            ? "No team members yet — add your first one."
            : "No team members match your filters."}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((m) => (
            <div
              key={m.id}
              className="group relative bg-white border border-steel-light rounded-2xl overflow-hidden hover:border-brand/40 transition-colors duration-200"
            >
              <div className="relative h-[150px] overflow-hidden bg-paper flex items-center justify-center">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <User className="w-10 h-10 text-steel/30" />
                )}
                <span
                  className={`absolute top-3 right-3 font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-[3px] rounded-full ${
                    m.status === "published"
                      ? "bg-brand text-ink"
                      : "bg-white/90 text-steel backdrop-blur-sm"
                  }`}
                >
                  {m.status}
                </span>
              </div>

              <div className="p-4 flex flex-col gap-1.5">
                <h3 className="font-display text-ink font-bold text-[14px] leading-snug tracking-tight line-clamp-1">
                  {m.name}
                </h3>
                <p className="text-steel text-[12px] line-clamp-1">{m.role}</p>

                <div className="flex items-center gap-2 mt-2 pt-3 border-t border-steel-light">
                  <Link
                    href={`/admin/team/${m.id}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-[7px] rounded-lg text-steel hover:text-brand-dark hover:bg-brand/10 text-[12px] font-semibold transition-colors"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    Edit
                  </Link>
                  <button
                    onClick={() => setPendingDelete(m)}
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
              Remove team member?
            </h3>
            <p className="text-steel text-[13px] leading-relaxed mb-6">
              "{pendingDelete.name}" will be permanently removed from the site.
              This can't be undone.
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
