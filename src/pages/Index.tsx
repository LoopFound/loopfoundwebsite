import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <MarqueeTicker />
    <Footer />
  </div>
);

export default Index;
