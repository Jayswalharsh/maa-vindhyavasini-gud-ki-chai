import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowToPrepare from "@/components/HowToPrepare";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <BrandStory />
        <Products />
        <WhyChooseUs />
        <HowToPrepare />
        <Contact />
      </main>

      <Footer />
    </>
  );
}