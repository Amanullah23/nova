"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // NEW for mobile submenu

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = (() => {
    if (typeof resolvedTheme !== "undefined") return resolvedTheme;
    if (theme === "system") return systemTheme || "light";
    return theme || "light";
  })();

  const toggleTheme = () => {
    const active = currentTheme === "dark" ? "dark" : "light";
    setTheme(active === "dark" ? "light" : "dark");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Pricing", href: "/pricing" },

    // About handled manually below
    { name: "About", href: "/about" },

    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-600/90 dark:bg-black backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 py-1 flex justify-between items-center bg-gray-300 dark:bg-black transition-colors">
        <Link href="#home" className="flex items-center space-x-1">
          <Image
            src="/logo-02.png"
            alt="Logo"
            width={80}
            height={80}
            className="ml-10"
            priority
          />
        </Link>

        {/* Desktop MENU */}
        <div className="hidden md:flex items-center space-x-8 text-black dark:text-gray-300">
          {navItems.map((item) => {
            if (item.name === "About") {
              return (
                <div key="About" className="relative group">
                  <a
                    href="/about"
                    className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-blue-400 transition cursor-pointer"
                  >
                    About
                  </a>

                  {/* Desktop dropdown */}
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 w-40 z-50">
                    <Link
                      href="/about#mission"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Mission
                    </Link>
                    <Link
                      href="/about#vision"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Vision
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            );
          })}

          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {currentTheme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          )}

          <a
            href="/#contact"
            className="bg-lime-500 px-5 py-2 rounded-2xl cursor-pointer hover:bg-lime-600 hover:text-black"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-5">

            {/* Home / Services / Projects / Pricing */}
            <a
              href="/"
              className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="/#services"
              className="text-gray-800 dark:text-gray-300 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>

            <a
              href="/#projects"
              className="text-gray-800 dark:text-gray-300 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="/pricing"
              className="text-gray-800 dark:text-gray-300 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>

            {/* MOBILE About + sub menu */}
            <div className="w-full text-center">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="text-gray-800 dark:text-gray-300 hover:text-blue-600 transition font-semibold"
              >
                About ⬇
              </button>

              {aboutOpen && (
                <div className="mt-2 space-y-2">
                  <a
                    href="/about#mission"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Mission
                  </a>
                  <a
                    href="/about#vision"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Vision
                  </a>
                </div>
              )}
            </div>

            <a
              href="/#contact"
              className="text-gray-800 dark:text-gray-300 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {currentTheme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
              </button>
            )}

            <a
              href="/#contact"
              className="bg-lime-500 px-5 py-2 rounded-2xl cursor-pointer hover:bg-lime-600 hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
