import { useScrollReveal } from "./useScrollReveal";
import { Crown, Megaphone, Server, Quote, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Pranith Vincent",
    role: "CEO & Founder",
    icon: Crown,
    path: "/Pranith",
    description:
      "Visionary leader driving Loop Found's mission to craft digital experiences that transform businesses. Passionate about clean design and scalable web solutions.",
  },
  {
    name: "Gopinath",
    role: "Co-Founder & CMO",
    icon: Megaphone,
    path: "/Gopinath",
    description:
      "Strategic marketing mind behind Loop Found's brand growth. Expert in connecting the right audience with compelling digital narratives.",
  },
  {
    name: "Sai Charan",
    role: "Backend Developer",
    icon: Server,
    path: "/SaiCharan",
    description:
      "Builds reliable systems and integrations behind the experiences people use. Specialized in robust serverless APIs, databases, and uptime.",
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
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
          {team.map((member, i) => (
            <Link
              key={member.name}
              to={member.path}
              className={`group flex flex-col justify-between rounded-3xl bg-card border border-border p-8 md:p-9 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <member.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <span>View Skills & Profile</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
