import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/dealers", label: "Find Dealer" },
];
const services = [
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/installation", label: "Installation" },
  { href: "/training", label: "Training" },
  { href: "/news", label: "News" },
];
const socials = [
  { href: "https://instagram.com/audioworkshop.id", label: "Instagram", abbr: "IG", tint: "rgba(228,64,95,0.1)" },
  { href: "https://youtube.com/@audioworkshop", label: "YouTube", abbr: "YT", tint: "rgba(255,0,0,0.1)" },
  { href: "https://facebook.com/audioworkshop", label: "Facebook", abbr: "FB", tint: "rgba(24,119,242,0.1)" },
  { href: "https://wa.me/62818xxxxxx", label: "WhatsApp", abbr: "WA", tint: "rgba(37,211,102,0.1)" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/5 mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <img src="/logo.png" alt="Audio Workshop" className="h-12 w-auto" />
            </Link>
            <p className="text-[#6A6A76] text-sm leading-relaxed max-w-xs mb-3">
              Indonesia&apos;s premier authorized distributor of premium car audio systems. We bring the world&apos;s finest audio brands to your vehicle.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.abbr}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="text-[#6A6A76] hover:text-[#C9A84C] transition-colors rounded-full w-8 h-8 flex items-center justify-center border border-[#6A6A76] hover:border-[#C9A84C]"
                  style={{ background: s.tint }}
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Link */}
          <div className="text-left space-y-3">
            <h4 className="text-[#F0F0F2] text-xs font-bold tracking-widest uppercase mb-5">Quick Link</h4>
            {quickLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[#6A6A76] hover:text-[#C9A84C] text-sm transition-colors no-underline block">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="text-left space-y-3">
            <h4 className="text-[#F0F0F2] text-xs font-bold tracking-widest uppercase mb-5">Services</h4>
            {services.map((l) => (
              <Link key={l.href} href={l.href} className="text-[#6A6A76] hover:text-[#C9A84C] text-sm transition-colors no-underline block">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="text-left space-y-3">
            <h4 className="text-[#F0F0F2] text-xs font-bold tracking-widest uppercase mb-5">Social</h4>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" className="text-[#6A6A76] hover:text-[#C9A84C] text-sm transition-colors no-underline block">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#3A3A46] text-xs">©{year} Audio Workshop Indonesia. All rights reserved.</p>
          <p className="text-[#3A3A46] text-xs">Authorized distributor of premium car audio brands</p>
        </div>
      </div>

      {/* Oversized logo watermark */}
      <div className="relative overflow-hidden select-none pointer-events-none" style={{ height: 120 }}>
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -10,
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            maxWidth: 1200,
            height: "auto",
            opacity: 0.1,
            filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(5deg) brightness(0.6)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 80%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 80%)",
          }}
        />
      </div>
    </footer>
  );
}
