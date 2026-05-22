"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const prefix = pathname === "/" ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("home"), href: `${prefix}#home` },
    { label: t("about"), href: `${prefix}#about` },
    { label: t("services"), href: `${prefix}#services` },
    { label: t("portfolio"), href: `${prefix}#portfolio` },
    { label: t("reviews"), href: `${prefix}#reviews` },
    { label: t("contact"), href: `${prefix}#contact` },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href={`${prefix}#home`}
            className="text-xl font-bold gradient-text"
            style={{ fontFamily: "monospace" }}
          >
            hassanrao<span className="text-indigo-400">.</span>com
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Hassan_Rao_Resume.pdf"
              className="flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-full border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-200"
            >
              <Download size={14} />
              {t("resume")}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#111] border-t border-white/5 py-4 flex flex-col gap-3 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-white text-sm py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Hassan_Rao_Resume.pdf"
              className="flex items-center gap-2 text-sm text-indigo-400 hover:text-white py-1 mt-1"
              onClick={() => setMenuOpen(false)}
            >
              <Download size={14} />
              {t("resume")}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
