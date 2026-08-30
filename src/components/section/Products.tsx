"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/components/data/products";

export default function Products() {
  const scrollProducts = (direction: "left" | "right") => {
    const slider = document.getElementById("products-slider");

    if (!slider) return;

    slider.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#fffaf4] py-16 sm:py-20 lg:py-24"
    >
      {/* =========================================================
          BACKGROUND DECORATION
          No side fade / no white overlay
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[8%] h-[400px] w-[400px] rounded-full bg-[#e9c89f]/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-[#d28a32]/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#a85c25]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-14">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          {/* Left Content */}

          <div className="max-w-2xl">
            {/* Label */}

            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#b96b2b] sm:w-12"
              />

              <span className="text-[11px] font-bold tracking-[0.28em] text-[#b96b2b] sm:text-xs">
                OUR COLLECTION
              </span>

              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#b96b2b] sm:w-12"
              />
            </div>

            {/* Heading */}

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-[-0.03em] text-[#3d1f14] sm:text-5xl lg:text-6xl">
              Choose your{" "}
              <span className="text-[#a85c25]">favourite.</span>
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#766960] sm:text-base">
              Discover our delicious range of jaggery-based tea, coffee and
              refreshing beverage premixes made for everyday enjoyment.
            </p>
          </div>

          {/* =========================================================
              DESKTOP SLIDER CONTROLS
          ========================================================= */}

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              aria-label="Previous products"
              onClick={() => scrollProducts("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9c1ac] bg-white text-[#6f341f] shadow-[0_6px_20px_rgba(72,42,23,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a85c25] hover:bg-[#fff5e8] hover:shadow-[0_10px_25px_rgba(72,42,23,0.14)]"
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>

            <button
              type="button"
              aria-label="Next products"
              onClick={() => scrollProducts("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a85c25] text-white shadow-[0_8px_22px_rgba(168,92,37,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6f341f] hover:shadow-[0_12px_28px_rgba(111,52,31,0.35)]"
            >
              <ChevronRight size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* =========================================================
            PRODUCT SLIDER
            No gradient overlays
            No white side effects
        ========================================================= */}

        <div className="relative">
          <div
            id="products-slider"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className="w-[86vw] flex-none snap-start sm:w-[360px] lg:w-[370px] xl:w-[380px]"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.04, 0.3),
                }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================
            MOBILE SLIDER INDICATOR
        ========================================================= */}

        <div className="mt-2 flex items-center justify-center gap-2 text-xs font-medium text-[#9a7965] lg:hidden">
          <ChevronLeft size={14} />
          <span>Swipe to explore more products</span>
          <ChevronRight size={14} />
        </div>

        {/* =========================================================
            BOTTOM COLLECTION AREA
        ========================================================= */}

        <div className="mt-10 border-t border-[#eadfd2] pt-8 sm:mt-12 sm:pt-10">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            {/* Collection Text */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b96b2b]">
                OUR COLLECTION
              </p>

              <p className="mt-2 text-sm font-medium text-[#766960] sm:text-base">
                {products.length} delicious flavours to explore
              </p>
            </div>

            {/* =====================================================
                EXPLORE ALL PRODUCTS BUTTON
            ===================================================== */}

            <Link
              href="/products"
              className="group relative z-30 inline-flex w-full items-center justify-between gap-6 overflow-hidden rounded-full border border-[#6f341f] bg-[#5a2415] px-5 py-3 text-white shadow-[0_12px_30px_rgba(90,36,21,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#45190e] hover:shadow-[0_18px_40px_rgba(90,36,21,0.32)] sm:w-auto sm:min-w-[275px]"
            >
              {/* Button Shine */}

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />

              {/* Button Text */}

              <span className="relative z-10 whitespace-nowrap text-sm font-bold tracking-wide text-white sm:text-base">
                Explore All Products
              </span>

              {/* Golden Arrow Circle */}

              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4ad1b] text-[#4d2113] shadow-[0_4px_12px_rgba(244,173,27,0.35)] transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#ffc43d]">
                <ArrowRight
                  size={19}
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}