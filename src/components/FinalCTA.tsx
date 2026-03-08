import { useScrollReveal } from "./useScrollReveal";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-10">
            We can dedicate maximum<br />
            attention to your project<br />
            because we only take on<br />
            <span className="italic text-gradient">limited projects per month</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_hsl(45_100%_55%/0.3)]"
          >
            Start a new project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
