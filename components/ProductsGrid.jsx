"use client";
import { useState } from "react";
import Link from "next/link";
import { products, productCategories, getBrandName, catLabel } from "@/lib/data";

export default function ProductsGrid() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {productCategories.map((c) => (
            <button
              key={c.value}
              onClick={() => setActive(c.value)}
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
            {filtered.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="product-card group bg-[#131316] border border-[#1E1E26] hover:border-[#C9A84C]/40 rounded-lg overflow-hidden transition-all hover:-translate-y-1"
              >
                <div className="aspect-square bg-[#1E1E26] overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-[#1E1E26] text-4xl">◈</div>
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
      </section>
    </>
  );
}
