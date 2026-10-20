import { useScrollReveal } from "./useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import projectLoopFound from "@/assets/project-loopfound.png";
import projectHaaniya from "@/assets/project-haaniya.png";

import projectBrittos from "@/assets/project-brittos.jpg";
import projectDhc from "@/assets/project-dhc.png";

const projects = [
  {
    name: "Loop Found",
    description:
      "A modern, interactive portfolio website designed to showcase creative work in an immersive and visually engaging way. Features a futuristic UI, smooth animations, and a minimal yet cinematic aesthetic that highlights projects and personal branding.",
    tag: "Branding",
    services: ["Strategy", "UI/UX", "Development"],
    image: projectLoopFound,
    link: "https://loopfound.in/",
  },
  {
    name: "Haaniya Online Education",
    description:
      "A professional educational website designed to showcase an online tutoring platform offering skill-based learning programs. Clean design and organized content flow reflect a focus on accessibility, credibility, and educational branding.",
    tag: "EdTech",
    services: ["Content architecture", "UI/UX", "Development"],
    image: projectHaaniya,
    link: "https://haaniyaonline4u.com/",
  },
  {
    name: "St. Britto's Academy",
    description:
      "An official school website designed to present institutional information, academics, admissions, and campus life for a CBSE-affiliated educational institution in Chennai. Organized navigation and formal design reflect credibility and institutional branding.",
    tag: "Institutional",
    services: ["Information design", "Responsive build", "Launch"],
    image: projectBrittos,
    link: "https://st-brittos-academy.netlify.app/",
  },
  {
    name: "Digital Horizon Conclave 2026",
    description:
      "A modern event website designed to showcase a technology and innovation-focused conclave with a futuristic and professional visual identity. The site highlights event details, speakers, agenda, and registration information in a structured and engaging layout, using bold typography and a tech-inspired aesthetic to attract participants.",
    tag: "Event",
    services: ["Visual direction", "Event UX", "Development"],
    image: projectDhc,
    link: "https://digital-horizon-conclave-2026.vercel.app/",
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

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} website`}
              className={`group relative overflow-hidden rounded-[2rem] border border-border bg-card transition-colors duration-300 hover:border-primary/50 ${i === 0 ? "md:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Project Image */}
              <div className={`relative w-full overflow-hidden ${i === 0 ? "h-72 md:h-[32rem]" : "h-64 md:h-80"}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-7 md:p-9">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                <h3 className="mb-3 font-display text-2xl font-bold transition-colors group-hover:text-primary md:text-3xl">
                  {project.name}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5">
                  {project.services.map((service) => (
                    <span key={service} className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/65">{service}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
