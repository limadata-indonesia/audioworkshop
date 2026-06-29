const stats = [
  { value: "2009", label: "Founded" },
  { value: "20+", label: "Premium Brands" },
  { value: "5000+", label: "Installations" },
  { value: "50+", label: "Dealers Nationwide" },
];

const values = [
  { title: "Authenticity", desc: "Every product we sell is 100% genuine, sourced directly from manufacturers or authorized distributors." },
  { title: "Excellence", desc: "We settle for nothing less than perfection in every installation, from wire routing to acoustic tuning." },
  { title: "Partnership", desc: "We build lasting relationships with our customers, brands, and dealers — not one-time transactions." },
];

export const metadata = { title: "About — Audio Workshop Indonesia" };

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-24" style={{ background: "#0C0C0E" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 80% at 0% 0%, rgba(201,168,76,0.05), transparent 60%)" }} />
        <div className="absolute top-0 right-0 w-96 h-96 opacity-30" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06), transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">About Us</p>
              <h1 className="text-4xl md:text-5xl font-black text-[#F0F0F2] mb-6 leading-tight">
                Indonesia's Premium<br /><span className="text-[#C9A84C]">Car Audio</span> Authority
              </h1>
              <div className="text-[#8A8A96] leading-relaxed space-y-4">
                <p>Audio Workshop Indonesia is the nation's leading authorized distributor and installer of premium car audio systems. Since our founding, we have been dedicated to bringing the world's finest audio technology to Indonesian car enthusiasts.</p>
                <p>We represent the most respected names in car audio — Focal, Alpine, Audison, Hertz, JL Audio, and more — providing genuine products with full manufacturer support and warranty.</p>
                <p>Our team of certified technicians brings decades of combined experience to every installation, treating each vehicle with the precision and care it deserves.</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #0C0C0E, #131316 50%, #1A1710)" }}>
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 30% 40%, rgba(201,168,76,0.12), transparent 70%)" }} />
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#C9A84C]/10 text-9xl font-black tracking-tighter">AW</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 shadow-2xl hidden md:block" style={{ background: "linear-gradient(135deg, #C9A84C, #B8963E)" }}>
                <div className="text-[#0C0C0E] text-3xl font-black">15+</div>
                <div className="text-[#0C0C0E]/70 text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(201,168,76,0.05), transparent 70%), #131316" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.2) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-black text-[#C9A84C] mb-1">{s.value}</div>
              <div className="text-[#8A8A96] text-sm uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden" style={{ background: "#0C0C0E" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.04), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-2">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#F0F0F2]">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {values.map((v) => (
              <div key={v.title} className="bg-[#0C0C0E] hover:bg-[#0F0F12] transition-colors p-8 group">
                <div className="w-8 h-1 bg-[#C9A84C] mb-6 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-[#F0F0F2] text-xl font-black mb-3 group-hover:text-[#C9A84C] transition-colors">{v.title}</h3>
                <p className="text-[#8A8A96] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
