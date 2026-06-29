// ── Static content (replaces the former Sanity CMS) ──────────────────────────
// All site content lives here. No external CMS / network calls.

export const brands = [
  {
    slug: "focal",
    name: "Focal",
    country: "France",
    tagline: "The Spirit of Sound",
    website: "https://www.focal.com",
    description: [
      "Founded in Saint-Étienne, France, Focal is one of the world's leading designers and manufacturers of high-fidelity loudspeakers — from home audio to the most demanding in-car reference systems.",
      "Every Focal car audio component is engineered in-house, combining proprietary cone materials, inverted-dome tweeters, and obsessive acoustic tuning to deliver sound that is faithful, dynamic, and emotional.",
    ],
  },
  {
    slug: "alpine",
    name: "Alpine",
    country: "Japan",
    tagline: "Premium Mobile Media",
    website: "https://www.alpine.com",
    description: [
      "Alpine has defined mobile electronics for decades, pioneering everything from the first in-dash CD players to today's floating-display media receivers.",
      "Their head units pair beautiful interfaces with deep tuning control, making them a favourite for enthusiasts who want both usability and sound quality.",
    ],
  },
  {
    slug: "hertz",
    name: "Hertz",
    country: "Italy",
    tagline: "Italian Sound Excellence",
    website: "https://www.hertzaudiovideo.com",
    description: [
      "Hertz is the car audio brand of Elettromedia, designed and built in Italy with a focus on musical accuracy and build quality.",
      "From the Mille reference line to the versatile Cento series, Hertz speakers are voiced to bring out the emotion in every recording.",
    ],
  },
  {
    slug: "audison",
    name: "Audison",
    country: "Italy",
    tagline: "Engineered for Emotion",
    website: "https://www.audison.com",
    description: [
      "Audison is the high-end electronics arm of Elettromedia, renowned for its amplifiers and digital signal processors.",
      "The Thesis and bit processor families set the benchmark for in-car DSP tuning and amplification.",
    ],
  },
  {
    slug: "jl-audio",
    name: "JL Audio",
    country: "USA",
    tagline: "Engineering the Best Sound",
    website: "https://www.jlaudio.com",
    description: [
      "Built in Miramar, Florida, JL Audio is famous for subwoofers and amplifiers that move serious air without sacrificing accuracy.",
      "Their patented technologies — W7 subwoofers, RIPS amplifier power supplies, and more — are the result of relentless in-house engineering.",
    ],
  },
  {
    slug: "morel",
    name: "Morel",
    country: "Israel",
    tagline: "Pure Audiophile Sound",
    website: "https://www.morelhifi.com",
    description: [
      "Morel hand-builds drivers in Israel using large-diameter voice coils and proprietary materials for exceptionally natural midrange and vocals.",
      "Audiophiles choose Morel for its smooth, effortless presentation and outstanding power handling.",
    ],
  },
  {
    slug: "helix",
    name: "Helix",
    country: "Germany",
    tagline: "German Audio Engineering",
    website: "https://www.helix-audio.com",
    description: [
      "Helix, part of Audiotec Fischer, is engineered in Germany and is a global reference for DSP amplifiers and signal processing.",
      "The DSP.3 and matching amplifiers give installers precise, repeatable control over every system.",
    ],
  },
  {
    slug: "mosconi",
    name: "Mosconi",
    country: "Italy",
    tagline: "Handcrafted Amplification",
    website: "https://www.mosconi-system.it",
    description: [
      "Mosconi builds amplifiers and processors in Italy with a focus on sonic purity and meticulous construction.",
      "The Gladen and Mosconi lines are favourites among competition and reference installers worldwide.",
    ],
  },
];

