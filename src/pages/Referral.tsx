import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/components/useScrollReveal";
import { Gift, DollarSign, Briefcase, ArrowRight, Users, TrendingUp } from "lucide-react";

const perks = [
  {
    icon: DollarSign,
    title: "Earn a Commission",
    description: "Get a small percentage of the project amount for every successful referral you bring in.",
  },
  {
    icon: Briefcase,
    title: "Work With Us",
    description: "Top referrers get a chance to join our team and work on real client projects.",
  },
  {
    icon: Users,
    title: "Build Your Network",
    description: "Connect with businesses and grow your professional network while you're still studying.",
  },
  {
    icon: TrendingUp,
    title: "Grow With Us",
    description: "As we grow, your earnings and opportunities grow too. No cap on referrals.",
  },
];

const steps = [
  { num: "01", title: "Sign Up", desc: "Join the waitlist by filling out the form below." },
  { num: "02", title: "Refer", desc: "Share Loop Found with businesses that need a website." },
  { num: "03", title: "Earn", desc: "Get paid a percentage when the deal closes." },
];

const Referral = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();
  const { ref: ref3, isVisible: isVisible3 } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <SEOHead
        title="Refer & Earn — Loop Found Student Referral"
        description="Join Loop Found's referral program. Refer businesses, earn a commission, and get a chance to work with us. Sign up for the waitlist now."
        path="/referral"
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-24 md:py-32">
          <div ref={ref} className="container px-4">
            <div className={`max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Gift size={16} className="text-primary" />
                <span className="text-primary text-sm font-bold tracking-wide uppercase">Referral Program</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Refer & <span className="italic text-gradient">Earn</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                Know a business that needs a killer website? Refer them to us and earn a percentage of the deal. 
                Plus, top referrers get a chance to <strong className="text-foreground">work with our team</strong>.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeyhHoi6yDZjGk-HJHFkh8cvALE9KjDYnEJhG_j2VVWjeFP_Q/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base hover:scale-105 transition-transform"
              >
                Join the Waitlist <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-card/50">
          <div ref={ref2} className="container px-4">
            <div className={`mb-16 transition-all duration-700 ${isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">How It Works</p>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold">
                Three Simple <span className="italic text-gradient">Steps</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className={`transition-all duration-700 ${isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <span className="text-5xl font-extrabold text-primary/20 font-display">{step.num}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="py-20">
          <div ref={ref3} className="container px-4">
            <div className={`mb-16 transition-all duration-700 ${isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Why Join</p>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold">
                Perks of <span className="italic text-gradient">Referring</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {perks.map((perk, i) => (
                <div
                  key={perk.title}
                  className={`rounded-2xl bg-card border border-border p-8 transition-all duration-700 hover:border-primary/30 ${isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <perk.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{perk.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card/50">
          <div className="container px-4 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-6">
              Ready to <span className="italic text-gradient">Start Earning</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Fill out the form to join our referral waitlist. We'll reach out with everything you need to get started.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeyhHoi6yDZjGk-HJHFkh8cvALE9KjDYnEJhG_j2VVWjeFP_Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base hover:scale-105 transition-transform"
            >
              Join the Waitlist <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Referral;
