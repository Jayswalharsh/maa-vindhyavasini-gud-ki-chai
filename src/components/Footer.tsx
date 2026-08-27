import {
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <a
            className="brand footer-logo"
            href="#home"
          >
            <span className="brand-mark">
              माँ
            </span>

            <span className="brand-copy">
              <strong>Maa Vindhyavasini</strong>
              <small>GUD KI CHAI</small>
            </span>
          </a>

          <p>
            Jaggery-based tea, coffee and beverage
            premixes for a warm, familiar cup.
          </p>

          <div className="socials">

            <a
              href="https://wa.me/918409104406"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>

            <a
              href="tel:+918409104406"
              aria-label="Phone"
            >
              <Phone size={16} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="social-text"
            >
              IG
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="social-text"
            >
              FB
            </a>

          </div>

        </div>

        <div>
          <h4>Explore</h4>

          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>Products</h4>

          <a href="#products">Tea Range</a>
          <a href="#products">Coffee</a>
          <a href="#products">
            Lemon & Green Tea
          </a>
          <a href="#products">
            Masala & Ginger
          </a>
        </div>

        <div>
          <h4>Contact</h4>

          <p>84091 04406</p>
          <p>31/D Rani Road Bhuda</p>
          <p>Dhanbad - 826001</p>
        </div>

      </div>

      <div className="footer-bottom">

        <div className="container">

          <span>
            © 2026 Maa Vindhyavasini.
            All rights reserved.
          </span>

          <span>
            GUD KI CHAI
          </span>

        </div>

      </div>

    </footer>
  );
}