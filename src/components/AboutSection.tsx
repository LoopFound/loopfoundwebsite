import { useScrollReveal } from "./useScrollReveal";
import { Crown, Megaphone, Quote } from "lucide-react";

const team = [
  {
    name: "Pranith Vincent",
    role: "CEO & Founder",
    icon: Crown,
    description:
      "Visionary leader driving Loop Found's mission to craft digital experiences that transform businesses. Passionate about clean design and scalable web solutions.",
  },
  {
    name: "Gopinath",
    role: "Co-Founder & CMO",
    icon: Megaphone,
    description:
      "Strategic marketing mind behind Loop Found's brand growth. Expert in connecting the right audience with compelling digital narratives.",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Who We Are</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Meet the<br />
            <span className="italic text-gradient">Team</span>
          </h2>
        </div>

        {/* Quote block */}
        <div className={`max-w-4xl mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
          <div className="relative pl-8 border-l-2 border-primary/30">
            <Quote className="text-primary/30 absolute -left-3 -top-1" size={24} />
            <p className="font-display text-2xl md:text-3xl font-bold leading-relaxed text-foreground/90">
              "Our design solutions are based on a deep understanding of what makes businesses grow online"
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Crown className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Pranith Vincent</p>
                <p className="text-muted-foreground text-xs">CEO & Founder at Loop Found</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group rounded-3xl bg-card border border-border p-8 md:p-10 hover:border-primary/40 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <member.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-bold mb-5">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
