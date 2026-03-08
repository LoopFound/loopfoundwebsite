import { useScrollReveal } from "./useScrollReveal";
import { Palette, Code, Brush, Globe } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive, beautiful interfaces that users love. Every pixel intentional, every interaction seamless.",
  },
  {
    icon: Code,
    title: "Front-End Development",
    description: "Lightning-fast, responsive websites built with modern frameworks and clean, maintainable code.",
  },
  {
    icon: Brush,
    title: "Branding & Visual Identity",
    description: "Memorable brand systems that communicate your story and set you apart from the competition.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack solutions from concept to deployment. Scalable architecture that grows with your business.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div ref={ref} className="container px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">What We Do</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Our Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group glass-card rounded-2xl p-7 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
