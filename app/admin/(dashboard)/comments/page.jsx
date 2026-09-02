"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Trash2, Check, X as XIcon, ExternalLink } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const STATUSES = ["pending", "approved", "rejected"];
const statusStyle = {
  pending: "bg-brand/15 text-brand-dark",
  approved: "bg-brand text-ink",
  rejected: "bg-red-50 text-red-700",
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function AdminCommentsPage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("pending");
  const [pendingDelete, setPendingDelete] = useState(null);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data, error: dbError } = await supabase
        .from("article_comments")
        .select("*, articles(title, slug)")
        .order("created_at", { ascending: false });

      if (dbError) setError(dbError.message);
      else setComments(data);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = comments.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.comment.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateStatus = async (id, status) => {
    const supabase = createClient();
    const { error: dbError } = await supabase
      .from("article_comments")
      .update({ status })
      .eq("id", id);
    if (dbError) setError(dbError.message);
    else
      setComments((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status } : c)),
      );
  };

  const confirmDelete = async () => {
    const supabase = createClient();
    const { error: dbError } = await supabase
      .from("article_comments")
      .delete()
      .eq("id", pendingDelete.id);
    if (dbError) setError(dbError.message);
    else setComments((prev) => prev.filter((c) => c.id !== pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div>
        <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
          Comments
        </h1>
        <p className="text-steel text-[13px] mt-1">
          {comments.length} total ·{" "}
          {comments.filter((c) => c.status === "pending").length} pending review
        </p>
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
            placeholder="Search by name or comment content..."
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

      <div className="bg-white border border-steel-light rounded-2xl overflow-hidden">
        {loading ? (
          <p className="px-5 py-10 text-center text-steel text-[13px]">
            Loading comments...
          </p>
        ) : filtered.length === 0 ? (
          <p className="px-5 py-10 text-center text-steel text-[13px]">
            {comments.length === 0
              ? "No comments yet."
              : "No comments match your filters."}
          </p>
        ) : (
          filtered.map((c) => (
            <div
              key={c.id}
              className="flex flex-col gap-3 px-5 py-4 border-b border-steel-light last:border-b-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-ink text-[13px] font-semibold">
                      {c.name}
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-[2px] rounded-full ${statusStyle[c.status]}`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <p className="text-steel text-[13px] mt-1 leading-relaxed">
                    {c.comment}
                  </p>
                  <div className="flex items-center gap-3 mt-2 font-mono text-[11px] text-steel/60">
                    <span>{formatDate(c.created_at)}</span>
                    {c.articles?.slug && (
                      <Link
                        href={`/news/${c.articles.slug}`}
                        target="_blank"
                        className="flex items-center gap-1 text-brand-dark hover:underline"
                      >
                        {c.articles.title}
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {c.status !== "approved" && (
                    <button
                      onClick={() => updateStatus(c.id, "approved")}
                      className="p-2 rounded-lg text-steel hover:text-brand-dark hover:bg-brand/10 transition-colors"
                      aria-label="Approve"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                  {c.status !== "rejected" && (
                    <button
                      onClick={() => updateStatus(c.id, "rejected")}
                      className="p-2 rounded-lg text-steel hover:text-red-600 hover:bg-red-50 transition-colors"
                      aria-label="Reject"
                    >
                      <XIcon className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => setPendingDelete(c)}
                    className="p-2 rounded-lg text-steel hover:text-red-600 hover:bg-red-50 transition-colors"
                    aria-label="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

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
              Delete comment?
            </h3>
            <p className="text-steel text-[13px] leading-relaxed mb-6">
              This comment from "{pendingDelete.name}" will be permanently
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
