import { useScrollReveal } from "./useScrollReveal";
import { Link } from "react-router-dom";

const GoalSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-10">
            Our goal —<br />
            Create a website &<br />
            <span className="italic text-gradient">grow your business</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_hsl(45_100%_55%/0.3)]"
          >
            Discuss the project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
