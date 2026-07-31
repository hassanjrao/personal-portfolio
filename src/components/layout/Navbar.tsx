"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, usePathname } from "@i18n/navigation";
import { brand, routes } from "@/config/site";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { label: t("home"), href: routes.home },
    { label: t("services"), href: routes.services },
    { label: t("demo"), href: routes.demo },
    { label: t("reviews"), href: routes.reviews },
    { label: t("blog"), href: routes.blog },
  ];

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-[#060a12]/92 backdrop-blur-md border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={routes.home} className="flex flex-col leading-none">
            <span className="text-lg font-bold text-white tracking-tight">
              {brand.name}
              <span className="text-cyan-400">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              {brand.tagline}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-cyan-300"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LocaleSwitcher />
            <Link
              href={routes.book}
              className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors"
            >
              {t("book")}
              <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>

          <button
            className="md:hidden p-2 -me-2 text-slate-300 hover:text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t("close") : t("menu")}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-5 pt-2 flex flex-col gap-1 border-t border-white/8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`py-2.5 text-sm ${
                  isActive(link.href) ? "text-cyan-300" : "text-slate-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={routes.book}
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 text-sm font-semibold"
            >
              {t("book")}
              <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
            <div className="mt-3">
              <LocaleSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
