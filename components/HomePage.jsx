"use client";
import Link from "next/link";
import TestimonialCard from "./TestimonialCard";

/* ── Static content (CMS removed) ─────────────────────── */
const heroTitle = "Sound That Moves You";
const heroSub = "Indonesia's premier authorized distributor of premium car audio systems.";

const allBrands = ["Focal", "Alpine", "Hertz", "Audison", "JL Audio", "Pioneer", "Mosconi", "Helix"];
const featuredBrands = ["Focal", "Alpine", "Hertz", "Audison", "JL Audio", "Morel", "Helix", "Mosconi", "Burmester"];

const featuredProject = { title: "Toyota Alphard — Reference Build", carModel: "Toyota Alphard" };

const news = [
  { slug: "focal-utopia-m-arrives", title: "Focal Utopia M Series Arrives in Indonesia", excerpt: "The reference benchmark for in-car high fidelity is now available through our authorized network.", date: "2026-06-20" },
  { slug: "audison-thesis-launch", title: "Audison Thesis Quattro: Italian Engineering Unveiled", excerpt: "A new flagship amplifier line built for the most demanding reference systems.", date: "2026-06-12" },
  { slug: "installer-certification-2026", title: "2026 Installer Certification Program Opens", excerpt: "Hands-on training with certified master technicians across our dealer network.", date: "2026-05-30" },
  { slug: "alpine-halo11-restock", title: "Alpine Halo11 Back in Stock", excerpt: "The 11-inch floating display head unit returns after months of high demand.", date: "2026-05-18" },
];

const categories = [
  { slug: "head-unit", label: "Head\nUnit", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="16" width="56" height="32" rx="3"/><rect x="9" y="21" width="26" height="18" rx="1.5"/><circle cx="48" cy="28" r="6"/><circle cx="48" cy="40" r="3"/><line x1="56" y1="40" x2="60" y2="40"/></svg>` },
  { slug: "speakers", label: "Speakers", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="28"/><circle cx="32" cy="32" r="18"/><circle cx="32" cy="32" r="8"/><circle cx="32" cy="32" r="3" fill="currentColor" stroke="none"/><line x1="18" y1="18" x2="24" y2="24"/><line x1="46" y1="18" x2="40" y2="24"/><line x1="18" y1="46" x2="24" y2="40"/><line x1="46" y1="46" x2="40" y2="40"/></svg>` },
  { slug: "subwoofer", label: "Subwoofer", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="52" height="52" rx="4"/><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="12"/><circle cx="32" cy="32" r="5"/><circle cx="32" cy="32" r="2" fill="currentColor" stroke="none"/></svg>` },
  { slug: "amplifier", label: "Amplifier", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="18" width="46" height="28" rx="3"/><line x1="54" y1="22" x2="60" y2="22"/><line x1="54" y1="28" x2="60" y2="28"/><line x1="54" y1="34" x2="60" y2="34"/><line x1="54" y1="40" x2="60" y2="40"/><rect x="10" y="25" width="18" height="8" rx="1"/><circle cx="37" cy="29" r="5"/><circle cx="44" cy="38" r="3"/></svg>` },
  { slug: "processor", label: "Processor\n/ DSP", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="32" height="32" rx="2"/><rect x="22" y="22" width="20" height="20" rx="1"/><line x1="24" y1="8" x2="24" y2="16"/><line x1="32" y1="8" x2="32" y2="16"/><line x1="40" y1="8" x2="40" y2="16"/><line x1="24" y1="48" x2="24" y2="56"/><line x1="32" y1="48" x2="32" y2="56"/><line x1="40" y1="48" x2="40" y2="56"/><line x1="8" y1="24" x2="16" y2="24"/><line x1="8" y1="32" x2="16" y2="32"/><line x1="8" y1="40" x2="16" y2="40"/><line x1="48" y1="24" x2="56" y2="24"/><line x1="48" y1="32" x2="56" y2="32"/><line x1="48" y1="40" x2="56" y2="40"/></svg>` },
  { slug: "cable", label: "Cables &\nWiring", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 52 C8 52 8 38 20 38 C32 38 32 26 32 26"/><path d="M14 52 C14 52 14 42 24 42 C36 42 36 26 36 26"/><path d="M20 52 C20 52 20 46 28 46 C40 46 40 26 40 26"/><line x1="32" y1="20" x2="40" y2="20"/><rect x="30" y="14" width="12" height="12" rx="2"/><circle cx="8" cy="54" r="3"/><circle cx="14" cy="54" r="3"/><circle cx="20" cy="54" r="3"/></svg>` },
  { slug: "sound-damping", label: "Sound\nDamping", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="52" height="10" rx="2"/><rect x="6" y="22" width="52" height="10" rx="2"/><rect x="6" y="36" width="52" height="10" rx="2"/><path d="M6 54 Q18 50 32 54 Q46 58 58 54"/><line x1="14" y1="8" x2="14" y2="18"/><line x1="26" y1="8" x2="26" y2="18"/><line x1="38" y1="8" x2="38" y2="18"/><line x1="50" y1="8" x2="50" y2="18"/></svg>` },
  { slug: "accessories", label: "Accessories", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M44 8 C50 8 56 14 56 20 C56 26 52 30 48 31 L20 56 C18 58 14 58 12 56 C10 54 10 50 12 48 L38 20 C38 16 40 8 44 8Z"/><circle cx="16" cy="52" r="3" fill="currentColor" stroke="none"/><line x1="42" y1="22" x2="50" y2="14"/><path d="M8 16 C8 10 14 8 18 10 L24 16 L18 22 L12 22Z"/><line x1="24" y1="16" x2="38" y2="30"/></svg>` },
];

