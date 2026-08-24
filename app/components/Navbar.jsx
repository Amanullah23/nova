"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setActiveSection("");
    if (pathname !== "/") return;

    const sectionIds = ["services", "projects", "contact"];
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  const isActive = (href) => {
    if (href.includes("#")) {
      return pathname === "/" && activeSection === href.split("#")[1];
    }
    if (href === "/") {
      return pathname === "/" && !activeSection;
    }
    return pathname === href;
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 motion-reduce:transition-none ${
        scrolled
          ? "bg-white/85 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-steel-light"
          : "bg-white/50 backdrop-blur-lg backdrop-saturate-150"
      }`}
    >
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-brand/50 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-40"
        }`}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-[68px] lg:h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo-new.png"
              alt="NOVA INC."
              width={60}
              height={60}
              priority
              className="object-contain w-[60px] h-[60px] lg:w-[72px] lg:h-11 shrink-0"
            />
            <div className="hidden min-[380px]:block">
              <p className="font-display text-ink font-bold text-[14px] lg:text-[15px] tracking-[0.1em] leading-none uppercase">
                Nova Inc.
              </p>
              <p className="font-mono text-brand-dark text-[9px] lg:text-[10px] tracking-[0.25em] uppercase mt-[3px]">
                Construction
              </p>
            </div>
          </Link>

          {/* Desktop Nav — glass pill capsule */}
          <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-black/[0.03] backdrop-blur-xl border border-black/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full font-body text-[13px] font-medium tracking-wide border transition-all duration-300 motion-reduce:transition-none ${
                  isActive(link.href)
                    ? "bg-brand/10 border-brand/40 text-ink shadow-[0_0_16px_rgba(126,199,66,0.2)]"
                    : "border-transparent text-steel hover:text-ink hover:bg-black/[0.04] hover:border-black/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-5 py-[9px] bg-brand hover:bg-brand-dark text-ink font-body text-[13px] font-bold tracking-wide rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(126,199,66,0.3)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2.5 rounded-full text-steel hover:text-ink bg-black/[0.03] border border-black/[0.08] backdrop-blur-xl transition-all"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] transition-all duration-300 motion-reduce:transition-none overflow-hidden ${
          menuOpen
            ? "max-h-[calc(100vh-68px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-2xl backdrop-saturate-150 border-t border-steel-light h-[calc(100vh-68px)] overflow-y-auto">
          <div className="px-5 py-5 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center px-4 py-3.5 rounded-xl font-body text-[15px] font-medium border transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-brand/10 border-brand/40 text-ink"
                    : "bg-black/[0.02] border-black/[0.06] text-steel hover:text-ink hover:bg-black/[0.05]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block text-center px-5 py-3.5 bg-brand hover:bg-brand-dark text-ink font-body text-[14px] font-bold tracking-wide rounded-xl transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
