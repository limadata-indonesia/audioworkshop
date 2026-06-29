"use client";
import { useState } from "react";
import Link from "next/link";
import { products, productCategories, getBrandName, catLabel } from "@/lib/data";

const PAGE = 20;

export default function ProductsGrid({ initialCategory }) {
  // honor ?category= from the URL when it matches a real product category
  const validInitial = productCategories.some((c) => c.value === initialCategory) ? initialCategory : "all";
  const [active, setActive] = useState(validInitial);
  const [visible, setVisible] = useState(PAGE);

  function selectCategory(value) {
    setActive(value);
    setVisible(PAGE); // reset paging when the filter changes
  }

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);
  const shown = filtered.slice(0, visible);

  return (
    <>
      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {productCategories.map((c) => (
            <button
              key={c.value}
              onClick={() => selectCategory(c.value)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                active === c.value
                  ? "bg-[#C9A84C] border-[#C9A84C] text-white"
                  : "border-[#1E1E26] text-[#8A8A96] hover:border-[#C9A84C]/50 hover:text-[#F0F0F2]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        {filtered.length === 0 ? (
          <p className="text-[#8A8A96]">Products coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {shown.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="product-card group bg-[#131316] border border-[#1E1E26] hover:border-[#C9A84C]/40 rounded-lg overflow-hidden transition-all hover:-translate-y-1"
              >
                <div className="aspect-square bg-white overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1E1E26] text-[#3A3A46] text-4xl">◈</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#C9A84C] text-xs font-bold">{getBrandName(p.brandSlug)}</span>
                    <span className="text-[#8A8A96] text-xs capitalize">{catLabel(p.category)}</span>
                  </div>
                  <h3 className="text-[#F0F0F2] font-bold group-hover:text-[#C9A84C] transition-colors">{p.name}</h3>
                  {p.shortDesc && <p className="text-[#8A8A96] text-xs mt-1 line-clamp-2">{p.shortDesc}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-[#6A6A76] text-xs tracking-wider uppercase">
              Showing {shown.length} of {filtered.length} products
            </p>
            {visible < filtered.length && (
              <button
                onClick={() => setVisible((v) => v + PAGE)}
                className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0C0C0E] text-xs font-bold tracking-[0.2em] uppercase px-10 py-3.5 rounded transition-all"
              >
                Load More
              </button>
            )}
          </div>
        )}
      </section>
    </>
  );
}
