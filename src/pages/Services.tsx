import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import PromisesSection from "@/components/PromisesSection";
import Footer from "@/components/Footer";

const Services = () => (
  <div className="min-h-screen bg-background text-foreground pt-24">
    <Navbar />
    <ServicesSection />
    <MarqueeTicker />
    <PromisesSection />
    <Footer />
  </div>
);

export default Services;
