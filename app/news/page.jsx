import Link from "next/link";
import { news, fmtDate, catLabel } from "@/lib/data";

export const metadata = { title: "News — Audio Workshop Indonesia" };

export default function Page() {
  return (
    <>
      <section className="pt-32 pb-12 max-w-7xl mx-auto px-6">
        <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-2">News</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#F0F0F2] mb-4">Latest Updates</h1>
        <p className="text-[#8A8A96] text-lg max-w-2xl">Product launches, events, tips, and news from the world of premium car audio.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        {news.length === 0 ? (
          <p className="text-[#8A8A96]">News coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((a, i) => (
              <Link key={a.slug} href={`/news/${a.slug}`} className={`group bg-[#131316] border border-[#1E1E26] hover:border-[#C9A84C]/40 rounded-xl overflow-hidden transition-all hover:-translate-y-1 ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}>
                <div className={`overflow-hidden relative ${i === 0 ? "aspect-video" : "aspect-[3/2]"} bg-[#1E1E26]`} style={{ background: "linear-gradient(135deg, #111114, #0E0E10)" }}>
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.07), transparent 70%)" }} />
                  <div className="absolute inset-0 flex items-center justify-center"><div className="w-10 h-px bg-[#C9A84C]/20" /></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {a.category && <span className="text-[#C9A84C] text-xs font-bold tracking-wider uppercase">{catLabel(a.category)}</span>}
                    {a.date && <span className="text-[#8A8A96] text-xs">{fmtDate(a.date)}</span>}
                  </div>
                  <h2 className={`text-[#F0F0F2] font-black group-hover:text-[#C9A84C] transition-colors mb-2 ${i === 0 ? "text-xl md:text-2xl" : "text-lg"}`}>{a.title}</h2>
                  {a.excerpt && <p className="text-[#8A8A96] text-sm line-clamp-2">{a.excerpt}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
