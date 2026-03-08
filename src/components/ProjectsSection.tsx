import { useScrollReveal } from "./useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Loop Found",
    description: "Our own brand portfolio — a showcase of creative identity and bold design thinking.",
    tag: "Branding",
    stat: "Our Identity",
    statSub: "built from scratch",
  },
  {
    name: "Haaniya Online Education",
    description: "A modern e-learning platform connecting students with quality education from anywhere.",
    tag: "EdTech",
    stat: "500+ Students",
    statSub: "learning online",
  },
  {
    name: "SVS Study",
    description: "Clean, focused study platform designed to help students achieve academic excellence.",
    tag: "Education",
    stat: "Modern LMS",
    statSub: "academic platform",
  },
  {
    name: "St. Britto's Academy",
    description: "Institutional website bringing a trusted academy's legacy into the digital age.",
    tag: "Institutional",
    stat: "Digital Presence",
    statSub: "for a legacy school",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Featured Projects</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Selected<br />
            <span className="italic text-gradient">Work</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`group relative rounded-3xl bg-card border border-border p-8 md:p-10 hover:border-primary/40 transition-all duration-500 cursor-pointer overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-display text-3xl md:text-4xl font-extrabold text-primary leading-none">{project.stat}</p>
                  <p className="text-muted-foreground text-sm mt-1">{project.statSub}</p>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
