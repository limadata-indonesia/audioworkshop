export const metadata = { title: "Car Audio Association — Audio Workshop Indonesia" };

const strip = ["can-1", "can-2", "can-3", "can-4", "can-5", "can-6"];

export default function Page() {
  return (
    <>
      {/* Page title */}
      <section className="pt-10 pb-2 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Supporting Business</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2] tracking-tight">Car Audio Association</h1>
      </section>

      {/* Hero: full-bleed CAN image gradienting into the dark + founder letter */}
      <section className="relative w-full overflow-hidden pt-6" style={{ background: "radial-gradient(ellipse 90% 80% at 75% 40%, rgba(201,168,76,0.08), transparent 58%), linear-gradient(155deg, #100D09 0%, #0C0C0E 55%, #0A0A0C 100%)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Image */}
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <img src="/pages/can-graphic.jpg" alt="CAN — The Next #CANVOLUTION, Letter from the Founder" className="absolute inset-0 w-full h-full object-cover" />
            {/* gradient blend into the dark (right on desktop, bottom on mobile) */}
            <div aria-hidden="true" className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, transparent 58%, rgba(12,12,14,0.55) 84%, #0C0C0E 100%)" }} />
            <div aria-hidden="true" className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to bottom, transparent 55%, #0C0C0E 100%)" }} />
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, transparent 72%, rgba(12,12,14,0.45))" }} />
          </div>

          {/* Letter */}
          <div className="relative flex flex-col justify-center px-6 md:px-12 lg:pl-6 lg:pr-20 py-14 lg:py-20">
            <div aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 -left-24 w-80 h-80 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12), transparent 70%)" }} />
            <div className="relative">
            <p className="text-[#F0F0F2] text-lg font-bold mb-5">Halo CAN Friends,</p>
            <p className="text-[#8A8A96] leading-relaxed text-sm md:text-base">
              Covid 19 membuat evolusi CAN menjadi lebih lambat satu tahun. Bersyukur karena kita masih diberikan waktu olehNya sebagai bagian dari evolusi ini. 2022 menjadi waktu kita untuk bangkit, bergerak Bersama menuju langkah berikutnya. Kita semua sudah mencoba online scoring CAN yang membuat kompetisi audio mobil menjadi lebih cepat dan akuntabel. Lebih spesifik lagi, Kita semua sudah mencoba menjuri menggunakan track modifikasi pada materi 101, 201, dan 301. Itu adalah proses belajar. Belajar mendengarkan perbedaan loudness per frekuensi, melatih insting kita mana yang cukup, lebih, atau kurang. Intinya adalah kita belajar mendengarkan! Tahun ini menjadi tahun transformasi untuk CAN menuju evolusi kedua, yaitu online scoring dengan streaming music. Akhir kata Terus berkarya, terus belajar, terus berkompetisi, karena satu hal yang pasti adalah : perubahan
            </p>
            <p className="text-[#F0F0F2] font-semibold mt-6">Selamat datang di #CANVOLUTION</p>
            <p className="text-[#8A8A96] text-sm mt-4">Wahyu Tanuwidjaja 2022</p>
            <a
              href="https://caraudio.network/#/home/all"
              target="_blank"
              rel="noopener"
              className="block w-fit mt-8 rounded-full border border-white/30 hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0C0C0E] text-[#F0F0F2] text-sm font-bold px-8 py-3.5 transition-all"
            >
              Car Audio Network
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event photo strip */}
      <section className="relative" style={{ background: "#0C0C0E" }}>
        <div className="grid grid-cols-3 md:grid-cols-6">
          {strip.map((n) => (
            <div key={n} className="aspect-square overflow-hidden bg-[#131316]">
              <img src={`/pages/${n}.jpg`} alt="CAN event" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
