import { useScrollReveal } from "./useScrollReveal";
import { Link } from "react-router-dom";

const ConceptCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Get a website<br />
            <span className="italic text-gradient">concept</span><br />
            in 3 days
          </h2>
          <p className="text-muted-foreground text-lg mb-4">You will receive</p>
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-3 text-foreground/90">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              Design references that suit your project
            </li>
            <li className="flex items-center gap-3 text-foreground/90">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              Site structure flowchart
            </li>
            <li className="flex items-center gap-3 text-foreground/90">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              Website development project plan
            </li>
          </ul>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_hsl(45_100%_55%/0.3)]"
          >
            I want a site concept
          </Link>
          <p className="text-primary text-sm font-bold mt-4">It's free</p>
        </div>
      </div>
    </section>
  );
};

export default ConceptCTA;
