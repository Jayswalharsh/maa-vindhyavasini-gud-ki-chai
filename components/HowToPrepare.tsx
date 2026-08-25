"use client";

import {
  Check,
  CupSoda,
  Flame,
  GlassWater,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

const steps: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: GlassWater,
    title: "Start with milk",
    text: "Boil milk for your cup.",
  },
  {
    icon: CupSoda,
    title: "Add the premix",
    text: "Add the recommended premix amount to taste.",
  },
  {
    icon: Flame,
    title: "Boil for 2–3 minutes",
    text: "Let the flavours come together.",
  },
  {
    icon: Check,
    title: "Serve hot",
    text: "Strain if needed and enjoy your cup.",
  },
];

export default function HowToPrepare() {
  return (
    <section className="section prepare">

      <div className="container prepare-grid">

        <motion.div
          className="prepare-copy"
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <span className="section-kicker">
            HOW TO PREPARE
          </span>

          <h2>
            Your cup in{" "}
            <em>four simple steps.</em>
          </h2>

          <p>
            The supplied packaging recommends boiling the
            milk, adding the premix, boiling for around
            2–3 minutes and then serving.
          </p>

          <div className="prepare-note">
            <strong>Serving tip</strong>

            <span>
              Adjust the premix amount according to your
              preferred strength and sweetness.
            </span>
          </div>

        </motion.div>

        <div className="steps-list">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="step"
                key={step.title}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >

                <span className="step-number">
                  0{index + 1}
                </span>

                <div className="step-icon">
                  <Icon size={19} />
                </div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}