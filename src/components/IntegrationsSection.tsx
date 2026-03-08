import { useScrollReveal } from "./useScrollReveal";
import { Mail, Users, Megaphone, MessageCircle, Ticket, Monitor } from "lucide-react";

const integrations = [
  { icon: Mail, label: "Email Marketing" },
  { icon: Users, label: "Social Media" },
  { icon: Megaphone, label: "ADS" },
  { icon: MessageCircle, label: "ChatBot" },
  { icon: Ticket, label: "Booking" },
  { icon: Monitor, label: "CRM" },
];

const IntegrationsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            then integrate<br />
            the site into your<br />
            <span className="italic text-gradient">sales system</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
          {integrations.map((item, i) => (
            <div
              key={item.label}
              className={`group flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary/40 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={20} />
              </div>
              <p className="font-display text-sm md:text-base font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
