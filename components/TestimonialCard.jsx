const STAR =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

function Stars() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-3 h-3 text-[#C9A84C]" viewBox="0 0 20 20" fill="currentColor">
          <path d={STAR} />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({ t, hidden = false }) {
  if (t.image) {
    /* Image card — background photo + gradient darkening + blur-glass overlay */
    return (
      <figure
        className="relative overflow-hidden border border-white/5 hover:border-[#C9A84C]/25 transition-colors duration-300 flex items-end"
        style={{ minHeight: 320, backgroundImage: `url(${t.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden={hidden ? "true" : undefined}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(12,12,14,0.2) 0%, rgba(12,12,14,0.55) 55%, rgba(12,12,14,0.92) 100%)" }} />
        <div className="relative m-3 p-5 w-[calc(100%-1.5rem)] border border-white/12 backdrop-blur-md" style={{ background: "rgba(19,19,22,0.45)" }}>
          <div className="mb-3"><Stars /></div>
          <p className="text-[#E6E6EA] text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
          <div className="flex items-center gap-3 pt-3 mt-3 border-t border-white/10">
            <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[#C9A84C] font-black text-xs" style={{ background: "linear-gradient(135deg, #1A1710, #1E1E26)" }}>{t.name[0]}</div>
            <div>
              <p className="text-[#F0F0F2] text-sm font-bold leading-tight">{t.name}</p>
              <p className="text-white/55 text-xs mt-0.5">{t.role}{t.location ? ` · ${t.location}` : ""}</p>
            </div>
          </div>
        </div>
      </figure>
    );
  }
  /* Text card */
  return (
    <div className="border border-white/5 hover:border-[#C9A84C]/20 transition-colors duration-300 p-6 flex flex-col gap-4 relative" style={{ background: "#0D0D0F" }} aria-hidden={hidden ? "true" : undefined}>
      <div className="absolute top-5 right-6 text-[#C9A84C]/8 text-6xl font-black leading-none select-none">&ldquo;</div>
      <Stars />
      <p className="text-[#8A8A96] text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-3 border-t border-white/5">
        <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[#C9A84C] font-black text-xs" style={{ background: "linear-gradient(135deg, #1A1710, #1E1E26)" }}>{t.name[0]}</div>
        <div>
          <p className="text-[#F0F0F2] text-sm font-bold leading-tight">{t.name}</p>
          <p className="text-[#4A4A56] text-xs mt-0.5">{t.role}{t.location ? ` · ${t.location}` : ""}</p>
        </div>
      </div>
    </div>
  );
}
