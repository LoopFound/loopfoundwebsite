import { useScrollReveal } from "./useScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Loop Found",
    description: "Our own brand portfolio — a showcase of creative identity and bold design thinking.",
    tag: "Branding",
  },
  {
    name: "Haaniya Online Education",
    description: "A modern e-learning platform connecting students with quality education from anywhere.",
    tag: "EdTech",
  },
  {
    name: "SVS Study",
    description: "Clean, focused study platform designed to help students achieve academic excellence.",
    tag: "Education",
  },
  {
    name: "St. Britto's Academy",
    description: "Institutional website bringing a trusted academy's legacy into the digital age.",
    tag: "Institutional",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div ref={ref} className="container px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Selected Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`group glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.tag}
                </span>
                <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
