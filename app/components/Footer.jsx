import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
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
    <footer className="relative bg-brand-deep overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-new.png"
                alt="NOVA INC."
                width={48}
                height={48}
                priority
                className="object-contain"
              />
              <div>
                <p className="font-display text-white font-bold text-[15px] tracking-[0.12em] leading-none uppercase">
                  Nova Inc.
                </p>
                <p className="font-mono text-white/80 text-[10px] tracking-[0.2em] uppercase mt-[3px]">
                  Construction
                </p>
              </div>
            </div>

            <p className="text-steel-light text-[13px] leading-relaxed max-w-[220px]">
              Delivering innovative, sustainable, and high-quality
              infrastructure solutions across Afghanistan.
            </p>

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
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-steel-light hover:text-brand hover:border-brand/40 hover:bg-white/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-brand" />
              <h4 className="font-mono text-white text-[12px] font-bold tracking-[0.2em] uppercase">
                Quick Links
              </h4>
            </div>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-steel-light text-[13px] hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 h-px bg-brand group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-brand" />
              <h4 className="font-mono text-white text-[12px] font-bold tracking-[0.2em] uppercase">
                Contact
              </h4>
            </div>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-brand" />
                    </div>
                    <span className="text-steel-light text-[13px] leading-relaxed">
                      {item.value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-brand" />
              <h4 className="font-mono text-white text-[12px] font-bold tracking-[0.2em] uppercase">
                Start a Project
              </h4>
            </div>

            <p className="text-steel-light text-[13px] leading-relaxed">
              Ready to build something great? Let's talk about your next
              construction project.
            </p>
            <a
              href="/#contact"
              className="flex items-center justify-center gap-2 px-6 py-[12px] bg-brand hover:bg-brand-dark text-ink text-[13px] font-bold tracking-wide rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_rgba(126,199,66,0.3)] w-fit"
            >
              Get In Touch →
            </a>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mt-2">
              <p className="font-mono text-white/80 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
                Working Hours
              </p>
              <p className="text-steel-light text-[13px]">
                Sat – Thu: 8am – 5pm
              </p>
              <p className="text-steel-light/70 text-[12px] mt-1">
                Friday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-light/70 text-[12px]">
            © {new Date().getFullYear()} NOVA INC. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
            <span className="text-steel-light/70 text-[12px]">
              Kabul, Afghanistan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
