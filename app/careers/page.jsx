"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
  HandCoins,
  GraduationCap,
  ShieldCheck,
  Users2,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const benefits = [
  {
    icon: HandCoins,
    title: "Competitive Pay",
    description:
      "Compensation benchmarked against the local construction sector.",
  },
  {
    icon: GraduationCap,
    title: "Real Growth",
    description:
      "Hands-on experience across residential, commercial, and infrastructure projects.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Every site follows structured safety protocols and training.",
  },
  {
    icon: Users2,
    title: "Team-Led Culture",
    description: "Small, accountable teams — not lost in a large bureaucracy.",
  },
];

export default function CareersPage() {
  const formRef = useRef(null);
  const [openPositions, setOpenPositions] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resumeLink: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("jobs")
        .select("*")
        .eq("status", "open")
        .order("posted_date", { ascending: false });
      setOpenPositions(data ?? []);
      setLoadingJobs(false);
    };
    load();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleApplyClick = (positionTitle) => {
    setFormData((prev) => ({ ...prev, position: positionTitle }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Same reasoning as Contact.jsx: generate the id client-side since
    // applications' SELECT policy is authenticated-only.
    const id = crypto.randomUUID();
    const supabase = createClient();
    const { error: dbError } = await supabase.from("applications").insert({
      id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      position: formData.position || "General Application",
      resume_link: formData.resumeLink || null,
      message: formData.message,
    });

    if (dbError) {
      setStatus("error");
      return;
    }

    fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "application", id }),
    }).catch(() => {});

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "f28cf689-3c00-460d-8610-c9333a0a1fb8",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position || "General Application",
        resume_link: formData.resumeLink,
        message: formData.message,
        subject: `New Job Application — ${formData.position || "General"} — NOVA INC.`,
        from_name: "NOVA INC. Careers",
      }),
    }).catch(() => {});

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      resumeLink: "",
      message: "",
    });
  };

  return (
    <main className="bg-paper">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full bg-surface overflow-hidden flex items-center justify-center pt-48 pb-24 px-6 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex items-center gap-2 px-4 py-[6px] rounded-full border border-brand/30 bg-brand/10 text-brand-dark font-mono text-[11px] font-medium tracking-[0.18em] uppercase">
              <span className="w-[6px] h-[6px] rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
              We're Hiring
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight"
            >
              Build Your Career <span className="text-brand-dark">With Us</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-steel text-base md:text-lg leading-relaxed max-w-xl"
          >
            Join a team delivering real infrastructure across Afghanistan — from
            structural steel to civil engineering to project leadership.
          </motion.p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative w-full py-20 px-6 md:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col gap-3 bg-white border border-steel-light rounded-2xl p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-dark" />
                  </div>
                  <h3 className="font-display text-ink font-bold text-[15px] tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-steel text-[13px] leading-relaxed">
                    {b.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="relative w-full py-16 px-6 md:px-12 bg-paper overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.03] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
          JOIN
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-6 h-px bg-brand" />
            <span className="font-mono text-brand-dark text-[11px] font-bold tracking-[0.25em] uppercase">
              Open Positions
            </span>
          </motion.div>

          {loadingJobs ? (
            <p className="text-steel text-center py-10 text-[13px]">
              Loading open positions...
            </p>
          ) : openPositions.length === 0 ? (
            <p className="text-steel text-center py-10 text-[13px]">
              No open positions right now — check back soon, or submit a general
              application below.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {openPositions.map((pos, index) => (
                <motion.div
                  key={pos.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group bg-white border border-steel-light rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5 hover:border-brand/40 transition-colors duration-300"
                >
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-ink font-bold text-lg tracking-tight">
                        {pos.title}
                      </h3>
                      <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-[3px] rounded-full bg-brand/10 text-brand-dark">
                        {pos.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-steel uppercase tracking-wide">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {pos.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {pos.type}
                      </span>
                    </div>
                    <p className="text-steel text-[13px] leading-relaxed mt-1 max-w-xl">
                      {pos.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleApplyClick(pos.title)}
                    className="shrink-0 flex items-center justify-center gap-2 px-5 py-[10px] bg-brand hover:bg-brand-dark text-ink text-[13px] font-bold tracking-wide rounded-xl transition-all duration-200 whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          <p className="text-steel text-[13px] text-center mt-10">
            Don't see a role that fits? Submit a general application below.
          </p>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section
        ref={formRef}
        className="relative w-full py-24 px-6 md:px-12 bg-surface overflow-hidden scroll-mt-24"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="relative bg-white border border-steel-light rounded-3xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand via-brand/60 to-transparent" />

            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <h2 className="font-display text-ink font-bold text-2xl tracking-tight">
                  Submit Your Application
                </h2>
                <p className="text-steel text-[13px] mt-1">
                  Fill out the form below and our HR team will get back to you
                  within a few business days.
                </p>
              </div>

              {status === "success" && (
                <div className="flex items-center gap-3 bg-brand/10 border border-brand/30 rounded-xl px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <p className="text-brand-dark text-[13px] font-semibold">
                    Application received! We'll be in touch soon.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <p className="text-red-700 text-[13px] font-semibold">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+93 70 000 0000"
                      className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
                    Position
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
                  >
                    <option value="">General Application</option>
                    {openPositions.map((pos) => (
                      <option key={pos.id} value={pos.title}>
                        {pos.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
                    Resume / Portfolio Link
                  </label>
                  <input
                    type="url"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleChange}
                    placeholder="Link to your resume, LinkedIn, or portfolio"
                    className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
                    Cover Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us why you'd be a great fit..."
                    className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 w-full py-[14px] bg-brand-deep hover:bg-brand text-white hover:text-ink font-bold text-[14px] tracking-wide rounded-xl transition-all duration-300 hover:shadow-[0_0_28px_rgba(126,199,66,0.3)] disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
