import Link from "next/link";
import { notFound } from "next/navigation";
import { newsCategories, newsByCategory, fmtDate } from "@/lib/data";

const catSlug = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function generateStaticParams() {
  return newsCategories.map((c) => ({ slug: catSlug(c) }));
}

export async function generateMetadata({ params }) {
  const cat = newsCategories.find((c) => catSlug(c) === params.slug);
  return { title: cat ? `${cat} News — Audio Workshop Indonesia` : "News — Audio Workshop Indonesia" };
}

export default function Page({ params }) {
  const cat = newsCategories.find((c) => catSlug(c) === params.slug);
  if (!cat) notFound();
  const items = newsByCategory(cat);

  return (
    <section className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <Link href="/news" className="text-[#8A8A96] hover:text-[#C9A84C] text-sm transition-colors mb-8 inline-block">← Back to News</Link>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-px bg-[#C9A84C]" />
        <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">News</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-10">{cat}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((a) => (
          <Link key={a.slug} href={`/news/${a.slug}`} className="group bg-[#131316] border border-[#1E1E26] hover:border-[#C9A84C]/40 rounded-xl overflow-hidden transition-all hover:-translate-y-1 flex flex-col no-underline">
            <div className="aspect-[3/2] overflow-hidden bg-[#1E1E26]">
              {a.image ? (
                <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              ) : (
                <div className="w-full h-full relative" style={{ background: "linear-gradient(135deg, #111114, #0E0E10)" }}>
                  <div className="absolute inset-0 flex items-center justify-center"><div className="w-10 h-px bg-[#C9A84C]/20" /></div>
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[#6A6A76] text-[0.6875rem] mb-2">{fmtDate(a.date)}</p>
              <h2 className="text-[#F0F0F2] font-black text-lg group-hover:text-[#C9A84C] transition-colors mb-2 line-clamp-2">{a.title}</h2>
              {a.excerpt && <p className="text-[#8A8A96] text-sm line-clamp-3 flex-1">{a.excerpt}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
