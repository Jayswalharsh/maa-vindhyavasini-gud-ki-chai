"use client";

import {
  CheckCircle2,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  CupSoda,
  type LucideIcon,
} from "lucide-react";

import { motion } from "motion/react";

type QualityPoint = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const qualityPoints: QualityPoint[] = [
  {
    icon: Leaf,
    title: "Jaggery-based range",
    text: "Our beverage range is built around jaggery as a distinctive sweetening choice.",
  },
  {
    icon: CupSoda,
    title: "Made for everyday cups",
    text: "The premix format is designed to make preparing a familiar beverage simple and convenient.",
  },
  {
    icon: Sparkles,
    title: "11 flavour choices",
    text: "From classic chai to lemon, ginger, masala, green tea and coffee, there is variety for different preferences.",
  },
  {
    icon: PackageCheck,
    title: "Practical pack options",
    text: "The range currently shown includes convenient 200GM and 500GM pack formats.",
  },
];

export default function Quality() {
  return (
    <section
      id="quality"
      className="relative overflow-hidden bg-[#fffaf2] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DECORATION
          ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#d28a32]/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#6f341f]/5 blur-3xl"
      />

      {/* =========================================
          MAIN CONTAINER
          ========================================= */}

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        {/* =========================================
            HEADER
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

            OUR APPROACH

            <span className="h-px w-8 bg-[#d28a32]" />
          </span>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#3d1f14] sm:text-5xl lg:text-6xl">
            Quality that keeps the{" "}
            <em className="font-serif font-normal text-[#a85c25]">
              cup simple.
            </em>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6f625b] sm:text-lg sm:leading-8">
            We focus on a convenient premix format, a
            distinctive jaggery-based range and flavours
            that fit naturally into everyday tea and
            beverage moments.
          </p>
        </motion.div>

        {/* =========================================
            QUALITY CONTENT
            ========================================= */}

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          {/* =========================================
              LEFT TRUST CARD
              ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
            }}
            className="relative overflow-hidden rounded-[28px] bg-[#3d1f14] p-7 text-white sm:p-9 lg:p-10"
          >
            {/* Decorative circle */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/5"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#d9a55e]/5"
            />

            <div className="relative">
              {/* Icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d9a55e]/15 text-[#d9a55e]">
                <ShieldCheck size={26} />
              </div>

              <span className="mt-7 block text-xs font-bold tracking-[0.18em] text-[#d9a55e]">
                PRODUCT INFORMATION
              </span>

              <h3 className="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
                Know what is in the range.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                We believe customers should be able to
                understand the range easily — from flavours
                and preparation to pack formats and
                enquiries.
              </p>

              {/* Information list */}

              <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#d9a55e]"
                  />

                  <div>
                    <strong className="block text-sm font-bold">
                      11 flavours
                    </strong>

                    <span className="mt-1 block text-xs leading-5 text-white/45">
                      Tea, coffee and refreshing beverage
                      options.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#d9a55e]"
                  />

                  <div>
                    <strong className="block text-sm font-bold">
                      200GM & 500GM
                    </strong>

                    <span className="mt-1 block text-xs leading-5 text-white/45">
                      Pack formats currently shown on the
                      website.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#d9a55e]"
                  />

                  <div>
                    <strong className="block text-sm font-bold">
                      FSSAI: 11522997000471
                    </strong>

                    <span className="mt-1 block text-xs leading-5 text-white/45">
                      Registration number provided for the
                      brand information.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT QUALITY POINTS
              ========================================= */}

          <div className="grid gap-4 sm:grid-cols-2">
            {qualityPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group rounded-[22px] border border-[#eadfd2] bg-white p-6 shadow-[0_8px_25px_rgba(72,42,23,0.04)] transition-all duration-300 hover:border-[#d9b98e] hover:shadow-[0_15px_35px_rgba(72,42,23,0.08)] sm:p-7"
                >
                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6ead9] text-[#a85c25] transition-all duration-300 group-hover:bg-[#a85c25] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  {/* Number */}

                  <span className="mt-5 block text-[10px] font-bold tracking-[0.18em] text-[#b9a99b]">
                    0{index + 1}
                  </span>

                  {/* Title */}

                  <h3 className="mt-2 text-lg font-bold text-[#3d1f14]">
                    {item.title}
                  </h3>

                  {/* Text */}

                  <p className="mt-2 text-sm leading-6 text-[#766960]">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =========================================
            BOTTOM MESSAGE
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
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#eadfd2] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <h3 className="text-base font-bold text-[#3d1f14]">
              Want to know more about a product?
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#766960]">
              Ask us about flavours, pack sizes,
              availability or bulk requirements.
            </p>
          </div>

          <a
            href="https://wa.me/918409104406?text=Hello%20Maa%20Vindhyavasini%2C%20I%20want%20to%20know%20more%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#a85c25] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6f341f]"
          >
            Ask on WhatsApp

            <ArrowRightIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================
   SMALL ARROW ICON
   ========================================= */

function ArrowRightIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}