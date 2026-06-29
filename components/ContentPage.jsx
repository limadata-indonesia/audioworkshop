import { getPage } from "@/lib/pages";
import { notFound } from "next/navigation";

const Check = () => (
  <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// Render a run of list items as a 2-col card grid.
function ListGrid({ items, start }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-3 my-2">
      {items.map((b, i) => (
        <li key={start + i} className="flex gap-3 bg-[#131316] border border-[#1E1E26] rounded-lg p-4 hover:border-[#C9A84C]/30 transition-colors">
          <Check />
          <span className="text-[#A8A8B2] text-sm leading-relaxed">{b.text}</span>
        </li>
      ))}
    </ul>
  );
}

// Render a section's body, grouping consecutive list items into a grid.
function Body({ items, leadFirst }) {
  const out = [];
  let run = [];
  const flush = () => {
    if (run.length) { out.push(<ListGrid key={`l${out.length}`} items={run} start={out.length * 100} />); run = []; }
  };
  items.forEach((b, i) => {
    if (b.type === "li") { run.push(b); return; }
    flush();
    const isLead = leadFirst && out.length === 0 && i === 0;
    out.push(
      <p key={`p${i}`} className={isLead ? "text-[#C9C9D2] text-lg leading-relaxed mb-2" : "text-[#8A8A96] leading-relaxed"}>
        {b.text}
      </p>
    );
  });
  flush();
  return <div className="space-y-4">{out}</div>;
}

export default function ContentPage({ slug, eyebrow = "Audio Workshop" }) {
  const page = getPage(slug);
  if (!page) notFound();

  // long "headings" were mis-tagged paragraphs — demote them
  const blocks = page.blocks.map((b) => (b.type === "h" && b.text.length > 90 ? { type: "p", text: b.text } : b));

  // group into sections: each starts at a heading; pre-heading blocks form an intro
  const sections = [];
  let cur = { heading: null, items: [] };
  for (const b of blocks) {
    if (b.type === "h") { if (cur.heading || cur.items.length) sections.push(cur); cur = { heading: b.text, items: [] }; }
    else cur.items.push(b);
  }
  if (cur.heading || cur.items.length) sections.push(cur);

  const headed = sections.filter((s) => s.heading);
  const hasLists = blocks.some((b) => b.type === "li");
  // "feature grid" pages: many short headed sections, no lists (e.g. Why Choose Us)
  const featureMode = headed.length >= 4 && !hasLists;
  const intro = sections.find((s) => !s.heading);

  return (
    <>
      {/* ── Header ── */}
      <section className="relative overflow-hidden pt-32 pb-14" style={{ background: "#0C0C0E" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 75% 30%, rgba(201,168,76,0.07), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.2) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)" }} />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">{eyebrow}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2] leading-tight tracking-tight max-w-3xl">{page.title}</h1>
        </div>
      </section>

      {/* ── Body ── */}
      <section className={`mx-auto px-6 pt-12 pb-24 ${featureMode ? "max-w-6xl" : "max-w-3xl"}`}>
        {featureMode ? (
          <>
            {intro && <div className="mb-12 max-w-2xl"><Body items={intro.items} leadFirst /></div>}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {headed.map((s, i) => (
                <div key={i} className="bg-[#131316] border border-[#1E1E26] rounded-xl p-6 hover:border-[#C9A84C]/40 transition-colors group">
                  <div className="w-8 h-1 bg-[#C9A84C] mb-5 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-[#F0F0F2] text-lg font-black mb-3 group-hover:text-[#C9A84C] transition-colors">{s.heading}</h3>
                  <div className="text-sm">
                    {s.items.map((b, j) => (
                      <p key={j} className="text-[#8A8A96] text-sm leading-relaxed">{b.text}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          sections.map((s, i) => (
            <div key={i}>
              {s.heading && (
                <div className="flex items-center gap-3 mb-5 mt-12 first:mt-0">
                  <div className="w-8 h-px bg-[#C9A84C] flex-shrink-0" />
                  <h2 className="text-[#F0F0F2] text-2xl font-black tracking-tight">{s.heading}</h2>
                </div>
              )}
              <Body items={s.items} leadFirst={i === 0} />
            </div>
          ))
        )}

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-[#1E1E26] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#6A6A76] text-sm">Have questions? Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] font-bold px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-colors whitespace-nowrap">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
