import FeatureSection from "@/components/Home/FeatureSection";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import StatsSection from "@/components/Home/StatsSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import CTASection from "@/components/Home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}