export const products = [
  { slug: "focal-utopia-m-3way", name: "Utopia M 3-Way", brandSlug: "focal", category: "speaker", shortDesc: "Reference 3-way component system with Beryllium tweeter.", description: ["The Utopia M range represents the absolute pinnacle of Focal's in-car engineering, featuring a pure Beryllium inverted-dome tweeter and TAM cone technology.", "Designed for reference installations where nothing but the best will do."], specs: [{ key: "Configuration", value: "3-Way Component" }, { key: "Tweeter", value: "Pure Beryllium 'M' inverted dome" }, { key: "Power Handling", value: "150W RMS" }, { key: "Sensitivity", value: "92.5 dB" }] },
  { slug: "focal-ps-165-f3", name: "PS 165 F3", brandSlug: "focal", category: "speaker", shortDesc: "Flax-cone 3-way component speakers.", description: ["Focal's acclaimed Flax cone technology delivers warm, neutral and dynamic sound in a 3-way package."], specs: [{ key: "Configuration", value: "3-Way Component" }, { key: "Cone", value: "Flax" }, { key: "Power Handling", value: "110W RMS" }] },
  { slug: "alpine-halo11", name: "Halo11 iLX-F511", brandSlug: "alpine", category: "head-unit", shortDesc: '11-inch floating-display media receiver.', description: ["The Alpine Halo11 features a massive 11-inch floating capacitive touchscreen that fits almost any dashboard, with wireless Apple CarPlay and Android Auto."], specs: [{ key: "Display", value: '11" floating capacitive touch' }, { key: "CarPlay", value: "Wireless" }, { key: "Android Auto", value: "Wireless" }, { key: "Preouts", value: "4V × 3" }] },
  { slug: "alpine-f-series-sub", name: "F-Series Subwoofer", brandSlug: "alpine", category: "subwoofer", shortDesc: "High-excursion shallow-mount subwoofer.", description: ["A shallow-mount design that delivers deep, controlled bass even in tight installation spaces."], specs: [{ key: "Size", value: '10" / 12"' }, { key: "Power Handling", value: "600W RMS" }, { key: "Mounting", value: "Shallow" }] },
  { slug: "hertz-mille-pro", name: "Mille Pro MPK 165", brandSlug: "hertz", category: "speaker", shortDesc: "Italian 2-way reference component set.", description: ["The Mille Pro line is Hertz's professional reference series, voiced for sound-quality competitions and discerning listeners."], specs: [{ key: "Configuration", value: "2-Way Component" }, { key: "Tweeter", value: "1.1\" soft dome" }, { key: "Power Handling", value: "150W RMS" }] },
  { slug: "audison-thesis-quattro", name: "Thesis TH quattro", brandSlug: "audison", category: "amplifier", shortDesc: "4-channel reference amplifier.", description: ["The Thesis quattro is Audison's flagship 4-channel amplifier, hand-assembled for ultimate sonic purity."], specs: [{ key: "Channels", value: "4" }, { key: "Power", value: "4 × 130W RMS" }, { key: "Class", value: "AB" }] },
  { slug: "audison-bit-one-hd", name: "bit One HD Virtuoso", brandSlug: "audison", category: "processor", shortDesc: "High-resolution digital sound processor.", description: ["A reference-grade DSP with high-resolution conversion and comprehensive tuning tools for the most demanding systems."], specs: [{ key: "Inputs", value: "Hi-Res digital + analog" }, { key: "Channels", value: "12 out" }, { key: "Resolution", value: "24-bit / 96kHz" }] },
  { slug: "jl-audio-13w7", name: "13W7AE Subwoofer", brandSlug: "jl-audio", category: "subwoofer", shortDesc: "Anniversary-edition reference subwoofer.", description: ["The legendary W7 platform delivers massive, accurate bass thanks to JL Audio's patented technologies."], specs: [{ key: "Size", value: '13.5"' }, { key: "Power Handling", value: "1000W RMS" }, { key: "Voice Coil", value: "3\" dual" }] },
  { slug: "jl-audio-vx800", name: "VX800/8i Amplifier", brandSlug: "jl-audio", category: "amplifier", shortDesc: "8-channel DSP amplifier.", description: ["An 8-channel amplifier with integrated DSP and automatic tuning via the JL Audio TüN software."], specs: [{ key: "Channels", value: "8" }, { key: "DSP", value: "Integrated" }, { key: "Power", value: "8 × 75W RMS" }] },
  { slug: "morel-supremo", name: "Supremo 602", brandSlug: "morel", category: "speaker", shortDesc: "Audiophile 2-way component system.", description: ["Hand-built in Israel, the Supremo set delivers Morel's signature smooth, natural midrange and vocals."], specs: [{ key: "Configuration", value: "2-Way Component" }, { key: "Voice Coil", value: '3" Hexatech' }, { key: "Power Handling", value: "140W RMS" }] },
  { slug: "helix-dsp-3", name: "DSP.3 Processor", brandSlug: "helix", category: "processor", shortDesc: "8-channel German-engineered DSP.", description: ["The Helix DSP.3 gives installers precise, repeatable control with 10-channel processing and an intuitive tuning interface."], specs: [{ key: "Channels", value: "8 in / 10 out" }, { key: "Resolution", value: "64-bit processing" }, { key: "Control", value: "DSP PC-Tool" }] },
  { slug: "mosconi-gladen-one", name: "Gladen ONE 130.4", brandSlug: "mosconi", category: "amplifier", shortDesc: "Handcrafted 4-channel amplifier.", description: ["Built in Italy, the Gladen ONE series pairs sonic purity with meticulous construction."], specs: [{ key: "Channels", value: "4" }, { key: "Power", value: "4 × 130W RMS" }, { key: "Class", value: "AB" }] },
];

