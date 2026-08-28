"use client";

import {
  Leaf,
  Clock3,
  HeartHandshake,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";

import { motion } from "motion/react";

const items: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: Leaf,
    title: "Jaggery-based range",
    text: "A distinctive alternative to conventional sweetened beverage premixes.",
  },
  {
    icon: Clock3,
    title: "Quick preparation",
    text: "A convenient premix format made for busy mornings and easy serving.",
  },
  {
    icon: HeartHandshake,
    title: "Made for sharing",
    text: "A broad flavour range for homes, offices, cafés and gatherings.",
  },
  {
    icon: PackageCheck,
    title: "Multiple pack options",
    text: "Packaging shown in the supplied 200GM and 500GM formats.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#f7eee3] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DECORATION
          ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#d28a32]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#6f341f]/5 blur-3xl"
      />

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        {/* =========================================
            HEADING
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
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          <span className="mb-4 inline-flex items-center justify-center gap-2 text-xs font-bold tracking-[0.22em] text-[#a85c25] sm:text-sm">
            <span className="h-px w-8 bg-[#d28a32]" />
            WHY CHOOSE US
            <span className="h-px w-8 bg-[#d28a32]" />
          </span>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#3d1f14] sm:text-5xl lg:text-6xl">
            Simple idea.{" "}
            <em className="font-serif font-normal text-[#a85c25]">
              Memorable cup.
            </em>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6f625b] sm:text-lg">
            Everything about the range is designed around
            convenience, variety and the familiar comfort
            of chai.
          </p>
        </motion.div>

        {/* =========================================
            WHY CHOOSE US CARDS
            ========================================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
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
                  y: -7,
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#e7d8c8] bg-white p-6 shadow-[0_8px_30px_rgba(72,42,23,0.05)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(72,42,23,0.10)] sm:p-7"
              >
                {/* Top accent */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-[#a85c25] transition-all duration-300 group-hover:w-full" />

                {/* Number */}

                <span className="absolute right-5 top-5 text-xs font-bold tracking-widest text-[#b99b80]/60">
                  0{index + 1}
                </span>

                {/* Icon */}

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6ead9] text-[#a85c25] transition-all duration-300 group-hover:bg-[#a85c25] group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* Content */}

                <h3 className="text-xl font-bold leading-tight text-[#3d1f14]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#766960]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
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
            duration: 0.6,
            delay: 0.25,
          }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#e7d8c8] bg-white/70 px-6 py-5 text-center backdrop-blur-sm sm:px-8"
        >
          <p className="text-sm leading-6 text-[#6f625b] sm:text-base">
            From a quick cup before work to tea shared
            with family and friends, our range is made
            to fit naturally into everyday moments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}