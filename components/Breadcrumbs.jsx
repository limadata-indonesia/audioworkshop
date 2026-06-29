"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getProduct, getBrand, getNewsItem, newsCategories } from "@/lib/data";

const LABELS = {
  products: "Products",
  brands: "Our Brands",
  news: "News",
  about: "About Us",
  contact: "Contact",
  dealers: "Find a Dealer",
  installation: "Project Car Installation",
  training: "Training Center",
  "car-audio-association": "Car Audio Association",
  portfolio: "Portfolio",
  "quality-policy": "Quality Policy",
  "why-choose-aws": "Why Choose Us",
  "retail-shop": "Retail Shop",
  magazine: "Magazine",
  "z3ro-solutions": "Z3RO Solutions",
};
const prettify = (s) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function Breadcrumbs() {
  const path = usePathname();
  if (!path || path === "/") return null;

  const segs = path.split("/").filter(Boolean);
  const crumbs = [{ href: "/", label: "Home" }];
  let acc = "";
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];
    acc += "/" + seg;
    if (seg === "category") continue; // structural segment, not shown
    const parent = segs[i - 1];
    let label = LABELS[seg] || prettify(seg);
    if (parent === "products") label = getProduct(seg)?.name || label;
    else if (parent === "brands") label = getBrand(seg)?.name || label;
    else if (parent === "news") label = getNewsItem(seg)?.title || label;
    else if (parent === "category") label = newsCategories.find((c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-") === seg) || label;
    crumbs.push({ href: acc, label });
  }

  return (
    <div className="pt-16 border-b border-white/5" style={{ background: "#0A0A0C" }}>
      <nav aria-label="Breadcrumb" className="no-scrollbar max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-xs overflow-x-auto">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <span key={c.href} className="flex items-center gap-2 whitespace-nowrap">
              {i > 0 && <span className="text-[#3A3A46]" aria-hidden="true">/</span>}
              {last ? (
                <span className="text-[#C9A84C] font-semibold truncate max-w-[260px]">{c.label}</span>
              ) : (
                <Link href={c.href} className="text-[#6A6A76] hover:text-[#F0F0F2] transition-colors">{c.label}</Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
