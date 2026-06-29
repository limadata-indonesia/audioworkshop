import Link from "next/link";
import { brands, catLabel } from "@/lib/data";

export const metadata = { title: "Our Brands — Audio Workshop Indonesia" };

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16" style={{ background: "#0C0C0E" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(201,168,76,0.05), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.2) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Our Brands</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#F0F0F2] mb-4">World-Class Partners</h1>
          <p className="text-[#8A8A96] text-lg max-w-2xl">We are the authorized distributor for the world's most respected car audio brands, bringing genuine products and full manufacturer support to Indonesia.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        {brands.length === 0 ? (
          <p className="text-[#8A8A96]">Brands coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
            {brands.map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}`} className="group bg-[#0C0C0E] hover:bg-[#0F0F12] overflow-hidden transition-all relative">
                <div className="aspect-video relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0C0C0E, #131316)" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08), transparent 70%)" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#1E1E26] group-hover:text-[#C9A84C]/20 text-5xl font-black tracking-tighter transition-colors duration-300">{b.name?.[0]}</span>
                  </div>
                </div>
                <div className="p-6 border-t border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[#F0F0F2] font-black text-xl group-hover:text-[#C9A84C] transition-colors">{b.name}</h2>
                    {b.country && <span className="text-[#6A6A76] text-xs border border-white/8 px-2 py-0.5">{b.country}</span>}
                  </div>
                  {b.tagline && <p className="text-[#6A6A76] text-xs leading-relaxed">{b.tagline}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
