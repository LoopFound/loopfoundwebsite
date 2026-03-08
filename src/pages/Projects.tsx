import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";

const Projects = () => (
  <div className="min-h-screen bg-background text-foreground pt-24">
    <Navbar />
    <ProjectsSection />
    <MarqueeTicker reverse />
    <Footer />
  </div>
);

export default Projects;
