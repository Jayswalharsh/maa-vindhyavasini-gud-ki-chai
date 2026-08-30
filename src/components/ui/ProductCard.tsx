"use client";

import {
  ArrowRight,
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

  const whatsappUrl = `https://wa.me/918409104406?text=${whatsappMessage}`;

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.3),
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-[#e8d9c9]
        bg-white
        shadow-[0_8px_28px_rgba(72,42,23,0.07)]
        transition-all
        duration-500
        hover:border-[#c8782c]
        hover:shadow-[0_18px_45px_rgba(72,42,23,0.16)]
      "
    >
      {/* =========================================
          PRODUCT IMAGE
          ========================================= */}

      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-[#f7eee3]
          aspect-[4/5]
        "
      >
        {/* Warm background glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(214,145,70,0.16),transparent_65%)]
            opacity-70
            transition-all
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Product image */}
        <motion.div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
          whileHover={{
            scale: 1.025,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
        >
          <img
            src={product.image}
            alt={`${product.name} - Maa Vindhyavasini Gud Ki Chai`}
            className="
              block
              h-full
              w-full
              object-contain
              object-center
              drop-shadow-[0_12px_18px_rgba(61,31,20,0.20)]
              transition-all
              duration-500
              group-hover:drop-shadow-[0_18px_25px_rgba(61,31,20,0.30)]
            "
          />
        </motion.div>

        {/* Category badge */}
        <span
          className="
            absolute
            left-4
            top-4
            z-20
            rounded-full
            border
            border-[#e5d7ca]
            bg-white/95
            px-3.5
            py-2
            text-[10px]
            font-semibold
            tracking-[0.02em]
            text-[#75442c]
            shadow-[0_5px_14px_rgba(61,31,20,0.10)]
            backdrop-blur-sm
            transition-all
            duration-300
            group-hover:border-[#d49a62]
            group-hover:shadow-[0_7px_18px_rgba(61,31,20,0.15)]
          "
        >
          {product.category
            .toLowerCase()
            .replace(/\b\w/g, (letter) => letter.toUpperCase())}
        </span>

        {/* Image bottom subtle fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            z-10
            h-10
            bg-gradient-to-t
            from-[#f7eee3]/25
            to-transparent
          "
        />
      </div>

      {/* =========================================
          PRODUCT CONTENT
          ========================================= */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-5
          pb-4
          pt-5
          sm:px-6
          sm:pb-5
          sm:pt-6
        "
      >
        {/* Product name */}
        <h3
          className="
            font-serif
            text-[20px]
            font-bold
            leading-tight
            tracking-[-0.02em]
            text-[#3d1f14]
            transition-colors
            duration-300
            group-hover:text-[#a85c25]
          "
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          className="
            mt-1.5
            line-clamp-2
            min-h-[42px]
            text-[13px]
            leading-5
            text-[#766960]
          "
        >
          {product.description}
        </p>

        {/* Divider */}
        <div
          className="
            mt-4
            h-px
            w-full
            bg-[#eadfd2]
            transition-colors
            duration-300
            group-hover:bg-[#dfc09f]
          "
        />

        {/* =========================================
            BOTTOM ROW
            ========================================= */}

        <div
          className="
            mt-3
            flex
            items-center
            justify-between
          "
        >
          {/* Left side */}
          <div className="flex items-center gap-2.5">
            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#fff1df]
                text-[#b45f20]
                transition-all
                duration-300
                group-hover:bg-[#b45f20]
                group-hover:text-white
              "
            >
              <Package size={15} strokeWidth={1.8} />
            </span>

            <span
              className="
                text-[12px]
                font-medium
                text-[#765f51]
              "
            >
              Jaggery Based
            </span>
          </div>

          {/* Enquire */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="
              group/button
              flex
              items-center
              gap-2
              text-[13px]
              font-semibold
              text-[#3d1f14]
              transition-colors
              duration-300
              hover:text-[#a85c25]
            "
          >
            <span>Enquire</span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#f8ecdd]
                text-[#6f341f]
                transition-all
                duration-300
                group-hover/button:bg-[#a85c25]
                group-hover/button:text-white
              "
            >
              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-0.5
                "
              />
            </span>
          </a>
        </div>
      </div>

      {/* =========================================
          HOVER BORDER EFFECT
          ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[24px]
          border-2
          border-transparent
          transition-all
          duration-500
          group-hover:border-[#c8782c]/35
        "
      />
    </motion.article>
  );
}