"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { NEWS_CATEGORIES } from "@/lib/constants/news";

const categories = ["All", ...NEWS_CATEGORIES];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function NewsClient({ articles }) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-2 mb-14"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-[8px] rounded-full font-mono text-[11px] font-bold tracking-widest uppercase border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-brand border-brand text-ink"
                : "bg-white border-steel-light text-steel hover:border-brand/40 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {filtered.length === 0 ? (
        <p className="text-steel text-center py-20">
          {articles.length === 0
            ? "No articles published yet — check back soon."
            : "No articles in this category yet."}
        </p>
      ) : (
        <div className="flex flex-col gap-12">
          {featured && (
            <motion.div
              key={featured.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => router.push(`/news/${featured.slug}`)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-steel-light shadow-sm flex flex-col lg:flex-row cursor-pointer"
            >
              <div className="relative w-full lg:w-[52%] h-[260px] lg:h-[440px] overflow-hidden shrink-0">
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-[5px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                    {featured.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2 text-steel font-mono text-[11px] tracking-widest uppercase">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(featured.date)}
                </div>
                <h2 className="font-display text-ink font-bold text-2xl md:text-3xl leading-snug tracking-tight">
                  {featured.title}
                </h2>
                <p className="text-steel text-[14px] leading-relaxed max-w-xl">
                  {featured.excerpt}
                </p>
                <span className="flex items-center gap-2 w-fit mt-2 text-brand-dark font-bold text-[13px] group-hover:gap-3 transition-all duration-200">
                  Read Article
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => router.push(`/news/${article.slug}`)}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-steel-light shadow-sm flex flex-col cursor-pointer"
                >
                  <div className="relative w-full h-[190px] overflow-hidden">
                    {article.image && (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-[4px] bg-brand text-ink font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2 text-steel/70 font-mono text-[10px] tracking-widest uppercase">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </div>
                    <h3 className="font-display text-ink font-bold text-[16px] leading-snug tracking-tight group-hover:text-brand-dark transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-steel text-[13px] leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="flex items-center gap-1.5 w-fit mt-auto pt-2 text-brand-dark font-bold text-[12px] group-hover:gap-2.5 transition-all duration-200">
                      Read Article
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
