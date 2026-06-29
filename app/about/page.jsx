import { aboutCompany, aboutVisiMisi, aboutIntro, aboutCommitment, aboutSejarah } from "@/lib/about";
import { team } from "@/lib/team";

export const metadata = { title: "About Us — Audio Workshop Indonesia" };

const initials = (name) =>
  name.replace(/[.,]/g, "").split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

export default function Page() {
  return (
    <>
      {/* Our Company — full-bleed image gradienting into the dark + text */}
      <section className="relative w-full overflow-hidden pt-6" style={{ background: "#0C0C0E" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Image */}
          <div className="relative min-h-[340px] lg:min-h-[600px]">
            <img src="/pages/about-company.webp" alt="PT. Audioworkshop team & office" className="absolute inset-0 w-full h-full object-cover" />
            {/* gradient blend into the dark background (right on desktop, bottom on mobile) */}
            <div aria-hidden="true" className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, transparent 45%, rgba(12,12,14,0.55) 78%, #0C0C0E 100%)" }} />
            <div aria-hidden="true" className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to bottom, transparent 50%, #0C0C0E 100%)" }} />
            {/* subtle top vignette for depth */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, transparent 70%, rgba(12,12,14,0.5))" }} />
          </div>

          {/* Text */}
          <div className="relative flex flex-col justify-center px-6 md:px-12 lg:pl-6 lg:pr-20 py-14 lg:py-24">
            {/* gold glow accent */}
            <div aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 -left-24 w-80 h-80 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12), transparent 70%)" }} />
            <div className="relative max-w-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase">PT. Audioworkshop</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-7 tracking-tight leading-[1.05]">Our Company</h1>
              {aboutCompany.map((p, i) => (
                <p key={i} className="text-[#9A9AA6] leading-relaxed mb-4 last:mb-0">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="max-w-3xl mx-auto px-6 pb-8 mt-12">
        <h2 className="text-2xl md:text-3xl font-black text-[#F0F0F2] text-center mb-6">Visi dan Misi</h2>
        <ul className="space-y-2 mb-6">
          {aboutVisiMisi.map((v, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
              <span className="text-[#8A8A96] leading-relaxed">{v}</span>
            </li>
          ))}
        </ul>
        <p className="text-[#8A8A96] leading-relaxed mb-4">{aboutIntro}</p>
        <p className="text-[#8A8A96] leading-relaxed mb-4">Oleh karena itu PT. Audioworkshop berkomitmen untuk:</p>
        <ol className="space-y-2.5">
          {aboutCommitment.map((c, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <span className="text-[#8A8A96] leading-relaxed">{c}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="max-w-3xl mx-auto px-6"><div className="border-t border-[#1E1E26]" /></div>

      {/* Sejarah */}
      <section className="max-w-3xl mx-auto px-6 py-10 pb-24">
        <h2 className="text-2xl md:text-3xl font-black text-[#F0F0F2] text-center mb-8">Sejarah</h2>
        <div className="space-y-4">
          {aboutSejarah.map((p, i) => (
            <p key={i} className="text-[#8A8A96] leading-relaxed">{p}</p>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <img src="/pages/about-iso.png" alt="TÜV SÜD ISO 9001 certified" className="h-28 w-auto" />
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="relative overflow-hidden border-t border-white/5 py-20" style={{ background: "#0A0A0C" }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.04), transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase">Our People</span>
              <div className="w-8 h-px bg-[#C9A84C]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#F0F0F2] tracking-tight">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {team.map((m) => (
              <div key={m.name} className="group bg-[#131316] border border-[#1E1E26] hover:border-[#C9A84C]/40 rounded-xl p-5 text-center transition-colors">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center text-[#0C0C0E] font-black text-lg" style={{ background: "linear-gradient(135deg, #C9A84C, #B8963E)" }}>
                  {initials(m.name)}
                </div>
                <h3 className="text-[#F0F0F2] font-bold text-sm leading-snug">{m.name}</h3>
                <p className="text-[#8A8A96] text-xs mt-1.5 leading-snug">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
