import { useScrollReveal } from "./useScrollReveal";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4 max-w-4xl">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Quote className="text-primary mb-6" size={48} />
          <p className="font-display text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-10">
            Our design solutions are based on a deep understanding of
            <span className="italic text-gradient"> what makes businesses grow online</span>
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-extrabold text-xl">
              P
            </div>
            <div>
              <p className="font-bold">Pranith Vincent</p>
              <p className="text-muted-foreground text-sm">CEO & Founder at Loop Found</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
