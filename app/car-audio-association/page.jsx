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

      {/* Hero: CAN image (left) + founder letter on a solid dark panel (right) */}
      <section className="relative overflow-hidden pt-6" style={{ background: "#0C0C0E" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Image — cropped to the CAN graphic so it fills the column with text clear */}
          <div className="relative min-h-[300px] lg:min-h-[540px] bg-black overflow-hidden">
            <img src="/pages/can-graphic.jpg" alt="CAN — The Next #CANVOLUTION, Letter from the Founder" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Letter — solid dark panel, no image behind */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-14" style={{ background: "#0C0C0E" }}>
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
              className="self-start mt-8 rounded-full border border-white/30 hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0C0C0E] text-[#F0F0F2] text-sm font-bold px-8 py-3.5 transition-all"
            >
              Car Audio Network
            </a>
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
