import { useScrollReveal } from "./useScrollReveal";
import { Crown, Megaphone } from "lucide-react";

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
    <section id="about" className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Who We Are</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Meet the Team</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <member.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-semibold mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
