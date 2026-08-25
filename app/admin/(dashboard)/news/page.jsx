"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Search, Pencil, Trash2, Star } from "lucide-react";
import { NEWS_CATEGORIES } from "@/lib/constants/news";
import { createClient } from "@/lib/supabase/client";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function AdminNewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [pendingDelete, setPendingDelete] = useState(null);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data, error: dbError } = await supabase
        .from("articles")
        .select("*")
        .order("date", { ascending: false });

      if (dbError) {
        setError(dbError.message);
      } else {
        setArticles(data);
      }
      setLoading(false);
    };
    load();
  }, []);

  const filtered = articles.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || a.category === categoryFilter;
    const matchesStatus = statusFilter === "All" || a.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const confirmDelete = async () => {
    const supabase = createClient();
    const { error: dbError } = await supabase
      .from("articles")
      .delete()
      .eq("id", pendingDelete.id);

    if (dbError) {
      setError(dbError.message);
    } else {
      setArticles((prev) => prev.filter((a) => a.id !== pendingDelete.id));
    }
    setPendingDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
            News & Articles
          </h1>
          <p className="text-steel text-[13px] mt-1">
            {articles.length} total ·{" "}
            {articles.filter((a) => a.status === "published").length} published
          </p>
        </div>
        <Link
          href="/admin/news/new"
          className="flex items-center justify-center gap-2 px-5 py-[10px] bg-brand hover:bg-brand-dark text-ink font-bold text-[13px] tracking-wide rounded-xl transition-all duration-200 w-fit"
        >
          <Plus className="w-4 h-4" />
          New Article
        </Link>
      </div>

      {error && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
          <p className="text-red-700 text-[13px] font-medium">{error}</p>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] placeholder-steel/60 focus:outline-none focus:border-brand transition-all duration-200"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border border-steel-light rounded-xl text-ink text-[13px] focus:outline-none focus:border-brand transition-all duration-200"
        >
          <option value="All">All Categories</option>
          {NEWS_CATEGORIES.map((c) => (
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

      {/* Table */}
      <div className="bg-white border border-steel-light rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-steel-light bg-paper">
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase">
                  Title
                </th>
                <th className="px-5 py-3 font-mono text-[11px] font-bold text-steel tracking-widest uppercase">
                  Category
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
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-10 text-center text-steel text-[13px]"
                  >
                    Loading articles...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-10 text-center text-steel text-[13px]"
                  >
                    {articles.length === 0
                      ? "No articles yet — create your first one."
                      : "No articles match your filters."}
                  </td>
                </tr>
              ) : (
                filtered.map((a) => (
                  <tr
                    key={a.id}
                    className="border-b border-steel-light last:border-b-0 hover:bg-paper/60 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        {a.featured && (
                          <Star className="w-3.5 h-3.5 text-brand-dark shrink-0 fill-brand-dark" />
                        )}
                        <span className="text-ink text-[13px] font-semibold leading-snug line-clamp-1">
                          {a.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="font-mono text-[11px] font-bold tracking-widest uppercase px-2.5 py-[3px] rounded-full bg-brand/10 text-brand-dark whitespace-nowrap">
                        {a.category}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-mono text-steel text-[12px] whitespace-nowrap">
                      {formatDate(a.date)}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`font-mono text-[11px] font-bold tracking-widest uppercase px-2.5 py-[3px] rounded-full whitespace-nowrap ${
                          a.status === "published"
                            ? "bg-brand/15 text-brand-dark"
                            : "bg-steel-light text-steel"
                        }`}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <Link
                          href={`/admin/news/${a.id}`}
                          className="p-2 rounded-lg text-steel hover:text-brand-dark hover:bg-brand/10 transition-colors"
                          aria-label={`Edit ${a.title}`}
                        >
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => setPendingDelete(a)}
                          className="p-2 rounded-lg text-steel hover:text-red-600 hover:bg-red-50 transition-colors"
                          aria-label={`Delete ${a.title}`}
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
              Delete article?
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
