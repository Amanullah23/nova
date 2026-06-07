"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight, Send } from "lucide-react";
import Map from "./Map";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full py-32 px-6 md:px-12 bg-[#f5f0e8] overflow-hidden"
    >
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-[#e8e0d0] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        CONTACT
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-[#d4a348]/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border-[50px] border-[#0a0a0a]/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-full bg-[#d4a348] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
              </div>
              <span className="text-[#0a0a0a] text-[12px] font-bold tracking-[0.25em] uppercase">
                Get In Touch
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl font-black text-[#0a0a0a] leading-tight tracking-tight"
              >
                Let's Build
                <br />
                <span className="text-[#d4a348]">Together</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#5a5040] text-lg leading-relaxed"
          >
            Have a project in mind? We'd love to hear about it. Reach out
            to our team and we'll get back to you within 24 hours.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT — Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Contact Info Cards */}
            {[
              {
                icon: MapPin,
                label: "Head Office",
                value: "Dasht-e Barchi, Kabul — Afghanistan",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+93 74 944 2276",
              },
              {
                icon: Mail,
                label: "Email",
                value: "nova.inc.cc@gmail.com",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group flex items-center gap-5 bg-white border border-[#e8e0d0] rounded-2xl px-6 py-5 hover:-translate-y-1 transition-transform duration-300 overflow-hidden relative"
                >
                  {/* Amber top line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4a348] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="w-12 h-12 rounded-2xl bg-[#f5f0e8] border border-[#e8e0d0] flex items-center justify-center shrink-0 group-hover:bg-[#d4a348]/10 group-hover:border-[#d4a348]/30 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#d4a348]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#8a7a60] tracking-[0.2em] uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#0a0a0a] font-bold text-[15px]">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#d4a348] ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl overflow-hidden border border-[#e8e0d0] flex-1 min-h-[220px]"
            >
              <Map />
            </motion.div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white border border-[#e8e0d0] rounded-3xl p-8 md:p-10 overflow-hidden"
          >
            {/* Amber top line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#d4a348] via-[#d4a348]/60 to-transparent" />

            {/* Ghost number */}
            <div className="absolute -bottom-4 -right-4 text-[120px] font-black text-[#0a0a0a]/[0.03] leading-none select-none pointer-events-none">
              01
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <h3 className="text-[#0a0a0a] font-black text-2xl tracking-tight">
                  Send a Message
                </h3>
                <p className="text-[#8a7a60] text-[13px] mt-1">
                  Fill out the form and our team will respond within 24 hours.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#8a7a60] tracking-[0.15em] uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Eng. Ahmad Rahimi"
                    className="w-full px-4 py-3 bg-[#f5f0e8] border border-[#e8e0d0] rounded-xl text-[#0a0a0a] text-[14px] placeholder-[#b0a080] focus:outline-none focus:border-[#d4a348] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#8a7a60] tracking-[0.15em] uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@nova.inc"
                    className="w-full px-4 py-3 bg-[#f5f0e8] border border-[#e8e0d0] rounded-xl text-[#0a0a0a] text-[14px] placeholder-[#b0a080] focus:outline-none focus:border-[#d4a348] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#8a7a60] tracking-[0.15em] uppercase">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+93 70 000 0000"
                    className="w-full px-4 py-3 bg-[#f5f0e8] border border-[#e8e0d0] rounded-xl text-[#0a0a0a] text-[14px] placeholder-[#b0a080] focus:outline-none focus:border-[#d4a348] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#8a7a60] tracking-[0.15em] uppercase">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-[#f5f0e8] border border-[#e8e0d0] rounded-xl text-[#0a0a0a] text-[14px] placeholder-[#b0a080] focus:outline-none focus:border-[#d4a348] focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-[14px] bg-[#0a0a0a] hover:bg-[#d4a348] text-white hover:text-[#0a0a0a] font-black text-[14px] tracking-wide rounded-xl transition-all duration-300 hover:shadow-[0_0_28px_rgba(212,163,72,0.3)] group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}