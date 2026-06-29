import Link from "next/link";
import { notFound } from "next/navigation";
import { news, getNewsItem, fmtDate, catLabel } from "@/lib/data";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }) {
  const article = getNewsItem(params.slug);
  if (!article) return { title: "News — Audio Workshop Indonesia" };
  return {
    title: `${article.title} — Audio Workshop Indonesia`,
    description: article.excerpt,
  };
}

export default function Page({ params }) {
  const article = getNewsItem(params.slug);
  if (!article) notFound();

  return (
    <>
      <section className="pt-32 max-w-3xl mx-auto px-6 pb-24">
        <Link href="/news" className="text-[#8A8A96] hover:text-[#C9A84C] text-sm transition-colors mb-8 inline-block">← Back to News</Link>

        <div className="flex items-center gap-3 mb-4">
          {article.category && <span className="text-[#C9A84C] text-xs font-bold tracking-wider uppercase">{catLabel(article.category)}</span>}
          {article.date && <span className="text-[#8A8A96] text-xs">{fmtDate(article.date)}</span>}
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-6 leading-tight">{article.title}</h1>

        {article.image && (
          <div className="aspect-video rounded-xl overflow-hidden mb-8 bg-[#131316] border border-[#1E1E26]">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="prose text-[#8A8A96] leading-relaxed space-y-4">
          {article.body?.map((block, i) => {
            if (block.type === "h") return <h2 key={i} className="text-[#F0F0F2] text-2xl font-black mt-8 mb-3">{block.text}</h2>;
            if (block.type === "li")
              return (
                <div key={i} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                  <p className="flex-1">{block.text}</p>
                </div>
              );
            return <p key={i}>{block.text}</p>;
          })}
        </div>
      </section>
    </>
  );
}
