"use client";

import Image from "next/image";
import {
  Check,
  Leaf,
  Heart,
  CupSoda,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

export default function BrandStory() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fffaf2] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DECORATION
          ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#d28a32]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#6f341f]/5 blur-3xl"
      />

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">

        {/* =========================================
            MAIN STORY GRID
            ========================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* =========================================
              IMAGE SIDE
              ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
            }}
            className="relative mx-auto w-full max-w-xl lg:mx-0"
          >

            {/* Image */}

            <div className="relative overflow-hidden rounded-[28px] bg-[#f1e5d6] shadow-[0_20px_60px_rgba(72,42,23,0.12)]">

              <Image
                src="/images/jaggery-cup.jpg"
                alt="Traditional Indian jaggery chai served in a clay cup"
                width={1536}
                height={1024}
                priority={false}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Image overlay */}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#3d1f14]/20 via-transparent to-transparent"
              />

            </div>

            {/* =========================================
                FLOATING BADGE
                ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-[0_12px_35px_rgba(72,42,23,0.14)] backdrop-blur-md sm:-right-5 sm:px-6"
            >

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f6ead9] text-[#a85c25]">
                <Leaf size={20} />
              </span>

              <span className="text-sm leading-5 text-[#6f625b]">
                Gud-based
                <br />
                <strong className="font-bold text-[#3d1f14]">
                  Premixes
                </strong>
              </span>

            </motion.div>

          </motion.div>

          {/* =========================================
              CONTENT SIDE
              ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
            }}
            className="lg:py-5"
          >

            {/* Kicker */}

            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-[#a85c25] sm:text-sm">
              <span className="h-px w-8 bg-[#d28a32]" />
              ABOUT THE BRAND
            </span>

            {/* Heading */}

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#3d1f14] sm:text-5xl lg:text-6xl">
              A familiar cup, with{" "}
              <em className="font-serif font-normal text-[#a85c25]">
                a jaggery twist.
              </em>
            </h2>

            {/* Description */}

            <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-[#6f625b] sm:text-lg sm:leading-8">

              <p>
                Maa Vindhyavasini brings together the
                comfort of everyday chai and the
                distinctive sweetness of jaggery in
                convenient beverage premixes.
              </p>

              <p>
                From classic tea flavours to coffee and
                refreshing lemon blends, the range is
                designed for homes, offices, cafés and
                bulk beverage service.
              </p>

            </div>

            {/* =========================================
                FEATURES
                ========================================= */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {/* Feature 1 */}

              <div className="group flex gap-4 rounded-2xl border border-[#eadfd2] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(72,42,23,0.08)]">

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f6ead9] text-[#a85c25] transition-colors duration-300 group-hover:bg-[#a85c25] group-hover:text-white">
                  <Check size={19} />
                </span>

                <div>
                  <strong className="block text-sm font-bold text-[#3d1f14]">
                    Easy to prepare
                  </strong>

                  <small className="mt-1 block text-sm leading-5 text-[#766960]">
                    Quick premix format for everyday use.
                  </small>
                </div>

              </div>

              {/* Feature 2 */}

              <div className="group flex gap-4 rounded-2xl border border-[#eadfd2] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(72,42,23,0.08)]">

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f6ead9] text-[#a85c25] transition-colors duration-300 group-hover:bg-[#a85c25] group-hover:text-white">
                  <Heart size={19} />
                </span>

                <div>
                  <strong className="block text-sm font-bold text-[#3d1f14]">
                    Comforting taste
                  </strong>

                  <small className="mt-1 block text-sm leading-5 text-[#766960]">
                    Built around the familiar Indian chai
                    experience.
                  </small>
                </div>

              </div>

              {/* Feature 3 */}

              <div className="group flex gap-4 rounded-2xl border border-[#eadfd2] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(72,42,23,0.08)] sm:col-span-2">

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f6ead9] text-[#a85c25] transition-colors duration-300 group-hover:bg-[#a85c25] group-hover:text-white">
                  <CupSoda size={19} />
                </span>

                <div>
                  <strong className="block text-sm font-bold text-[#3d1f14]">
                    11 flavours
                  </strong>

                  <small className="mt-1 block text-sm leading-5 text-[#766960]">
                    A broad range for different taste
                    preferences.
                  </small>
                </div>

              </div>

            </div>

            {/* =========================================
                LEARN MORE
                ========================================= */}

            <a
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6f341f]"
            >
              Discover our story

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f6ead9] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#a85c25] group-hover:text-white">
                <ArrowRight size={15} />
              </span>
            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}