import { useScrollReveal } from "./useScrollReveal";
import { DollarSign, FolderOpen, Diamond, Rocket } from "lucide-react";

const promises = [
  { icon: DollarSign, text: "will work within your budget" },
  { icon: FolderOpen, text: "operate transparently, no secrets" },
  { icon: Diamond, text: "ensure quality implementation" },
  { icon: Rocket, text: "deliver on time, every time" },
];

const PromisesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            You can<br />
            <span className="italic text-gradient">be sure</span><br />
            that we
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {promises.map((item, i) => (
            <div
              key={item.text}
              className={`group flex items-center gap-5 rounded-2xl bg-card border border-border p-6 hover:border-primary/40 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={22} />
              </div>
              <p className="font-display text-lg font-bold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;
