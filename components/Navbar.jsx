"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/influencers", label: "Influencers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm ring-1 ring-slate-200/60"
          : "bg-white/75 backdrop-blur-md"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="InfluenceX home"
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-fuchsia-500 text-white font-black shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
            iX
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Influence<span className="gradient-text">X</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand-100 text-brand-700"
                      : "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Start a Campaign
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-brand-50"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200/70 bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium ${
                    active
                      ? "bg-brand-100 text-brand-700"
                      : "text-slate-700 hover:bg-brand-50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary mt-2">
              Start a Campaign
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
