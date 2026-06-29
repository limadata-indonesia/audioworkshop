"use client";
import Link from "next/link";
import TestimonialCard from "./TestimonialCard";
import HeroSlider from "./HeroSlider";
import BrandLogos from "./BrandLogos";
import { testimonials } from "@/lib/testimonials";
import { news } from "@/lib/data";

/* ── Static content (CMS removed) ─────────────────────── */
const allBrands = ["Focal", "Alpine", "Hertz", "Audison"];
const featuredBrands = ["Focal", "Alpine", "Hertz", "Audison"];

const HEX_CLIP = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
const hexImgs = [
  "/products/ginee_20220928123840001_1170724279.png",
  "/products/ginee_20221018113855656_0825369749.jpg",
  "/products/ginee_20220826151025513_2104360282.png",
  "/products/ginee_20220714171544815_0251316016.jpg",
  "/products/ginee_20221115123205128_7834583032.jpeg",
  "/products/ginee_20221115165755388_6227014089.jpeg",
  "/products/ginee_20250613174458167_5143245159.jpg",
];
function Hex({ src }) {
  return (
    <div className="relative" style={{ width: "var(--hex-w)", height: "calc(var(--hex-w) * 0.88)", clipPath: HEX_CLIP, WebkitClipPath: HEX_CLIP, background: "#C9A84C" }}>
      <div className="absolute inset-[2px] overflow-hidden bg-[#0C0C0E]" style={{ clipPath: HEX_CLIP, WebkitClipPath: HEX_CLIP }}>
        <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

const categories = [
  { slug: "speaker", label: "Car\nSpeakers", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="28"/><circle cx="32" cy="32" r="18"/><circle cx="32" cy="32" r="8"/><circle cx="32" cy="32" r="3" fill="currentColor" stroke="none"/><circle cx="14" cy="14" r="2" fill="currentColor" stroke="none"/><circle cx="50" cy="14" r="2" fill="currentColor" stroke="none"/><circle cx="14" cy="50" r="2" fill="currentColor" stroke="none"/><circle cx="50" cy="50" r="2" fill="currentColor" stroke="none"/></svg>` },
  { slug: "subwoofer", label: "Car\nSubwoofers", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12 H54 a2 2 0 0 1 2 2 V50 a2 2 0 0 1 -2 2 H10 a2 2 0 0 1 -2 -2 V14 a2 2 0 0 1 2 -2 Z"/><circle cx="32" cy="32" r="18"/><circle cx="32" cy="32" r="10"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/></svg>` },
  { slug: "amplifier", label: "Car\nAmplifiers", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="16" width="44" height="32" rx="3"/><path d="M34 22 L24 36 H31 L29 44 L40 30 H33 Z" fill="currentColor" stroke="none"/><line x1="54" y1="23" x2="59" y2="23"/><line x1="54" y1="29" x2="59" y2="29"/><line x1="54" y1="35" x2="59" y2="35"/><line x1="54" y1="41" x2="59" y2="41"/></svg>` },
  { slug: "marine-audio", label: "Marine\nAudio", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 36 H54 L46 46 H16 Z"/><path d="M24 36 L30 26 H42 L48 36"/><line x1="33" y1="26" x2="33" y2="36"/><path d="M6 52 q5 -4 10 0 t10 0 t10 0 t10 0 t6 0"/><path d="M6 58 q5 -4 10 0 t10 0 t10 0 t10 0 t6 0"/></svg>` },
  { slug: "sound-damping", label: "Sound\nDamping", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="6" width="24" height="52" rx="3"/><circle cx="32" cy="18" r="4"/><circle cx="32" cy="39" r="9"/><circle cx="32" cy="39" r="3" fill="currentColor" stroke="none"/></svg>` },
  { slug: "sale", label: "Sale", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M51 13 L51 34 L33 52 L12 31 L30 13 Z"/><circle cx="42" cy="22" r="3"/><text x="33" y="40" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">$</text></svg>` },
  { slug: "accessories", label: "Accessories", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="23" y="6" width="18" height="52" rx="9"/><circle cx="32" cy="15" r="3"/><line x1="30.2" y1="13.2" x2="33.8" y2="16.8"/><line x1="33.8" y1="13.2" x2="30.2" y2="16.8"/><circle cx="28" cy="28" r="1.7" fill="currentColor" stroke="none"/><circle cx="36" cy="28" r="1.7" fill="currentColor" stroke="none"/><circle cx="28" cy="36" r="1.7" fill="currentColor" stroke="none"/><circle cx="36" cy="36" r="1.7" fill="currentColor" stroke="none"/><circle cx="28" cy="44" r="1.7" fill="currentColor" stroke="none"/><circle cx="36" cy="44" r="1.7" fill="currentColor" stroke="none"/><circle cx="32" cy="51" r="1.7" fill="currentColor" stroke="none"/></svg>` },
  { slug: "cable", label: "Cable", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 54 C16 42 22 40 30 34 C38 28 40 20 42 12"/><path d="M24 56 C26 44 32 42 38 36 C44 30 46 22 48 14"/><path d="M32 57 C36 46 40 44 46 39 C52 34 53 26 54 18"/><circle cx="42" cy="11" r="2" fill="currentColor" stroke="none"/><circle cx="48" cy="13" r="2" fill="currentColor" stroke="none"/><circle cx="54" cy="17" r="2" fill="currentColor" stroke="none"/></svg>` },
  { slug: "processor", label: "Processor", icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="32" height="32" rx="2"/><rect x="22" y="22" width="20" height="20" rx="1"/><line x1="24" y1="8" x2="24" y2="16"/><line x1="32" y1="8" x2="32" y2="16"/><line x1="40" y1="8" x2="40" y2="16"/><line x1="24" y1="48" x2="24" y2="56"/><line x1="32" y1="48" x2="32" y2="56"/><line x1="40" y1="48" x2="40" y2="56"/><line x1="8" y1="24" x2="16" y2="24"/><line x1="8" y1="32" x2="16" y2="32"/><line x1="8" y1="40" x2="16" y2="40"/><line x1="48" y1="24" x2="56" y2="24"/><line x1="48" y1="32" x2="56" y2="32"/><line x1="48" y1="40" x2="56" y2="40"/></svg>` },
];

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
}

export default function HomePage() {
  const brandMarquee = [...allBrands, ...allBrands];
  return (
    <>
      {/* HERO SLIDER */}
      <HeroSlider />

      {/* BRAND LOGO STRIP */}
      <div className="relative border-b border-white/5 overflow-hidden" style={{ background: "#0C0C0E" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(201,168,76,0.025), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-7 flex items-center gap-6">
          <span className="text-[#3A3A46] text-[0.625rem] font-bold tracking-[0.2em] uppercase whitespace-nowrap leading-tight shrink-0">Authorized<br />Distributor</span>
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
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.03), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#F0F0F2] text-center mb-14 tracking-tight">Browse by Category</h2>
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-9 md:gap-0 md:overflow-visible">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/products?category=${cat.slug}`} className="group flex flex-col items-center gap-4 px-3 py-6 min-w-[100px] md:min-w-0 rounded-xl transition-all duration-300 hover:bg-white/3 cursor-pointer no-underline text-inherit">
                <div className="w-14 h-14 text-[#3A3A46] group-hover:text-[#C9A84C] transition-colors duration-300" dangerouslySetInnerHTML={{ __html: cat.icon }} />
                <span className="text-[#6A6A76] group-hover:text-[#C9A84C] text-[0.625rem] font-bold tracking-[0.15em] uppercase text-center leading-tight transition-colors duration-300 whitespace-pre-line">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ULTIMATE CAR AUDIO EXPERIENCE */}
      <section className="relative overflow-hidden border-y border-white/5" style={{ background: "#0A0A0C" }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 70% at 80% 50%, rgba(201,168,76,0.08), transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase">Audio Workshop</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F0F0F2] leading-[1.02] tracking-tight mb-6">
              Ultimate Car Audio<br />Experience
            </h2>
            <div className="space-y-2 mb-8 max-w-md">
              <p className="text-[#C9C9D2] text-base">Only the Best Brands, One Trusted Place.</p>
              <p className="text-[#8A8A96]">From Entry Level to High-End — We&apos;ve Got You Covered!</p>
              <p className="text-[#8A8A96]">Drive with Superior Sound.</p>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <Link href="/products" className="flex-1 sm:flex-none text-center bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] font-bold px-6 sm:px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-colors">Upgrade Now</Link>
              <Link href="/brands" className="flex-1 sm:flex-none text-center border border-white/20 hover:border-[#C9A84C]/60 text-[#F0F0F2] font-semibold px-6 sm:px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-colors">View Brands</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#6A6A76] text-xs tracking-wide">
              <span>audioworkshop.co.id</span>
              <span>TikTok · caraudioindonesia</span>
              <span>Instagram · audioworkshop.group</span>
            </div>
          </div>

          {/* Honeycomb collage */}
          <div className="relative hidden md:flex justify-center lg:justify-end">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(201,168,76,0.12), transparent 65%)" }} />
            <div className="relative flex items-center justify-center" style={{ "--hex-w": "150px" }}>
              <div className="flex flex-col gap-1.5" style={{ marginTop: "calc(var(--hex-w) * 0.46)" }}>
                <Hex src={hexImgs[0]} />
                <Hex src={hexImgs[1]} />
              </div>
              <div className="flex flex-col gap-1.5 relative z-10" style={{ marginLeft: "calc(var(--hex-w) * -0.25)", marginRight: "calc(var(--hex-w) * -0.25)" }}>
                <Hex src={hexImgs[2]} />
                <Hex src={hexImgs[3]} />
                <Hex src={hexImgs[4]} />
              </div>
              <div className="flex flex-col gap-1.5" style={{ marginTop: "calc(var(--hex-w) * 0.46)" }}>
                <Hex src={hexImgs[5]} />
                <Hex src={hexImgs[6]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP LINEUP BANNER */}
      <section className="relative overflow-hidden" style={{ background: "#0A0A0C" }}>
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 z-10 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)" }} />
        <div className="relative w-full" style={{ aspectRatio: "1903 / 650" }}>
          <img
            src="/hero/group-lineup.jpg"
            alt="Audioworkshop Group — The World's Finest Car Audio and Sound Proofing Products"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* edge blends so the banner melts into the dark theme */}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ height: "38%", background: "linear-gradient(to bottom, transparent, #0A0A0C)" }} />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 pointer-events-none" style={{ width: "12%", background: "linear-gradient(to right, #0A0A0C, transparent)" }} />
          <div aria-hidden="true" className="absolute inset-y-0 right-0 pointer-events-none" style={{ width: "12%", background: "linear-gradient(to left, #0A0A0C, transparent)" }} />
        </div>
      </section>

      {/* BRANDS — full-background showreel video */}
      <section className="relative overflow-hidden" style={{ background: "#0A0A0C" }}>
        {/* Background video (autoplay, muted, looped, no controls), covers the whole section */}
        <div className="absolute inset-0 overflow-hidden" style={{ containerType: "size" }}>
          <iframe
            className="pointer-events-none"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "max(100cqw, 177.78cqh)",
              height: "max(100cqh, 56.25cqw)",
              border: 0,
            }}
            src="https://www.youtube-nocookie.com/embed/KW0EeH02Rlw?autoplay=1&mute=1&loop=1&playlist=KW0EeH02Rlw&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1"
            title="Audio Workshop showreel"
            loading="lazy"
            tabIndex={-1}
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        </div>
        {/* Legibility overlay (darker on the left where the text sits) */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(8,8,10,0.95) 0%, rgba(8,8,10,0.7) 20%, rgba(8,8,10,0.35) 45%, rgba(8,8,10,0.15) 100%)" }} />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-24 min-h-[460px] flex items-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Our Brands</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#F0F0F2] mb-6 leading-tight">World-Class<br />Audio Partners</h2>
            <p className="text-[#C9C9D2] leading-relaxed mb-8 text-sm max-w-md">We are the authorized distributor for the most respected car audio brands — brought directly from the manufacturer to Indonesia.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredBrands.map((name) => (
                <span key={name} className="border border-white/20 text-[#D6D6DC] text-xs px-3 py-1.5 tracking-wider backdrop-blur-sm">{name}</span>
              ))}
            </div>
            <Link href="/brands" className="self-start border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0C0C0E] text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 transition-all">All Brands</Link>
          </div>
        </div>
      </section>

      {/* BRANDS & PARTNERS LOGOS */}
      <BrandLogos />

      {/* NEWS SLIDER */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#0C0C0E" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-center">
          {/* Title column */}
          <div className="lg:shrink-0 lg:w-[38%]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[0.625rem] font-bold tracking-[0.2em] uppercase">News</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#F0F0F2] leading-tight tracking-tight mb-4">Latest News</h2>
            <p className="text-[#6A6A76] text-sm leading-relaxed mb-6">Stay up to date with the latest from Audio Workshop — new product arrivals, exclusive brand launches, installation spotlights, and industry events across Indonesia.</p>
            <Link href="/news" className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase hover:underline">All News →</Link>
          </div>
          {/* Two-row scroll track */}
          <div className="lg:flex-1 w-full min-w-0">
            <div className="no-scrollbar grid grid-flow-col grid-rows-2 lg:grid-rows-1 gap-4 lg:gap-5 overflow-x-auto pb-2 [--nc:minmax(230px,1fr)] lg:[--nc:minmax(380px,1fr)]" style={{ gridAutoColumns: "var(--nc)", scrollSnapType: "x mandatory" }}>
              {news.slice(0, 8).map((n) => (
                <Link key={n.slug} href={`/news/${n.slug}`} className="group flex flex-col overflow-hidden border border-white/5 hover:border-[#C9A84C]/25 transition-colors duration-300 no-underline text-[#F0F0F2]" style={{ scrollSnapAlign: "start" }}>
                  <div className="aspect-video overflow-hidden relative" style={{ background: "linear-gradient(135deg, #111114, #0E0E10)" }}>
                    {n.image ? (
                      <img src={n.image} alt={n.title} loading="lazy" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    ) : (
                      <>
                        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.07), transparent 70%)" }} />
                        <div className="absolute inset-0 flex items-center justify-center"><div className="w-10 h-px bg-[#C9A84C]/20" /></div>
                      </>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1" style={{ background: "#0C0C0E" }}>
                    <p className="text-[#6A6A76] text-[0.6875rem] mb-2">{fmtDate(n.date)}</p>
                    <h3 className="text-[#F0F0F2] font-bold text-sm leading-snug group-hover:text-[#C9A84C] transition-colors mb-2 line-clamp-2">{n.title}</h3>
                    <p className="text-[#6A6A76] text-xs line-clamp-2 leading-relaxed flex-1">{n.excerpt}</p>
                    <span className="text-[#C9A84C] text-[0.6875rem] font-bold tracking-wider uppercase mt-4">Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS / COMMUNITY PHOTO STRIP */}
      <section className="relative overflow-hidden" style={{ background: "#0C0C0E" }}>
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 z-10 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)" }} />
        <div className="relative w-full" style={{ aspectRatio: "3118 / 560" }}>
          <img
            src="/hero/events-strip.jpg"
            alt="Audioworkshop events, training sessions and demos"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* tone blends */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "rgba(12,12,14,0.12)" }} />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 pointer-events-none" style={{ width: "8%", background: "linear-gradient(to right, #0C0C0E, transparent)" }} />
          <div aria-hidden="true" className="absolute inset-y-0 right-0 pointer-events-none" style={{ width: "8%", background: "linear-gradient(to left, #0C0C0E, transparent)" }} />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ height: "22%", background: "linear-gradient(to bottom, transparent, #0C0C0E)" }} />
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
                <span className="text-[#C9A84C] text-[0.625rem] font-bold tracking-[0.25em] uppercase">Testimonials</span>
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
            <div className="t-col-wrap hidden md:block flex-1 min-w-0 overflow-hidden">
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
