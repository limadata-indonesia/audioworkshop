const LOGOS = [
  { src: "/brands-w/focal.png", name: "Focal" },
  { src: "/brands-w/alpine.png", name: "Alpine" },
  { src: "/brands-w/hertz.png", name: "Hertz" },
  { src: "/brands-w/audison.png", name: "Audison" },
  { src: "/brands-w/audio-technica.png", name: "Audio-Technica" },
  { src: "/brands-w/dominations.png", name: "Dominations Audio" },
  { src: "/brands-w/z3ro.png", name: "Z3RO Solutions" },
  { src: "/brands-w/vibrofiltr.png", name: "Vibrofiltr" },
  { src: "/brands-w/bullshit-cable.png", name: "Bullshit Cable" },
  { src: "/brands-w/pitch-timbre.png", name: "Pitch & Timbre" },
  { src: "/brands-w/bestbuddyshop.png", name: "Bestbuddyshop" },
  { src: "/brands-w/sound-and-machine.png", name: "Sound and Machine" },
  { src: "/brands-w/aws-installer.png", name: "Audioworkshop Installer Institute" },
  { src: "/brands-w/can.png", name: "Car Audio Network" },
];

export default function BrandLogos() {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: "#0C0C0E" }}>
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(201,168,76,0.04), transparent 70%)" }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[0.625rem] font-bold tracking-[0.25em] uppercase">Brands &amp; Partners</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#F0F0F2] tracking-tight">The Brands We Carry</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
          {LOGOS.map((l) => (
            <div key={l.name} title={l.name} className="flex items-center justify-center px-2 h-12 sm:h-14">
              <img
                src={l.src}
                alt={l.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