const testimonials = [
  [
    { name: "Rizky Firmansyah", role: "BMW 3 Series Owner", location: "Jakarta", text: "Hasil instalasi Focal di mobil saya luar biasa. Suara terasa hidup — setiap detail musik terdengar jernih tanpa distorsi sama sekali. Tim Audio Workshop sangat profesional dan teliti." },
    { name: "Budi Santoso", role: "Toyota Alphard Owner", location: "Surabaya", text: "Saya pasang JL Audio subwoofer dan amplifier Helix — hasilnya melampaui ekspektasi. Teknisinya sabar menjelaskan semua proses dan hasilnya sangat rapi. Highly recommended!" },
    { name: "Andika Pratama", role: "Honda Civic Owner", location: "Bandung", text: "Sudah lama cari distributor resmi yang bisa dipercaya. Audio Workshop memberikan produk original dengan garansi resmi. Proses konsultasinya mudah dan hasilnya sempurna." },
  ],
  [
    { name: "Denny Kurniawan", role: "Mercedes C-Class Owner", location: "Bali", text: "Sistem audio Burmester yang dipasang tim mereka terdengar fantastis. Instalasi sangat bersih dan tidak merusak interior mobil sama sekali. Pelayanan terbaik!" },
    { name: "Hendra Wijaya", role: "Toyota Fortuner Owner", location: "Medan", text: "Dari konsultasi sampai pemasangan semuanya lancar. Mereka paham betul karakter setiap produk dan memberikan rekomendasi yang tepat sesuai budget saya." },
    { name: "Fikri Ramadhan", role: "Mitsubishi Pajero Owner", location: "Makassar", text: "Produk genuine, garansi resmi, teknisi berpengalaman. Tidak perlu khawatir soal keaslian produk. Audio Workshop adalah tempat yang tepat untuk upgrade audio mobil." },
  ],
  [
    { name: "Galih Nugroho", role: "Mazda CX-5 Owner", location: "Yogyakarta", text: "Speaker Morel yang dipasang mengubah total pengalaman berkendara saya. Vokal terdengar sangat natural, bass dalam tapi tight. Kerja tim sangat rapi dan profesional." },
    { name: "Taufik Hidayat", role: "Nissan X-Trail Owner", location: "Semarang", text: "Audio Workshop adalah satu-satunya tempat yang saya percaya untuk sistem audio mobil. Pengetahuan teknisinya mendalam dan hasilnya selalu memuaskan." },
    { name: "Irwan Setiawan", role: "Lexus RX Owner", location: "Jakarta", text: "Instalasi DSP Helix di Lexus saya hasilnya luar biasa. Soundstage melebar dan imaging sangat presisi. Nilai investasi yang benar-benar worth it." },
  ],
];

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
}

