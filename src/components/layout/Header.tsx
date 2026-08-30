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

const whatsappMessage =
  "Hello Maa Vindhyavasini Gud Ki Chai 👋\n\n" +
  "I am interested in your jaggery-based tea and beverage products.\n\n" +
  "Please share more details about your products, flavours, pack sizes and pricing.\n\n" +
  "Thank you";

const whatsappUrl = `https://wa.me/918409104406?text=${encodeURIComponent(
  whatsappMessage
)}`;

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
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-[#6d321b]
        bg-[#431b0d]
        text-white
        shadow-[0_4px_20px_rgba(50,18,7,0.12)]
      "
    >
      {/* =========================================================
          MAIN HEADER
          ========================================================= */}

      <div
        className="
          mx-auto
          flex
          h-[82px]
          max-w-[1500px]
          items-center
          justify-between
          px-5
          sm:px-6
          lg:px-10
          xl:px-14
        "
      >
        {/* =======================================================
            BRAND
            ======================================================= */}

        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Maa Vindhyavasini Gud Ki Chai Home"
          className="
            group
            flex
            shrink-0
            items-center
            gap-3
          "
        >
          {/* Brand Mark */}

          <span
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#d99a24]
              font-serif
              text-xl
              font-bold
              text-[#f3b32c]
              transition-all
              duration-300
              group-hover:bg-[#d99a24]
              group-hover:text-[#431b0d]
              sm:h-12
              sm:w-12
              sm:text-2xl
            "
          >
            माँ
          </span>

          {/* Brand Text */}

          <span className="flex flex-col leading-none">
            <strong
              className="
                font-serif
                text-lg
                font-bold
                tracking-tight
                text-white
                transition-colors
                duration-300
                group-hover:text-[#f3b32c]
                sm:text-xl
                lg:text-2xl
              "
            >
              Maa Vindhyavasini
            </strong>

            <small
              className="
                mt-1
                text-[8px]
                font-bold
                tracking-[0.24em]
                text-[#f3b32c]
                sm:text-[9px]
                sm:tracking-[0.28em]
              "
            >
              GUD KI CHAI
            </small>
          </span>
        </Link>

        {/* =======================================================
            DESKTOP NAVIGATION
            ======================================================= */}

        <nav
          aria-label="Main navigation"
          className="
            hidden
            items-center
            gap-7
            lg:flex
            xl:gap-8
          "
        >
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  group
                  relative
                  py-3
                  text-[15px]
                  font-semibold
                  transition-colors
                  duration-200
                  ${
                    active
                      ? "text-[#f3b32c]"
                      : "text-white hover:text-[#f3b32c]"
                  }
                `}
              >
                {link.label}

                {/* Navigation underline */}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    rounded-full
                    bg-[#f3b32c]
                    transition-all
                    duration-300
                    ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* =======================================================
            DESKTOP ACTION BUTTONS
            ======================================================= */}

        <div
          className="
            hidden
            items-center
            gap-3
            lg:flex
          "
        >
          {/* Call */}

          <a
            href="tel:+918409104406"
            aria-label="Call Maa Vindhyavasini"
            className="
              flex
              h-12
              items-center
              gap-2
              rounded-full
              border
              border-[#805037]
              px-5
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:border-[#d99a24]
              hover:bg-[#522312]
              hover:text-[#f3b32c]
            "
          >
            <Phone size={17} />

            <span>Call Me</span>
          </a>

          {/* WhatsApp */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp enquiry"
            className="
              flex
              h-12
              items-center
              gap-2
              rounded-full
              bg-[#efa51d]
              px-6
              text-sm
              font-bold
              text-[#321207]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#f7b52e]
              hover:shadow-[0_8px_24px_rgba(239,165,29,0.25)]
            "
          >
            <MessageCircle size={18} />

            <span>Enquire</span>
          </a>
        </div>

        {/* =======================================================
            MOBILE MENU BUTTON
            ======================================================= */}

        <button
          type="button"
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#805037]
            text-white
            transition-all
            duration-300
            hover:border-[#d99a24]
            hover:bg-[#522312]
            hover:text-[#f3b32c]
            lg:hidden
          "
        >
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {open ? (
              <motion.span
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex"
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex"
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* =========================================================
          MOBILE NAVIGATION
          ========================================================= */}

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
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              overflow-hidden
              border-t
              border-[#6d321b]
              bg-[#351308]
              lg:hidden
            "
          >
            <div
              className="
                mx-auto
                max-w-[1500px]
                px-5
                py-5
                sm:px-6
              "
            >
              {/* =================================================
                  MOBILE LINKS
                  ================================================= */}

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
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`
                          group
                          flex
                          items-center
                          justify-between
                          border-b
                          border-[#5d2918]
                          py-4
                          text-base
                          font-semibold
                          transition-all
                          duration-200
                          ${
                            active
                              ? "pl-2 text-[#f3b32c]"
                              : "text-white hover:pl-2 hover:text-[#f3b32c]"
                          }
                        `}
                      >
                        <span>{link.label}</span>

                        <span
                          className={`
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#f3b32c]
                            transition-opacity
                            duration-200
                            ${
                              active
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }
                          `}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* =================================================
                  MOBILE ACTIONS
                  ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: links.length * 0.05,
                  duration: 0.3,
                }}
                className="mt-5 grid gap-3 sm:grid-cols-2"
              >
                {/* Call */}

                <a
                  href="tel:+918409104406"
                  onClick={closeMenu}
                  aria-label="Call Maa Vindhyavasini"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-[#805037]
                    px-4
                    py-3.5
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#d99a24]
                    hover:bg-[#522312]
                    hover:text-[#f3b32c]
                  "
                >
                  <Phone size={18} />

                  <span>Call Me</span>
                </a>

                {/* WhatsApp */}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  aria-label="WhatsApp enquiry"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#efa51d]
                    px-5
                    py-3.5
                    font-bold
                    text-[#321207]
                    transition-all
                    duration-300
                    hover:bg-[#f7b52e]
                    hover:shadow-lg
                  "
                >
                  <MessageCircle size={18} />

                  <span>WhatsApp Enquiry</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}