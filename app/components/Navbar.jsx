"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1e1e1e] shadow-[0_1px_0_rgba(212,163,72,0.08)]"
          : "bg-[#0a0a0a]/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo-02.png"
              alt="NOVA INC."
              width={52}
              height={52}
              priority
              className="object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-white font-bold text-[15px] tracking-[0.12em] leading-none uppercase">
                Nova Inc.
              </p>
              <p className="text-[#d4a348] text-[10px] tracking-[0.2em] uppercase font-medium mt-[2px]">
                Construction
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white transition-colors duration-200 group"
              >
                
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#d4a348] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              </Link>
            ))}

            {/* About Dropdown */}
            <div className="relative group">
              <button className="relative flex items-center gap-1 px-4 py-2 text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white transition-colors duration-200">
                About
                <ChevronDown size={13} className="mt-px transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#d4a348] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl">
                  <div className="h-[2px] bg-gradient-to-r from-[#d4a348] to-transparent" />
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Mission", href: "/about#mission" },
                    { label: "Vision", href: "/about#vision" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-5 py-3 text-[13px] text-zinc-400 hover:text-white hover:bg-white/5 transition-colors duration-150 border-b border-[#1a1a1a] last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contact"
              className="flex items-center gap-2 px-5 py-[9px] bg-[#d4a348] hover:bg-[#c49438] text-[#0a0a0a] text-[13px] font-bold tracking-wide rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,163,72,0.25)]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d0d0d] border-t border-[#1e1e1e]">
          <div className="h-[1px] bg-gradient-to-r from-[#d4a348] via-[#d4a348]/40 to-transparent" />

          <div className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center py-3 text-[14px] font-medium text-zinc-300 hover:text-white border-b border-[#1a1a1a] transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile About Accordion */}
            <div className="border-b border-[#1a1a1a]">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full py-3 text-[14px] font-medium text-zinc-300 hover:text-white transition-colors"
              >
                About
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  aboutOpen ? "max-h-40 pb-2" : "max-h-0"
                }`}
              >
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Mission", href: "/about#mission" },
                  { label: "Vision", href: "/about#vision" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 pl-4 py-2 text-[13px] text-zinc-500 hover:text-[#d4a348] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#d4a348]/60" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-5 py-[10px] bg-[#d4a348] hover:bg-[#c49438] text-[#0a0a0a] text-[13px] font-bold tracking-wide rounded-lg transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;