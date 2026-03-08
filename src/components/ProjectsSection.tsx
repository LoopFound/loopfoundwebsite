import { useScrollReveal } from "./useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import projectLoopFound from "@/assets/project-loopfound.png";
import projectHaaniya from "@/assets/project-haaniya.png";

import projectBrittos from "@/assets/project-brittos.png";
import projectDhc from "@/assets/project-dhc.png";
import projectInahs from "@/assets/project-inahs.png";

const projects = [
  {
    name: "Loop Found",
    description:
      "A modern, interactive portfolio website designed to showcase creative work in an immersive and visually engaging way. Features a futuristic UI, smooth animations, and a minimal yet cinematic aesthetic that highlights projects and personal branding.",
    tag: "Branding",
    stat: "Our Identity",
    statSub: "built from scratch",
    image: projectLoopFound,
    link: null,
  },
  {
    name: "Haaniya Online Education",
    description:
      "A professional educational website designed to showcase an online tutoring platform offering skill-based learning programs. Clean design and organized content flow reflect a focus on accessibility, credibility, and educational branding.",
    tag: "EdTech",
    stat: "500+ Students",
    statSub: "learning online",
    image: projectHaaniya,
    link: "https://haaniyaonline4u.com/",
  },
  {
    name: "St. Britto's Academy",
    description:
      "An official school website designed to present institutional information, academics, admissions, and campus life for a CBSE-affiliated educational institution in Chennai. Organized navigation and formal design reflect credibility and institutional branding.",
    tag: "Institutional",
    stat: "Digital Presence",
    statSub: "for a legacy school",
    image: projectBrittos,
    link: "https://stbrittosacademy.in/",
  },
  {
    name: "Digital Horizon Conclave 2026",
    description:
      "A modern event website designed to showcase a technology and innovation-focused conclave with a futuristic and professional visual identity. The site highlights event details, speakers, agenda, and registration information in a structured and engaging layout, using bold typography and a tech-inspired aesthetic to attract participants.",
    tag: "Event",
    stat: "Tech Conclave",
    statSub: "national level symposium",
    image: projectDhc,
    link: "https://digital-horizon-conclave-2026.vercel.app/",
  },
  {
    name: "INAHS 2026 Conference",
    description:
      "A modern conference website designed to present an international academic conference on Next-Gen AI in Healthcare and Allied Sciences. The site showcases event details, agenda, speakers, and registration sections with a structured layout and minimal, formal UI, highlighting strong event branding and usability-focused web design.",
    tag: "Conference",
    stat: "International",
    statSub: "AI healthcare conference",
    image: projectInahs,
    link: null,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Featured Projects</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Selected<br />
            <span className="italic text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => project.link && window.open(project.link, "_blank")}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-display text-2xl md:text-3xl font-extrabold text-primary leading-none">{project.stat}</p>
                  <p className="text-muted-foreground text-sm mt-1">{project.statSub}</p>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
