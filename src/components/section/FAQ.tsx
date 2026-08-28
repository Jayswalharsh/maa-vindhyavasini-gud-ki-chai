"use client";

import { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What is Gud Ki Chai?",
    answer:
      "Gud Ki Chai is a beverage premix made with jaggery as the sweetening ingredient. Maa Vindhyavasini offers a variety of tea, coffee and refreshing beverage premixes.",
  },
  {
    question: "How many flavours are available?",
    answer:
      "The current range includes 11 flavours, including Jaggery Basundi, Cardamom Tea, Kadak Tea, Lemon Tea, Hot Coffee, Mast Jaggery Tea, Masala Tea, Ginger Tea, Black Tea, Green Lemon Tea and Lemongrass Tea.",
  },
  {
    question: "What pack sizes are available?",
    answer:
      "The website currently shows 200GM and 500GM pack formats. For availability and larger requirements, please contact us directly.",
  },
  {
    question: "How do I prepare the tea?",
    answer:
      "Start by boiling milk, add the recommended amount of premix, boil for around 2–3 minutes and then serve hot. You can adjust the premix amount according to your preferred strength and sweetness.",
  },
  {
    question: "Can I order in bulk?",
    answer:
      "Yes. Bulk enquiries are welcome for retailers, shops, offices, cafés, events and other business requirements. Contact us on WhatsApp to discuss quantities, flavours, pack sizes, pricing and availability.",
  },
  {
    question: "Is it suitable for offices and businesses?",
    answer:
      "The convenient premix format is designed for easy preparation and can be considered for offices, cafés, gatherings, events and other beverage-serving requirements.",
  },
  {
    question: "How can I enquire about a product?",
    answer:
      "You can contact Maa Vindhyavasini directly by phone or WhatsApp. Tell us the flavour, pack size or quantity you are interested in, and the team can help with your enquiry.",
  },
  {
    question: "Where is Maa Vindhyavasini located?",
    answer:
      "Maa Vindhyavasini is located at 31/D Rani Road Bhuda, Dhanbad - 826001.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
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

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-5xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
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
            FREQUENTLY ASKED QUESTIONS
            <span className="h-px w-8 bg-[#d28a32]" />
          </span>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#3d1f14] sm:text-5xl lg:text-6xl">
            Got questions?
            <br />
            <em className="font-serif font-normal text-[#a85c25]">
              We have answers.
            </em>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6f625b] sm:text-lg sm:leading-8">
            Find simple answers about our flavours,
            preparation, pack sizes and bulk enquiries.
          </p>
        </motion.div>

        {/* =========================================
            FAQ LIST
            ========================================= */}

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.04, 0.3),
                }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#d9b98e] bg-[#fffaf2] shadow-[0_10px_30px_rgba(72,42,23,0.06)]"
                    : "border-[#eadfd2] bg-white hover:border-[#d9c4ad]"
                }`}
              >
                {/* Question */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                >
                  {/* Number */}

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#a85c25] text-white"
                        : "bg-[#f6ead9] text-[#a85c25]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}

                  <span className="flex-1 text-sm font-bold leading-6 text-[#3d1f14] sm:text-base">
                    {faq.question}
                  </span>

                  {/* Arrow */}

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#3d1f14] text-white"
                        : "bg-[#f6ead9] text-[#a85c25]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {/* Answer */}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                    >
                      <div className="border-t border-[#eadfd2] px-5 pb-6 pt-4 pl-[68px] sm:px-6 sm:pl-[78px]">
                        <p className="max-w-3xl text-sm leading-6 text-[#766960] sm:text-base sm:leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================
            STILL HAVE QUESTIONS
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
          }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#f7eee3] p-6 text-center sm:flex-row sm:text-left sm:p-7"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#a85c25] shadow-sm">
              <HelpCircle size={21} />
            </span>

            <div>
              <h3 className="text-base font-bold text-[#3d1f14]">
                Still have a question?
              </h3>

              <p className="mt-1 text-sm text-[#766960]">
                Talk to us directly on WhatsApp.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/918409104406?text=Hello%20Maa%20Vindhyavasini%2C%20I%20have%20a%20question%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#a85c25] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6f341f] sm:w-auto"
          >
            <MessageCircle size={17} />
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}