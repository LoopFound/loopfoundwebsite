import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import PromisesSection from "@/components/PromisesSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background text-foreground pt-24">
    <Navbar />
    <AboutSection />
    <MarqueeTicker reverse />
    <PromisesSection />
    <Footer />
  </div>
);

export default About;
