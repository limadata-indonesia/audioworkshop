import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, getBrand, productsByBrand, catLabel } from "@/lib/data";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const brand = getBrand(params.slug);
  if (!brand) return { title: "Brand — Audio Workshop Indonesia" };
  return { title: `${brand.name} — Audio Workshop Indonesia` };
}

export default function Page({ params }) {
  const brand = getBrand(params.slug);
  if (!brand) notFound();

  const items = productsByBrand(brand.slug);

  return (
    <>
      <section className="pt-32 pb-0 max-w-7xl mx-auto px-6">
        <Link href="/brands" className="text-[#8A8A96] hover:text-[#C9A84C] text-sm transition-colors mb-8 inline-block">← Back to Brands</Link>

        <div className="bg-[#131316] border border-[#1E1E26] rounded-xl overflow-hidden mb-16">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-start gap-8">
            <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2]">{brand.name}</h1>
            <div>
              {brand.country && <span className="text-[#8A8A96] text-xs border border-[#1E1E26] px-2 py-0.5 rounded-full mb-3 inline-block">{brand.country}</span>}
              {brand.tagline && <h2 className="text-[#F0F0F2] text-2xl font-bold mb-3">{brand.tagline}</h2>}
              {brand.description && (
                <div className="text-[#8A8A96] text-sm leading-relaxed space-y-2">
                  {brand.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
              {brand.website && (
                <a href={brand.website} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-4 text-[#C9A84C] text-sm font-semibold hover:underline">
                  Official Website ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {items.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-black text-[#F0F0F2] mb-8">{brand.name} Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {items.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group bg-[#131316] border border-[#1E1E26] hover:border-[#C9A84C]/40 rounded-lg overflow-hidden transition-all hover:-translate-y-1">
                <div className="aspect-square bg-white overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1E1E26] text-[#3A3A46] text-4xl">◈</div>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-[#8A8A96] text-xs capitalize">{catLabel(p.category)}</span>
                  <h3 className="text-[#F0F0F2] font-bold mt-1 group-hover:text-[#C9A84C] transition-colors">{p.name}</h3>
                  {p.shortDesc && <p className="text-[#8A8A96] text-xs mt-1 line-clamp-2">{p.shortDesc}</p>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
