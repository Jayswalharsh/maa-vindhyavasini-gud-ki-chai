import Link from "next/link";

import {
  ArrowRight,
  Check,
  Coffee,
  Heart,
  Leaf,
  MessageCircle,
  Package,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Leaf,
    title: "Traditional Taste",
    text: "A familiar chai experience with the traditional sweetness of jaggery.",
  },
  {
    number: "02",
    icon: Coffee,
    title: "Easy to Prepare",
    text: "Simple preparation made for everyday use at home, work or anywhere you enjoy chai.",
  },
  {
    number: "03",
    icon: Users,
    title: "Made for Everyone",
    text: "Whether you enjoy chai every day or occasionally, it fits naturally into your routine.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Made with Care",
    text: "We keep the product experience clear so you know what you are buying and how to enjoy it.",
  },
];

const moments = [
  {
    icon: Coffee,
    title: "Morning Chai",
    text: "Start your day with a warm and familiar cup.",
  },
  {
    icon: Users,
    title: "Family Time",
    text: "Share chai during conversations and everyday moments.",
  },
  {
    icon: Package,
    title: "Work Break",
    text: "A convenient option for your tea break at work.",
  },
];

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Choose",
    text: "Pick the chai or beverage premix you like.",
  },
  {
    number: "02",
    icon: Coffee,
    title: "Prepare",
    text: "Follow the simple preparation instructions on the product.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Enjoy",
    text: "Make your cup, sit back and enjoy your everyday chai moment.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--white)] text-[var(--ink)]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[url('/images/hero-bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,11,6,.96)_0%,rgba(36,16,8,.82)_48%,rgba(36,16,8,.52)_100%)]" />

        <div className="absolute -right-40 -bottom-64 h-[520px] w-[520px] rounded-full border border-[rgba(243,193,95,.2)]" />

        <div className="container relative z-10 py-32">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] text-[var(--gold-light)]">
              <Sparkles size={16} />
              <span>ABOUT MAA VINDHYAVASINI</span>
            </div>

            <h1 className="font-serif text-[clamp(48px,7vw,88px)] font-semibold leading-[.98] tracking-[-2px] text-white">
              A familiar taste.
              <br />
              <span className="text-[var(--gold-light)]">
                A simpler way to enjoy chai.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              We bring together the comforting taste of chai and the
              traditional sweetness of jaggery in a convenient format made for
              everyday moments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--gold)] px-6 font-bold text-[var(--brown-950)] transition hover:-translate-y-1 hover:bg-[var(--gold-light)]"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/918409104406"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 bg-black/20 px-6 font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-black/35"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/65">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[var(--gold-light)]" />
                Traditional sweetness
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[var(--gold-light)]" />
                Easy preparation
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[var(--gold-light)]" />
                Everyday chai
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center text-[10px] tracking-[2px] text-white/60 md:flex">
          <span>SCROLL TO EXPLORE</span>
          <span className="mt-1 text-[var(--gold-light)]">↓</span>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}

      <section className="bg-[var(--cream)] py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-20">
            <div className="flex gap-4 lg:block">
              <span className="text-sm font-medium">01</span>

              <div className="mt-1 hidden h-px w-10 bg-[var(--gold)] lg:block" />

              <p className="text-xs font-extrabold tracking-[2.5px] text-[var(--gold)] lg:mt-5">
                WHO WE ARE
              </p>
            </div>

            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] text-[var(--gold)]">
                <Leaf size={16} />
                A SIMPLE IDEA
              </div>

              <h2 className="mt-5 font-serif text-[clamp(40px,5.5vw,70px)] font-semibold leading-[1.02] tracking-[-1.5px]">
                Chai is not just a drink.
                <br />
                <span className="text-[var(--gold)]">
                  It is part of everyday life.
                </span>
              </h2>

              <div className="mt-7 max-w-3xl space-y-4 text-base leading-8 text-[var(--muted)] md:text-lg">
                <p>
                  For many of us, chai is part of the day. It can be the first
                  cup in the morning, a short break at work, or a cup shared
                  with family.
                </p>

                <p>
                  Maa Vindhyavasini Gud Ki Chai was created around this simple
                  idea — make the familiar chai experience easy to enjoy with
                  the traditional sweetness of jaggery.
                </p>

                <p>
                  Our focus is simple. We want people to understand what they
                  are buying, know how to prepare it and enjoy the cup without
                  confusion.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "Simple product",
                  "Clear information",
                  "Everyday experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-bold"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--cream-2)] text-[var(--brown-800)]">
                      <Check size={15} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT IS GUD KI CHAI
      ========================================================= */}

      <section className="bg-[var(--white)] py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] text-[var(--gold)]">
              <Coffee size={16} />
              IN SIMPLE WORDS
            </div>

            <h2 className="mt-5 font-serif text-[clamp(40px,5.5vw,68px)] font-semibold leading-[1.03] tracking-[-1.5px]">
              What is{" "}
              <span className="text-[var(--gold)]">Gud Ki Chai?</span>
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              It is a chai experience where jaggery is used as the sweetening
              element instead of making the cup with ordinary refined sugar.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-7">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--cream-2)] text-[var(--brown-800)]">
                <Coffee size={22} />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-semibold">
                Familiar Chai
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                The idea starts with the chai people already know and enjoy.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-7">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--cream-2)] text-[var(--brown-800)]">
                <Leaf size={22} />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-semibold">
                Jaggery Sweetness
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Jaggery gives the cup its traditional sweet character.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-7">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--cream-2)] text-[var(--brown-800)]">
                <Heart size={22} />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-semibold">
                Everyday Comfort
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                A simple option for the chai moments that happen every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SIMPLE EXPERIENCE
      ========================================================= */}

      <section className="bg-[var(--cream)] py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] text-[var(--gold)]">
                <Coffee size={16} />
                OUR APPROACH
              </div>

              <h2 className="mt-5 font-serif text-[clamp(40px,5vw,66px)] font-semibold leading-[1.03] tracking-[-1.5px]">
                From an everyday cup
                <br />
                <span className="text-[var(--gold)]">
                  to a better chai experience.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
                We believe good products should not be difficult to understand.
                That is why we focus on simple information, straightforward
                preparation and an experience that feels familiar.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Easy-to-understand product information",
                "Simple preparation instructions",
                "Made for everyday chai moments",
                "A familiar taste with jaggery",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 shadow-[var(--shadow-small)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--cream-2)] text-sm font-bold text-[var(--brown-800)]">
                      0{index + 1}
                    </span>

                    <p className="pt-1 text-sm font-semibold leading-6">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="bg-[var(--white)] py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] text-[var(--gold)]">
              <Sparkles size={16} />
              EASY TO ENJOY
            </div>

            <h2 className="mt-5 font-serif text-[clamp(40px,5vw,66px)] font-semibold leading-[1.03] tracking-[-1.5px]">
              Three simple steps.
              <br />
              <span className="text-[var(--gold)]">That is it.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              No complicated process. Choose your product, prepare it according
              to the instructions and enjoy your cup.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-small)]"
                >
                  <span className="text-sm font-medium">{step.number}</span>

                  <div className="mt-5 grid h-14 w-14 place-items-center rounded-full bg-[var(--cream-2)] text-[var(--brown-800)]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}

      <section className="bg-[var(--cream)] py-20 md:py-28">
        <div className="container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] text-[var(--gold)]">
                <Heart size={16} />
                WHY CHOOSE US
              </div>

              <h2 className="mt-5 font-serif text-[clamp(40px,5vw,66px)] font-semibold leading-[1.03] tracking-[-1.5px]">
                Why choose <span className="text-[var(--gold)]">us?</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[var(--muted)] md:text-base">
              We keep things clear and practical so choosing and preparing your
              chai feels easy.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="group min-h-[280px] rounded-2xl border border-[var(--line)] bg-[var(--white)] p-7 shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-2 hover:border-[rgba(217,149,43,.35)] hover:shadow-[var(--shadow)]"
                >
                  <span className="text-sm font-medium text-[var(--muted)]">
                    {value.number}
                  </span>

                  <div className="mt-5 grid h-14 w-14 place-items-center rounded-full bg-[var(--cream-2)] text-[var(--brown-800)] transition group-hover:bg-[var(--gold)]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 font-serif text-2xl font-semibold leading-tight">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          EVERYDAY MOMENTS
      ========================================================= */}

      <section className="bg-[var(--white)] py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-extrabold tracking-[2.5px] text-[var(--gold)]">
              <Users size={16} />
              MADE FOR EVERYDAY LIFE
            </div>

            <h2 className="mt-5 font-serif text-[clamp(40px,5vw,66px)] font-semibold leading-[1.03] tracking-[-1.5px]">
              A cup for{" "}
              <span className="text-[var(--gold)]">every chai moment.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              Keep it at home, at work or wherever your chai break happens.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {moments.map((moment) => {
              const Icon = moment.icon;

              return (
                <div
                  key={moment.title}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-small)]"
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--cream-2)] text-[var(--brown-800)]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-semibold">
                    {moment.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {moment.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROMISE
      ========================================================= */}

      <section className="bg-[var(--brown-950)] py-20 text-white md:py-24">
        <div className="container">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] text-[var(--gold-light)]">
                <Heart size={17} />
                OUR PROMISE
              </div>

              <h2 className="mt-6 font-serif text-[clamp(40px,5vw,68px)] font-semibold leading-[1.02] tracking-[-1.5px]">
                Keep chai simple.
                <br />
                Keep the experience familiar.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                We want every customer to feel confident about what they are
                buying, how to prepare it and how to enjoy it.
              </p>
            </div>

            <div className="shrink-0 rounded-2xl border border-[rgba(243,193,95,.2)] bg-white/[.03] px-10 py-8 text-center">
              <span className="block text-xs font-bold tracking-[3px] text-[var(--gold-light)]">
                GUD KI
              </span>

              <strong className="mt-1 block font-serif text-4xl">
                CHAI
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="bg-[var(--cream)] py-20 md:py-28">
        <div className="container">
          <div className="overflow-hidden rounded-3xl bg-[var(--brown-900)] p-8 text-white md:p-12 lg:p-16">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] text-[var(--gold-light)]">
                  <Coffee size={16} />
                  READY FOR A CUP?
                </div>

                <h2 className="mt-5 font-serif text-[clamp(40px,5vw,66px)] font-semibold leading-[1.03]">
                  Discover your{" "}
                  <span className="text-[var(--gold-light)]">
                    Gud Ki Chai.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
                  Explore our products and find the chai or beverage premix
                  that suits your everyday moments.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--gold)] px-6 font-bold text-[var(--brown-950)] transition hover:-translate-y-1 hover:bg-[var(--gold-light)]"
                  >
                    Explore Products
                    <ArrowRight size={18} />
                  </Link>

                  <a
                    href="https://wa.me/918409104406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-6 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 pt-7 lg:min-w-[230px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <span className="text-xs font-extrabold tracking-[2px] text-[var(--gold-light)]">
                  HAVE A QUESTION?
                </span>

                <a
                  href="tel:+918409104406"
                  className="mt-4 flex items-center gap-2 text-lg font-bold"
                >
                  <Phone size={19} />
                  84091 04406
                </a>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  We are happy to help you understand our products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}