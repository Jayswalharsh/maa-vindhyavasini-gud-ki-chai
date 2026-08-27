"use client";

import {
  ArrowDown,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero-home" id="home">

      {/* Full background image */}
      <div
        className="hero-home-bg"
        aria-hidden="true"
      />

      {/* Readability overlay */}
      <div
        className="hero-home-overlay"
        aria-hidden="true"
      />

      {/* Decorative elements */}
      <div
        className="hero-home-glow hero-home-glow-one"
        aria-hidden="true"
      />

      <div
        className="hero-home-glow hero-home-glow-two"
        aria-hidden="true"
      />

      <div className="hero-home-container">

        <motion.div
          className="hero-home-content"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          {/* Eyebrow */}
          <motion.div
            className="hero-home-eyebrow"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >
            <Sparkles size={16} />

            <span>
              TRADITIONAL TASTE • JAGGERY SWEETENED
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >
            The warmth of
            <span>Gud Ki Chai.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          >
            Discover the comforting taste of jaggery-based
            tea and beverage premixes, crafted for a rich,
            familiar cup with every brew.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-home-actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
          >

            <a
              href="#products"
              className="hero-home-primary-btn"
            >
              Explore Products
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/918409104406?text=Hello%20Maa%20Vindhyavasini%2C%20I%20want%20to%20know%20more%20about%20your%20Gud%20Ki%20Chai."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-home-whatsapp-btn"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

          </motion.div>

          {/* Features */}
          <motion.div
            className="hero-home-features"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
          >

            <div className="hero-home-feature">

              <div className="hero-home-feature-icon">
                ✦
              </div>

              <div>
                <strong>11+ Flavours</strong>
                <span>Wide Variety</span>
              </div>

            </div>

            <div className="hero-home-feature">

              <div className="hero-home-feature-icon">
                ☕
              </div>

              <div>
                <strong>Easy-to-make Premix</strong>
                <span>Just Add Water or Milk</span>
              </div>

            </div>

            <div className="hero-home-feature">

              <div className="hero-home-feature-icon">
                🌿
              </div>

              <div>
                <strong>Made for Everyday Chai</strong>
                <span>Perfect for Every Moment</span>
              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* Scroll to About */}
      <motion.a
        href="#about"
        className="hero-home-scroll"
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-label="Scroll to About section"
      >
        <ArrowDown size={18} />
        <span>SCROLL DOWN</span>
      </motion.a>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/918409104406?text=Hello%20Maa%20Vindhyavasini%2C%20I%20want%20to%20enquire%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-home-floating-whatsapp"
        aria-label="Chat with Maa Vindhyavasini on WhatsApp"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.9,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <MessageCircle size={25} />
      </motion.a>

    </section>
  );
}