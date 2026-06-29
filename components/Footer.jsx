import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/news", label: "News" },
  { href: "/dealers", label: "Find a Dealer" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://facebook.com/audioworkshop", label: "Facebook", path: "M15.5 8.5h-2V7c0-.6.4-.7.7-.7H15.5V4l-2-.0C11 4 10.5 5.7 10.5 6.8V8.5H9V11h1.5v6h3v-6h2l.5-2.5z" },
  { href: "https://youtube.com/@audioworkshop", label: "YouTube", path: "M20 8.2a2.1 2.1 0 0 0-1.5-1.5C17.2 6.4 12 6.4 12 6.4s-5.2 0-6.5.3A2.1 2.1 0 0 0 4 8.2 22 22 0 0 0 3.7 12 22 22 0 0 0 4 15.8a2.1 2.1 0 0 0 1.5 1.5c1.3.3 6.5.3 6.5.3s5.2 0 6.5-.3a2.1 2.1 0 0 0 1.5-1.5A22 22 0 0 0 20.3 12 22 22 0 0 0 20 8.2zM10.5 14.5v-5l4.3 2.5-4.3 2.5z" },
  { href: "https://instagram.com/audioworkshop.id", label: "Instagram", path: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6zm4-6a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0zM8.5 5h7A3.5 3.5 0 0 1 19 8.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 15.5v-7A3.5 3.5 0 0 1 8.5 5zm0 1.3A2.2 2.2 0 0 0 6.3 8.5v7a2.2 2.2 0 0 0 2.2 2.2h7a2.2 2.2 0 0 0 2.2-2.2v-7a2.2 2.2 0 0 0-2.2-2.2h-7z" },
  { href: "https://www.tiktok.com/@audioworkshop", label: "TikTok", path: "M16.5 5c.3 1.6 1.2 2.8 2.8 3v2c-1.1 0-2.1-.3-3-.9v4.3a4.4 4.4 0 1 1-4.4-4.4c.2 0 .4 0 .6.05v2.1a2.3 2.3 0 1 0 1.7 2.2V5h2.3z" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/5" style={{ background: "#0A0A0C" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Nav links */}
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[#8A8A96] hover:text-[#C9A84C] text-sm transition-colors w-fit">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Newsletter */}
          <div>
            <p className="text-[#F0F0F2] text-lg leading-snug mb-6">
              Subscribe to our newsletter to get the latest product arrivals, exclusive offers &amp; more
            </p>
            <form action="https://formsubmit.co/info@audioworkshop.co.id" method="POST" className="relative max-w-sm border-b border-[#3A3A46] focus-within:border-[#C9A84C] transition-colors">
              <input
                type="email"
                name="email"
                required
                placeholder="YOUR EMAIL ADDRESS"
                className="w-full bg-transparent text-[#F0F0F2] placeholder-[#6A6A76] py-2.5 pr-9 text-sm tracking-wider outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#C9A84C] hover:translate-x-1 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </form>
          </div>

          {/* Follow us */}
          <div className="lg:text-right">
            <p className="text-[#6A6A76] text-sm mb-4">Follow us</p>
            <a href="mailto:info@audioworkshop.co.id" className="block text-[#F0F0F2] hover:text-[#C9A84C] text-sm transition-colors mb-1">info@audioworkshop.co.id</a>
            <a href="tel:+622165309074" className="block text-[#F0F0F2] hover:text-[#C9A84C] text-sm transition-colors mb-5">(021) 65309074</a>
            <div className="flex gap-3 lg:justify-end">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label} className="w-9 h-9 rounded-full bg-[#C9A84C] hover:bg-[#B8963E] flex items-center justify-center transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0C0C0E"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Credits row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-16 mb-8 text-sm">
          <p className="text-[#6A6A76]">
            Website by <span className="text-[#C9A84C]">Limadata Indonesia</span>
          </p>
          <Link href="/quality-policy" className="text-[#6A6A76] hover:text-[#C9A84C] transition-colors">Quality Policy</Link>
          <p className="text-[#6A6A76]">© {year} Audioworkshop</p>
        </div>
      </div>

      {/* Giant logo, gold gradient, bleeding off the bottom */}
      <div className="relative overflow-hidden select-none pointer-events-none" aria-hidden="true">
        <div
          className="w-full"
          style={{
            aspectRatio: "2048 / 356",
            marginBottom: "-3%",
            WebkitMaskImage: "url(/logo.png)",
            maskImage: "url(/logo.png)",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center bottom",
            maskPosition: "center bottom",
            background: "linear-gradient(180deg, rgba(201,168,76,0.32) 0%, rgba(201,168,76,0.12) 45%, rgba(201,168,76,0) 92%)",
          }}
        />
      </div>
    </footer>
  );
}
