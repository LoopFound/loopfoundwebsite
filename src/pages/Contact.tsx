import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => (
  <div className="min-h-screen bg-background text-foreground pt-24">
    <SEOHead
      title="Contact Loop Found — Get a Free Consultation"
      description="Ready to build a website that converts? Contact Loop Found for a free consultation. Let's discuss your project and grow your business online."
      path="/contact"
    />
    <Navbar />
    <main>
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Contact;
