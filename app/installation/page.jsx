import Link from "next/link";
import { projects } from "@/lib/data";

export const metadata = { title: "Installation — Audio Workshop Indonesia" };

export default function InstallationPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12" style={{ background: "#0C0C0E" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(201,168,76,0.05), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.2) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Our Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#F0F0F2] mb-4">Installation Showcase</h1>
          <p className="text-[#8A8A96] text-lg max-w-2xl">Every installation is a precision craft. Our certified technicians deliver factory-quality results with meticulous attention to detail.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-16">
        {projects.length === 0 ? (
          <p className="text-[#8A8A96]">Installation projects coming soon.</p>
        ) : (
          projects.map((proj) => (
            <article key={proj.slug} id={proj.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-white/5" style={{ background: "#131316" }}>
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden relative">
                <div className="w-full h-full min-h-64 relative" style={{ background: "linear-gradient(135deg, #0C0C0E, #131316 50%, #1A1710)" }}>
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 40% 50%, rgba(201,168,76,0.1), transparent 70%)" }} />
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-2">{proj.carModel}</p>
                <h2 className="text-2xl font-black text-[#F0F0F2] mb-4">{proj.title}</h2>
                {proj.description && (
                  <div className="text-[#8A8A96] text-sm leading-relaxed space-y-2 mb-6">
                    {proj.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
                {proj.components?.length > 0 && (
                  <div>
                    <h3 className="text-[#F0F0F2] text-xs font-bold tracking-widest uppercase mb-3">Components Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {proj.components.map((c, i) => (
                        <span key={i} className="text-xs border border-[#1E1E26] hover:border-[#C9A84C]/40 text-[#8A8A96] hover:text-[#F0F0F2] px-3 py-1 rounded-full transition-colors">
                          {c.brand} {c.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))
        )}
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(201,168,76,0.06), transparent 70%), #0F0F12" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 60% at 0% 50%, rgba(201,168,76,0.05), transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-black text-[#F0F0F2] mb-3">Want This for Your Car?</h2>
          <p className="text-[#8A8A96] mb-8">Contact us for a consultation. We&apos;ll design the perfect audio system for your vehicle.</p>
          <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
