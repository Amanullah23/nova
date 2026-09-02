"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import { OVERVIEW_ICONS } from "@/lib/constants/overview";
import { createClient } from "@/lib/supabase/client";

export default function AdminOverviewPage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [pendingDelete, setPendingDelete] = useState(null);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data, error: dbError } = await supabase
        .from("overview_cards")
        .select("*")
        .order("sort_order", { ascending: true });

      if (dbError) setError(dbError.message);
      else setCards(data);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = cards.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.tag.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const confirmDelete = async () => {
    const supabase = createClient();
    const { error: dbError } = await supabase
      .from("overview_cards")
      .delete()
      .eq("id", pendingDelete.id);

    if (dbError) setError(dbError.message);
    else setCards((prev) => prev.filter((c) => c.id !== pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
            Business Overview
          </h1>
          <p className="text-steel text-[13px] mt-1">
            {cards.length} total ·{" "}
            {cards.filter((c) => c.status === "published").length} published —
            powers the "How We Operate" section
          </p>
        </div>
        <Link
          href="/admin/overview/new"
          className="flex items-center justify-center gap-2 px-5 py-[10px] bg-brand hover:bg-brand-dark text-ink font-bold text-[13px] tracking-wide rounded-xl transition-all duration-200 w-fit"
        >
          <Plus className="w-4 h-4" />
          New Card
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
            placeholder="Search by title or tag..."
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
          Loading cards...
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white border border-steel-light rounded-2xl px-5 py-16 text-center text-steel text-[13px]">
          {cards.length === 0
            ? "No cards yet — add your first one."
            : "No cards match your filters."}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => {
            const Icon = OVERVIEW_ICONS[c.icon] ?? OVERVIEW_ICONS.ShieldCheck;
            return (
              <div
                key={c.id}
                className="group relative bg-white border border-steel-light rounded-2xl overflow-hidden hover:border-brand/40 transition-colors duration-200"
              >
                <div className="relative h-[130px] overflow-hidden bg-paper">
                  {c.image && (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <span
                    className={`absolute top-3 right-3 font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-[3px] rounded-full ${
                      c.status === "published"
                        ? "bg-brand text-ink"
                        : "bg-white/90 text-steel backdrop-blur-sm"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-brand-dark" />
                    </div>
                    <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-[2px] rounded-full bg-paper border border-steel-light text-steel">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-ink font-bold text-[15px] leading-snug tracking-tight line-clamp-1">
                    {c.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 pt-3 border-t border-steel-light">
                    <Link
                      href={`/admin/overview/${c.id}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-[7px] rounded-lg text-steel hover:text-brand-dark hover:bg-brand/10 text-[12px] font-semibold transition-colors"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                      Edit
                    </Link>
                    <button
                      onClick={() => setPendingDelete(c)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-[7px] rounded-lg text-steel hover:text-red-600 hover:bg-red-50 text-[12px] font-semibold transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
              Delete this card?
            </h3>
            <p className="text-steel text-[13px] leading-relaxed mb-6">
              "{pendingDelete.title}" will be permanently removed from the site.
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
