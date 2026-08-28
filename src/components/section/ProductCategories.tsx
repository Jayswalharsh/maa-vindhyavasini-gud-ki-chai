"use client";

import {
  ArrowRight,
  Coffee,
  CupSoda,
  Leaf,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { motion } from "motion/react";

type Category = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  products: string;
};

const categories: Category[] = [
  {
    number: "01",
    icon: CupSoda,
    title: "Jaggery Tea",
    description:
      "Everyday chai flavours made with the familiar warmth and sweetness of jaggery.",
    products:
      "Kadak • Cardamom • Mast • Masala • Ginger • Black",
  },
  {
    number: "02",
    icon: Leaf,
    title: "Refreshing Tea",
    description:
      "Light and refreshing choices with lemon, green tea and lemongrass notes.",
    products:
      "Lemon Tea • Green Lemon Tea • Lemongrass Tea",
  },
  {
    number: "03",
    icon: Coffee,
    title: "Jaggery Coffee",
    description:
      "A warm coffee option for those who enjoy a richer beverage with jaggery sweetness.",
    products: "Hot Coffee",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Speciality Flavours",
    description:
      "Distinctive flavours that bring something different to your everyday cup.",
    products: "Basundi • Special Tea Blends",
  },
];

export default function ProductCategories() {
  return (
    <section
      id="product-categories"
      className="relative overflow-hidden bg-[#fffaf2] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DECORATION
          ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#d28a32]/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#6f341f]/5 blur-3xl"
      />

      {/* =========================================
          CONTAINER
          ========================================= */}

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        {/* =========================================
            SECTION HEADING
            ========================================= */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-[#a85c25] sm:text-sm">
            <span className="h-px w-8 bg-[#d28a32]" />

            OUR RANGE

            <span className="h-px w-8 bg-[#d28a32]" />
          </span>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#3d1f14] sm:text-5xl lg:text-6xl">
            Something for{" "}
            <em className="font-serif font-normal text-[#a85c25]">
              every cup.
            </em>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6f625b] sm:text-lg sm:leading-8">
            From familiar everyday chai to refreshing blends
            and coffee, explore the range by taste and occasion.
          </p>
        </motion.div>

        {/* =========================================
            CATEGORY GRID
            ========================================= */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[24px] border border-[#eadfd2] bg-white p-6 shadow-[0_8px_25px_rgba(72,42,23,0.04)] transition-all duration-300 hover:border-[#d9b98e] hover:shadow-[0_18px_40px_rgba(72,42,23,0.09)] sm:p-7"
              >
                {/* Number */}

                <span className="absolute right-6 top-6 text-xs font-bold tracking-[0.15em] text-[#c9b8a7]">
                  {category.number}
                </span>

                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6ead9] text-[#a85c25] transition-all duration-300 group-hover:bg-[#a85c25] group-hover:text-white">
                  <Icon size={24} />
                </div>

                {/* Content */}

                <div className="mt-7">
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-[#3d1f14]">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#766960]">
                    {category.description}
                  </p>
                </div>

                {/* Product names */}

                <div className="mt-auto border-t border-[#eee4d9] pt-5">
                  <span className="text-[10px] font-bold tracking-[0.16em] text-[#a85c25]">
                    IN THIS RANGE
                  </span>

                  <p className="mt-2 text-xs leading-5 text-[#766960]">
                    {category.products}
                  </p>
                </div>

                {/* Bottom accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#a85c25] transition-all duration-300 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* =========================================
            VIEW ALL PRODUCTS
            ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
            delay: 0.2,
          }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-xl border border-[#cfae87] bg-white px-6 py-3.5 text-sm font-bold text-[#6f341f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3d1f14] hover:text-white"
          >
            Explore All 11 Flavours

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}