"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight, Send } from "lucide-react";
import Map from "./Map";
import { createClient } from "@/lib/supabase/client";

const DEFAULT_CONTACT = {
  address: "Dasht-e Barchi, Kabul — Afghanistan",
  phone: "+93 74 944 2276",
  email: "nova.inc.cc@gmail.com",
};

export default function ContactSection() {
  const [contact, setContact] = useState(DEFAULT_CONTACT);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("site_settings")
        .select("*")
        .eq("id", 1)
        .maybeSingle();
      if (data) {
        setContact({
          address: data.address || DEFAULT_CONTACT.address,
          phone: data.phone || DEFAULT_CONTACT.phone,
          email: data.email || DEFAULT_CONTACT.email,
        });
      }
    };
    load();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Generated client-side rather than read back after insert — the
    // "applications"/"messages" tables only allow authenticated SELECT,
    // so an anonymous visitor can't re-read their own row. Supplying the
    // id upfront sidesteps that without needing a new RLS policy.
    const id = crypto.randomUUID();
    const supabase = createClient();
    const { error: dbError } = await supabase.from("messages").insert({
      id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    if (dbError) {
      setStatus("error");
      return;
    }

    // Toggle-controlled email notification — fire-and-forget, same reasoning
    // as the Web3Forms call below: the message is already safely stored
    // regardless of whether either of these succeeds.
    fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "message", id }),
    }).catch(() => {});

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "f28cf689-3c00-460d-8610-c9333a0a1fb8",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: "New Contact Form Submission — NOVA INC.",
        from_name: "NOVA INC. Website",
      }),
    }).catch(() => {});

    setStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, label: "Head Office", value: contact.address },
    { icon: Phone, label: "Phone", value: contact.phone },
    { icon: Mail, label: "Email", value: contact.email },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-32 px-6 md:px-12 bg-paper overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.04] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        CONTACT
      </div>

      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-dashed border-brand/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border-[50px] border-dashed border-ink/[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-ink" />
              </div>
              <span className="font-mono text-ink text-[12px] font-bold tracking-[0.25em] uppercase">
                Get In Touch
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight"
              >
                Let's Build
                <br />
                <span className="text-brand-dark">Together</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-steel text-lg leading-relaxed"
          >
            Have a project in mind? We'd love to hear about it. Reach out to our
            team and we'll get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group flex items-center gap-5 bg-white border border-steel-light rounded-2xl px-6 py-5 hover:-translate-y-1 transition-transform duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-12 h-12 rounded-2xl bg-paper border border-steel-light flex items-center justify-center shrink-0 group-hover:bg-brand/10 group-hover:border-brand/30 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-brand-dark" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-bold text-steel tracking-[0.2em] uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-ink font-bold text-[15px]">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brand-dark ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl overflow-hidden border border-steel-light flex-1 min-h-[220px]"
            >
              <Map />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white border border-steel-light rounded-3xl p-8 md:p-10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand via-brand/60 to-transparent" />

            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <h3 className="font-display text-ink font-bold text-2xl tracking-tight">
                  Send a Message
                </h3>
                <p className="text-steel text-[13px] mt-1">
                  Fill out the form and our team will respond within 24 hours.
                </p>
              </div>

              {status === "success" && (
                <div className="flex items-center gap-3 bg-brand/10 border border-brand/30 rounded-xl px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <p className="text-brand-dark text-[13px] font-semibold">
                    Message sent! We'll get back to you within 24 hours.
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
                    placeholder="Eng. Ahmad Rahimi"
                    className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200"
                  />
                </div>

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
                    placeholder="example@nova.inc"
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

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-paper border border-steel-light rounded-xl text-ink text-[14px] placeholder-steel/60 focus:outline-none focus:border-brand focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 w-full py-[14px] bg-ink hover:bg-brand text-white hover:text-ink font-bold text-[14px] tracking-wide rounded-xl transition-all duration-300 hover:shadow-[0_0_28px_rgba(126,199,66,0.3)] disabled:opacity-60 disabled:cursor-not-allowed group"
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
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
