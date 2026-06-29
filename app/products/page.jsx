import ProductsGrid from "@/components/ProductsGrid";

export const metadata = { title: "Products — Audio Workshop Indonesia" };

export default function Page() {
  return (
    <>
      <section className="pt-32 pb-12 max-w-7xl mx-auto px-6">
        <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-2">Catalog</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#F0F0F2] mb-4">Product Catalog</h1>
        <p className="text-[#8A8A96] text-lg max-w-2xl">
          Premium car audio products from the world's leading brands. Every product is genuine and backed by full
          manufacturer warranty.
        </p>
      </section>

      <ProductsGrid />
    </>
  );
}