export default function HomePage() {
  const brandMarquee = [...allBrands, ...allBrands];
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(201,168,76,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 10% 80%, rgba(201,168,76,0.05) 0%, transparent 60%), #0C0C0E" }} />
        <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(115deg, transparent 40%, rgba(201,168,76,0.04) 50%, transparent 60%)" }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.25) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to top, #0C0C0E, transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase">Premium Car Audio</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6 text-[#F0F0F2]">{heroTitle}</h1>
            <p className="text-[#8A8A96] text-lg max-w-md mb-10 leading-relaxed">{heroSub}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] font-bold px-8 py-4 text-xs tracking-[0.2em] uppercase transition-colors text-center">Explore Products</Link>
              <Link href="/installation" className="border border-white/20 hover:border-[#C9A84C]/60 text-[#F0F0F2] font-semibold px-8 py-4 text-xs tracking-[0.2em] uppercase transition-colors text-center">View Installations</Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full border border-[#C9A84C]/10" />
              <div className="absolute inset-6 rounded-full border border-[#C9A84C]/15" />
              <div className="absolute inset-12 rounded-full border border-[#C9A84C]/20" />
              <div className="absolute inset-20 rounded-full border border-[#C9A84C]/30" />
              <div className="absolute inset-28 rounded-full bg-[#C9A84C]/10" style={{ boxShadow: "0 0 60px 20px rgba(201,168,76,0.08)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#C9A84C]/40 text-xs font-bold tracking-[0.3em] uppercase">Audio Workshop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND LOGO STRIP */}
      <div className="relative border-b border-white/5 overflow-hidden" style={{ background: "#0C0C0E" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(201,168,76,0.025), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6 py-7 flex items-center gap-6">
          <span className="text-[#3A3A46] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap leading-tight shrink-0">Authorized<br />Distributor</span>
          <div className="w-px h-8 bg-white/8 shrink-0" />
          <div className="brand-marquee flex-1 overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)", maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)" }}>
            <div className="brand-track flex gap-14 w-max">
              {brandMarquee.map((name, i) => (
                <Link key={i} href="/brands" className="shrink-0 flex items-center justify-center opacity-30 hover:opacity-80 transition-opacity duration-300">
                  <span className="text-[#F0F0F2] text-xs font-black tracking-widest uppercase whitespace-nowrap">{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT CATEGORIES */}
      <section className="relative overflow-hidden py-20 border-y border-white/5" style={{ background: "#0A0A0C" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.03), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#F0F0F2] text-center mb-14 tracking-tight">Browse by Category</h2>
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-8 md:gap-0 md:overflow-visible">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/products?category=${cat.slug}`} className="group flex flex-col items-center gap-4 px-3 py-6 min-w-[100px] md:min-w-0 rounded-xl transition-all duration-300 hover:bg-white/3 cursor-pointer no-underline text-inherit">
                <div className="w-14 h-14 text-[#3A3A46] group-hover:text-[#C9A84C] transition-colors duration-300" dangerouslySetInnerHTML={{ __html: cat.icon }} />
                <span className="text-[#6A6A76] group-hover:text-[#C9A84C] text-[10px] font-bold tracking-[0.15em] uppercase text-center leading-tight transition-colors duration-300 whitespace-pre-line">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT SECTION: Installation */}
      <section className="relative overflow-hidden" style={{ background: "#131316" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          {/* Image panel */}
          <div className="relative overflow-hidden min-h-[300px] lg:min-h-0" style={{ background: "linear-gradient(135deg, #0C0C0E 0%, #131316 50%, #1A1710 100%)" }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 30% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)" }} />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border border-[#C9A84C]/15 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full border border-[#C9A84C]/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/5 border border-[#C9A84C]/30 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, #131316)" }} />
          </div>
          {/* Text panel */}
          <div className="flex flex-col justify-center py-16 pl-10 relative overflow-hidden" style={{ paddingRight: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))" }}>
            <div className="absolute top-0 right-0 w-64 h-64 opacity-40" style={{ background: "radial-gradient(circle at top right, rgba(201,168,76,0.08), transparent 70%)" }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Installation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-4 leading-tight">{featuredProject.title}</h2>
              <p className="text-[#6A6A76] text-sm mb-3 uppercase tracking-wider">{featuredProject.carModel}</p>
              <p className="text-[#8A8A96] leading-relaxed mb-8 text-sm max-w-sm">Precision-crafted installations by certified technicians. Every wire, every driver, every detail — perfected.</p>
              <Link href="/installation" className="self-start border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0C0C0E] text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 transition-all">View All Projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS + VIDEO */}
      <section className="relative overflow-hidden" style={{ background: "#0A0A0C" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
          {/* Brands text */}
          <div className="flex flex-col justify-center py-16 pr-10 order-2 lg:order-1 relative overflow-hidden" style={{ paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))" }}>
            <div className="absolute bottom-0 left-0 w-80 h-80 opacity-30" style={{ background: "radial-gradient(circle at bottom left, rgba(201,168,76,0.08), transparent 70%)" }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Our Brands</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-6 leading-tight">World-Class<br />Audio Partners</h2>
              <p className="text-[#8A8A96] leading-relaxed mb-8 text-sm max-w-sm">We are the authorized distributor for the most respected car audio brands — brought directly from the manufacturer to Indonesia.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredBrands.map((name) => (
                  <span key={name} className="border border-white/8 text-[#6A6A76] text-xs px-3 py-1.5 tracking-wider">{name}</span>
                ))}
              </div>
              <Link href="/brands" className="self-start border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0C0C0E] text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 transition-all">All Brands</Link>
            </div>
          </div>
          {/* Showreel placeholder */}
          <div className="relative min-h-[340px] lg:min-h-0 order-1 lg:order-2 overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: "linear-gradient(135deg, #0C0C0E 0%, #111108 60%, #0C0C0E 100%)" }}>
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.07), transparent 70%)" }} />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
              <div className="relative w-16 h-16 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A84C" opacity="0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
              <span className="relative text-[#3A3A46] text-[10px] font-bold tracking-[0.3em] uppercase mt-1">Showreel</span>
            </div>
            <div className="absolute inset-y-0 left-0 w-16 pointer-events-none" style={{ background: "linear-gradient(to right, #0A0A0C, transparent)" }} />
          </div>
        </div>
      </section>

      {/* NEWS SLIDER */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#0C0C0E" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6 flex gap-10 md:gap-14 items-center">
          {/* Left: title column */}
          <div className="shrink-0 w-1/3 md:w-[38%]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.2em] uppercase">News</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#F0F0F2] leading-tight tracking-tight mb-4 whitespace-nowrap">Latest News</h2>
            <p className="text-[#6A6A76] text-sm leading-relaxed mb-6">Stay up to date with the latest from Audio Workshop — new product arrivals, exclusive brand launches, installation spotlights, and industry events across Indonesia.</p>
            <Link href="/news" className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase hover:underline">All News →</Link>
          </div>
          {/* Right: scroll track */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <div className="no-scrollbar flex gap-5 overflow-x-auto" style={{ scrollSnapType: "x mandatory", paddingRight: "3rem" }}>
              {news.map((n) => (
                <Link key={n.slug} href={`/news/${n.slug}`} className="group flex flex-col shrink-0 overflow-hidden border border-white/5 hover:border-[#C9A84C]/25 transition-colors duration-300 no-underline text-[#F0F0F2]" style={{ width: "calc((100% - 2 * 1.25rem) / 2.5)", scrollSnapAlign: "start", minWidth: 240 }}>
                  <div className="aspect-video overflow-hidden relative" style={{ background: "linear-gradient(135deg, #111114, #0E0E10)" }}>
                    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.07), transparent 70%)" }} />
                    <div className="absolute inset-0 flex items-center justify-center"><div className="w-10 h-px bg-[#C9A84C]/20" /></div>
                  </div>
                  <div className="p-5 flex flex-col flex-1" style={{ background: "#0C0C0E" }}>
                    <p className="text-[#6A6A76] text-[11px] mb-2">{fmtDate(n.date)}</p>
                    <h3 className="text-[#F0F0F2] font-bold text-sm leading-snug group-hover:text-[#C9A84C] transition-colors mb-2 line-clamp-2">{n.title}</h3>
                    <p className="text-[#6A6A76] text-xs line-clamp-2 leading-relaxed flex-1">{n.excerpt}</p>
                    <span className="text-[#C9A84C] text-[11px] font-bold tracking-wider uppercase mt-4">Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="relative overflow-hidden border-t border-white/5" style={{ background: "#0C0C0E" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(201,168,76,0.05), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-2xl mx-auto px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.25em] uppercase">Newsletter</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-3 tracking-tight">Stay in the Loop</h2>
          <p className="text-[#6A6A76] text-sm leading-relaxed mb-10 max-w-md mx-auto">Get the latest product arrivals, brand updates, and exclusive deals from Audio Workshop delivered straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required className="flex-1 bg-white/4 border border-white/10 text-[#F0F0F2] placeholder-[#4A4A56] px-5 py-3.5 text-sm outline-none focus:border-[#C9A84C]/50 transition-colors" style={{ minWidth: 0 }} />
            <button type="submit" className="bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] font-bold px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-colors shrink-0">Subscribe</button>
          </form>
          <p className="text-[#3A3A46] text-[10px] mt-5 tracking-wide">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden border-t border-white/5 pt-20 pb-0" style={{ background: "#0C0C0E" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201,168,76,0.03), transparent 70%)" }} />

        {/* Header */}
        <div className="relative max-w-5xl mx-auto px-6 mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.25em] uppercase">Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#F0F0F2] tracking-tight leading-tight">What Our Customers<br className="hidden md:block" /> Are Saying</h2>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#0C0C0E]" style={{ background: "linear-gradient(135deg, #1E1E26, #2A2A34)" }} />
                <div className="w-8 h-8 rounded-full border-2 border-[#0C0C0E]" style={{ background: "linear-gradient(135deg, #252520, #2A2A34)" }} />
                <div className="w-8 h-8 rounded-full border-2 border-[#0C0C0E]" style={{ background: "linear-gradient(135deg, #1E2020, #2A2A34)" }} />
                <div className="w-8 h-8 rounded-full border-2 border-[#0C0C0E]" style={{ background: "linear-gradient(135deg, #201E20, #2A2A34)" }} />
              </div>
              <span className="text-[#6A6A76] text-xs">500+ happy customers</span>
            </div>
          </div>
        </div>

        {/* Scrolling columns */}
        <div className="relative" style={{ height: 620, overflow: "hidden" }}>
          <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none" style={{ height: 120, background: "linear-gradient(to bottom, #0C0C0E 30%, transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" style={{ height: 120, background: "linear-gradient(to top, #0C0C0E 30%, transparent)" }} />

          <div className="flex gap-4 max-w-5xl mx-auto px-6 h-full">
            <div className="t-col-wrap flex-1 min-w-0 overflow-hidden">
              <div className="t-col-up flex flex-col gap-4">
                {testimonials[0].map((t, i) => <TestimonialCard key={`a${i}`} t={t} />)}
                {testimonials[0].map((t, i) => <TestimonialCard key={`b${i}`} t={t} hidden />)}
              </div>
            </div>
            <div className="t-col-wrap flex-1 min-w-0 overflow-hidden">
              <div className="t-col-down flex flex-col gap-4">
                {testimonials[1].map((t, i) => <TestimonialCard key={`a${i}`} t={t} />)}
                {testimonials[1].map((t, i) => <TestimonialCard key={`b${i}`} t={t} hidden />)}
              </div>
            </div>
            <div className="t-col-wrap hidden lg:block flex-1 min-w-0 overflow-hidden">
              <div className="t-col-up2 flex flex-col gap-4">
                {testimonials[2].map((t, i) => <TestimonialCard key={`a${i}`} t={t} />)}
                {testimonials[2].map((t, i) => <TestimonialCard key={`b${i}`} t={t} hidden />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
