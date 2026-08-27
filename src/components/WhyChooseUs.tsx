"use client";

import {
  Leaf,
  Clock3,
  HeartHandshake,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

const items: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: Leaf,
    title: "Jaggery-based range",
    text: "A distinctive alternative to conventional sweetened beverage premixes.",
  },
  {
    icon: Clock3,
    title: "Quick preparation",
    text: "A convenient premix format made for busy mornings and easy serving.",
  },
  {
    icon: HeartHandshake,
    title: "Made for sharing",
    text: "A broad flavour range for homes, offices, cafés and gatherings.",
  },
  {
    icon: PackageCheck,
    title: "Multiple pack options",
    text: "Packaging shown in the supplied 200GM and 500GM formats.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section why-section"
      id="why-us"
    >

      <div className="container">

        <motion.div
          className="center-heading"
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
          }}
        >

          <span className="section-kicker">
            WHY CHOOSE US
          </span>

          <h2>
            Simple idea.{" "}
            <em>Memorable cup.</em>
          </h2>

          <p>
            Everything about the range is designed around
            convenience, variety and the familiar comfort of chai.
          </p>

        </motion.div>

        <div className="why-grid">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="why-card"
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
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >

                <div className="why-icon">
                  <Icon size={24} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}