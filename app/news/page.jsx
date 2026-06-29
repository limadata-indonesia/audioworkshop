import Link from "next/link";
import { news, newsCategories, newsByCategory, fmtDate } from "@/lib/data";

export const metadata = { title: "News — Audio Workshop Indonesia" };

const catSlug = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function Thumb({ a, className = "" }) {
  return a.image ? (
    <img src={a.image} alt={a.title} loading="lazy" className={`w-full h-full object-cover ${className}`} />
  ) : (
    <div className="w-full h-full relative" style={{ background: "linear-gradient(135deg, #111114, #0E0E10)" }}>
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-10 h-px bg-[#C9A84C]/20" /></div>
    </div>
  );
}

function Card({ a }) {
  return (
    <Link href={`/news/${a.slug}`} className="group flex flex-col no-underline">
      <div className="aspect-video overflow-hidden rounded-lg border border-[#1E1E26] bg-[#1E1E26] mb-3">
        <Thumb a={a} className="opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
      </div>
      <h3 className="text-[#F0F0F2] font-bold text-sm leading-snug group-hover:text-[#C9A84C] transition-colors line-clamp-2">{a.title}</h3>
      <p className="text-[#6A6A76] text-[0.6875rem] mt-2">{fmtDate(a.date)}</p>
    </Link>
  );
}

export default function Page() {
  const featured = news[0];
  const hotList = news.slice(1, 5);

  return (
    <>
      {/* Header + category nav */}
      <section className="pt-10 pb-6 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">News</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-6 tracking-tight">Latest News</h1>
        <nav className="no-scrollbar flex items-center gap-1 overflow-x-auto border-y border-[#1E1E26] py-3 text-xs font-bold tracking-wider uppercase">
          <a href="#hot-news" className="px-3 py-1 text-[#F0F0F2] hover:text-[#C9A84C] whitespace-nowrap transition-colors">Hot News</a>
          {newsCategories.map((c) => (
            <span key={c} className="flex items-center">
              <span className="text-[#1E1E26]">|</span>
              <a href={`#${catSlug(c)}`} className="px-3 py-1 text-[#8A8A96] hover:text-[#C9A84C] whitespace-nowrap transition-colors">{c}</a>
            </span>
          ))}
        </nav>
      </section>

      {/* Hot News */}
      {featured && (
        <section id="hot-news" className="max-w-7xl mx-auto px-6 pt-6 pb-14 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-black text-[#F0F0F2] mb-6 tracking-tight">Hot News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured */}
            <Link href={`/news/${featured.slug}`} className="group flex flex-col no-underline">
              <div className="aspect-video overflow-hidden rounded-xl border border-[#1E1E26] bg-[#1E1E26] mb-4">
                <Thumb a={featured} className="opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <h3 className="text-[#F0F0F2] font-black text-xl md:text-2xl leading-snug group-hover:text-[#C9A84C] transition-colors">{featured.title}</h3>
              <p className="text-[#6A6A76] text-xs mt-2">{fmtDate(featured.date)}</p>
            </Link>
            {/* List */}
            <div className="flex flex-col divide-y divide-[#1E1E26]">
              {hotList.map((a) => (
                <Link key={a.slug} href={`/news/${a.slug}`} className="group flex gap-4 py-4 first:pt-0 no-underline">
                  <div className="w-28 h-20 shrink-0 overflow-hidden rounded-lg border border-[#1E1E26] bg-[#1E1E26]">
                    <Thumb a={a} className="group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-[#F0F0F2] font-bold text-sm leading-snug group-hover:text-[#C9A84C] transition-colors line-clamp-2">{a.title}</h4>
                    <p className="text-[#6A6A76] text-[0.6875rem] mt-1.5">{fmtDate(a.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Per-category rows */}
      {newsCategories.map((cat) => {
        const items = newsByCategory(cat).slice(0, 4);
        if (!items.length) return null;
        return (
          <section key={cat} id={catSlug(cat)} className="max-w-7xl mx-auto px-6 py-10 border-t border-[#1E1E26] scroll-mt-20">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-black text-[#F0F0F2] tracking-tight">{cat}</h2>
              <Link href={`/news/category/${catSlug(cat)}`} className="text-[#C9A84C] text-xs font-bold tracking-wider uppercase hover:underline whitespace-nowrap">View All »</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {items.map((a) => <Card key={a.slug} a={a} />)}
            </div>
          </section>
        );
      })}

      {/* Subscribe */}
      <section className="relative overflow-hidden border-t border-white/5 mt-6" style={{ background: "#0C0C0E" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(201,168,76,0.05), transparent 70%)" }} />
        <div className="relative max-w-2xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#F0F0F2] mb-3 tracking-tight">Dapatkan berita terbaru!</h2>
          <p className="text-[#6A6A76] text-sm mb-8 max-w-md mx-auto">Masukkan email Anda untuk mendapatkan informasi berita terbaru dari Audioworkshop.</p>
          <form action="https://formsubmit.co/info@audioworkshop.co.id" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" name="email" placeholder="Your email address" required className="flex-1 bg-white/4 border border-white/10 text-[#F0F0F2] placeholder-[#4A4A56] px-5 py-3.5 text-sm outline-none focus:border-[#C9A84C]/50 transition-colors" style={{ minWidth: 0 }} />
            <button type="submit" className="bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] font-bold px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-colors shrink-0">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
