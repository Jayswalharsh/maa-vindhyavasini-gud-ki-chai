"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
  Package,
} from "lucide-react";
import { motion } from "motion/react";

import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({
  product,
  index = 0,
}: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello Maa Vindhyavasini, I want to enquire about ${product.name}. Please share details about pack sizes, pricing and availability.`
  );

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
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
        delay: Math.min(index * 0.05, 0.3),
      }}
      whileHover={{
        y: -7,
      }}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-[#eadfd2]
        bg-white
        shadow-[0_8px_30px_rgba(72,42,23,0.06)]
        transition-shadow
        duration-300
        hover:shadow-[0_18px_45px_rgba(72,42,23,0.12)]
      "
    >
      {/* =========================================
          PRODUCT IMAGE
          ========================================= */}

      <div className="relative aspect-[4/5] overflow-hidden bg-[#f7eee3]">
        {/* Decorative circle */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            h-[72%]
            w-[72%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#d9b98e]/30
          "
        />

        {/* Soft background glow */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            h-[55%]
            w-[55%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#d28a32]/8
            blur-2xl
          "
        />

        {/* Product number */}

        <span
          className="
            absolute
            left-5
            top-5
            z-20
            text-xs
            font-bold
            tracking-[0.18em]
            text-[#a85c25]
          "
        >
          {product.number}
        </span>

        {/* Category */}

        <span
          className="
            absolute
            right-4
            top-4
            z-20
            rounded-full
            border
            border-[#dfcdb8]
            bg-white/90
            px-3
            py-1.5
            text-[9px]
            font-bold
            tracking-[0.12em]
            text-[#6f341f]
            backdrop-blur-sm
          "
        >
          {product.category}
        </span>

        {/* Product image */}

        <motion.div
          className="
            relative
            z-10
            flex
            h-full
            w-full
            items-center
            justify-center
            p-8
            sm:p-10
          "
          whileHover={{
            scale: 1.04,
          }}
          transition={{
            duration: 0.35,
          }}
        >
          <Image
            src={`/images/${product.image}`}
            alt={`${product.name} - Maa Vindhyavasini Gud Ki Chai`}
            width={780}
            height={975}
            className="
              h-full
              w-full
              object-contain
              drop-shadow-[0_18px_18px_rgba(61,31,20,0.16)]
            "
          />
        </motion.div>
      </div>

      {/* =========================================
          PRODUCT INFORMATION
          ========================================= */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Product name */}

        <h3
          className="
            text-xl
            font-bold
            leading-tight
            tracking-[-0.02em]
            text-[#3d1f14]
          "
        >
          {product.name}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            line-clamp-2
            min-h-[48px]
            text-sm
            leading-6
            text-[#766960]
          "
        >
          {product.description}
        </p>

        {/* =========================================
            PACK SIZES
            ========================================= */}

        <div className="mt-5 flex flex-wrap gap-2">
          {product.packSizes.map((size) => (
            <span
              key={size}
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                bg-[#fff7ed]
                px-2.5
                py-1.5
                text-[11px]
                font-semibold
                text-[#7a4829]
              "
            >
              <Package size={12} />
              {size}
            </span>
          ))}
        </div>

        {/* =========================================
            ENQUIRY BUTTON
            ========================================= */}

        <a
          href={`https://wa.me/918409104406?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group/button
            mt-6
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#a85c25]
            px-4
            py-3.5
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-[#6f341f]
          "
        >
          <MessageCircle size={16} />

          <span>Enquire Now</span>

          <ArrowUpRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover/button:translate-x-0.5
              group-hover/button:-translate-y-0.5
            "
          />
        </a>
      </div>
    </motion.article>
  );
}