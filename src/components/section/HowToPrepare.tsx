"use client";

import {
  Check,
  CupSoda,
  Flame,
  GlassWater,
  type LucideIcon,
} from "lucide-react";

import { motion } from "motion/react";

const steps: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: GlassWater,
    title: "Start with milk",
    text: "Boil milk for your cup.",
  },
  {
    icon: CupSoda,
    title: "Add the premix",
    text: "Add the recommended premix amount to taste.",
  },
  {
    icon: Flame,
    title: "Boil for 2–3 minutes",
    text: "Let the flavours come together.",
  },
  {
    icon: Check,
    title: "Serve hot",
    text: "Strain if needed and enjoy your cup.",
  },
];

export default function HowToPrepare() {
  return (
    <section
      id="prepare"
      className="relative overflow-hidden bg-[#fffaf2] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DECORATION
          ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#d28a32]/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] bottom-[-120px] h-[350px] w-[350px] rounded-full bg-[#6f341f]/5 blur-3xl"
      />

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        {/* =========================================
            MAIN GRID
            ========================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* =========================================
              LEFT CONTENT
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Kicker */}

            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-[#a85c25] sm:text-sm">
              <span className="h-px w-8 bg-[#d28a32]" />
              HOW TO PREPARE
            </span>

            {/* Heading */}

            <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#3d1f14] sm:text-5xl lg:text-6xl">
              Your cup in{" "}
              <em className="font-serif font-normal text-[#a85c25]">
                four simple steps.
              </em>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-7 text-[#6f625b] sm:text-lg sm:leading-8">
              The supplied packaging recommends
              boiling the milk, adding the premix,
              boiling for around 2–3 minutes and then
              serving.
            </p>

            {/* =========================================
                SERVING TIP
                ========================================= */}

            <div className="mt-8 max-w-xl rounded-2xl border border-[#eadfd2] bg-[#f7eee3] p-5 sm:p-6">
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#a85c25] text-white">
                  <CupSoda size={19} />
                </div>

                <div>
                  <strong className="block text-sm font-bold text-[#3d1f14]">
                    Serving tip
                  </strong>

                  <span className="mt-1 block text-sm leading-6 text-[#766960]">
                    Adjust the premix amount according
                    to your preferred strength and
                    sweetness.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT — STEPS
              ========================================= */}

          <div className="relative">
            {/* Connecting line */}

            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-[#dfcdbb] sm:block"
            />

            <div className="space-y-4 sm:space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{
                      opacity: 0,
                      x: 30,
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
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="group relative flex items-center gap-4 rounded-2xl border border-[#eadfd2] bg-white p-4 shadow-[0_8px_25px_rgba(72,42,23,0.05)] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(72,42,23,0.09)] sm:gap-5 sm:p-5"
                  >
                    {/* Step number */}

                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#e5d3c1] bg-[#fffaf2] text-xs font-bold tracking-wider text-[#a85c25] transition-all duration-300 group-hover:border-[#a85c25] group-hover:bg-[#a85c25] group-hover:text-white">
                      0{index + 1}
                    </span>

                    {/* Icon */}

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f6ead9] text-[#a85c25] transition-all duration-300 group-hover:bg-[#6f341f] group-hover:text-white">
                      <Icon size={19} />
                    </div>

                    {/* Text */}

                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-[#3d1f14] sm:text-lg">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-[#766960]">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================
            SIMPLE RECIPE SUMMARY
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
          className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-[#e7d8c8] bg-[#3d1f14] sm:mt-16"
        >
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="px-6 py-5 text-center sm:py-6">
              <span className="block text-xs font-bold tracking-[0.18em] text-[#d9a55e]">
                STEP 01
              </span>

              <span className="mt-1 block text-sm font-semibold text-white">
                Boil milk
              </span>
            </div>

            <div className="px-6 py-5 text-center sm:py-6">
              <span className="block text-xs font-bold tracking-[0.18em] text-[#d9a55e]">
                STEP 02
              </span>

              <span className="mt-1 block text-sm font-semibold text-white">
                Add premix
              </span>
            </div>

            <div className="px-6 py-5 text-center sm:py-6">
              <span className="block text-xs font-bold tracking-[0.18em] text-[#d9a55e]">
                STEP 03–04
              </span>

              <span className="mt-1 block text-sm font-semibold text-white">
                Boil & serve
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}