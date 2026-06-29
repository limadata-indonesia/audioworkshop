import Link from "next/link";

export const metadata = {
  title: "Project Car Installation — Audio Workshop Indonesia",
  description:
    "Visual 3D design, acoustic product design, and full audio system builds — from demo vehicles to extreme custom projects.",
};

const gallery = ["/pages/pci-1.jpg", "/pages/pci-2.jpg", "/pages/pci-3.jpg", "/pages/pci-4.jpg"];

export default function Page() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-6">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 7" }}>
          <img src="/pages/pci-banner.jpg" alt="Project car installation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(12,12,14,0.35) 0%, transparent 35%, rgba(12,12,14,0.9) 100%)" }} />
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Supporting Business</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-6 tracking-tight">Project Car Installation</h1>
        <p className="text-[#8A8A96] leading-relaxed max-w-3xl">
          Kami melakukan desain visual untuk model 3D, desain produk akustik (akustik ruang dan peralatan untuk speaker, crossover dan boks subwoofer). Kami juga mengerjakan proyek rancang bangun sistem audio untuk ATPM (Agen Tunggal Pemegang Merk), membuat kendaraan demo dari yang sederhana sampai tingkat ekstreme serta beberapa proyek &ldquo;custom&rdquo; yang disesuaikan dengan permintaan klien.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg border border-[#1E1E26] group bg-[#131316]">
              <img src={src} alt={`Installation project ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(201,168,76,0.06), transparent 70%), #0F0F12" }} />
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
