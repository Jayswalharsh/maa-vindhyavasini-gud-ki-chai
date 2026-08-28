import Hero from "@/components/section/Hero";
import BrandStory from "@/components/section/BrandStory";
import Products from "@/components/section/Products";
import WhyChooseUs from "@/components/section/WhyChooseUs";
import HowToPrepare from "@/components/section/HowToPrepare";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Products />
      <WhyChooseUs />
      <HowToPrepare />
      <Contact />
    </>
  );
}