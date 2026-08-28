"use client";

import {
  ArrowRight,
  Building2,
  MessageCircle,
  PackageCheck,
  Store,
  Users,
} from "lucide-react";

import { motion } from "motion/react";

const enquiryTypes = [
  {
    icon: Store,
    title: "Retailers & Shops",
    text: "Looking to stock Gud Ki Chai for your customers?",
  },
  {
    icon: Building2,
    title: "Offices & Businesses",
    text: "Need convenient beverage options for your workplace?",
  },
  {
    icon: Users,
    title: "Cafés & Events",
    text: "Planning regular service, gatherings or special events?",
  },
  {
    icon: PackageCheck,
    title: "Bulk Requirements",
    text: "Need multiple packs or want to discuss larger quantities?",
  },
];

export default function BulkEnquiry() {
  const whatsappMessage = encodeURIComponent(
    "Hello Maa Vindhyavasini, I am interested in a bulk enquiry. Please share details about products, pack sizes, pricing and availability."
  );

  return (
    <section
      id="bulk-enquiry"
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
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#6f341f]/5 blur-3xl"
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
            duration: 0.65,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-[#a85c25] sm:text-sm">
            <span className="h-px w-8 bg-[#d28a32]" />
            BULK ENQUIRY
            <span className="h-px w-8 bg-[#d28a32]" />
          </span>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#3d1f14] sm:text-5xl lg:text-6xl">
            Looking for Gud Ki Chai{" "}
            <em className="font-serif font-normal text-[#a85c25]">
              in larger quantities?
            </em>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6f625b] sm:text-lg sm:leading-8">
            Whether you are a retailer, office, café,
            event organiser or business, talk to us about
            your beverage requirements.
          </p>
        </motion.div>

        {/* =========================================
            ENQUIRY TYPES
            ========================================= */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {enquiryTypes.map((item, index) => {
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
                  y: -5,
                }}
                className="group rounded-2xl border border-[#eadfd2] bg-white p-6 shadow-[0_8px_25px_rgba(72,42,23,0.04)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(72,42,23,0.09)]"
              >
                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6ead9] text-[#a85c25] transition-all duration-300 group-hover:bg-[#a85c25] group-hover:text-white">
                  <Icon size={21} />
                </div>

                {/* Title */}

                <h3 className="mt-5 text-lg font-bold text-[#3d1f14]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-2 text-sm leading-6 text-[#766960]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================
            MAIN ENQUIRY CARD
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            delay: 0.15,
          }}
          className="relative mt-10 overflow-hidden rounded-[28px] bg-[#3d1f14] p-7 text-white shadow-[0_20px_60px_rgba(61,31,20,0.18)] sm:p-9 lg:p-12"
        >
          {/* Decorative circles */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#d28a32]/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#a85c25]/10"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}

            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d9a55e]/15 text-[#d9a55e]">
                  <MessageCircle size={20} />
                </span>

                <span className="text-xs font-bold tracking-[0.18em] text-[#d9a55e]">
                  LET'S DISCUSS YOUR REQUIREMENT
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
                Tell us what you need.
              </h3>

              <p className="mt-4 text-base leading-7 text-white/65">
                Send us a WhatsApp enquiry with your
                requirement. We can discuss flavours, pack
                sizes, quantities, pricing and availability.
              </p>
            </div>

            {/* Right */}

            <div className="shrink-0">
              <a
                href={`https://wa.me/918409104406?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#d9a55e] px-6 py-4 text-sm font-bold text-[#3d1f14] shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e5b875] sm:w-auto sm:min-w-[230px]"
              >
                <MessageCircle size={19} />

                WhatsApp for Bulk Enquiry

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <p className="mt-3 text-center text-xs text-white/40">
                84091 04406
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            SMALL INFORMATION
            ========================================= */}

        <div className="mt-6 text-center">
          <p className="text-xs leading-5 text-[#8a7c73]">
            Pack formats currently shown on the website:
            <strong className="ml-1 text-[#6f625b]">
              200GM & 500GM
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}