import { useScrollReveal } from "./useScrollReveal";
import { Palette, Code, Brush, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive, beautiful interfaces that users love. Every pixel intentional, every interaction seamless.",
    num: "01",
  },
  {
    icon: Code,
    title: "Front-End Development",
    description: "Lightning-fast, responsive websites built with modern frameworks and clean, maintainable code.",
    num: "02",
  },
  {
    icon: Brush,
    title: "Branding & Identity",
    description: "Memorable brand systems that communicate your story and set you apart from the competition.",
    num: "03",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack solutions from concept to deployment. Scalable architecture that grows with your business.",
    num: "04",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            We always do<br />
            <span className="italic text-gradient">More</span> than just<br />
            websites
          </h2>
        </div>

        <div className="space-y-0 max-w-5xl">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group flex items-center gap-6 md:gap-10 py-8 border-b border-border hover:border-primary/30 transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
