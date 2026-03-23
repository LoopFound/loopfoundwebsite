import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";

const Projects = () => (
  <div className="min-h-screen bg-background text-foreground pt-24">
    <SEOHead
      title="Our Projects & Portfolio — Loop Found"
      description="Explore Loop Found's portfolio of high-converting websites and digital experiences. See real results from our web development projects."
      path="/projects"
    />
    <Navbar />
    <main>
      <ProjectsSection />
      <MarqueeTicker reverse />
    </main>
    <Footer />
  </div>
);

export default Projects;
