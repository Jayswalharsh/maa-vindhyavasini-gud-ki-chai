import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/components/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fffaf4] text-[#3d1f14]">

      {/* =========================================================
          PRODUCTS PAGE HEADER
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-[#eadfd2] bg-[#f7eee3]">

        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#e9c89f]/25 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#c87832]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-140px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d99a24]/10 blur-3xl"
        />

        {/* Decorative Lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-[18%] bg-gradient-to-r from-transparent via-[#d6b99b] to-[#d6b99b] lg:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-[18%] bg-gradient-to-l from-transparent via-[#d6b99b] to-[#d6b99b] lg:block"
        />

        {/* Header Content */}
        <div className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-14">

          <div className="mx-auto max-w-4xl text-center">

            {/* Small Label */}
            <div className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#b96b2b] sm:w-12"
              />

              <span className="text-[11px] font-bold tracking-[0.3em] text-[#a85c25] sm:text-xs">
                OUR PRODUCTS
              </span>

              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#b96b2b] sm:w-12"
              />
            </div>

            {/* Main Heading */}
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-[#3d1f14] sm:text-5xl md:text-6xl lg:text-7xl">
              Discover our{" "}
              <em className="font-serif font-semibold not-italic text-[#a85c25]">
                Gud Ki Chai.
              </em>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#766960] sm:text-lg sm:leading-8">
              Explore our range of jaggery-based tea, coffee and refreshing
              beverage premixes made for everyday enjoyment.
            </p>

            {/* Supporting Feature Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

              <span className="rounded-full border border-[#dfcdbb] bg-white/70 px-4 py-2 text-xs font-semibold text-[#6d4a37] shadow-sm backdrop-blur-sm sm:text-sm">
                Pure Jaggery
              </span>

              <span className="rounded-full border border-[#dfcdbb] bg-white/70 px-4 py-2 text-xs font-semibold text-[#6d4a37] shadow-sm backdrop-blur-sm sm:text-sm">
                Rich Flavours
              </span>

              <span className="rounded-full border border-[#dfcdbb] bg-white/70 px-4 py-2 text-xs font-semibold text-[#6d4a37] shadow-sm backdrop-blur-sm sm:text-sm">
                Everyday Enjoyment
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCTS SECTION
      ========================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-14">

          {/* Products Intro Row */}
          <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b96b2b]">
                Our Collection
              </p>

              <h2 className="mt-2 font-serif text-2xl font-bold text-[#3d1f14] sm:text-3xl">
                Choose your favourite
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#766960] sm:text-right">
              From classic tea blends to comforting coffee and refreshing
              flavours, there is something for every cup.
            </p>

          </div>

          {/* Product Grid */}
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