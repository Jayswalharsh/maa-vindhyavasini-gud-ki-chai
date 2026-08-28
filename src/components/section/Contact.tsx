"use client";

import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#3d1f14] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DECORATION
          ========================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#d28a32]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#a85c25]/15 blur-3xl"
      />

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        {/* =========================================
            CONTACT GRID
            ========================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =========================================
              LEFT CONTENT
              ========================================= */}

          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Kicker */}

            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-[#d9a55e] sm:text-sm">
              <span className="h-px w-8 bg-[#d9a55e]" />
              GET IN TOUCH
            </span>

            {/* Heading */}

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Bring Gud Ki Chai to your{" "}
              <em className="font-serif font-normal text-[#d9a55e]">
                home or business.
              </em>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              For product enquiries, bulk requirements
              and distribution conversations, contact the
              team directly.
            </p>

            {/* =========================================
                CONTACT INFORMATION
                ========================================= */}

            <div className="mt-8 max-w-xl space-y-3">
              {/* Phone */}

              <a
                href="tel:+918409104406"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9a55e]/15 text-[#d9a55e] transition-colors duration-300 group-hover:bg-[#d9a55e] group-hover:text-[#3d1f14]">
                  <Phone size={19} />
                </span>

                <div>
                  <small className="block text-xs font-medium tracking-wide text-white/45">
                    Call us
                  </small>

                  <strong className="mt-1 block text-sm font-semibold text-white sm:text-base">
                    84091 04406
                  </strong>
                </div>

                <ArrowRight
                  size={17}
                  className="ml-auto text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#d9a55e]"
                />
              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/918409104406"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9a55e]/15 text-[#d9a55e] transition-colors duration-300 group-hover:bg-[#d9a55e] group-hover:text-[#3d1f14]">
                  <MessageCircle size={19} />
                </span>

                <div>
                  <small className="block text-xs font-medium tracking-wide text-white/45">
                    WhatsApp
                  </small>

                  <strong className="mt-1 block text-sm font-semibold text-white sm:text-base">
                    Start an enquiry
                  </strong>
                </div>

                <ArrowRight
                  size={17}
                  className="ml-auto text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#d9a55e]"
                />
              </a>

              {/* Address */}

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9a55e]/15 text-[#d9a55e]">
                  <MapPin size={19} />
                </span>

                <div>
                  <small className="block text-xs font-medium tracking-wide text-white/45">
                    Address
                  </small>

                  <strong className="mt-1 block text-sm font-semibold leading-6 text-white sm:text-base">
                    31/D Rani Road Bhuda,
                    <br />
                    Dhanbad - 826001
                  </strong>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT CONTACT CARD
              ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
            }}
            className="relative"
          >
            {/* Card */}

            <div className="relative overflow-hidden rounded-[28px] border border-[#d9a55e]/25 bg-[#fffaf2] p-7 text-[#3d1f14] shadow-[0_25px_70px_rgba(0,0,0,0.2)] sm:p-9 lg:p-10">
              {/* Decorative circle */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d28a32]/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-16 h-44 w-44 rounded-full bg-[#6f341f]/5"
              />

              <div className="relative">
                {/* Card heading */}

                <span className="text-xs font-bold tracking-[0.2em] text-[#a85c25]">
                  READY FOR YOUR NEXT CUP?
                </span>

                <strong className="mt-3 block text-4xl font-bold tracking-[-0.03em] text-[#3d1f14] sm:text-5xl">
                  Let's talk.
                </strong>

                {/* Description */}

                <p className="mt-5 max-w-md text-base leading-7 text-[#766960]">
                  Ask about flavours, pack sizes,
                  availability or bulk orders.
                </p>

                {/* WhatsApp Button */}

                <a
                  href="https://wa.me/918409104406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#a85c25] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(168,92,37,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6f341f] hover:shadow-[0_15px_30px_rgba(168,92,37,0.28)]"
                >
                  <MessageCircle size={18} />

                  WhatsApp Enquiry

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* =========================================
                    BUSINESS INFORMATION
                    ========================================= */}

                <div className="mt-7 border-t border-[#eadfd2] pt-5">
                  <div className="flex flex-col gap-3 text-xs text-[#766960] sm:flex-row sm:items-center sm:justify-between">
                    <span>
                      FSSAI:{" "}
                      <strong className="text-[#3d1f14]">
                        11522997000471
                      </strong>
                    </span>

                    <span>
                      Pack formats:{" "}
                      <strong className="text-[#3d1f14]">
                        200GM & 500GM
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}