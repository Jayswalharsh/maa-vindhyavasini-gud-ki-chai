import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/components/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fffaf4]">
      {/* Page Header */}
      <section className="border-b border-[#eadfd2] bg-[#f7eee3]">
        <div className="container px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-kicker">
              OUR PRODUCTS
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#3d1f14] sm:text-5xl lg:text-6xl">
              Discover our{" "}
              <em className="text-[#a85c25]">
                Gud Ki Chai.
              </em>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#766960] sm:text-lg">
              Explore our range of jaggery-based tea, coffee
              and refreshing beverage premixes made for
              everyday enjoyment.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard
                key={product.name}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}