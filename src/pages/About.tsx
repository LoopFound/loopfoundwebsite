import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import PromisesSection from "@/components/PromisesSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background text-foreground pt-24">
    <SEOHead
      title="About Loop Found — Our Story & Mission"
      description="Learn about Loop Found's mission to build high-converting websites. Meet the team behind digital experiences that drive real business growth."
      path="/about"
    />
    <Navbar />
    <main>
      <AboutSection />
      <MarqueeTicker reverse />
      <PromisesSection />
    </main>
    <Footer />
  </div>
);

export default About;
