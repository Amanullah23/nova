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

  useEffect(() => {
    // client mounted
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine the actual current theme in a way that works across versions
  const currentTheme = (() => {
    if (typeof resolvedTheme !== "undefined") return resolvedTheme;
    if (theme === "system") return systemTheme || "light";
    return theme || "light";
  })();

  // Toggle helper — toggles between 'dark' and 'light'
  const toggleTheme = () => {
    // If theme is system, treat resolvedTheme as source of truth
    const active = currentTheme === "dark" ? "dark" : "light";
    setTheme(active === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed w-full top-0  z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-600/90 dark:bg-blue-800/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 py-1 flex justify-between items-center bg-gray-300">
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={80}
            height={80}
            className=""
            priority
          />
          <span className="font-bold text-base text-black mt-1 dark:text-white whitespace-pre-line">
            NOVA INC.<br/>CONSTRUCTION
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-black">
          {["Home", "Services", "Projects", "Pricing", "About", "Contact",].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-black font-sans font-semibold dark:text-gray-300 hover:text-green-600 dark:hover:text-blue-400 transition"
            >
              {item}
            </Link>
          ))}

          {/* Theme toggle: render only after mount */}
          {mounted ? (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          ) : (
            <div style={{ width: 36, height: 36 }} aria-hidden />
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-5">
            {["Home", "Services", "Pricing", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {mounted ? (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {currentTheme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            ) : (
              <div style={{ width: 36, height: 36 }} aria-hidden />
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
