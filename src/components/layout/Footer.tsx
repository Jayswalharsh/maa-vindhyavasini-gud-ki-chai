import Link from "next/link";
import {
  Phone,
  MessageCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const footerLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Why Us",
    href: "/why-us",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const productLinks = [
  {
    label: "Tea Range",
    href: "/products",
  },
  {
    label: "Coffee",
    href: "/products",
  },
  {
    label: "Lemon & Green Tea",
    href: "/products",
  },
  {
    label: "Masala & Ginger",
    href: "/products",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#241008] text-white">

      {/* =====================================================
          MAIN FOOTER
          ===================================================== */}

      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-10 lg:px-12 lg:py-20">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr] lg:gap-10">

          {/* =================================================
              BRAND
              ================================================= */}

          <div className="max-w-md">

            <Link
              href="/"
              aria-label="Maa Vindhyavasini Gud Ki Chai Home"
              className="group inline-flex items-center gap-3"
            >

              {/* Brand Mark */}

              <span
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d9952b]
                  text-[24px]
                  font-semibold
                  text-[#f3c15f]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                माँ
              </span>

              {/* Brand Text */}

              <span className="flex flex-col leading-none">

                <strong
                  className="
                    font-serif
                    text-[20px]
                    font-bold
                    tracking-[-0.02em]
                    text-white
                    sm:text-[22px]
                  "
                >
                  Maa Vindhyavasini
                </strong>

                <small
                  className="
                    mt-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#f3b94f]
                  "
                >
                  GUD KI CHAI
                </small>

              </span>
            </Link>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-sm
                text-[15px]
                leading-7
                text-white/65
              "
            >
              Jaggery-based tea, coffee and beverage
              premixes for a warm, familiar cup.
            </p>

            {/* Social / Contact Buttons */}

            <div className="mt-7 flex items-center gap-3">

              {/* WhatsApp */}

              <a
                href="https://wa.me/918409104406"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-white/75
                  transition-all
                  duration-200
                  hover:border-[#d9952b]
                  hover:bg-[#d9952b]
                  hover:text-[#241008]
                "
              >
                <MessageCircle size={17} />
              </a>

              {/* Phone */}

              <a
                href="tel:+918409104406"
                aria-label="Phone"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-white/75
                  transition-all
                  duration-200
                  hover:border-[#d9952b]
                  hover:bg-[#d9952b]
                  hover:text-[#241008]
                "
              >
                <Phone size={17} />
              </a>

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-[11px]
                  font-bold
                  tracking-wide
                  text-white/75
                  transition-all
                  duration-200
                  hover:border-[#d9952b]
                  hover:bg-[#d9952b]
                  hover:text-[#241008]
                "
              >
                <FaInstagram size={20} className="text-white" />
              </a>

              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-[11px]
                  font-bold
                  tracking-wide
                  text-white/75
                  transition-all
                  duration-200
                  hover:border-[#d9952b]
                  hover:bg-[#d9952b]
                  hover:text-[#241008]
                "
              >
                <FaFacebookF size={20} className="text-white" />
              </a>

            </div>
          </div>

          {/* =================================================
              EXPLORE
              ================================================= */}

          <div>

            <h4
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#f3b94f]
              "
            >
              Explore
            </h4>

            <nav className="mt-6 flex flex-col gap-4">

              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    w-fit
                    text-[15px]
                    text-white/65
                    transition-colors
                    duration-200
                    hover:text-[#f3b94f]
                  "
                >
                  {link.label}
                </Link>
              ))}

            </nav>

          </div>

          {/* =================================================
              PRODUCTS
              ================================================= */}

          <div>

            <h4
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#f3b94f]
              "
            >
              Products
            </h4>

            <nav className="mt-6 flex flex-col gap-4">

              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    w-fit
                    text-[15px]
                    text-white/65
                    transition-colors
                    duration-200
                    hover:text-[#f3b94f]
                  "
                >
                  {link.label}
                </Link>
              ))}

            </nav>

          </div>

          {/* =================================================
              CONTACT
              ================================================= */}

          <div>

            <h4
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#f3b94f]
              "
            >
              Contact
            </h4>

            <div className="mt-6 flex flex-col gap-4">

              {/* Phone */}

              <a
                href="tel:+918409104406"
                className="
                  w-fit
                  text-[15px]
                  font-semibold
                  text-white/80
                  transition-colors
                  duration-200
                  hover:text-[#f3b94f]
                "
              >
                84091 04406
              </a>

              {/* Address */}

              <p className="text-[15px] leading-6 text-white/60">
                31/D Rani Road Bhuda
                <br />
                Dhanbad - 826001
              </p>

            </div>

            {/* WhatsApp CTA */}

            <a
              href="https://wa.me/918409104406"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#d9952b]
                px-5
                py-3
                text-sm
                font-bold
                text-[#241008]
                transition-all
                duration-200
                hover:bg-[#f3b94f]
                hover:shadow-lg
                hover:shadow-[#d9952b]/20
              "
            >
              <MessageCircle size={17} />

              <span>WhatsApp Us</span>
            </a>

          </div>

        </div>
      </div>

      {/* =====================================================
          FOOTER BOTTOM
          ===================================================== */}

      <div className="border-t border-white/10">

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1400px]
            flex-col
            gap-3
            px-6
            py-6
            text-xs
            text-white/45
            sm:flex-row
            sm:items-center
            sm:justify-between
            md:px-10
            lg:px-12
          "
        >

          <span>
            © 2026 Maa Vindhyavasini.
            All rights reserved.
          </span>

          <span className="font-semibold tracking-[0.2em] text-[#d9952b]/70">
            GUD KI CHAI
          </span>

        </div>

      </div>

    </footer>
  );
}
