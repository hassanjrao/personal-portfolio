"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, usePathname } from "@i18n/navigation";
import { brand, routes } from "@/config/site";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === routes.home;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Section anchors resolve against the home page from anywhere on the site.
  const anchor = (hash: string) => (isHome ? `#${hash}` : `${routes.home}#${hash}`);

  const links = [
    { label: t("about"), href: anchor("about") },
    { label: t("stack"), href: anchor("stack") },
    { label: t("projects"), href: anchor("projects") },
    { label: t("experience"), href: anchor("experience") },
    { label: t("reviews"), href: anchor("reviews") },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200 shadow-[0_1px_3px_rgba(15,36,56,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={routes.home} className="flex flex-col leading-none">
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              {brand.name}
              <span className="text-violet-600">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              {brand.tagline}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 hover:text-violet-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href={routes.blog}
              className="text-sm text-slate-600 hover:text-violet-700 transition-colors"
            >
              {t("blog")}
            </Link>
            <a
              href={anchor("contact")}
              className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors"
            >
              {t("contact")}
              <ArrowRight size={14} />
            </a>
          </div>

          <button
            className="md:hidden p-2 -me-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t("close") : t("menu")}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-5 pt-2 flex flex-col gap-1 border-t border-slate-200">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-2.5 text-sm text-slate-600"
              >
                {link.label}
              </a>
            ))}
            <Link
              href={routes.blog}
              onClick={closeMenu}
              className="py-2.5 text-sm text-slate-600"
            >
              {t("blog")}
            </Link>
            <a
              href={anchor("contact")}
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-violet-600 text-white text-sm font-semibold"
            >
              {t("contact")}
              <ArrowRight size={14} />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
