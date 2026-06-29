import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, getBrand, relatedProducts, getBrandName, catLabel } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Audio Workshop Indonesia`,
    description: product.shortDesc,
  };
}

export default function Page({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const brand = getBrand(product.brandSlug);
  const related = relatedProducts(product.category, product.slug);

  return (
    <>
      <section className="pt-10 max-w-7xl mx-auto px-6 pb-24">
        <Link href="/products" className="text-[#8A8A96] hover:text-[#C9A84C] text-sm transition-colors mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div>
            <div className="aspect-square bg-white border border-[#1E1E26] rounded-xl overflow-hidden mb-4">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-contain p-6" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#131316] text-[#1E1E26] text-6xl">◈</div>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              {brand && (
                <Link href={`/brands/${brand.slug}`} className="text-[#C9A84C] text-sm font-bold hover:underline">
                  {brand.name}
                </Link>
              )}
              <span className="text-[#8A8A96] text-xs border border-[#1E1E26] px-2 py-0.5 rounded-full capitalize">
                {catLabel(product.category)}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-4">{product.name}</h1>
            {product.shortDesc && <p className="text-[#8A8A96] text-lg mb-6 leading-relaxed">{product.shortDesc}</p>}

            {product.description && (
              <div className="prose prose-invert text-[#8A8A96] text-sm leading-relaxed space-y-3 mb-8">
                {product.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#B8963E] text-white font-bold px-8 py-4 rounded text-sm tracking-wider uppercase transition-colors"
            >
              Inquire About This Product
            </Link>
          </div>
        </div>

        {/* Specs */}
        {product.specs?.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl font-black text-[#F0F0F2] mb-6">Specifications</h2>
            <div className="bg-[#131316] border border-[#1E1E26] rounded-xl overflow-hidden">
              {product.specs.map((s, i) => (
                <div key={i} className={`flex ${i > 0 ? "border-t border-[#1E1E26]" : ""}`}>
                  <div className="w-48 px-6 py-3 text-[#8A8A96] text-sm font-semibold bg-[#0C0C0E] flex-shrink-0">
                    {s.key}
                  </div>
                  <div className="px-6 py-3 text-[#F0F0F2] text-sm flex-1">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-black text-[#F0F0F2] mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group bg-[#131316] border border-[#1E1E26] hover:border-[#C9A84C]/40 rounded-lg overflow-hidden transition-all hover:-translate-y-1"
                >
                  <div className="aspect-square bg-white overflow-hidden">
                    {p.image ? (
                      <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#1E1E26] text-[#1E1E26]">◈</div>
                    )}
                  </div>
                  <div className="p-3">
                    <span className="text-[#C9A84C] text-xs font-bold">{getBrandName(p.brandSlug)}</span>
                    <h3 className="text-[#F0F0F2] text-sm font-bold mt-0.5 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
