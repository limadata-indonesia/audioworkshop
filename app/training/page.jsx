import Link from "next/link";

const programs = [
  {
    level: "Level 1",
    title: "Foundation",
    desc: "Car audio fundamentals, safety procedures, basic installation techniques, and component identification.",
    topics: ["System components overview", "Wiring fundamentals", "Basic installation", "Safety procedures"],
    duration: "2 Days",
  },
  {
    level: "Level 2",
    title: "Advanced Installation",
    desc: "Advanced wiring, custom fabrication, amplifier tuning, and professional finishing techniques.",
    topics: ["Advanced wiring", "Custom fabrication", "Amplifier configuration", "Acoustic principles"],
    duration: "3 Days",
  },
  {
    level: "Level 3",
    title: "Master Technician",
    desc: "Full system design, DSP programming, acoustic measurement, and premium brand certification.",
    topics: ["DSP programming", "RTA measurement", "System design", "Brand certification"],
    duration: "5 Days",
  },
];

export const metadata = { title: "Training — Audio Workshop Indonesia" };

export default function TrainingPage() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-2">Training</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#F0F0F2] mb-4">Professional Training Program</h1>
        <p className="text-[#8A8A96] text-lg max-w-2xl">Elevate your skills with our certified car audio training programs. Designed for installers, dealers, and enthusiasts who demand excellence.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {programs.map((prog) => (
            <div key={prog.level} className="bg-[#131316] border border-[#1E1E26] rounded-xl p-8 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">{prog.level}</span>
                <span className="text-[#8A8A96] text-xs border border-[#1E1E26] px-2 py-0.5 rounded-full">{prog.duration}</span>
              </div>
              <h2 className="text-[#F0F0F2] text-2xl font-black mb-3">{prog.title}</h2>
              <p className="text-[#8A8A96] text-sm leading-relaxed mb-6 flex-1">{prog.desc}</p>
              <ul className="space-y-2 mb-8">
                {prog.topics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-[#8A8A96]">
                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-auto bg-[#C9A84C]/10 hover:bg-[#C9A84C] border border-[#C9A84C]/30 hover:border-[#C9A84C] text-[#C9A84C] hover:text-white font-bold px-6 py-3 rounded text-sm tracking-wider uppercase text-center transition-all">
                Register Interest
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-[#131316] border border-[#1E1E26] rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#F0F0F2] mb-4">Brand-Specific Training</h2>
              <p className="text-[#8A8A96] leading-relaxed mb-6">We offer manufacturer-certified training for all major brands we distribute. Get factory-trained and certified to install and tune premium systems.</p>
              <div className="flex flex-wrap gap-2">
                {["Focal", "Alpine", "Audison", "Hertz", "JL Audio"].map((b) => (
                  <span key={b} className="border border-[#1E1E26] text-[#8A8A96] text-xs px-3 py-1 rounded-full">{b}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/contact" className="bg-[#C9A84C] hover:bg-[#B8963E] text-white font-bold px-8 py-4 rounded text-sm tracking-wider uppercase text-center transition-colors">
                Inquire About Training
              </Link>
              <p className="text-[#8A8A96] text-xs text-center">Training schedules are announced quarterly. Contact us to be notified.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
