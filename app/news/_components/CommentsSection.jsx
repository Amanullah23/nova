"use client";
import { useEffect, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function CommentsSection({ articleId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", comment: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("article_comments")
        .select("*")
        .eq("article_id", articleId)
        .eq("status", "approved")
        .order("created_at", { ascending: false });
      setComments(data ?? []);
      setLoading(false);
    };
    load();
  }, [articleId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const supabase = createClient();
    const { error } = await supabase.from("article_comments").insert({
      article_id: articleId,
      name: form.name,
      comment: form.comment,
    });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", comment: "" });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <MessageCircle className="w-4 h-4 text-brand-dark" />
        <h2 className="font-display text-ink font-bold text-xl tracking-tight">
          Comments {comments.length > 0 && `(${comments.length})`}
        </h2>
      </div>

      {status === "success" && (
        <div className="flex items-center gap-3 bg-brand/10 border border-brand/30 rounded-xl px-4 py-3">
          <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
          <p className="text-brand-dark text-[13px] font-semibold">
            Thanks! Your comment is awaiting review and will appear once
            approved.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
          <p className="text-red-700 text-[13px] font-semibold">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-steel-light rounded-2xl p-6 flex flex-col gap-3"
      >
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
        />
        <textarea
          required
          rows={3}
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          placeholder="Share your thoughts..."
          className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200 resize-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 w-fit px-5 py-[10px] bg-brand-deep hover:bg-brand text-white hover:text-ink font-bold text-[13px] tracking-wide rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="w-3.5 h-3.5" />
          {status === "loading" ? "Posting..." : "Post Comment"}
        </button>
      </form>

      {loading ? (
        <p className="text-steel text-[13px]">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="text-steel text-[13px]">
          No comments yet — be the first to share your thoughts.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-white border border-steel-light rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-ink font-bold text-[13px]">{c.name}</span>
                <span className="font-mono text-steel/60 text-[11px]">
                  {formatDate(c.created_at)}
                </span>
              </div>
              <p className="text-steel text-[14px] leading-relaxed">
                {c.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
