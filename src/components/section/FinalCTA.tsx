"use client";

import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import { motion } from "motion/react";

export default function FinalCTA() {
  const whatsappMessage = encodeURIComponent(
    "Hello Maa Vindhyavasini, I would like to know more about your Gud Ki Chai products."
  );

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#3d1f14] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DECORATION
          ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#d9a55e]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#a85c25]/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
      />

      {/* =========================================
          CONTENT
          ========================================= */}

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-5xl text-center sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        {/* Eyebrow */}

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
          }}
          className="flex items-center justify-center gap-3"
        >
          <Sparkles
            size={16}
            className="text-[#d9a55e]"
          />

          <span className="text-xs font-bold tracking-[0.22em] text-[#d9a55e] sm:text-sm">
            YOUR NEXT CUP STARTS HERE
          </span>

          <Sparkles
            size={16}
            className="text-[#d9a55e]"
          />
        </motion.div>

        {/* Heading */}

        <motion.h2
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
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-7xl"
        >
          Bring the warmth of{" "}
          <em className="font-serif font-normal text-[#d9a55e]">
            Gud Ki Chai
          </em>{" "}
          to your everyday cup.
        </motion.h2>

        {/* Description */}

        <motion.p
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
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
        >
          Explore our range of jaggery-based tea, coffee
          and beverage premixes. For product questions,
          bulk requirements or availability, we are just
          a message away.
        </motion.p>

        {/* =========================================
            ACTIONS
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
            delay: 0.3,
          }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {/* WhatsApp */}

          <a
            href={`https://wa.me/918409104406?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#d9a55e] px-6 py-4 text-sm font-bold text-[#3d1f14] shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e5b875] sm:w-auto"
          >
            <MessageCircle size={19} />

            WhatsApp Us

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          {/* Phone */}

          <a
            href="tel:+918409104406"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
          >
            <Phone size={18} />

            Call 84091 04406
          </a>
        </motion.div>

        {/* =========================================
            TRUST / QUICK INFO
            ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.45,
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/45 sm:text-sm"
        >
          <span>11+ Flavours</span>

          <span
            aria-hidden="true"
            className="hidden h-1 w-1 rounded-full bg-white/25 sm:block"
          />

          <span>200GM & 500GM Packs</span>

          <span
            aria-hidden="true"
            className="hidden h-1 w-1 rounded-full bg-white/25 sm:block"
          />

          <span>Easy-to-Prepare Premixes</span>
        </motion.div>
      </div>
    </section>
  );
}