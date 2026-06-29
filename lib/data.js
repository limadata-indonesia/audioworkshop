// ── Static content (replaces the former Sanity CMS) ──────────────────────────
// All site content lives here. No external CMS / network calls.

import { products } from "./products";
export { products };

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

export { news, newsCategories, getNewsItem, newsByCategory } from "./news";

export { dealers, dealerRegions, dealersByRegion } from "./dealers";

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
export const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
export const catLabel = (value) => (value ? value.replace(/-/g, " ") : "");
