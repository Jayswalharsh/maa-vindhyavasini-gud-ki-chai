"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    number: "01",
    name: "Jaggery Basundi",
    description: "Rich, creamy and comforting.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
  {
    number: "02",
    name: "Jaggery Cardamom Tea",
    description: "Classic chai with cardamom warmth.",
    image: "maa-vindhyavasini-200gm.jpg",
  },
  {
    number: "03",
    name: "Jaggery Kadak Tea",
    description: "Bold, strong and satisfying.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
  {
    number: "04",
    name: "Jaggery Lemon Tea",
    description: "Bright, refreshing and zesty.",
    image: "maa-vindhyavasini-200gm.jpg",
  },
  {
    number: "05",
    name: "Jaggery Hot Coffee",
    description: "Warm coffee with jaggery sweetness.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
  {
    number: "06",
    name: "Mast Jaggery Tea",
    description: "A feel-good everyday chai.",
    image: "maa-vindhyavasini-200gm.jpg",
  },
  {
    number: "07",
    name: "Jaggery Masala Tea",
    description: "Aromatic spices with classic chai notes.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
  {
    number: "08",
    name: "Jaggery Ginger Tea",
    description: "Warm ginger character in every cup.",
    image: "maa-vindhyavasini-200gm.jpg",
  },
  {
    number: "09",
    name: "Jaggery Black Tea",
    description: "Simple, deep and full-bodied.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
  {
    number: "10",
    name: "Jaggery Green Lemon Tea",
    description: "Light green tea with citrus freshness.",
    image: "maa-vindhyavasini-200gm.jpg",
  },
  {
    number: "11",
    name: "Jaggery Lemongrass Tea",
    description: "Fresh lemongrass aroma with a smooth finish.",
    image: "maa-vindhyavasini-500gm.jpg",
  },
];

export default function Products() {
  return (
    <section
      className="section products-section"
      id="products"
    >

      <div className="container">

        <motion.div
          className="section-heading-row"
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
          transition={{
            duration: 0.6,
          }}
        >

          <div>
            <span className="section-kicker">
              OUR COLLECTION
            </span>

            <h2>
              11 ways to enjoy{" "}
              <em>Gud Ki Chai.</em>
            </h2>
          </div>

          <p>
            Choose your everyday favourite — from bold
            kadak chai to refreshing lemon and lemongrass blends.
          </p>

        </motion.div>

        <div className="products-grid">

          {products.map((product, index) => (

            <motion.article
              className="product-card"
              key={product.name}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.045, 0.35),
              }}
              whileHover={{
                y: -8,
              }}
            >

              <div className="product-image-wrap">

                <Image
                  src={`/images/${product.image}`}
                  alt={`${product.name} - Maa Vindhyavasini`}
                  width={780}
                  height={975}
                />

                <span className="product-number">
                  {product.number}
                </span>

              </div>

              <div className="product-info">

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <a
                  href={`https://wa.me/918409104406?text=${encodeURIComponent(
                    `Hello, I want to enquire about ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={15} />
                  Enquire Now
                  <ArrowUpRight size={15} />
                </a>

              </div>

            </motion.article>

          ))}

        </div>
      </div>
    </section>
  );
}