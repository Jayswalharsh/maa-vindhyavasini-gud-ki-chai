"use client";

import Image from "next/image";
import {
  Check,
  Leaf,
  Heart,
  CupSoda,
} from "lucide-react";
import { motion } from "motion/react";

export default function BrandStory() {
  return (
    <section className="section story" id="about">

      <div className="container story-grid">

        <motion.div
          className="story-visual"
          initial={{
            opacity: 0,
            x: -45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
          }}
        >

          <div className="story-image">
            <Image
              src="/images/maa-vindhyavasini-200gm.jpg"
              alt="Maa Vindhyavasini Gud Ki Chai"
              width={815}
              height={975}
            />
          </div>

          <div className="story-badge">
            <Leaf size={18} />

            <span>
              Gud-based
              <br />
              <strong>Premixes</strong>
            </span>
          </div>

        </motion.div>

        <motion.div
          className="story-copy"
          initial={{
            opacity: 0,
            x: 45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
          }}
        >

          <span className="section-kicker">
            ABOUT THE BRAND
          </span>

          <h2>
            A familiar cup, with a{" "}
            <em>jaggery twist.</em>
          </h2>

          <p>
            Maa Vindhyavasini brings together the comfort
            of everyday chai and the distinctive sweetness
            of jaggery in convenient beverage premixes.
          </p>

          <p>
            From classic tea flavours to coffee and
            refreshing lemon blends, the range is designed
            for homes, offices, cafés and bulk beverage service.
          </p>

          <div className="story-features">

            <div>
              <span>
                <Check />
              </span>

              <div>
                <strong>Easy to prepare</strong>
                <small>
                  Quick premix format for everyday use.
                </small>
              </div>
            </div>

            <div>
              <span>
                <Heart />
              </span>

              <div>
                <strong>Comforting taste</strong>
                <small>
                  Built around the familiar Indian chai experience.
                </small>
              </div>
            </div>

            <div>
              <span>
                <CupSoda />
              </span>

              <div>
                <strong>11 flavours</strong>
                <small>
                  A broad range for different taste preferences.
                </small>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}