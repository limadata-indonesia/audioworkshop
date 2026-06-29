import Link from "next/link";

export const metadata = {
  title: "Training Center — Audio Workshop Indonesia",
  description:
    "Audioworkshop Installer Institute — Indonesia's comprehensive car audio training center since 2001, with international certification.",
};

const topics = [
  "Dasar elektronika",
  "Crossover",
  "Instalasi sistem audio",
  "Kabel dan manajemen wiring",
  "Tuning audio / setting",
  "Pembuatan box speaker",
  "Troubleshooting gangguan audio mobil (noise)",
  "Fiberglass",
];

const achievements = [
  "Menjadi pusat pelatihan yang dipercaya sebagai rujukan oleh berbagai brand audio mobil.",
  "Berhasil mencetak installer profesional yang terbukti berprestasi, dengan meraih kemenangan dalam berbagai kompetisi audio mobil di event besar dan bergengsi, baik di tingkat nasional maupun internasional.",
  "Menjadi salah satu institusi pelatihan audio mobil yang direkomendasikan oleh organisasi kompetisi audio seperti EMMA dan CAN di kawasan Asia.",
  "Telah meluluskan lebih dari 400 alumni yang tersebar di seluruh Indonesia, di mana sebagian di antaranya telah sukses membangun bisnis sendiri melalui toko audio maupun workshop instalasi dan modifikasi audio mobil.",
];

const grid = ["tc-g1", "tc-g2", "tc-g3", "tc-g4", "tc-g5", "tc-g6", "tc-g7", "tc-g8", "tc-g9"];

const Check = () => (
  <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Page() {
  return (
    <>
      {/* Top gallery */}
      <section className="pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {["tc-top1", "tc-top2", "tc-top3"].map((n) => (
            <div key={n} className="aspect-[4/3] overflow-hidden bg-[#131316]">
              <img src={`/pages/${n}.jpg`} alt="Training session" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Heading */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Supporting Business</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#F0F0F2] tracking-tight">Audioworkshop Training Center</h1>
      </section>

      {/* Intro + topics / feature image */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-5">
          <p className="text-[#8A8A96] leading-relaxed">
            Audioworkshop memulai langkahnya dengan membuka fasilitas pelatihan installer pada tahun 2001 dengan nama Audioworkshop Installer Institute. Hingga saat ini, Audioworkshop Installer Institute dikenal sebagai salah satu pusat pelatihan audio mobil dengan materi pembelajaran yang lengkap dan komprehensif.
          </p>
          <p className="text-[#8A8A96] leading-relaxed">
            Materi pelatihan yang disusun mencakup seluruh aspek penting untuk memahami sistem audio mobil secara menyeluruh, antara lain:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {topics.map((t) => (
              <li key={t} className="flex gap-3 bg-[#131316] border border-[#1E1E26] rounded-lg p-3.5 hover:border-[#C9A84C]/30 transition-colors">
                <Check />
                <span className="text-[#A8A8B2] text-sm leading-snug">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <div className="overflow-hidden rounded-xl border border-[#1E1E26] bg-[#131316]">
            <img src="/pages/tc-lab.jpg" alt="Audioworkshop training lab" loading="lazy" className="w-full h-auto" />
          </div>
          <p className="text-[#8A8A96] leading-relaxed">
            Tidak hanya berfokus di dalam negeri, Audioworkshop Installer Institute juga mengembangkan jaringan internasional sejak tahun 2002 dengan menjalin kerja sama pelatihan bersama ETTA Training Institute Japan.
          </p>
        </div>
      </section>

      {/* Achievements + feature image */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="order-2 lg:order-1 overflow-hidden rounded-xl border border-[#1E1E26] bg-[#131316]">
          <img src="/pages/tc-training.jpg" alt="Training graduates" loading="lazy" className="w-full h-auto" />
        </div>
        <div className="order-1 lg:order-2 space-y-5">
          <h2 className="text-2xl font-black text-[#F0F0F2]">Pencapaian Kami</h2>
          <p className="text-[#8A8A96] leading-relaxed">
            Beberapa pencapaian yang telah diraih oleh Audioworkshop Installer Institute antara lain:
          </p>
          <ul className="space-y-3">
            {achievements.map((a, i) => (
              <li key={i} className="flex gap-3">
                <Check />
                <span className="text-[#8A8A96] text-sm leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Photo grid */}
      <section className="max-w-6xl mx-auto px-6 pt-6 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Training Moments</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {grid.map((n) => (
            <div key={n} className="aspect-[4/3] overflow-hidden rounded-lg border border-[#1E1E26] bg-[#131316] group">
              <img src={`/pages/${n}.jpg`} alt="Training" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(201,168,76,0.06), transparent 70%), #0F0F12" }} />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-black text-[#F0F0F2] mb-3">Join Our Next Training Program</h2>
          <p className="text-[#8A8A96] mb-8">Training schedules are announced quarterly. Contact us to be notified and reserve your place.</p>
          <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#B8963E] text-[#0C0C0E] font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors">
            Inquire About Training
          </Link>
        </div>
      </section>
    </>
  );
}
