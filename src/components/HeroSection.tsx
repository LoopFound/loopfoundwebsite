import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />

      <div className="relative text-center max-w-5xl mx-auto">
        <p className="text-primary text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-8 animate-fade-up">
          Web Development Agency
        </p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] mb-8">
          <span className="block animate-fade-up text-foreground">WE CREATE</span>
          <span className="block animate-fade-up text-foreground" style={{ animationDelay: "0.1s" }}>
            WEBSITES
          </span>
          <span
            className="block animate-fade-up italic text-gradient font-extrabold"
            style={{ animationDelay: "0.2s" }}
          >
            that grow
          </span>
          <span className="block animate-fade-up text-foreground" style={{ animationDelay: "0.3s" }}>
            businesses
          </span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          We design websites that sell, convert, and last.
        </p>

        <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_hsl(45_100%_55%/0.3)]"
          >
            Work With Us
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float text-muted-foreground">
        <p className="text-xs tracking-widest uppercase mb-2">scroll to see more</p>
        <ArrowDown size={20} className="mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
