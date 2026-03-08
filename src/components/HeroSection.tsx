import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary animate-pulse-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative text-center px-4">
        <p className="text-primary text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-up">
          Web Development Agency
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Loop <span className="text-primary gold-glow">Found</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground/90 mb-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Websites That Keep Businesses Growing
        </p>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.45s" }}>
          We design websites that sell, convert, and last.
        </p>
        <div className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/25"
          >
            Work With Us
          </Link>
        </div>
      </div>

      <Link
        to="/about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
      >
        <ArrowDown size={24} />
      </Link>
    </section>
  );
};

export default HeroSection;
