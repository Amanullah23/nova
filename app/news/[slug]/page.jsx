import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import ReactionBar from "../_components/ReactionBar";
import CommentsSection from "../_components/CommentsSection";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (!article) notFound();

  const paragraphs = article.content.split(/\n\s*\n/).filter(Boolean);

  return (
    <main className="bg-paper">
      <Navbar />

      <article className="pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-steel hover:text-ink font-mono text-[11px] font-medium tracking-wide mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to News
          </Link>

          <span className="inline-block px-3 py-[5px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">
            {article.category}
          </span>

          <h1 className="font-display text-ink font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-steel font-mono text-[12px] tracking-widest uppercase mb-8">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(article.date)}
          </div>

          {article.image && (
            <div className="relative w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden mb-10 bg-white border border-steel-light">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex flex-col gap-5 text-ink text-[16px] leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-steel-light">
            <ReactionBar articleId={article.id} />
          </div>

          <div className="mt-12 pt-8 border-t border-steel-light">
            <CommentsSection articleId={article.id} />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
