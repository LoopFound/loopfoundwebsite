import { useScrollReveal } from "./useScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Happy Client",
    role: "Business Owner",
    initial: "H",
    text: "A very useful service! It provides a systematic and comprehensive understanding of the market and company situation. It allows for proper planning and decision-making! Highly recommend!",
  },
  {
    name: "Satisfied Customer",
    role: "Startup Founder",
    initial: "S",
    text: "This service is a real game-changer! It gives you a clear and organized view of the market and your company's standing. It's perfect for making smart plans and decisions. I can't recommend it enough!",
  },
  {
    name: "Returning Client",
    role: "School Administrator",
    initial: "R",
    text: "Thank you, guys, for the quick and high-quality execution of the project. We spent minimal time on detailing and discussion. Highly recommend collaborating with Loop Found.",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            What our<br />
            <span className="italic text-gradient">clients say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-3xl bg-card border border-border p-8 hover:border-primary/40 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
