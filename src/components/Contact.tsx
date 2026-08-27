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
      className="contact-section"
      id="contact"
    >

      <div className="container contact-grid">

        <motion.div
          className="contact-copy"
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
          }}
        >

          <span className="section-kicker">
            GET IN TOUCH
          </span>

          <h2>
            Bring Gud Ki Chai to your{" "}
            <em>home or business.</em>
          </h2>

          <p>
            For product enquiries, bulk requirements and
            distribution conversations, contact the team directly.
          </p>

          <div className="contact-list">

            <a href="tel:+918409104406">
              <span>
                <Phone size={19} />
              </span>

              <div>
                <small>Call us</small>
                <strong>84091 04406</strong>
              </div>
            </a>

            <a
              href="https://wa.me/918409104406"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <MessageCircle size={19} />
              </span>

              <div>
                <small>WhatsApp</small>
                <strong>Start an enquiry</strong>
              </div>
            </a>

            <div>
              <span>
                <MapPin size={19} />
              </span>

              <div>
                <small>Address</small>

                <strong>
                  31/D Rani Road Bhuda,
                  Dhanbad - 826001
                </strong>
              </div>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="contact-card"
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
          }}
          transition={{
            duration: 0.65,
          }}
        >

          <div className="contact-card-top">

            <span>
              READY FOR YOUR NEXT CUP?
            </span>

            <strong>Let's talk.</strong>

          </div>

          <p>
            Ask about flavours, pack sizes,
            availability or bulk orders.
          </p>

          <a
            className="btn btn-gold"
            href="https://wa.me/918409104406"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Enquiry
            <ArrowRight size={17} />
          </a>

          <div className="contact-meta">
            <span>
              FSSAI: 11522997000471
            </span>

            <span>
              Pack formats shown: 200GM & 500GM
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}