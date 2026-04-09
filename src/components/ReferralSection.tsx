import { useScrollReveal } from "./useScrollReveal";
import { Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ReferralSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`max-w-4xl mx-auto rounded-3xl bg-card border border-border p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Gift size={28} className="text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-2xl md:text-4xl font-extrabold mb-3">
              Refer & <span className="italic text-gradient">Earn</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Know someone who needs a website? Refer them to us, earn a commission, and get a chance to work with our team.
            </p>
            <Link
              to="/referral"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-105 transition-transform"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
