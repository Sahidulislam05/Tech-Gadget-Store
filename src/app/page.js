import BestSellers from "@/components/home/BestSellers";
import CTASection from "@/components/home/CTASection";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import PromoBanner from "@/components/home/PromoBanner";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <BestSellers></BestSellers>
      <PromoBanner></PromoBanner>
      <Testimonials></Testimonials>
      <CTASection></CTASection>
    </div>
  );
}
