"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/teams", label: "Teams" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav aria-label="Primary" className="p-4">
      <div className="flex items-center justify-between gap-3">
        <Link href="/" className="font-mono">
          Club C.O.D.E.
        </Link>

        {/* Desktop links */}
        <div className="hidden flex-wrap justify-end gap-2 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="btn btn-sm sm:btn-md btn-outline border-white/40 text-white hover:bg-white hover:text-black font-mono"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile dropdown */}
        <div className="relative sm:hidden">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-haspopup="menu"
            className="btn btn-sm btn-square btn-outline border-white/40 text-white hover:bg-white hover:text-black"
          >
            <span className="relative block size-5" aria-hidden="true">
              <Menu
                className={`absolute inset-0 size-5 transition-all duration-300 ease-out ${
                  open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 size-5 transition-all duration-300 ease-out ${
                  open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
                }`}
              />
            </span>
          </button>

          {/* Click-outside backdrop */}
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className={`fixed inset-0 z-40 cursor-default transition-opacity duration-200 ${
              open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />

          {/* Dropdown panel */}
          <div
            id="mobile-nav"
            role="menu"
            className={`absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-xl border border-white/15 bg-zinc-900/95 p-1.5 shadow-xl shadow-black/40 backdrop-blur transition duration-200 ease-out ${
              open
                ? "scale-100 opacity-100"
                : "pointer-events-none -translate-y-1 scale-95 opacity-0"
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 font-mono text-sm text-zinc-200 transition hover:bg-white hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
