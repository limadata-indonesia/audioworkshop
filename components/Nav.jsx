"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/products", label: "Products" },
  { href: "/installation", label: "Installation" },
  { href: "/training", label: "Training" },
  { href: "/dealers", label: "Dealers" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0C0C0E]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Audio Workshop" className="h-9 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
                path === l.href ? "text-[#C9A84C]" : "text-[#8A8A96] hover:text-[#F0F0F2]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded transition-colors"
        >
          Get a Quote
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-[#F0F0F2] p-2"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-[#0C0C0E]">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-colors ${
                  path === l.href
                    ? "text-[#C9A84C] bg-[#C9A84C]/10"
                    : "text-[#8A8A96] hover:text-[#F0F0F2] hover:bg-[#131316]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] text-xs font-bold tracking-widest uppercase px-4 py-2.5 rounded text-center transition-colors"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
