"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brands } from "@/lib/data";

const brandItems = [
  ...brands.map((b) => ({ href: `/brands/${b.slug}`, label: b.name })),
  { href: "/brands", label: "All Brands →" },
];

const supportingItems = [
  { href: "/installation", label: "Project Car Installation" },
  { href: "/training", label: "Training Center" },
  { href: "/car-audio-association", label: "Car Audio Association" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/retail-shop", label: "Retail Shop" },
  { href: "/magazine", label: "Magazine" },
];

// menu: { href, label, items?, link? }  — link:false means the parent only opens the dropdown
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/brands", label: "Our Brands", items: brandItems },
  { href: "/installation", label: "Supporting Business", items: supportingItems, link: false },
  { href: "/dealers", label: "Find a Dealer" },
  { href: "/news", label: "News" },
  { href: "/products", label: "E-Shop" },
];

const itemBase = "px-3 py-2 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const close = () => setOpen(false);

  const isActive = (l) => {
    if (l.items) return l.items.some((i) => path === i.href || (i.href !== "/brands" && path.startsWith(i.href)));
    return l.href === "/" ? path === "/" : path.startsWith(l.href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0C0C0E]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Audio Workshop" className="h-9 w-auto" />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = isActive(l);
            if (!l.items) {
              return (
                <Link key={l.label} href={l.href} className={`${itemBase} ${active ? "text-[#C9A84C]" : "text-[#8A8A96] hover:text-[#F0F0F2]"}`}>
                  {l.label}
                </Link>
              );
            }
            const TriggerInner = (
              <>
                {l.label}
                <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </>
            );
            return (
              <div key={l.label} className="relative group">
                {l.link === false ? (
                  <button className={`flex items-center gap-1 ${itemBase} ${active ? "text-[#C9A84C]" : "text-[#8A8A96] hover:text-[#F0F0F2]"}`}>{TriggerInner}</button>
                ) : (
                  <Link href={l.href} className={`flex items-center gap-1 ${itemBase} ${active ? "text-[#C9A84C]" : "text-[#8A8A96] hover:text-[#F0F0F2]"}`}>{TriggerInner}</Link>
                )}
                <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
                  <div className="min-w-[220px] rounded-lg border border-[#1E1E26] bg-[#0C0C0E] shadow-2xl shadow-black/50 py-2">
                    {l.items.map((i) => (
                      <Link
                        key={i.href + i.label}
                        href={i.href}
                        className={`block px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-[#131316] ${
                          path === i.href ? "text-[#C9A84C]" : "text-[#8A8A96] hover:text-[#F0F0F2]"
                        }`}
                      >
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded transition-colors"
        >
          Get a Quote
        </Link>

        <button onClick={() => setOpen((v) => !v)} className="lg:hidden text-[#F0F0F2] p-2" aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden border-t border-white/5 bg-[#0C0C0E] max-h-[80vh] overflow-y-auto">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => {
              const active = isActive(l);
              if (!l.items) {
                return (
                  <Link key={l.label} href={l.href} onClick={close} className={`px-3 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-colors ${active ? "text-[#C9A84C] bg-[#C9A84C]/10" : "text-[#8A8A96] hover:text-[#F0F0F2] hover:bg-[#131316]"}`}>
                    {l.label}
                  </Link>
                );
              }
              return (
                <div key={l.label}>
                  <p className={`px-3 py-2 text-xs font-semibold tracking-wider uppercase ${active ? "text-[#C9A84C]" : "text-[#8A8A96]"}`}>{l.label}</p>
                  <div className="ml-3 mb-1 flex flex-col gap-1 border-l border-[#1E1E26] pl-3">
                    {l.items.map((i) => (
                      <Link key={i.href + i.label} href={i.href} onClick={close} className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded text-[#8A8A96] hover:text-[#F0F0F2] hover:bg-[#131316] transition-colors">
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            <Link href="/contact" onClick={close} className="mt-3 bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] text-xs font-bold tracking-widest uppercase px-4 py-2.5 rounded text-center transition-colors">
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
