import { portfolio } from "@/lib/portfolio";

export const metadata = { title: "Portfolio — Audio Workshop Indonesia" };

export default function Page() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#ffffff" }}>
      {/* Full background image (faded building + orange curve + storefront) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundImage: "url(/pages/portfolio-building.png)", backgroundSize: "cover", backgroundPosition: "center right" }}
      />
      {/* White scrim on the left for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.35) 62%, transparent 75%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28">
        <div className="lg:max-w-[58%]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#B8963E] text-xs font-bold tracking-[0.2em] uppercase">Supporting Business</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#0C0C0E] mb-10 tracking-tight">Portfolio</h1>

          <ul className="space-y-5">
            {portfolio.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                <p className="leading-relaxed text-[0.9375rem]">
                  <strong className="text-[#0C0C0E] font-bold">{p.bold}</strong>{" "}
                  <span className="text-[#3A3A46]">{p.rest}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
