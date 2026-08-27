"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Products", "#products"],
  ["Why Us", "#why-us"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap container">

        <a
          className="brand"
          href="#home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">माँ</span>

          <span className="brand-copy">
            <strong>Maa Vindhyavasini</strong>
            <small>GUD KI CHAI</small>
          </span>
        </a>

        <nav className="desktop-nav">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="nav-phone"
            href="tel:+918409104406"
          >
            <Phone size={15} />
            84091 04406
          </a>

          <a
            className="nav-whatsapp"
            href="https://wa.me/918409104406"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} />
            Enquire
          </a>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
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
          >
            <div className="container mobile-nav-inner">

              {links.map(([label, href], index) => (
                <motion.a
                  href={href}
                  key={href}
                  onClick={() => setOpen(false)}
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
                  {label}
                </motion.a>
              ))}

              <a
                className="mobile-enquire"
                href="https://wa.me/918409104406"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp Enquiry
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}