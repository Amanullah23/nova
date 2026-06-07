import Image from "next/image";
import { MapPin, Phone, Mail, Link } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const contactInfo = [
  { icon: MapPin, value: "Dasht-e Barchi, Kabul — Afghanistan" },
  { icon: Phone, value: "+93 74 944 2276" },
  { icon: Mail, value: "nova.inc.cc@gmail.com" },
];

const socials = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/nova.inc.construction",
    label: "Facebook",
  },
  {
    icon: FaXTwitter,
    href: "https://www.twitter.com/NovaIncCC",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/nova.inc.construction?igsh=djBqa3N3czRoNHlt",
    label: "Instagram",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/nova-inc-construction/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Amber glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#d4a348]/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Top amber line */}
      <div className="relative h-[2px] bg-gradient-to-r from-transparent via-[#d4a348] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-02.png"
                alt="NOVA INC."
                width={48}
                height={48}
                priority
                className="object-contain"
              />
              <div>
                <p className="text-white font-bold text-[15px] tracking-[0.12em] leading-none uppercase">
                  Nova Inc.
                </p>
                <p className="text-[#d4a348] text-[10px] tracking-[0.2em] uppercase font-medium mt-[2px]">
                  Construction
                </p>
              </div>
            </div>

            <p className="text-zinc-500 text-[13px] leading-relaxed max-w-[220px]">
              Delivering innovative, sustainable, and high-quality infrastructure
              solutions across Afghanistan.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-zinc-500 hover:text-[#d4a348] hover:border-[#d4a348]/40 hover:bg-[#d4a348]/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-[#d4a348]" />
              <h4 className="text-white text-[12px] font-bold tracking-[0.2em] uppercase">
                Quick Links
              </h4>
            </div>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-zinc-500 text-[13px] hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 h-px bg-[#d4a348] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-[#d4a348]" />
              <h4 className="text-white text-[12px] font-bold tracking-[0.2em] uppercase">
                Contact
              </h4>
            </div>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#d4a348]/10 border border-[#d4a348]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-[#d4a348]" />
                    </div>
                    <span className="text-zinc-400 text-[13px] leading-relaxed">
                      {item.value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-[#d4a348]" />
              <h4 className="text-white text-[12px] font-bold tracking-[0.2em] uppercase">
                Start a Project
              </h4>
            </div>

            <p className="text-zinc-500 text-[13px] leading-relaxed">
              Ready to build something great? Let's talk about your next
              construction project.
            </p>

            <a
              href="/#contact"
              className="flex items-center justify-center gap-2 px-6 py-[12px] bg-[#d4a348] hover:bg-[#c49438] text-[#0a0a0a] text-[13px] font-black tracking-wide rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_rgba(212,163,72,0.3)] w-fit"
            >
              Get In Touch →
            </a>

            {/* Working hours */}
            <div className="bg-[#111111] border border-[#1e1e1e] rounded-2xl px-5 py-4 mt-2">
              <p className="text-[#d4a348] text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
                Working Hours
              </p>
              <p className="text-zinc-400 text-[13px]">Sat – Thu: 8am – 5pm</p>
              <p className="text-zinc-600 text-[12px] mt-1">Friday: Closed</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-[#1a1a1a] mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-[12px]">
            © {new Date().getFullYear()} NOVA INC. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a348] animate-pulse" />
            <span className="text-zinc-600 text-[12px]">
              Kabul, Afghanistan
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;