export const productCategories = [
  { value: "all", label: "All Products" },
  { value: "head-unit", label: "Head Unit" },
  { value: "speaker", label: "Speakers" },
  { value: "subwoofer", label: "Subwoofer" },
  { value: "amplifier", label: "Amplifier" },
  { value: "processor", label: "Processor" },
  { value: "accessories", label: "Accessories" },
];

export const news = [
  { slug: "focal-utopia-m-arrives", title: "Focal Utopia M Series Arrives in Indonesia", category: "product", excerpt: "The reference benchmark for in-car high fidelity is now available through our authorized network.", date: "2026-06-20", body: [{ type: "p", text: "We're proud to announce that the Focal Utopia M range — the absolute pinnacle of in-car high fidelity — is now available through Audio Workshop and our authorized dealers across Indonesia." }, { type: "h2", text: "Reference Engineering" }, { type: "p", text: "Featuring a pure Beryllium inverted-dome tweeter and TAM cone technology, the Utopia M sets a new standard for what's possible in a vehicle." }] },
  { slug: "audison-thesis-launch", title: "Audison Thesis Quattro: Italian Engineering Unveiled", category: "product", excerpt: "A new flagship amplifier line built for the most demanding reference systems.", date: "2026-06-12", body: [{ type: "p", text: "Audison's Thesis Quattro amplifier is now in stock. Hand-assembled in Italy, it delivers reference-grade amplification for the most discerning systems." }, { type: "h2", text: "Built Without Compromise" }, { type: "p", text: "Every component is selected for sonic purity, from the power supply to the output stage." }] },
  { slug: "installer-certification-2026", title: "2026 Installer Certification Program Opens", category: "event", excerpt: "Hands-on training with certified master technicians across our dealer network.", date: "2026-05-30", body: [{ type: "p", text: "Registration is now open for our 2026 installer certification program. Train hands-on with certified master technicians and earn brand certifications." }, { type: "h2", text: "Three Levels" }, { type: "p", text: "From foundation to master technician, our program covers everything from wiring fundamentals to DSP tuning and acoustic measurement." }] },
  { slug: "alpine-halo11-restock", title: "Alpine Halo11 Back in Stock", category: "product", excerpt: "The 11-inch floating display head unit returns after months of high demand.", date: "2026-05-18", body: [{ type: "p", text: "The hugely popular Alpine Halo11 floating-display media receiver is back in stock after months of high demand." }, { type: "p", text: "With its 11-inch floating touchscreen and wireless CarPlay and Android Auto, it remains one of our most requested head units." }] },
];

