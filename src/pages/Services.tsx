import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import PromisesSection from "@/components/PromisesSection";
import Footer from "@/components/Footer";

const Services = () => (
  <div className="min-h-screen bg-background text-foreground pt-24">
    <SEOHead
      title="Web Development Services — Loop Found"
      description="Custom web design, development, CRM integration, and analytics setup. Loop Found delivers websites that convert visitors into customers."
      path="/services"
    />
    <Navbar />
    <main>
      <ServicesSection />
      <MarqueeTicker />
      <PromisesSection />
    </main>
    <Footer />
  </div>
);

export default Services;
