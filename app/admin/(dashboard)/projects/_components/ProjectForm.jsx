"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Upload, X } from "lucide-react";
import Link from "next/link";
import { PROJECT_CATEGORIES } from "@/lib/constants/projects";
import { createClient } from "@/lib/supabase/client";
import { getYouTubeId } from "@/lib/utils/youtube";

export default function ProjectForm({ initialData, mode }) {
  const router = useRouter();
  const [form, setForm] = useState(
    initialData
      ? {
          ...initialData,
          image: initialData.image ?? "",
          galleryImages: initialData.gallery_images ?? [],
          youtubeUrl: initialData.youtube_url ?? "",
        }
      : {
          title: "",
          location: "",
          image: "",
          category: PROJECT_CATEGORIES[0],
          year: new Date().getFullYear().toString(),
          description: "",
          status: "draft",
          featured: false,
          galleryImages: [],
          youtubeUrl: "",
        },
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [galleryUploadError, setGalleryUploadError] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadError("Please choose an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Image must be under 5MB.");
      return;
    }

    setUploadError("");
    setUploading(true);

    const supabase = createClient();
    const ext = file.name.split(".").pop();
    const filePath = `projects/${crypto.randomUUID()}.${ext}`;

    const { error: uploadErr } = await supabase.storage
      .from("media")
      .upload(filePath, file, { cacheControl: "3600", upsert: false });

    if (uploadErr) {
      setUploadError(uploadErr.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("media").getPublicUrl(filePath);
    setForm((prev) => ({ ...prev, image: data.publicUrl }));
    setUploading(false);
    e.target.value = "";
  };

  const handleGalleryUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setGalleryUploadError("");
    setUploadingGallery(true);

    const supabase = createClient();
    const uploadedUrls = [];
    const failures = [];

    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        failures.push(`${file.name}: not an image file`);
        continue;
      }
      if (file.size > 5 * 1024 * 1024) {
        failures.push(`${file.name}: over 5MB`);
        continue;
      }

      const ext = file.name.split(".").pop();
      const filePath = `projects/${crypto.randomUUID()}.${ext}`;

      const { error: uploadErr } = await supabase.storage
        .from("media")
        .upload(filePath, file, { cacheControl: "3600", upsert: false });

      if (uploadErr) {
        failures.push(`${file.name}: ${uploadErr.message}`);
        continue;
      }

      const { data } = supabase.storage.from("media").getPublicUrl(filePath);
      uploadedUrls.push(data.publicUrl);
    }

    if (uploadedUrls.length > 0) {
      setForm((prev) => ({
        ...prev,
        galleryImages: [...prev.galleryImages, ...uploadedUrls],
      }));
    }
    if (failures.length > 0) {
      setGalleryUploadError(failures.join(" · "));
    }

    setUploadingGallery(false);
    e.target.value = "";
  };

  const removeGalleryImage = (index) => {
    setForm((prev) => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    const supabase = createClient();
    const payload = {
      title: form.title,
      location: form.location,
      image: form.image || null,
      category: form.category,
      year: form.year,
      description: form.description,
      status: form.status,
      featured: form.featured,
      gallery_images: form.galleryImages,
      youtube_url: form.youtubeUrl || null,
    };

    const { error: dbError } =
      mode === "edit"
        ? await supabase
            .from("projects")
            .update(payload)
            .eq("id", initialData.id)
        : await supabase.from("projects").insert(payload);

    if (dbError) {
      setError(dbError.message);
      setSaving(false);
      return;
    }

    router.push("/admin/projects");
    router.refresh();
  };

  const previewVideoId = getYouTubeId(form.youtubeUrl);

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/projects"
          className="p-2 rounded-lg text-steel hover:text-ink hover:bg-black/[0.04] transition-colors"
          aria-label="Back to projects"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <h1 className="font-display text-ink font-bold text-2xl tracking-tight">
          {mode === "edit" ? "Edit Project" : "New Project"}
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
            Project Title
          </label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="e.g. Residential Complex"
            className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
              Location
            </label>
            <input
              type="text"
              required
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="e.g. Kabul, Afghanistan"
              className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
              Year
            </label>
            <input
              type="text"
              required
              inputMode="numeric"
              pattern="[0-9]{4}"
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
              placeholder="2026"
              className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink font-mono text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </div>
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
              {PROJECT_CATEGORIES.map((c) => (
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

        {/* Cover image */}
        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Cover Image
          </label>

          {form.image && (
            <div className="relative w-full h-[160px] rounded-xl overflow-hidden border border-steel-light bg-paper mb-1">
              <img
                src={form.image}
                alt="Project preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setForm({ ...form, image: "" })}
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-ink/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-ink transition-colors"
                aria-label="Remove image"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 px-4 py-[10px] bg-paper border border-steel-light rounded-xl text-steel hover:text-ink hover:border-brand/40 text-[13px] font-semibold cursor-pointer transition-colors w-fit">
              <Upload className="w-4 h-4" />
              {uploading ? "Uploading..." : "Upload from your computer"}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>

          {uploadError && (
            <p className="text-red-600 text-[12px]">{uploadError}</p>
          )}

          <details className="mt-1">
            <summary className="text-steel/60 text-[11px] cursor-pointer hover:text-steel">
              Or paste an image URL manually
            </summary>
            <input
              type="text"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              placeholder="/projects/my-project.jpg or a full https:// URL"
              className="w-full mt-2 px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink font-mono text-[13px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
            />
          </details>
        </div>

        {/* Gallery images */}
        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Additional Images (Gallery)
          </label>

          {form.galleryImages.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-1">
              {form.galleryImages.map((url, index) => (
                <div
                  key={url + index}
                  className="relative aspect-square rounded-lg overflow-hidden border border-steel-light bg-paper"
                >
                  <img
                    src={url}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    className="absolute top-1 right-1 w-5 h-5 rounded-full bg-ink/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-ink transition-colors"
                    aria-label={`Remove gallery image ${index + 1}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <label className="flex items-center gap-2 px-4 py-[10px] bg-paper border border-steel-light rounded-xl text-steel hover:text-ink hover:border-brand/40 text-[13px] font-semibold cursor-pointer transition-colors w-fit">
            <Upload className="w-4 h-4" />
            {uploadingGallery ? "Uploading..." : "Add photos"}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryUpload}
              disabled={uploadingGallery}
              className="hidden"
            />
          </label>

          {galleryUploadError && (
            <p className="text-red-600 text-[12px]">{galleryUploadError}</p>
          )}
          <p className="text-steel/60 text-[11px] mt-0.5">
            Shown alongside the cover image in the project detail view on the
            public site. Select multiple photos at once, or add them one at a
            time.
          </p>
        </div>

        {/* YouTube video */}
        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            YouTube Video Link
          </label>
          <input
            type="url"
            value={form.youtubeUrl}
            onChange={(e) => setForm({ ...form, youtubeUrl: e.target.value })}
            placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
            className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink font-mono text-[13px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
          />
          {form.youtubeUrl &&
            (previewVideoId ? (
              <div className="relative w-full max-w-xs aspect-video rounded-xl overflow-hidden bg-ink mt-1">
                <iframe
                  src={`https://www.youtube.com/embed/${previewVideoId}`}
                  title="Video preview"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <p className="text-red-600 text-[12px] mt-0.5">
                Doesn't look like a valid YouTube link — check the URL.
              </p>
            ))}
          <p className="text-steel/60 text-[11px] mt-0.5">
            Optional — paste any YouTube video link. It plays as an embedded
            video on the project's detail view.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
            Description
          </label>
          <textarea
            required
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Shown in the project detail modal on the public site"
            className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] leading-relaxed placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200 resize-none"
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
            Feature this project in the large tile on the public Projects grid
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
              : "Add Project"}
        </button>
        <Link
          href="/admin/projects"
          className="px-6 py-[12px] border border-steel-light text-steel hover:text-ink hover:border-brand/40 font-medium text-[14px] rounded-xl transition-all duration-200"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