export const dealers = [
  { name: "Audio Workshop Jakarta", city: "Jakarta Selatan", province: "DKI Jakarta", address: "Jl. Panglima Polim Raya No. 45, Kebayoran Baru", phone: "+62 21 7211 234", whatsapp: "628111234567", instagram: "https://instagram.com/audioworkshop.id", mapsUrl: "https://maps.google.com" },
  { name: "Sound Garage", city: "Jakarta Barat", province: "DKI Jakarta", address: "Jl. Daan Mogot KM 12 No. 8, Cengkareng", phone: "+62 21 5450 678", whatsapp: "628119876543", instagram: "https://instagram.com", mapsUrl: "https://maps.google.com" },
  { name: "Bandung Car Audio", city: "Bandung", province: "Jawa Barat", address: "Jl. Setiabudhi No. 120, Bandung", phone: "+62 22 2012 345", whatsapp: "628122223333", instagram: "https://instagram.com", mapsUrl: "https://maps.google.com" },
  { name: "Surabaya Premium Audio", city: "Surabaya", province: "Jawa Timur", address: "Jl. Raya Darmo No. 88, Surabaya", phone: "+62 31 5677 890", whatsapp: "628133334444", instagram: "https://instagram.com", mapsUrl: "https://maps.google.com" },
  { name: "Bali Sound Lab", city: "Denpasar", province: "Bali", address: "Jl. Sunset Road No. 200, Kuta", phone: "+62 361 8475 12", whatsapp: "628144445555", mapsUrl: "https://maps.google.com" },
  { name: "Medan Audio Center", city: "Medan", province: "Sumatera Utara", address: "Jl. Gatot Subroto No. 150, Medan", phone: "+62 61 4520 999", whatsapp: "628155556666", instagram: "https://instagram.com", mapsUrl: "https://maps.google.com" },
];

export const projects = [
  { slug: "toyota-alphard-reference", title: "Toyota Alphard — Reference Build", carModel: "Toyota Alphard", description: ["A no-compromise reference system built around Focal Utopia M components, Audison Thesis amplification, and a fully fabricated subwoofer enclosure.", "Every cable was custom-terminated and the interior trim was restored to factory finish."], components: [{ brand: "Focal", name: "Utopia M 3-Way" }, { brand: "Audison", name: "Thesis TH quattro" }, { brand: "JL Audio", name: "13W7AE" }] },
  { slug: "bmw-3-series-sq", title: "BMW 3 Series — Sound Quality Build", carModel: "BMW 3 Series", description: ["A discreet sound-quality install retaining the factory look while delivering audiophile performance via a Helix DSP and Hertz Mille Pro components."], components: [{ brand: "Hertz", name: "Mille Pro MPK 165" }, { brand: "Helix", name: "DSP.3" }] },
  { slug: "mercedes-c-class-stealth", title: "Mercedes C-Class — Stealth System", carModel: "Mercedes C-Class", description: ["A fully stealth installation hidden behind factory panels, pairing Morel components with Mosconi amplification for an effortless, natural sound."], components: [{ brand: "Morel", name: "Supremo 602" }, { brand: "Mosconi", name: "Gladen ONE 130.4" }] },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
export const getBrand = (slug) => brands.find((b) => b.slug === slug) ?? null;
export const getBrandName = (slug) => getBrand(slug)?.name ?? "";
export const getProduct = (slug) => products.find((p) => p.slug === slug) ?? null;
export const productsByBrand = (brandSlug) => products.filter((p) => p.brandSlug === brandSlug);
export const relatedProducts = (category, slug) =>
  products.filter((p) => p.category === category && p.slug !== slug).slice(0, 4);
export const getNewsItem = (slug) => news.find((n) => n.slug === slug) ?? null;
export const dealersByProvince = () => {
  const grouped = {};
  for (const d of dealers) {
    (grouped[d.province] ??= []).push(d);
  }
  return Object.keys(grouped)
    .sort()
    .map((province) => ({ province, items: grouped[province] }));
};
export const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
export const catLabel = (value) => (value ? value.replace(/-/g, " ") : "");
