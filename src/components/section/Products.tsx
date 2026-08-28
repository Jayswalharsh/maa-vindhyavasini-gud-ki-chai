"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    number: "01",
    name: "Jaggery Basundi",
    description: "Rich, creamy and comforting.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
  {
    number: "02",
    name: "Jaggery Cardamom Tea",
    description: "Classic chai with cardamom warmth.",
    image: "maa-vindhyavasini-200gm.jpg",
  },
  {
    number: "03",
    name: "Jaggery Kadak Tea",
    description: "Bold, strong and satisfying.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
  {
    number: "04",
    name: "Jaggery Lemon Tea",
    description: "Bright, refreshing and zesty.",
    image: "maa-vindhyavasini-200gm.jpg",
  },
  {
    number: "05",
    name: "Jaggery Hot Coffee",
    description: "Warm coffee with jaggery sweetness.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
  {
    number: "06",
    name: "Mast Jaggery Tea",
    description: "A feel-good everyday chai.",
    image: "maa-vindhyavasini-200gm.jpg",
  },
  {
    number: "07",
    name: "Jaggery Masala Tea",
    description: "Aromatic spices with classic chai notes.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
  {
    number: "08",
    name: "Jaggery Ginger Tea",
    description: "Warm ginger character in every cup.",
    image: "maa-vindhyavasini-200gm.jpg",
  },
  {
    number: "09",
    name: "Jaggery Black Tea",
    description: "Simple, deep and full-bodied.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
  {
    number: "10",
    name: "Jaggery Green Lemon Tea",
    description: "Light green tea with citrus freshness.",
    image: "maa-vindhyavasini-200gm.jpg",
  },
  {
    number: "11",
    name: "Jaggery Lemongrass Tea",
    description:
      "Fresh lemongrass aroma with a smooth finish.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#fffaf2] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DECORATION
          ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#e9a23b]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#6f341f]/5 blur-3xl"
      />

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
            duration: 0.6,
          }}
          className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1fr_420px] lg:items-end lg:gap-12"
        >
          {/* Heading */}

          <div>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-[#a85c25] sm:text-sm">
              <span className="h-px w-8 bg-[#d28a32]" />
              OUR COLLECTION
            </span>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#3d1f14] sm:text-5xl lg:text-6xl">
              11 ways to enjoy{" "}
              <em className="font-serif font-normal text-[#a85c25]">
                Gud Ki Chai.
              </em>
            </h2>
          </div>

          {/* Description */}

          <p className="max-w-xl text-base leading-7 text-[#6f625b] sm:text-lg lg:pb-1">
            Choose your everyday favourite — from bold
            kadak chai to refreshing lemon and
            lemongrass blends.
          </p>
        </motion.div>

        {/* =========================================
            PRODUCTS GRID
            ========================================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
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
                amount: 0.12,
              }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.045, 0.35),
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-2xl border border-[#eadfd2] bg-white shadow-[0_8px_30px_rgba(72,42,23,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(72,42,23,0.12)]"
            >
              {/* =========================================
                  PRODUCT IMAGE
                  ========================================= */}

              <div className="relative aspect-[4/5] overflow-hidden bg-[#f4eadc]">
                <Image
                  src={`/images/${product.image}`}
                  alt={`${product.name} - Maa Vindhyavasini`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Soft image overlay */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"
                />

                {/* Product Number */}

                <span className="absolute left-4 top-4 inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 px-3 text-xs font-bold tracking-wider text-white backdrop-blur-md">
                  {product.number}
                </span>
              </div>

              {/* =========================================
                  PRODUCT INFORMATION
                  ========================================= */}

              <div className="flex min-h-[205px] flex-col p-5 sm:p-6">
                <h3 className="text-xl font-bold leading-tight text-[#3d1f14]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#766960]">
                  {product.description}
                </p>

                {/* Enquiry */}

                <a
                  href={`https://wa.me/918409104406?text=${encodeURIComponent(
                    `Hello, I want to enquire about ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-bold text-[#a85c25] transition-colors duration-200 hover:text-[#6f341f]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f6ead9] transition-colors duration-200 group-hover:bg-[#ead7bd]">
                    <MessageCircle size={15} />
                  </span>

                  <span>Enquire Now</span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =========================================
            BOTTOM NOTE
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
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#eadfd2] bg-[#f7eee3] p-6 sm:flex-row sm:items-center sm:p-7"
        >
          <div>
            <p className="text-base font-bold text-[#3d1f14] sm:text-lg">
              Not sure which flavour to choose?
            </p>

            <p className="mt-1 text-sm leading-6 text-[#766960]">
              Tell us what kind of chai you like and
              we&apos;ll help you find your match.
            </p>
          </div>

          <a
            href="https://wa.me/918409104406?text=Hello%20Maa%20Vindhyavasini%2C%20please%20help%20me%20choose%20a%20flavour."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#6f341f] px-6 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#542516] hover:shadow-lg"
          >
            <MessageCircle size={17} />
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}