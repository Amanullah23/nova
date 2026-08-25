import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowUpRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import NewsClient from "./_components/NewsClient";

export default async function NewsPage() {
  const supabase = await createClient();
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "published")
    .order("date", { ascending: false });

  return (
    <main className="bg-paper">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full bg-surface overflow-hidden flex items-center justify-center pt-48 pb-24 px-6 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="flex items-center gap-2 px-4 py-[6px] rounded-full border border-brand/30 bg-brand/10 text-brand-dark font-mono text-[11px] font-medium tracking-[0.18em] uppercase">
            <span className="w-[6px] h-[6px] rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
            News & Insights
          </span>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight">
            From the <span className="text-brand-dark">Job Site</span>
          </h1>

          <p className="text-steel text-base md:text-lg leading-relaxed max-w-xl">
            Project updates, engineering perspectives, and news from the team
            building across Afghanistan.
          </p>
        </div>
      </section>

      {/* FILTER + GRID — interactive part lives in the client component below */}
      <section className="relative w-full py-20 px-6 md:px-12 bg-paper overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.03] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
          FAQ
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <NewsClient articles={articles ?? []} />
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              Have a project in <span className="text-brand">mind?</span>
            </h2>
            <p className="text-steel-light text-[14px] mt-2">
              Let's talk about what NOVA INC. can build for you.
            </p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 flex items-center gap-2 px-8 py-[14px] bg-brand hover:bg-brand-dark text-ink font-bold text-[14px] tracking-wide rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_rgba(126,199,66,0.35)]"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
