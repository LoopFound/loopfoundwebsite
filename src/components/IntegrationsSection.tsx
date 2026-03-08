import { useScrollReveal } from "./useScrollReveal";
import { motion } from "framer-motion";
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
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            then integrate<br />
            the site into your<br />
            <span className="italic text-gradient">sales system</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
          {integrations.map((item, i) => (
            <motion.div
              key={item.label}
              className="group flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={20} />
              </div>
              <p className="font-display text-sm md:text-base font-bold">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
