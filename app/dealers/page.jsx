import Link from "next/link";
import { dealersByRegion, dealerRegions, dealers } from "@/lib/data";

export const metadata = { title: "Dealers — Audio Workshop Indonesia" };

const regionSlug = (r) => r.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const firstPhone = (p) => (p || "").split("|")[0].trim();
const digits = (p) => firstPhone(p).replace(/\D/g, "");
const waNumber = (p) => digits(p).replace(/^0/, "62");
const isMobile = (p) => /^08/.test(digits(p));
const mapsUrl = (d) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.name + " " + (d.address || ""))}`;

export default function Page() {
  const groups = dealersByRegion();

  return (
    <>
      <section className="pt-32 pb-6 max-w-7xl mx-auto px-6">
        <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-2">Dealer Network</p>
        <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-4">Find a Dealer</h1>
        <p className="text-[#8A8A96] text-lg max-w-2xl mb-6">
          {dealers.length} authorized Audio Workshop dealers across Indonesia, ready to serve you with genuine products and expert installation.
        </p>
        {/* Region navigation */}
        <nav className="no-scrollbar flex flex-wrap gap-2 border-t border-[#1E1E26] pt-5">
          {dealerRegions.map((r) => (
            <a
              key={r}
              href={`#${regionSlug(r)}`}
              className="px-3.5 py-1.5 rounded-full border border-[#1E1E26] text-[#8A8A96] hover:border-[#C9A84C]/60 hover:text-[#F0F0F2] text-xs font-semibold tracking-wide transition-colors whitespace-nowrap"
            >
              {r}
            </a>
          ))}
        </nav>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-14">
        {groups.map((group) => (
          <div key={group.region} id={regionSlug(group.region)} className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[#F0F0F2] font-black text-xl whitespace-nowrap">{group.region}</h2>
              <span className="text-[#6A6A76] text-sm">{group.items.length}</span>
              <div className="flex-1 h-px bg-[#1E1E26]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.items.map((d, i) => (
                <div key={d.name + i} className="bg-[#131316] border border-[#1E1E26] rounded-xl p-5 hover:border-[#C9A84C]/30 transition-colors flex flex-col">
                  <h3 className="text-[#F0F0F2] font-black text-lg mb-2 leading-snug">{d.name}</h3>
                  {d.address && <p className="text-[#8A8A96] text-sm mb-4 leading-relaxed flex-1">{d.address}</p>}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {d.phone && (
                      <a href={`tel:${digits(d.phone)}`} className="flex items-center gap-1.5 text-xs text-[#8A8A96] hover:text-[#F0F0F2] border border-[#1E1E26] hover:border-[#C9A84C]/40 px-3 py-1.5 rounded-full transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
                        Call
                      </a>
                    )}
                    {d.phone && isMobile(d.phone) && (
                      <a href={`https://wa.me/${waNumber(d.phone)}`} target="_blank" rel="noopener" className="flex items-center gap-1.5 text-xs text-[#8A8A96] hover:text-[#F0F0F2] border border-[#1E1E26] hover:border-[#C9A84C]/40 px-3 py-1.5 rounded-full transition-colors">
                        WhatsApp
                      </a>
                    )}
                    <a href={mapsUrl(d)} target="_blank" rel="noopener" className="flex items-center gap-1.5 text-xs bg-[#C9A84C]/10 hover:bg-[#C9A84C] text-[#C9A84C] hover:text-[#0C0C0E] border border-[#C9A84C]/30 hover:border-[#C9A84C] px-3 py-1.5 rounded-full transition-all">
                      Maps →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Become a Dealer CTA */}
      <section className="bg-[#131316] border-t border-[#1E1E26]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-black text-[#F0F0F2] mb-3">Become an Authorized Dealer</h2>
          <p className="text-[#8A8A96] mb-8 max-w-xl mx-auto">Join Indonesia&apos;s premier car audio dealer network. We provide training, support, and the world&apos;s best product lines.</p>
          <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#B8963E] text-white font-bold px-10 py-4 rounded text-sm tracking-wider uppercase transition-colors">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
}
