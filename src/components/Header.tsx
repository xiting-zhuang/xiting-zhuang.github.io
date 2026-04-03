"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/grants", label: "Grants" },
  { href: "/teaching", label: "Teaching" },
  { href: "/experiences", label: "Experiences" },
  { href: "/contact", label: "Contact" },
  { href: "/file/XitingZhuang-Resume.pdf", label: "CV", external: true },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-widest text-accent-green hover:text-accent-green/80 transition-colors uppercase"
        >
          Xiting Zhuang
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-accent-green bg-accent-green/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-text-secondary transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-text-secondary transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-text-secondary transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-bg-primary/95 backdrop-blur-md animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((link) => {
              const isActive = link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                    isActive
                      ? "text-accent-green bg-accent-green/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
