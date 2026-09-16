import { useScrollReveal } from "./useScrollReveal";
import { motion } from "framer-motion";
import { Palette, Code, Brush, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Conversion-focused design",
    description: "Clear journeys, strong visual hierarchy, and purposeful interfaces that move visitors toward action.",
    num: "01",
  },
  {
    icon: Code,
    title: "Fast, responsive development",
    description: "Production-ready websites built for performance, accessibility, maintainability, and every screen size.",
    num: "02",
  },
  {
    icon: Brush,
    title: "Digital brand systems",
    description: "Distinctive identities, typography, color, and visual systems designed to remain consistent as you grow.",
    num: "03",
  },
  {
    icon: Globe,
    title: "Business integrations",
    description: "Analytics, CRM, booking, chat, and marketing tools connected to make the website useful after launch.",
    num: "04",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            From first idea<br />
            to a website that<br />
            <span className="italic text-gradient">works for you.</span>
          </h2>
        </motion.div>

        <div className="space-y-0 max-w-5xl">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group flex items-center gap-6 md:gap-10 py-8 border-b border-border hover:border-primary/30 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ x: 12, transition: { duration: 0.25 } }}
            >
              <span className="text-muted-foreground/30 font-display text-sm font-bold w-8">{service.num}</span>

              <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all flex-shrink-0">
                <service.icon className="text-primary" size={24} />
              </div>

              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 max-w-lg hidden md:block">{service.description}</p>
              </div>

              <ArrowRight size={20} className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
