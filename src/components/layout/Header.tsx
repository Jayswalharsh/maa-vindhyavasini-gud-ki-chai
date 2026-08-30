"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  {
    label: "Home",
    href: "/",
  },
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

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#6d321b] bg-[#431b0d] text-white">

      {/* ================= DESKTOP / MAIN HEADER ================= */}

      <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-6 lg:px-10 xl:px-14">

        {/* ================= BRAND ================= */}

        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Maa Vindhyavasini Gud Ki Chai Home"
          className="flex shrink-0 items-center gap-3"
        >
          {/* Brand Mark */}

          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d99a24] font-serif text-2xl font-bold text-[#f3b32c]">
            माँ
          </span>

          {/* Brand Text */}

          <span className="flex flex-col leading-none">
            <strong className="font-serif text-xl font-bold tracking-tight text-white lg:text-2xl">
              Maa Vindhyavasini
            </strong>

            <small className="mt-1 text-[9px] font-bold tracking-[0.28em] text-[#f3b32c]">
              GUD KI CHAI
            </small>
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-3 text-[15px] font-semibold transition-colors duration-200 ${
                  active
                    ? "text-[#f3b32c]"
                    : "text-white hover:text-[#f3b32c]"
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] rounded-full bg-[#f3b32c]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ================= DESKTOP ACTIONS ================= */}

        <div className="hidden items-center gap-3 lg:flex">

          {/* Call Me */}

          <a
            href="tel:+918409104406"
            aria-label="Call Maa Vindhyavasini"
            className="flex h-12 items-center gap-2 rounded-full border border-[#805037] px-5 text-sm font-semibold transition-all duration-200 hover:border-[#d99a24] hover:text-[#f3b32c]"
          >
            <Phone size={17} />

            <span>Call Me</span>
          </a>

          {/* WhatsApp */}

          <a
          href="https://wa.me/918409104406?text=Hello%20Maa%20Vindhyavasini%20Gud%20Ki%20Chai%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20jaggery-based%20tea%20and%20beverage%20products.%0A%0APlease%20share%20more%20details%20about%20your%20products%2C%20flavours%2C%20pack%20sizes%20and%20pricing.%0A%0AThank%20you!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp enquiry"
            className="flex h-12 items-center gap-2 rounded-full bg-[#efa51d] px-6 text-sm font-bold text-[#321207] transition-all duration-200 hover:bg-[#f7b52e] hover:shadow-lg"
          >
            <MessageCircle size={18} />

            <span>Enquire</span>
          </a>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#805037] text-white transition-colors hover:border-[#d99a24] hover:text-[#f3b32c] lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden border-t border-[#6d321b] bg-[#351308] lg:hidden"
          >
            <div className="mx-auto max-w-[1500px] px-6 py-5">

              {/* Mobile Links */}

              <nav
                aria-label="Mobile navigation"
                className="flex flex-col"
              >
                {links.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block border-b border-[#5d2918] py-4 text-base font-semibold transition-colors ${
                          active
                            ? "text-[#f3b32c]"
                            : "text-white hover:text-[#f3b32c]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile Call Me */}

              <a
                href="tel:+918409104406"
                onClick={closeMenu}
                aria-label="Call Maa Vindhyavasini"
                className="mt-5 flex items-center gap-3 rounded-xl border border-[#805037] px-4 py-3 font-semibold text-white transition-colors hover:border-[#d99a24] hover:text-[#f3b32c]"
              >
                <Phone size={18} />

                <span>Call Me</span>
              </a>

              {/* Mobile WhatsApp */}

              <motion.a
               href="https://wa.me/918409104406?text=Hello%20Maa%20Vindhyavasini%20Gud%20Ki%20Chai%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20jaggery-based%20tea%20and%20beverage%20products.%0A%0APlease%20share%20more%20details%20about%20your%20products%2C%20flavours%2C%20pack%20sizes%20and%20pricing.%0A%0AThank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: links.length * 0.05,
                }}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#efa51d] px-5 py-3 font-bold text-[#321207]"
              >
                <MessageCircle size={18} />

                <span>WhatsApp Enquiry</span>
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
