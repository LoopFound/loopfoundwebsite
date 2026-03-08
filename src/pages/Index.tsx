import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import PromisesSection from "@/components/PromisesSection";
import ConceptCTA from "@/components/ConceptCTA";
import GoalSection from "@/components/GoalSection";
import StagesSection from "@/components/StagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <MarqueeTicker />
    <ProjectsSection />
    <QuoteSection />
    <ServicesSection />
    <MarqueeTicker reverse />
    <IntegrationsSection />
    <PromisesSection />
    <ConceptCTA />
    <GoalSection />
    <StagesSection />
    <TestimonialsSection />
    <FAQSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
