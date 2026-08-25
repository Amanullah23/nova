"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { NEWS_CATEGORIES } from "@/lib/constants/news";
import { createClient } from "@/lib/supabase/client";

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

export default function ArticleForm({ initialData, mode }) {
  const router = useRouter();
  const [form, setForm] = useState(
    initialData ?? {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: NEWS_CATEGORIES[0],
      image: "",
      status: "draft",
      featured: false,
    },
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [slugTouched, setSlugTouched] = useState(mode === "edit");

  const handleTitleChange = (value) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugTouched ? prev.slug : slugify(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    const supabase = createClient();
    const payload = {
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt,
      content: form.content,
      category: form.category,
      image: form.image || null,
      status: form.status,
      featured: form.featured,
    };

    const { error: dbError } =
      mode === "edit"
        ? await supabase
            .from("articles")
            .update(payload)
            .eq("id", initialData.id)
        : await supabase.from("articles").insert(payload);

    if (dbError) {
      setError(
        dbError.code === "23505"
          ? "That URL slug is already in use — choose a different one."
          : dbError.message,
      );
      setSaving(false);
      return;
    }

    router.push("/admin/news");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/news"
          className="p-2 rounded-lg text-steel hover:text-ink hover:bg-black/[0.04] transition-colors"
          aria-label="Back to articles"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
          {mode === "edit" ? "Edit Article" : "New Article"}
        </h1>
      </div>

      {error && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
          <p className="text-red-700 text-[13px] font-medium">{error}</p>
        </div>
      )}

      <div className="bg-white border border-steel-light rounded-2xl p-6 md:p-8 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Title
          </label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Article title"
            className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            URL Slug
          </label>
          <input
            type="text"
            required
            value={form.slug}
            onChange={(e) => {
              setSlugTouched(true);
              setForm({ ...form, slug: e.target.value });
            }}
            placeholder="article-url-slug"
            className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink font-mono text-[13px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
          />
          <p className="text-steel/60 text-[11px] mt-0.5">
            nova-inc.com/news/{form.slug || "..."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
              Category
            </label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            >
              {NEWS_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
              Status
            </label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Cover Image Path
          </label>
          <input
            type="text"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            placeholder="/news/my-article.jpg"
            className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink font-mono text-[13px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
          />
          <p className="text-steel/60 text-[11px] mt-0.5">
            Path relative to /public — image upload isn't wired up yet, this
            expects a file already in the project.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Excerpt
          </label>
          <textarea
            required
            rows={2}
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            placeholder="One or two sentences shown on the article grid"
            className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200 resize-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Content
          </label>
          <textarea
            required
            rows={10}
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="Full article body"
            className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] leading-relaxed placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200 resize-y"
          />
        </div>

        <label className="flex items-center gap-3 cursor-pointer w-fit">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => setForm({ ...form, featured: e.target.checked })}
            className="w-4 h-4 rounded accent-brand"
          />
          <span className="text-ink text-[13px] font-medium">
            Feature this article at the top of the News page
          </span>
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center justify-center gap-2 px-6 py-[12px] bg-brand-deep hover:bg-brand text-white hover:text-ink font-bold text-[14px] tracking-wide rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Save className="w-4 h-4" />
          {saving
            ? "Saving..."
            : mode === "edit"
              ? "Save Changes"
              : "Publish Article"}
        </button>
        <Link
          href="/admin/news"
          className="px-6 py-[12px] border border-steel-light text-steel hover:text-ink hover:border-brand/40 font-medium text-[14px] rounded-xl transition-all duration-200"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
